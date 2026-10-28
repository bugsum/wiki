---
title: Configuration
description: Every config option explained.
sidebar:
  order: 4
---

All files live in `plugins/ExamplePlugin/`. Run `/example reload` after editing.

:::note[Colors]
Messages support **MiniMessage** (`<red>`, `<gradient:#8b7cff:#c6ff00>`) and legacy `&` codes.
:::

## config.yml

```yaml title="config.yml" {5,6}
# Prefix shown before every message
prefix: "<gradient:#8b7cff:#c6ff00>Example</gradient> <dark_gray>»</dark_gray> "

settings:
  cooldown-seconds: 30   # 0 = no cooldown
  enabled-worlds: []     # empty = every world

sounds:
  success: ENTITY_PLAYER_LEVELUP
```

## messages.yml

```yaml title="messages.yml"
no-permission: "<red>You don't have permission."
reloaded: "<green>Config reloaded."
cooldown: "<red>Wait <yellow>%time%s</yellow> before using this again."
```

## Reference

| Option | Type | Default | Description |
|---|---|---|---|
| `prefix` | Text | — | Prefix for all messages |
| `settings.cooldown-seconds` | Number | `30` | Seconds between uses |
| `settings.enabled-worlds` | List | `[]` | Worlds where the plugin works |
| `sounds.success` | Sound | `ENTITY_PLAYER_LEVELUP` | Played on success |
