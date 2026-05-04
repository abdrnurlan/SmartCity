# Vercel Deploy Guide

## Goal

Deploy the pushed GitHub repository to Vercel with the simplest clean setup.

Repository:
`https://github.com/abdrnurlan/SmartCity`

Branch:
`main`

## Clean deployment path

1. Sign in to Vercel with the same GitHub account that owns the repository.
2. Click `Add New...` then `Project`.
3. Import `abdrnurlan/SmartCity` from GitHub.
4. Keep the detected framework as Next.js.
5. Leave the default build command unless Vercel suggests something custom.
6. Leave the root directory empty because the app is already at the repository root.
7. Click `Deploy`.

## What happens after import

- Vercel creates a production deployment from `main`.
- Every next push to `main` triggers a new production deployment.
- Future branch pushes can get preview URLs automatically.

## Important requirement

For a personal GitHub repository, Vercel import works when you are the repository owner. If the repository does not appear in Vercel, first confirm you are logged into the correct GitHub account.

## After deploy checklist

1. Open the production URL.
2. Check the homepage hero and navigation.
3. Open `/vision`, `/urban-systems`, `/media`, and `/sources-prompts`.
4. Verify the hero section still looks correct on desktop and mobile.
5. After generating the real hero video, add `hero-loop.mp4`, push again, and let Vercel redeploy.

## Optional next pass

If you want the homepage poster to use a final JPG or PNG still instead of the current SVG placeholder, do one small follow-up code pass and redeploy after that push.