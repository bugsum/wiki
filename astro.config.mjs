// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// Change these two when you create the GitHub repo:
//   site = https://<github-username>.github.io
//   base = /<repo-name>
// Using a custom domain (e.g. docs.buglabs.xyz)? Set site to it and delete `base`.
export default defineConfig({
  site: "https://iamsamarth.github.io",
  base: "/wiki",
  integrations: [
    starlight({
      title: "Bug Labs",
      description: "Documentation for Bug Labs Minecraft plugins.",
      logo: { src: "./src/assets/logo.svg", replacesTitle: false },
      favicon: "/favicon.svg",
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/YOUR-INVITE",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/YOUR-GITHUB-USERNAME",
        },
      ],
      customCss: [
        "@fontsource-variable/inter",
        "@fontsource-variable/jetbrains-mono",
        "./src/styles/theme.css",
      ],
      components: {
        // Dark-only site: always dark, no theme switcher
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      expressiveCode: {
        themes: ["github-dark-default"],
        styleOverrides: {
          borderRadius: "10px",
          borderColor: "var(--bl-border)",
          codeFontFamily: "'JetBrains Mono Variable', monospace",
          frames: {
            editorTabBarBackground: "var(--bl-surface)",
            terminalTitlebarBackground: "var(--bl-surface)",
            frameBoxShadowCssValue: "none",
          },
        },
      },
      // Each plugin = one sidebar group, filled automatically from its folder.
      // New plugin? Add a folder under src/content/docs and a group here.
      sidebar: [
        {
          label: "RiftCollector",
          items: [{ autogenerate: { directory: "riftcollector" } }],
        },
      ],
      lastUpdated: false,
      pagination: true,
    }),
  ],
});
