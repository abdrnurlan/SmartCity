import argparse
import mimetypes
import sys
import time
from pathlib import Path

from google import genai
from google.genai import errors, types


LOOP_PROMPT = (
    "Create a seamless premium background loop from this still image. "
    "The first and last frame must match almost exactly so the clip can repeat "
    "without a visible jump. Keep the camera locked in place with no pan, no "
    "truck, no drone fly-through, no orbit, no push-in, and no zoom. Use only "
    "very subtle ambient motion: soft cloud drift, faint shimmer of light on "
    "glass, minimal tree movement, and tiny distant traffic motion. Preserve "
    "the original skyline composition, horizon line, building edges, mountain "
    "shape, and overall framing. Keep the image crisp, realistic, and elegant, "
    "with clean architectural detail and restrained golden-hour color. No text, "
    "no overlays, no dramatic cinematic move."
)

DRIFT_PROMPT = (
    "Create a refined cinematic hero shot from this still image with extremely "
    "subtle motion only. Keep the original composition nearly unchanged and use "
    "a very slow gentle atmospheric drift instead of a noticeable fly-through. "
    "The city should feel premium, realistic, and calm, with warm light on the "
    "buildings, clear mountain silhouettes, and only tiny movement in distant "
    "traffic and soft clouds. Maintain crisp building edges and realistic color. "
    "No text, no neon, no sci-fi props, no heavy blur."
)

TIMELAPSE_PROMPT = (
    "Create a locked-off architectural light study from this still image with "
    "no camera movement at all. No pan, no truck, no orbit, no push-in, no "
    "zoom, and no drone motion. Preserve the exact framing, skyline edges, "
    "mountain silhouette, road geometry, and building proportions. Animate only "
    "the atmosphere and light: a gentle transition from warm late afternoon into "
    "blue hour, soft window lights and streetlights gradually turning on, subtle "
    "cloud movement, and then a return close to the original lighting by the end "
    "so the clip can loop cleanly. Keep the image sharp, premium, realistic, and "
    "calm. No dramatic effects, no blur, no text."
)

PROMPT_PRESETS = {
    "loop": LOOP_PROMPT,
    "drift": DRIFT_PROMPT,
    "timelapse": TIMELAPSE_PROMPT,
}

DEFAULT_NEGATIVE_PROMPT = (
    "drone move, rightward camera movement, leftward camera movement, pan, truck, "
    "orbit, dolly, push-in, zoom, parallax shift, shaky motion, fast motion, "
    "heavy motion blur, soft focus, defocus, smeared buildings, distorted skyline, "
    "warped architecture, flashing lights, purple glow, cyberpunk, sci-fi props, "
    "flying vehicles, holograms, animated UI, text overlay, logo, oversaturated color"
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate a Veo image-to-video hero clip with Vertex AI auth."
    )
    parser.add_argument(
        "--image",
        required=True,
        help="Path to the input still image that should become the first frame.",
    )
    parser.add_argument(
        "--output",
        default="public/media/hero-loop.mp4",
        help="Path where the generated video should be saved.",
    )
    parser.add_argument(
        "--project",
        default="tokyo-crossbar-480311-d7",
        help="Google Cloud project id.",
    )
    parser.add_argument(
        "--location",
        default="us-central1",
        help="Vertex AI location.",
    )
    parser.add_argument(
        "--model",
        default="veo-2.0-generate-001",
        help="Video generation model name.",
    )
    parser.add_argument(
        "--preset",
        default="loop",
        choices=sorted(PROMPT_PRESETS.keys()),
        help="Prompt preset. Use `loop` for a seamless hero background and `drift` for a gentle cinematic variant.",
    )
    parser.add_argument(
        "--prompt",
        default=None,
        help="Primary Veo prompt. Overrides the selected preset when provided.",
    )
    parser.add_argument(
        "--negative-prompt",
        default=DEFAULT_NEGATIVE_PROMPT,
        help="Negative prompt to suppress unstable or overly synthetic motion.",
    )
    parser.add_argument(
        "--duration",
        type=int,
        default=5,
        choices=[4, 5, 6, 8],
        help="Requested video duration in seconds.",
    )
    parser.add_argument(
        "--aspect-ratio",
        default="16:9",
        choices=["16:9", "9:16"],
        help="Requested output aspect ratio.",
    )
    parser.add_argument(
        "--person-generation",
        default="dont_allow",
        choices=["dont_allow", "allow_adult", "allow_all"],
        help="Person generation policy. For a cityscape hero, `dont_allow` is the safest default.",
    )
    parser.add_argument(
        "--resolution",
        default="720p",
        choices=["720p", "1080p", "4k"],
        help="Requested resolution. Start with 720p for the first test.",
    )
    parser.add_argument(
        "--enhance-prompt",
        action="store_true",
        help="Let Veo rewrite the prompt. Leave this off for the tightest loop control.",
    )
    parser.add_argument(
        "--poll-interval",
        type=int,
        default=20,
        help="Polling interval in seconds while waiting for the operation to complete.",
    )
    return parser.parse_args()


def build_client(project: str, location: str) -> genai.Client:
    return genai.Client(vertexai=True, project=project, location=location)


def load_image(image_path: Path) -> types.Image:
    image_location = str(image_path)

    try:
        return types.Image.from_file(location=image_location)
    except TypeError:
        pass

    try:
        return types.Image.from_file(image_location)
    except TypeError:
        pass

    mime_type, _ = mimetypes.guess_type(image_location)
    if not mime_type:
        raise ValueError(f"Could not infer MIME type for image: {image_path}")

    return types.Image(image_bytes=image_path.read_bytes(), mime_type=mime_type)


def main() -> int:
    args = parse_args()
    prompt = args.prompt or PROMPT_PRESETS[args.preset]

    image_path = Path(args.image).expanduser().resolve()
    output_path = Path(args.output).expanduser().resolve()

    if not image_path.exists():
        print(f"Input image not found: {image_path}", file=sys.stderr)
        return 1

    output_path.parent.mkdir(parents=True, exist_ok=True)

    print(f"Project: {args.project}")
    print(f"Location: {args.location}")
    print(f"Model: {args.model}")
    print(f"Input image: {image_path}")
    print(f"Output video: {output_path}")

    try:
        client = build_client(args.project, args.location)
        image = load_image(image_path)

        operation = client.models.generate_videos(
            model=args.model,
            prompt=prompt,
            image=image,
            config=types.GenerateVideosConfig(
                number_of_videos=1,
                duration_seconds=args.duration,
                aspect_ratio=args.aspect_ratio,
                resolution=args.resolution,
                enhance_prompt=args.enhance_prompt,
                negative_prompt=args.negative_prompt,
                person_generation=args.person_generation,
            ),
        )
        print(f"Operation started: {operation.name}")

        while not operation.done:
            print("Waiting for Veo to finish...")
            time.sleep(args.poll_interval)
            operation = client.operations.get(operation)

        if operation.error:
            print(f"Operation failed: {operation.error}", file=sys.stderr)
            return 1

        response = operation.response
        if not response or not response.generated_videos:
            print("No generated videos returned by the operation.", file=sys.stderr)
            return 1

        video = response.generated_videos[0].video
        video.save(str(output_path))
        print(f"Saved video to: {output_path}")
        return 0
    except errors.APIError as error:
        print(f"API error {error.code}: {error.message}", file=sys.stderr)
        return 1
    except Exception as error:  # pragma: no cover - local runtime guard
        print(f"Unexpected error: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())