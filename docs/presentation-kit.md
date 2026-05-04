# Almaty 2050 Presentation Kit

## Project summary

Almaty 2050 is a concept website about how the city could become cleaner, smarter, and more livable by 2050. The project focuses on mobility, energy, environment, and public comfort.

## Platform used

- Next.js
- Vercel planned for deployment

## AI tools used

- ChatGPT Imagen for concept images
- Vertex AI Veo for the premium hero video
- Kling UI as the fallback image-to-video option

## Recommended workflow

1. Generate one premium hero still in ChatGPT Imagen.
2. Pick the strongest still and keep it as the visual reference for the first screen.
3. Run the local Veo image-to-video script against that still for the first premium hero attempt.
4. Start with one 5 second 16:9 generation at 720p.
5. If Veo output is weak or unstable, use Kling UI as the fallback image-to-video option.
6. Export the best result as `hero-loop.mp4` and place it in `public/media`.
7. Keep the existing poster placeholder for now, or replace it in a later pass if you want the site to use a final still instead of the current SVG placeholder.

## AI prompt set

### Hero aerial still

Tool: ChatGPT Imagen

Prompt:
Editorial aerial photograph of Almaty in 2050 at golden hour, viewed from above the city center, warm amber sunlight, clear atmosphere after rain, elegant glass and stone skyline, clean low-emission transport corridors, subtle vertical gardens, snow-covered mountains in the distance, premium architecture magazine style, photoreal, restrained color palette, realistic materials, no neon, no cyberpunk, no flying cars, no fantasy skyline, 16:9.

Negative prompt:
purple lighting, blue neon glow, cyberpunk, sci-fi gadgets, flying cars, holograms, cartoon style, futuristic armor, excessive lens flare, distorted buildings, low detail, fogged skyline, oversaturated colors

Use note:
Generate 3 to 5 variants. Pick the still with the cleanest skyline silhouette and strongest mountain background. Do not choose the most dramatic frame if it starts to look synthetic.

Loop-friendly still checklist:
- Prefer a centered composition with one stable focal mass in the middle.
- Avoid strong diagonal roads or obvious left-to-right perspective lines because they exaggerate fake drone motion.
- Avoid frames where the foreground is much darker than the background because Veo often smears that depth transition.
- Avoid text, UI, or tiny repeating facade details that turn mushy during motion.
- Best source still for a seamless hero is calm, symmetrical, and slightly less dramatic than the best poster frame.

Recommended replacement still for the new direction:
Static panoramic overlook above Almaty, centered skyline, snow-covered mountains clearly visible behind the city, premium architectural photography, realistic materials, crisp edges, calm atmosphere, elegant golden hour, no close foreground objects, no dramatic perspective distortion, no neon, no sci-fi, 16:9.

### Mobility concept image

Tool: ChatGPT Imagen

Prompt:
Street-level editorial photograph of a future Almaty mobility hub, electric transit, calm pedestrian zone, warm natural light, realistic materials, clean premium urban design, photoreal, 4:5.

### Hero video

Tool: Vertex AI Veo

Default loop prompt:
Create a seamless premium background loop from this still image. The first and last frame must match almost exactly so the clip can repeat without a visible jump. Keep the camera locked in place with no pan, no truck, no drone fly-through, no orbit, no push-in, and no zoom. Use only very subtle ambient motion: soft cloud drift, faint shimmer of light on glass, minimal tree movement, and tiny distant traffic motion. Preserve the original skyline composition, horizon line, building edges, mountain shape, and overall framing. Keep the image crisp, realistic, and elegant, with clean architectural detail and restrained golden-hour color. No text, no overlays, no dramatic cinematic move.

Alternative drift prompt:
Create a refined cinematic hero shot from this still image with extremely subtle motion only. Keep the original composition nearly unchanged and use a very slow gentle atmospheric drift instead of a noticeable fly-through. The city should feel premium, realistic, and calm, with warm light on the buildings, clear mountain silhouettes, and only tiny movement in distant traffic and soft clouds. Maintain crisp building edges and realistic color. No text, no neon, no sci-fi props, no heavy blur.

Alternative timelapse prompt:
Create a locked-off architectural light study from this still image with no camera movement at all. No pan, no truck, no orbit, no push-in, no zoom, and no drone motion. Preserve the exact framing, skyline edges, mountain silhouette, road geometry, and building proportions. Animate only the atmosphere and light: a gentle transition from warm late afternoon into blue hour, soft window lights and streetlights gradually turning on, subtle cloud movement, and then a return close to the original lighting by the end so the clip can loop cleanly. Keep the image sharp, premium, realistic, and calm. No dramatic effects, no blur, no text.

Negative prompt:
drone move, rightward camera movement, leftward camera movement, pan, truck, orbit, dolly, push-in, zoom, parallax shift, shaky motion, fast motion, heavy motion blur, soft focus, defocus, smeared buildings, distorted skyline, warped architecture, flashing lights, purple glow, cyberpunk, sci-fi props, flying vehicles, holograms, animated UI, text overlay, logo, oversaturated color

Local command:
`python scripts/run_veo_hero.py --preset loop --image public/media/hero-master.jpg --output public/media/hero-loop.mp4`

Alternative command:
`python scripts/run_veo_hero.py --preset drift --image public/media/hero-master.jpg --output public/media/hero-loop.mp4`

Timelapse command:
`python scripts/run_veo_hero.py --preset timelapse --image public/media/hero-master.jpg --output public/media/hero-loop.mp4`

Veo settings note:
- Use image-to-video, not text-to-video.
- Prefer 16:9 output.
- Start with 5 seconds at 720p.
- Keep motion extremely low. The goal is a seamless website background, not a trailer shot.
- Leave prompt enhancement off for the first loop attempt. Only enable it if the result is too dead.
- If the clip looks like a drone move, the prompt is still too open or the source still is too perspective-heavy.
- If the clip looks soft or smeared, change the still before making the prompt more cinematic.
- If the first attempt works but still feels too static, test `--preset drift` before rewriting the whole prompt.
- If you want movement without camera travel, test `--preset timelapse` before spending money on more cinematic variants.

Website fallback note:
- The homepage hero can now run as a static atmospheric day-night composition using `hero-master.jpg` alone.
- That means you no longer need a video just to make the first screen feel alive.
- If the Veo output is weak, keep the still and use the built-in day-night hero treatment instead.

Fallback note:
- If Vertex returns a model or location error, keep the same still and move it to Kling image-to-video.
- If Vertex returns a visually unstable result, retry once before switching tools.

Practical note:
Veo can make a beautiful hero from one still, but a truly seamless loop from a single image only works when motion is almost ambient. If you want a more alive background, generate two close stills with nearly identical framing and use them as a first-frame and last-frame workflow in Kling or another editor.

Export note:
Rename the exported clip to `hero-loop.mp4` and place it in `public/media`.

## Local Veo script

File:
`scripts/run_veo_hero.py`

What it does:
- Uses your existing `gcloud auth` session through `google.genai.Client(vertexai=True, project, location)`
- Loads a local still image with `types.Image.from_file(...)`
- Starts a Veo image-to-video operation
- Polls until the operation finishes
- Saves the first returned video to a local file path

First test recommendation:
- Keep the first input still at `public/media/hero-master.jpg`
- Run one 5 second request only
- Keep resolution at 720p
- Do not start with multiple variants

If the request fails:
- Model error: switch `--model` to the exact Veo model currently enabled in your project
- Region error: retry with another supported location before changing the prompt
- Safety block: reduce traffic and remove any implied people from the still or prompt

## What to say in the presentation

1. Introduce the concept and the city focus.
2. Explain why Almaty needs a smarter urban future.
3. Show the three core systems: mobility, energy, public realm.
4. Walk through the website pages.
5. Explain which AI tools were used for images and video.
6. Show the prompts.
7. Mention the sources and additional materials.

## Quick defense wording

You can say:

"I built the site in Next.js and structured it as a multi-page concept website. For the hero media, I first generated a realistic aerial still of Almaty 2050 in ChatGPT Imagen. Then I used Kling in image-to-video mode to animate that still into a short cinematic clip. I saved the prompts and supporting sources in order to meet the assignment criteria and to explain the workflow during the presentation."

## Suggested sources

- UN Habitat
- World Bank Urban Development
- OECD Sustainable Cities
- C40 Cities