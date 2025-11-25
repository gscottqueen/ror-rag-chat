---
agent: agent
description: 'Create or update documentation markdown files based on current project state'
---

Your task is to create or update the specified documentation file (e.g., README.md, DOCKER.md, CONTRIBUTING.md, etc.) to accurately reflect the current project state.

## Input Parameter
The user will specify which documentation file to update:
```
/update-doc <FILENAME>
```

Examples:
- `/update-doc README.md`
- `/update-doc DOCKER.md`
- `/update-doc CONTRIBUTING.md`

## Goals
- Ensure documentation accurately reflects current project structure and configuration
- Make minimal, necessary changes only
- Verify all commands and paths before documenting
- Maintain existing documentation style and format

## Critical Principles
- **Accuracy First**: Verify all information before documenting (check actual files, test commands)
- **Minimal Changes**: Only update what's outdated or incorrect; preserve working content
- **Confirm Before Writing**: Present proposed changes to user for approval before applying
- **Current State Only**: Document what exists NOW, not future plans or assumptions

## Steps to Follow

### 1. Identify Documentation Scope
Based on the filename, determine what needs to be documented:

**README.md**:
- Project overview and purpose
- Tech stack and dependencies
- Quick start guide
- Development setup
- Available scripts
- Project structure overview
- Links to other docs

**DOCKER.md**:
- Docker Compose service architecture
- Port mappings and service descriptions
- Environment setup instructions
- Build and run commands
- Service health checks
- Troubleshooting common Docker issues

**CONTRIBUTING.md**:
- Development workflow
- Code style guidelines
- Testing requirements
- PR process
- Commit conventions

**Other docs**: Infer scope from filename and existing content

### 2. Comprehensive Verification
Before proposing changes:

- **Read existing documentation** completely to understand current state
- **Verify all commands** mentioned in docs still work:
  ```bash
  # Test actual commands from docs
  docker compose up --build  # Does this work?
  bun dev                     # Is this the right command?
  ```
- **Check actual file locations** and paths referenced
- **Inspect configuration files** (package.json, docker-compose.yml, etc.)
- **Review recent changes** that might affect documentation
- **Search for TODOs, HACKs, or WIP** indicators that suggest incomplete features

### 3. Identify Necessary Changes
Compare verification results against existing docs:

- What commands are documented incorrectly?
- What paths or file references are outdated?
- What services or features are missing or changed?
- What sections are confusing or incomplete?
- What new features need documentation?

### 4. Present Proposed Changes
**BEFORE making any edits**, present to the user:

```
## Proposed Documentation Updates for <FILENAME>

### Changes to Make:
1. [Specific change with reasoning]
2. [Specific change with reasoning]
3. ...

### Sections to Add/Remove:
- Add: [Section name] - [Reason]
- Remove: [Section name] - [Reason]

### Commands Verified:
✓ [Command] - Works
✗ [Command] - Fails (propose alternative)

### Preserved Content:
- [What will remain unchanged]

Do you approve these changes?
```

### 5. Apply Approved Changes
Only after user approval:
- Make minimal edits to affected sections
- Preserve formatting and style
- Update version numbers, ports, commands as verified
- Add missing sections concisely
- Remove obsolete content

### 6. Verification
After updating:
- Re-read the updated documentation
- Confirm all commands are accurate
- Check all links and references work
- Ensure formatting is consistent

## Document-Specific Guidelines

### README.md
- Lead with project purpose (2-3 sentences)
- Quick start must be tested and work
- Link to detailed docs (DOCKER.md, CONTRIBUTING.md) rather than duplicating
- Include minimal example commands
- Keep under 200 lines if possible

### DOCKER.md
- List all services with ports and descriptions
- Provide exact docker compose commands that work
- Include troubleshooting for common errors
- Document environment variables
- Show health check commands
- Explain service dependencies

### API Documentation
- Document all endpoints with examples
- Include request/response formats
- Show authentication requirements
- Provide curl examples that work

### Setup/Installation Docs
- List prerequisites with version numbers
- Provide step-by-step tested instructions
- Include common troubleshooting
- Link to additional resources

## Quality Checklist

Before finalizing changes:

- [ ] All commands have been tested and work
- [ ] All file paths are verified to exist
- [ ] Port numbers match actual configuration
- [ ] Service names match docker-compose.yml
- [ ] Version numbers are current
- [ ] Links are valid and working
- [ ] Code examples are syntactically correct
- [ ] User has approved proposed changes
- [ ] No assumptions or untested information included
- [ ] Existing working content is preserved

## Output Format

Present changes as:
1. Summary of verification findings
2. Proposed changes with reasoning
3. Wait for user approval
4. Apply approved changes
5. Confirm what was updated

Do NOT create new documentation files without explicit user approval.
Do NOT make sweeping changes - be surgical and precise.
