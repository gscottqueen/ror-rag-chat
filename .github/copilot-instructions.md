# Copilot Instructions for ror-rag-chat Repository

## Project Overview

This is a **Next.js application** for building a RAG (Retrieval-Augmented Generation) chat system. The project is currently in its early stages, using the latest Next.js 16 with App Router, React 19, and modern tooling for a robust, scalable web application.

## Critical
- Always be extremely concise. Never overcomplicate when simplicity will do.

## Repository Purpose

### Core Functions
- **RAG Chat Interface** - Web-based chat application with retrieval-augmented generation capabilities
- **Modern Web App** - Built with Next.js App Router for optimal performance and SEO
- **Type-Safe Development** - Full TypeScript integration with strict mode enabled

### Target Users
- **AI Coding Assistants** (GitHub Copilot, Claude, etc.)
- **Development Teams** across organization repositories
- **Project Maintainers** setting up new repositories
- **Contributors** following organization standards

### Tech Stack

- **Next.js 16.0.3 (App Router)** — Latest version with React Compiler enabled
- **React 19.2.0** — Modern React with concurrent features
- **TypeScript 5** — Strict mode, with path aliases (`@/*` for `./src/*`)
- **Tailwind CSS v4** — Utility-first CSS framework with PostCSS
- **Biome 2.2.0** — Fast linting and formatting tool
- **Bun 1.0.0** — Recommended runtime and package manager

### Tools & Platforms

- **GitHub** for version control and CI/CD
- **Local dev**: `bun run dev` (starts dev server), `bun run build`, `bun run start`
- **Linting/Formatting**: `bun run lint`, `bun run format`
- **VS Code** with MCP configuration for enhanced development

## Repository Structure

```
.github/                        # GitHub templates and instructions
├── instructions/                # Development guidelines
│   ├── a11y.instructions.md     # Accessibility standards
│   ├── features.instructions.md # Feature development process
│   ├── security.instructions.md # Security best practices
│   └── next-js.instructions.md  # Next.js specific guidelines
├── prompts/                     # AI assistant prompts
├── copilot-instructions.md      # This file
└── pull_request_template.md     # PR template
src/                             # Application source code
├── app/                         # Next.js App Router pages
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page component
├── components/                  # Reusable React components
│   └── ChatInput.tsx            # Chat input component
public/                          # Static assets
biome.json                       # Biome configuration
next.config.ts                   # Next.js configuration
package.json                     # Dependencies and scripts
postcss.config.mjs               # PostCSS configuration
tsconfig.json                    # TypeScript configuration
```

## Key Files

### Core Application
- `src/app/page.tsx` - Main home page component with chat interface
- `src/app/layout.tsx` - Root layout with metadata and fonts
- `src/app/globals.css` - Global CSS with Tailwind imports
- `src/components/ChatInput.tsx` - Reusable chat input component

### Configuration
- `package.json` - Project metadata, dependencies, and scripts
- `next.config.ts` - Next.js config with React Compiler enabled
- `tsconfig.json` - TypeScript config with strict mode and path aliases
- `biome.json` - Linting and formatting rules
- `postcss.config.mjs` - PostCSS setup for Tailwind

### Development Instructions
- `.github/instructions/security.instructions.md` - Security implementation guidelines
- `.github/instructions/features.instructions.md` - Feature development workflow
- `.github/instructions/a11y.instructions.md` - Accessibility standards
- `.github/instructions/next-js.instructions.md` - Next.js specific rules

## Development Guidelines

### Getting Started
1. Install dependencies: `bun install`
2. Start dev server: `bun run dev`
3. Open [http://localhost:3000](http://localhost:3000)
4. Edit files in `src/app/` - changes auto-reload

### Code Quality
- **Linting**: Run `bun run lint` to check code quality with Biome
- **Formatting**: Run `bun run format` to auto-format code
- **TypeScript**: Strict mode enabled - all code must be type-safe
- **Imports**: Use `@/*` alias for imports from `src/`

### Styling
- Use Tailwind CSS classes for styling
- Follow utility-first approach
- Dark mode support with `dark:` prefixes
- Custom CSS variables defined in `globals.css`

### Build & Deploy
- Build: `bun run build`
- Start production: `bun run start`
- Deploy to Vercel or any Node.js hosting platform

### Security & Best Practices
- Follow OWASP guidelines referenced in security instructions
- Validate all inputs and sanitize outputs
- Use HTTPS in production
- Regular dependency updates and security scans

## Common Workflows

### Adding New Features
1. Reference `features.instructions.md` for development process
2. Create components in `src/components/` for reusability
3. Update routing in `src/app/` for new pages
4. Test with `bun run dev` and validate with `bun run lint`

### Code Changes
1. Make changes to TypeScript/TSX files
2. Run `bun run format` to format code
3. Run `bun run lint` to check for issues
4. Test functionality in browser
5. Commit with descriptive messages

### Dependency Management
- Use `bun add` to install new packages
- Update `package.json` and commit lockfile changes
- Run security audits regularly

## Usage Examples

### For AI Assistants
When working on this repository, you should:
- Read relevant instruction files before implementing features
- Use Bun commands for all package management and scripts
- Follow TypeScript strict mode and Biome rules
- Reference security guidelines for any user-facing features
- Test changes locally before suggesting commits

### For Developers
When contributing to this project:
- Follow the established coding standards
- Use the provided scripts for development workflow
- Reference instruction files for specific guidelines
- Ensure all changes pass linting and formatting
- Test thoroughly before submitting PRs

### For Project Setup
When setting up the development environment:
- Install Bun runtime
- Clone repository and run `bun install`
- Start with `bun run dev`
- Configure VS Code with MCP if available
- Review all instruction files for development standards
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
