# Spirit & Truth — Worship Night · Toronto

Marketing site for Spirit & Truth, a monthly non-denominational worship night in Toronto.

## Stack

Static site built with [Vite](https://vite.dev) + React 18, deployed on Vercel.

## Local development

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

## Layout

```
index.html            Vite entry point
src/
  main.jsx            App composition + design tweak defaults
  sections-a.jsx      Nav, Hero, Verse, Vision, Worship + shared helpers
  sections-b.jsx      Structure, SetList, Foundations, Events, Connect,
                      Churches, Instagram, Footer
  tweaks-panel.jsx    Design tweak panel (hidden unless activated by the
                      design host via postMessage — never visible in production)
public/
  styles.css          All site styles
  assets/             Photos, logos and the PP Editorial New webfonts
vercel.json           Security headers + cache policy
```

Everything in `public/` is copied to the deploy root verbatim, so the relative
`assets/…` paths used in `styles.css` and the section components resolve the same
way in development and production. Vite's own hashed bundles are emitted to
`dist/build/` to keep them out of that namespace.

## Deployment

Vercel builds from `main` automatically. `vercel.json` pins the framework preset,
build command and output directory, so no dashboard configuration is required —
but the project's **Root Directory** setting must be empty (repository root).

## Fonts

The display face is **PP Editorial New**. The copy bundled in
`public/assets/fonts/` came from a "Personal Use Only" distribution — see
`public/assets/fonts/Befonts-License.txt`. A commercial licence from
[Pangram Pangram](https://pangrampangram.com/products/editorial-new) is required
before using it on a public site. The CSS falls back to Cormorant Garamond.
