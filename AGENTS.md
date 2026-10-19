## Workflow

- Reviewing git status or diffs: Treat them as read-only. Never revert or assume missing changes were yours.
- Planning: Study the existing codebase’s architecture, patterns, and conventions first. Use external docs only when needed. Prioritize consistency, then simplicity.
- Trade-offs: Resolve routine choices from context and existing conventions. Ask when an unresolved choice affects scope, behavior, or architecture. Recommend a default where possible and continue independent work already authorized.
- Adding a dependency: Research well-maintained options and confirm fit with the user before adding.
- Starting to code: Don't start building until asked to. Don't ask to implement or continue when it has been explicitly requested.

## Code Quality

- Before writing new code: Search for code and patterns to reuse or extend. Introduce abstractions only for concrete reuse.
- Organizing code: Put high-level behavior before details. Prefer top-down call flow. In classes: constructor, public API methods, then private helpers.
- Editing code: Don't leave comments marking where code was deleted, moved, or renamed.
- Fixing code: Fix root causes instead of layering workarounds.
- Verifying code: Exercise the affected behavior through normal usage when practical. Run checks appropriate to the change alongside all required checks. Flag verification gaps separately.
- Testing code: Add or extend tests for changed behavior and concrete regression risks not already covered. Prefer extending existing tests when that keeps them clear. Avoid tests that mirror the implementation. Keep test cleanup and simplification within the scope of a change. Flag testing gaps separately.
- Cleaning up: Remove code made obsolete by the change. Don't add speculative compatibility layers. Flag unrelated cleanup and larger redesign opportunities separately.

## Collaboration

- When review feedback is numbered, respond point-by-point and clearly mark what was addressed vs. deferred.
- Never push or open pull requests without the user explicitly asking you to.

## Communication

- Be concise, direct, technical, and intellectually honest. Lead with the answer. Use only the detail and formatting needed. No praise, filler, stock phrases, or performative politeness.
- Use plain, precise language and concrete explanations. Prefer periods over semicolons. Clarify non-obvious terms and connections. Don't sacrifice clarity for brevity.
- If an idea is wrong or suboptimal, say so and explain why. Challenge assumptions and propose better alternatives.

## Skills

- Read and follow relevant skills.
- User instructions take precedence over skill guidelines.

## Tools

- Prefer `gh` to access GitHub issues, pull requests, etc.
- Use `git log` and `git blame` when historical context would help.
- Delegate independent, substantial tasks when subagents are available and parallelism would save time or improve quality.
