Drop generated media files into this folder.

Expected files:
- `hero-evening.png` as the homepage intermediate sunset frame
- `hero-day.png` as the homepage daylight frame
- `hero-night.png` as the homepage blue-hour frame with the same camera angle
- `hero-master.jpg` as the fallback still for the homepage and the Veo/Kling source frame
- `hero-loop.mp4` or `hero-loop.webm` for the optional supporting video slot
- `hero-poster.svg` remains the default placeholder poster for now
- future section images such as `mobility.jpg`, `energy.jpg`, `public-space.jpg`

Recommended replacement flow:
1. Save the intermediate sunset skyline image as `hero-evening.png`.
2. Save the daylight skyline image as `hero-day.png`.
3. Save the matching blue-hour image as `hero-night.png`.
4. If you only have one image for now, save it as `hero-master.jpg` and the homepage will still fall back to it.
5. The homepage automatically fades in on load and then crossfades the three frames every few seconds.
6. If you still want the AI video artifact, run `python scripts/run_veo_hero.py --preset timelapse --image public/media/hero-master.jpg --output public/media/hero-loop.mp4`.
7. If Veo is unavailable or unstable, use Kling with the same three-frame light-cycle idea instead of camera movement.
8. Keep `hero-poster.svg` until you decide to do a small follow-up pass for a final raster poster format.