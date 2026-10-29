---
title: Commands & Permissions
description: Every command and permission node in RiftCollector.
sidebar:
  label: Commands
---

`<required>` · `[optional]`

## Commands

| Command | Description | Permission |
|---|---|---|
| `/collector` | Gives you a collector item | `riftcollector.give` |
| `/collector give <player> [amount]` | Gives collectors to someone else, 1–64 | `riftcollector.give` |
| `/collector reload` | Reloads the config, language, prices and menu files | `riftcollector.reload` |

Collectors themselves are not operated by commands: everything else happens in the menu you get
by right clicking a placed collector.

### What reload covers

`/collector reload` rereads `config.yml`, `prices.yml`, the language file and all five menu files,
reapplies hologram styling, and reconnects the price providers. Open menus are closed first, since
they are built from the layout and capacity as they were.

Database settings are the exception: changing `storage.type` or the MySQL connection needs a full
restart, and reload says so rather than half-applying it.

## Permissions

### Using collectors

| Permission | Description | Default |
|---|---|---|
| `riftcollector.place` | Place collectors | Everyone |
| `riftcollector.sell` | Sell a collector's contents from its menu | Everyone |
| `riftcollector.bypass` | Open, configure and break collectors owned by someone else | OP |

A collector can always be opened by its owner and by anyone they trusted. `riftcollector.bypass`
is the staff override, and it is also what lets someone manage a collector whose owner is unknown,
such as one imported from an older version.

### Upgrades

| Permission | Description | Default |
|---|---|---|
| `riftcollector.upgrade.*` | Buy every upgrade | Everyone |
| `riftcollector.upgrade.pickup-speed` | Buy pickup speed | Everyone |
| `riftcollector.upgrade.pickup-range` | Buy pickup range | Everyone |
| `riftcollector.upgrade.slots` | Buy storage slots | Everyone |
| `riftcollector.upgrade.slot-capacity` | Buy slot capacity | Everyone |

Individual upgrade *levels* can carry extra permissions of your own choosing. See
[Upgrades → Per-level permissions](../upgrades/#per-level-permissions).

### Abilities

| Permission | Description | Default |
|---|---|---|
| `riftcollector.ability.*` | Use every ability | Everyone |
| `riftcollector.ability.auto-sell` | Switch auto sell on | Everyone |
| `riftcollector.ability.auto-smelt` | Switch auto smelt on | Everyone |
| `riftcollector.ability.hologram` | Show or hide a collector's hologram | Everyone |

### Admin

| Permission | Description | Default |
|---|---|---|
| `riftcollector.give` | Get collector items, and give them to others | OP |
| `riftcollector.reload` | Reload the configuration | OP |
| `riftcollector.update-notify` | Be told on join when an update is out | OP |

## Example setups

Default ranks keep their collectors but buy nothing, while a donor rank unlocks the upgrades:

```bash
lp group default permission set riftcollector.place true
lp group default permission set riftcollector.upgrade.* false
lp group default permission set riftcollector.ability.auto-sell false

lp group vip permission set riftcollector.upgrade.* true
lp group vip permission set riftcollector.ability.* true
```

Staff who need to look inside other people's collectors:

```bash
lp group moderator permission set riftcollector.bypass true
```

:::note[Hidden, not broken]
Taking a permission away does not break anything that was already bought or switched on. The
icon turns into its locked form and says on its lore why it cannot be used.
:::
