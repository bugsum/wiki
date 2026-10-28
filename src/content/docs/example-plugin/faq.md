---
title: FAQ
description: Common questions and fixes.
sidebar:
  order: 5
---

<details>
<summary>The plugin doesn't load</summary>

Check the console on startup. Usually it's Java older than 21, or Spigot instead of Paper.

</details>

<details>
<summary>Placeholders show as raw text</summary>

Install PlaceholderAPI and restart. `/papi reload` alone isn't enough the first time.

</details>

<details>
<summary>Does it support Bedrock players?</summary>

Yes. Menus fall back to Bedrock forms automatically through Geyser + Floodgate.

</details>

<details>
<summary>Can I share data across servers?</summary>

Yes. Point every server at the same MySQL database in `config.yml`.

</details>

<details>
<summary>I found a bug</summary>

Open a ticket in the [Discord](https://discord.gg/YOUR-INVITE) with your plugin version, server version and the full console error.

</details>
