# .agents

Personal Pi configuration for this machine.

Reusable extensions and skills live in `~/Code/Other/tau` and are loaded through the `tau-all-agent` Pi package configured in `pi/agent/settings.json`.

## Layout

```text
AGENTS.md                         Global Pi instructions
pi/agent/settings.json            Personal Pi settings; loads Tau
pi/agent/sandbox.json             Personal sandbox policy
pi/agent/subagent.json            Subagent model and thinking recommendations
```

## Install

This repo is intended to live at `~/.agents`. Clone it:

```bash
git clone https://github.com/goncalossilva/.agents.git ~/.agents
```

Run the installer to symlink `AGENTS.md` and every `pi/agent/*.json` file into `~/.pi/agent`:

```bash
~/.agents/bin/install
```

If an existing target is a real file with different contents, the installer backs it up as `<file>.bak.<timestamp>`.
