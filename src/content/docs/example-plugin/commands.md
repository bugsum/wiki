---
title: Commands & Permissions
description: Every command, permission and placeholder.
sidebar:
  label: Commands
  order: 3
---

`<required>` · `[optional]`

## Player

| Command | Description | Permission |
|---|---|---|
| `/example` | Opens the main menu | `example.use` |
| `/example info [player]` | Shows player stats | `example.info` |

## Admin

| Command | Description | Permission |
|---|---|---|
| `/example reload` | Reloads all config files | `example.admin.reload` |
| `/example give <player> <amount>` | Gives items to a player | `example.admin.give` |

## Extra permissions

| Permission | Description | Default |
|---|---|---|
| `example.*` | All permissions | OP |
| `example.bypass.cooldown` | Skips cooldowns | OP |

## Placeholders

Requires PlaceholderAPI.

| Placeholder | Returns |
|---|---|
| `%example_level%` | Player's level |
| `%example_points%` | Player's points |

## LuckPerms setup

```bash
lp group default permission set example.use true
lp group admin permission set example.* true
```
