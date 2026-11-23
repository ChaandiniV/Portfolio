# Chaandini Viswanathan — Experimental Portfolio

A responsive, interactive portfolio starter built with React, TypeScript, Vite and Framer Motion. The visual direction combines an editorial gallery with an experimental digital-laboratory feel.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Render

1. Create a GitHub repository and upload the contents of this folder.
2. In Render, choose **New → Static Site** and connect the repository.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Deploy.

A `render.yaml` Blueprint is included if you prefer Render to read the configuration automatically.

## Before publishing — personalisation checklist

This is a working first build, not a final verified CV. Update these items:

- Replace `YOUR_EMAIL@example.com` in `src/App.tsx` with the email address you want public.
- Replace the generic LinkedIn and GitHub URLs with your real profile URLs.
- Review every project entry and replace placeholder wording with verified descriptions, your exact role, screenshots, links and outcomes.
- Check the skills list and remove tools you cannot confidently demonstrate.
- Verify dates, degree details, leadership titles and experience before making them public.
- Add a professional photograph only if you want one; the current art direction deliberately does not require a headshot.

## Editing content

The project list is the `projects` array near the top of `src/App.tsx`. The homepage copy and timeline are in the same file. Colours, layout, typography and responsive styles are in `src/style.css`.

## Notes

- The cursor glow and animations are decorative; core navigation and content remain usable without them.
- Reduced-motion preferences are respected.
- The site currently uses Google Fonts. If you prefer fully self-hosted fonts, add font files and update the CSS.
