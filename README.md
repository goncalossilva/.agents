# .agents

Reusable agent harness shared across Codex and Claude.

## Layout

- `AGENTS.md`: Shared base instructions (synced into both agent folders)
- `skills/`: Shared skill source of truth (each skill is a folder with `SKILL.md` + optional `scripts/`, `references/`, `assets/`)
- `bin/`: Helper scripts (not loaded as skills)

## Syncing to Codex + Claude

Codex and Claude load skills from their own folders:

- Codex: `~/.codex/skills/`
- Claude: `~/.claude/skills/`

### Symlinked

Skills are **symlinked** from `~/.agents/skills/` into both agent folders using:

- `~/.agents/bin/sync-agent-skills`

The shared `AGENTS.md` is also symlinked:

- Codex: `~/.codex/AGENTS.md`
- Claude: `~/.claude/CLAUDE.md`

Typical sync:

```bash
~/.agents/bin/sync-agent-skills --prune
```
