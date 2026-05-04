# Almaty 2050 Presentation Kit

## Project summary

Almaty 2050 is a concept website about how the city could become cleaner, smarter, and more livable by 2050. The project focuses on mobility, energy, environment, and public comfort.

## Platform used

- Next.js
- Vercel planned for deployment

## AI tools used

- ChatGPT Imagen for concept images
- Kling UI for image-to-video hero generation

## Recommended workflow

1. Generate one premium hero still in ChatGPT Imagen.
2. Pick the strongest still and keep it as the visual reference for the first screen.
3. Upload that still to Kling UI in image-to-video mode.
4. Generate a 5 or 10 second landscape clip.
5. Export the best result as `hero-loop.mp4` and place it in `public/media`.
6. Keep the existing poster placeholder for now, or replace it in a later pass if you want the site to use a final still instead of the current SVG placeholder.

## AI prompt set

### Hero aerial still

Tool: ChatGPT Imagen

Prompt:
Editorial aerial photograph of Almaty in 2050 at golden hour, viewed from above the city center, warm amber sunlight, clear atmosphere after rain, elegant glass and stone skyline, clean low-emission transport corridors, subtle vertical gardens, snow-covered mountains in the distance, premium architecture magazine style, photoreal, restrained color palette, realistic materials, no neon, no cyberpunk, no flying cars, no fantasy skyline, 16:9.

Negative prompt:
purple lighting, blue neon glow, cyberpunk, sci-fi gadgets, flying cars, holograms, cartoon style, futuristic armor, excessive lens flare, distorted buildings, low detail, fogged skyline, oversaturated colors

Use note:
Generate 3 to 5 variants. Pick the still with the cleanest skyline silhouette and strongest mountain background. Do not choose the most dramatic frame if it starts to look synthetic.

### Mobility concept image

Tool: ChatGPT Imagen

Prompt:
Street-level editorial photograph of a future Almaty mobility hub, electric transit, calm pedestrian zone, warm natural light, realistic materials, clean premium urban design, photoreal, 4:5.

### Hero video

Tool: Kling UI image-to-video

Prompt:
Slow cinematic aerial drift over Almaty in 2050 at golden hour. Start from a stable skyline composition and keep the camera movement minimal and elegant. The city feels clean, modern, and realistic, with warm sunlight on buildings and clear snow-covered mountains in the background. Subtle movement in light traffic only. No dramatic motion, no neon, no sci-fi props, no holograms, no text, 16:9.

Negative prompt:
fast camera movement, shaky motion, flashing lights, purple glow, cyberpunk, flying vehicles, animated UI, glitch effects, fantasy buildings, distorted skyline, oversaturated sunset

Kling settings note:
- Use image-to-video, not text-to-video.
- Prefer 16:9 output.
- Start with 5 seconds. Only move to 10 seconds if the first result stays stable.
- Keep motion low. The goal is a premium hero loop, not a trailer shot.
- If Kling allows end-frame control, use a version close to the first frame for a smoother loop feeling.

Export note:
Rename the exported clip to `hero-loop.mp4` and place it in `public/media`.

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