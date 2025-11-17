# Copilot Instructions for .github Repository

## Project Overview

This is a **shared .github repository** for the `scottqueen-bixal` organization that provides standardized GitHub templates, development workflows, and AI assistant configurations. It contains comprehensive development instructions, prompt templates, issue templates, and chat modes for consistent project management across all repositories in the organization.

## Critical
- Always be extremely concise. Never overcomplicate when simplicity will do.
- This repository provides templates and instructions for OTHER projects, not application code itself.
- When working with this repo, focus on template creation, instruction refinement, and workflow improvement.

## Repository Purpose

### Core Functions
- **Development Instructions** - Language-specific coding guidelines (TypeScript, Security, Accessibility, Features)
- **AI Assistant Prompts** - Standardized prompts for feature development, code breakdown, and onboarding
- **GitHub Templates** - Issue templates, PR templates, and chat mode configurations
- **Workflow Definitions** - Reusable development processes and best practices

### Target Users
- **AI Coding Assistants** (GitHub Copilot, Claude, etc.)
- **Development Teams** across organization repositories
- **Project Maintainers** setting up new repositories
- **Contributors** following organization standards

## Tech Stack

### Documentation & Templates
- **Markdown** for all documentation and instruction files
- **YAML** frontmatter for configuration and metadata
- **GitHub Templates** for issues, PRs, and chat modes

### Development Standards
- **TypeScript** guidelines with strict mode and Next.js patterns
- **Accessibility (A11Y)** following WCAG 2.2 AA standards
- **Security** implementing OWASP best practices
- **Feature Development** with human-in-the-loop workflows

### AI Assistant Integration
- **Prompt Engineering** - Structured prompts for consistent AI interactions
- **Chat Modes** - Specialized AI assistant configurations
- **Agent Workflows** - Multi-step automated development processes

## Repository Structure

```
.github/
├── chatmodes/                    # AI assistant chat mode configs
│   └── Feature.chatmode.md       # Feature development mode
├── ISSUE_TEMPLATE/              # GitHub issue templates
│   └── feature.md               # Feature request template
├── prompts/                     # AI assistant prompts
│   ├── new-feature.prompt.md    # Feature development workflow
│   ├── breakdown.prompt.md      # Code explanation prompts
│   ├── create-instructions.prompt.md # Instruction file creation
│   └── gen-copilot-instructions.prompt.md # This file generator
├── instructions/                # Development guidelines
│   ├── a11y.instructions.md     # Accessibility guidelines
│   ├── features.instructions.md # Feature development process
│   ├── security.instructions.md # Security best practices
│   └── ts.instructions.md       # TypeScript standards
├── copilot-instructions.md      # This file - main AI assistant guide
└── pull_request_template.md     # PR template
README.md                        # Simple repository description
```

## Key Files

### Core Configuration
- `.github/copilot-instructions.md` - Main AI assistant guidance (this file)
- `.github/pull_request_template.md` - Standard PR template
- `README.md` - Repository overview

### Development Instructions
- `.github/instructions/features.instructions.md` - Feature development workflow
- `.github/instructions/security.instructions.md` - Security implementation guidelines  
- `.github/instructions/a11y.instructions.md` - Accessibility standards
- `.github/instructions/ts.instructions.md` - TypeScript development rules

### AI Assistant Prompts
- `.github/prompts/new-feature.prompt.md` - Structured feature development
- `.github/prompts/breakdown.prompt.md` - Code explanation generator
- `.github/prompts/create-instructions.prompt.md` - Instruction file creator
- `.github/prompts/gen-copilot-instructions.prompt.md` - This file generator

### Templates & Workflows
- `.github/ISSUE_TEMPLATE/feature.md` - Feature request template
- `.github/chatmodes/Feature.chatmode.md` - Feature planning chat mode

## Development Guidelines

### Working with Instructions
- All instruction files use YAML frontmatter with `applyTo` patterns to specify which file types they apply to
- Instructions target specific file types (e.g., `**/*.{ts,tsx}`) or all files (`**/*`)
- Follow the established template structure for consistency: Goal → Essentials → Tech Stack → Project Structure → Key Files → Development Guidelines → Reference Resources
- Update instructions when development practices change
- External URL references in Markdown may trigger linting warnings but are acceptable for documentation

### Creating New Templates
- Use `.md` extension for all template files
- Include YAML frontmatter for metadata
- Follow naming conventions: `name.type.md` (e.g., `feature.md`, `Feature.chatmode.md`)
- Test templates with real use cases before committing

### AI Assistant Integration
- Prompts should be self-contained and context-aware
- Include clear goals, limitations, and expected outputs
- Reference relevant instruction files for consistency
- Use structured formats for reproducible results

### Prompt Engineering Best Practices
- Start with clear task definitions and expected outcomes
- Include relevant context and constraints
- Structure prompts with headers, lists, and examples
- Reference other instruction files for comprehensive guidance
- Test prompts with different scenarios

### Template Development
- Use YAML frontmatter for metadata and configuration
- Follow consistent naming patterns across all templates
- Include clear descriptions and usage examples
- Make templates adaptable to different project contexts

## Common Workflows

### Creating New Instructions
1. Use the `create-instructions.prompt.md` template as a guide
2. Follow the standard instruction format with YAML frontmatter specifying `applyTo` patterns
3. Include clear goals, essentials, and practical reference resources
4. Test with real development scenarios before finalizing
5. Focus on actionable guidelines rather than abstract concepts

### Feature Development Process
1. Reference `features.instructions.md` for the human-in-the-loop workflow
2. Create feature briefs in `.backups/features/` during planning
3. Use the todo list management for tracking progress
4. Follow security and accessibility guidelines throughout

### Adding New Prompts
1. Create `.prompt.md` files in the `prompts/` directory
2. Include YAML frontmatter with mode and description
3. Structure with clear goals, limitations, and expected outputs
4. Reference relevant instruction files

### Template Maintenance
- Regularly review and update templates based on usage feedback
- Ensure consistency across all template formats
- Update references to instruction files when they change
- Test templates with new team members or projects

## Usage Examples

### For AI Assistants
When an AI assistant encounters this repository, it should:
- Read this file first for context and guidelines
- Reference specific instruction files based on the task at hand
- Use prompts as structured workflows for complex tasks
- Follow established patterns when creating new content

### For Development Teams
Teams using this shared repository should:
- Copy relevant templates to their project repositories
- Customize instruction files for project-specific needs
- Contribute improvements back to shared templates
- Follow the established development workflows

### For Project Setup
When setting up a new repository:
- Copy relevant instruction files to the new project
- Customize copilot-instructions.md for the specific project
- Update template references and project-specific details
- Ensure all team members understand the established workflows
