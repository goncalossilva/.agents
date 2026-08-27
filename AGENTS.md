## Workflow

- Starting a task: Read this guide end-to-end. Re-skim when major decisions arise or requirements shift.
- Reviewing git status or diffs: Treat them as read-only. Never revert or assume missing changes were yours.
- Planning: Study the existing codebase’s architecture, patterns, and conventions first; use external docs only when needed. Prioritize consistency, then simplicity.
- Trade-offs: If there's meaningful tension between approaches, ask the user before committing.
- Adding a dependency: Research well-maintained options and confirm fit with the user before adding.
- Starting to code: Don't start building until asked to.

## Code Quality

- Writing code: Write idiomatic, simple, maintainable code that is highly consistent with surrounding code. Optimize for the simplest, most intuitive solution.
- Before writing new code: Search the codebase for existing utilities, helpers, and patterns. Reuse and extend what exists rather than inventing new abstractions unless they’re clearly reused.
- Structuring code: Prefer the simplest design that is consistent with surrounding code. Favor fewer moving parts. Flag larger design opportunities separately.
- Organizing code: Follow the step-down rule. Keep high-level behavior at the top and details below. In classes: constructor, then public API methods, then private helpers. Prefer top-down call flow when practical.
- Editing code: No breadcrumbs. If you delete, move, or rename code, do not leave a comment in the old place.
- Fixing code: Reason from first principles, find the root cause of an issue, and fix it. Don't apply band-aids on top.
- Cleaning up: Clean up unused code ruthlessly. If a function no longer needs a parameter or a helper becomes unused, delete and update callers instead of letting junk linger. Never implement backward compatibility unless explicitly asked.

## Collaboration

- When review feedback is numbered, respond point-by-point and clearly mark what was addressed vs. deferred.
- Never push or open pull requests without the user explicitly asking you to.

## Communication

- Be direct, technical, and intellectually honest. No praise, filler, or performative politeness.
- If an idea is wrong or suboptimal, say so and explain why. Challenge assumptions and propose better alternatives.

## Skills

- You have specialized skills available. Review their descriptions to understand what they cover, and use the relevant skills when they apply.

## Tools

- Prefer `gh` to access GitHub issues, pull requests, etc.
- Use `git log` and `git blame` when historical context would help.
