# Freelancing Portfolio

Vineet�s responsive website design and development portfolio, featuring a white theme, a custom cartoon avatar, scroll animations, and stacked project previews.

## Stack

React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Local development

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The production files are generated in `dist/`. Deploy that directory to a static hosting provider.

## Project structure

- `src/main.tsx`: entry point, hero, and magnetic portrait
- `src/components.tsx`: shared animation and contact components
- `src/sections.tsx`: gallery, About, services, project previews, and contact
- `src/style.css`: theme and responsive styles
- `src/assets.json`: external gallery and project image URLs
- `public/`: favicon and current avatar

## Customization

Contact details and live project URLs are pending. Contact buttons currently navigate to the contact section; project buttons open image previews. Update these in `src/components.tsx` and `src/sections.tsx` when available.

Gallery and project imagery reference externally hosted assets supplied for this design; availability and usage rights should be reviewed before public launch. The unavailable Celestia gallery image is omitted from rendering.

Generated output, dependencies, local hosting configuration, and environment files are excluded from Git.
