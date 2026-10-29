---
title: FAQ
description: Common questions about RiftCollector.
---

<details>
<summary>The plugin does not load</summary>

Check the console on startup. The usual causes are Java older than 21, a server that is not Paper
or a fork of it, or no internet access on first start — the database driver and connection pool are
downloaded from Maven Central the first time the plugin loads.

</details>

<details>
<summary>A hopper will not pull items out of my collector</summary>

That is on purpose. A collector keeps its own storage rather than using the block's inventory, so
it is not a container at all: hoppers, droppers and other plugins cannot take from it. Items leave
through the menu or the sell button.

</details>

<details>
<summary>Why can I not break my collector?</summary>

A collector has to be empty before it can be picked up or broken. Take the items out, or use the
Sell contents button, and it will come away normally.

</details>

<details>
<summary>I placed a second collector in the same chunk and it was refused</summary>

One collector per chunk by default. Raise `limits.collectors-per-chunk` in `config.yml` if you
want more.

</details>

<details>
<summary>Auto sell is greyed out</summary>

It needs two things: Vault with an economy plugin, and at least one price source. The item's lore
says which is missing. With no shop plugin installed, the prices in `prices.yml` are enough.

</details>

<details>
<summary>Items with no price are not being sold</summary>

Only items a price source knows are sold; anything else is stored as normal. Add it to
`prices.yml`, or to your shop plugin.

</details>

<details>
<summary>My collector stopped picking things up</summary>

It is probably full, or its filter is excluding the drop. Open it and check the slots in use
against its capacity, and whether the filter is set to whitelist with the item missing from the
list.

</details>

<details>
<summary>I lowered a capacity and items disappeared</summary>

They are not gone. Anything that no longer fits stays in the database, out of reach, and the
console names the collector it belongs to. Raise the capacity again and it comes back.

</details>

<details>
<summary>Can I change the block a collector is placed as?</summary>

Yes, `item.material` in `config.yml`. Any placeable block works, since the block is only the skin.
Collectors already placed keep the block they were placed as, and drop as that block.

</details>

<details>
<summary>I use a stacker plugin and collectors only take 64 at a time</summary>

Install [zItemStacker](https://github.com/GroupeZ-dev/zItemStacker) and RiftCollector reads the real
stacked count, collecting the whole pile and leaving behind only what it could not take. The console
says so on startup when the hook is active. Other stacker plugins are not hooked, and with those a
collector sees only the entity's own stack.

</details>

<details>
<summary>Can upgrades cost something other than normal money?</summary>

Yes, with ExcellentEconomy. Add `currency: <id>` to an upgrade level, or to `upgrades.slots`, and
that price is charged in that currency. See
[Upgrades → Paying in another currency](../upgrades/#paying-in-another-currency).

</details>

<details>
<summary>Can collectors be shared between servers?</summary>

Point every server at the same MySQL database in `config.yml`. Each server still only sweeps its
own worlds.

</details>

<details>
<summary>Do holograms need a hologram plugin?</summary>

No. They are vanilla text displays, spawned and removed by the plugin, and never saved into the
world, so a crash cannot leave any behind. Players can switch theirs off in Settings.

</details>

<details>
<summary>Will my config be overwritten when I update?</summary>

No. New settings are added, your values are kept, and retired settings are taken out. A
timestamped backup is written whenever a file changes. See
[Configuration → Keeping configs up to date](../configuration/#keeping-configs-up-to-date).

</details>

<details>
<summary>I rearranged a menu and now a button is missing</summary>

Every character in `layout` needs an entry under `items`, and functional slots — the upgrade,
setting, filter mode and trust list slots — are set by number in their own section rather than in
the grid. The console warns about characters with no item and about sections that are missing
entirely.

</details>

<details>
<summary>Can trusted players upgrade or sell from my collector?</summary>

Yes. Trusted players can do everything except manage the trusted list and pick the collector up,
which stay with the owner. The full table is in
[Abilities → Trusted players](../abilities/#trusted-players).

</details>
