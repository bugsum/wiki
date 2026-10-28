# Bug Labs Wiki

Dark, minimal docs for all Bug Labs plugins. Built with Astro + Starlight, hosted free on GitHub Pages.

## Run locally
```
npm install
npm run dev        # http://localhost:4321/buglabs-wiki/
```

## Add a new plugin
1. Copy `src/content/docs/example-plugin/` → `src/content/docs/your-plugin/`
2. Edit the pages (`sidebar.order` in each page's frontmatter sets the order)
3. Add a group in `astro.config.mjs` → `sidebar`
4. Add a `<LinkCard>` for it in `src/content/docs/index.mdx`

## Customize
- Brand color: `--bl-accent-h/s/l` at the top of `src/styles/theme.css`
- Logo / favicon: `src/assets/logo.svg`, `public/favicon.svg`
- Discord / GitHub links: `astro.config.mjs` → `social`
