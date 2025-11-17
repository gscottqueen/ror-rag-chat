# Feature Development

This guidance describes a collaborative development model where a human developer and an AI agent (Copilot-style assistant) work together to design, implement, test, and ship features. The goal is to create a reproducible, auditable, and human-supervised workflow that increases velocity while maintaining high quality.

## Principles
- **Human-in-the-loop**: Final decisions, approvals, and reviews are made by humans; the agent assists with suggestions, scaffolding, and repetitive work.
- **Incremental, verifiable changes**: Break features into small, testable commits and verify each change with tests and code review.
- **Transparent prompts and context**: Keep prompts, reasoning, and important context explicitly documented and versioned with the code.
- **Fail-safe defaults**: Agent proposals should prefer non-destructive changes and include safety checks.

## Workflow Overview
1. Concept: Human defines the feature goal, acceptance criteria, and constraints in a short brief.
2. Context: Gather relevant repository context: files, tests, configs, and any existing design docs.
3. Plan: Agent and human co-create a small, ordered task list (tickets or TODOs) that the agent will execute one-by-one.
4. Implement: Agent writes code in small, focused patches; human reviews and approves each patch.
5. Test: Run unit/integration tests locally or in CI; agent suggests tests and runs them where possible.
6. Iterate: Repeat implementation and testing until acceptance criteria are met.
7. Merge: Human completes final review and merges into the target branch.

## Required Context
- **Always bring into context**:
  - security.instructions.md
  - a11y.instructions.md

## Instructions as Guidance
- **Always create a Feature brief**: Use a consistent, detailed template when describing features to the agent.
- Store temp feature briefs in `.backups/features/`.

```markdown
# Feature: <short title>

## Overview

One-paragraph summary of the feature, user-visible changes, and high-level purpose.

## Goals
- Bullet list of measurable goals (what success looks like).

## Architecture and Data Flow

Short numbered steps describing frontend → backend → data store interactions.

## Backend Design
- list item(s)

## Frontend Design
- list item(s)

## API Contract
- list item(s)

## Tests
- list item(s)

## QA
- list item(s)

## Appendix
Any additional notes, schema variations, or compatibility concerns.
- list item(s)

```

- After feature completion, propose final feature briefs and store in `docs/features/`.


```markdown
# Feature: <short title>

## Overview

One-paragraph summary of the feature, user-visible changes, and high-level purpose.

## Features
- Bullet list of high level features.

## Architecture and Data Flow

Short numbered steps describing frontend → backend → data store interactions.

## Appendix
Any additional notes, schema variations, or compatibility concerns.
- list item(s)

```

Practical guidance:
- **Always** Use repository tests to verify correctness after each change.
- **Always** match current styles and patterns in the codebase.
- **Always** use test driven development: write or update tests before or alongside code changes.
- **Always** Keep prompts atomic; chain them for multi-step work.
