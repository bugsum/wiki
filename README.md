# Bug Labs Wiki

Dark, minimal docs for all Bug Labs plugins. Built with Astro + Starlight, hosted free on GitHub Pages.

## Run locally
```
npm install
npm run dev        # http://localhost:4321/wiki/
```

The path comes from `base` in `astro.config.mjs`.

## Add a new plugin
1. Make a folder: `src/content/docs/your-plugin/`
2. Add pages to it. `sidebar.label` in a page's frontmatter sets the name shown in the sidebar.
3. Add a group in `astro.config.mjs` → `sidebar`, listing the pages in the order you want them.
4. Add a `<LinkCard>` for it in `src/content/docs/index.mdx`

`src/content/docs/riftcollector/` is a complete example to copy the shape of:
overview, installation, feature pages, commands and permissions, configuration,
an `integrations/` sub-section, FAQ.

### Sub-sections
A folder inside a plugin's folder becomes a nested sidebar group. Give the group its label in
`astro.config.mjs` and let its pages fill in automatically, ordered by `sidebar.order`:

```js
{
  label: "RiftCollector",
  items: [
    "riftcollector",
    "riftcollector/installation",
    { label: "Integrations", items: [{ autogenerate: { directory: "riftcollector/integrations" } }] },
  ],
}
```

## Screenshots
Drop images in `public/img/<plugin>/` and use the figure component, which adds the site's base
path for you:

```mdx
import Figure from '../../../components/Figure.astro';

<Figure src="img/riftcollector/collector-menu.svg" alt="The collector menu" caption="gui/collector.yml" />
```

The files in `public/img/riftcollector/` are placeholders. Replace them with real screenshots,
keeping the same file names, and the pages pick them up with no edits.

## Customize
- Brand color: `--bl-accent-h/s/l` at the top of `src/styles/theme.css`
- Logo / favicon: `src/assets/logo.svg`, `public/favicon.svg`
- Discord / GitHub links: `astro.config.mjs` → `social`, and the hero action in
  `src/content/docs/index.mdx`
