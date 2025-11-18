---
applyTo: "**/*.{ts,tsx,js,jsx,md,html,json,css,scss,env,env.example}"
---

# Next.js Assistant Instructions
This instructions file helps a coding agent work efficiently with this Next.js (App Router) repository.

# Goal
Provide clear, minimal rules and conventions so an AI coding assistant can make precise, non-invasive edits, scaffold features, and run common tasks reliably for this project.

## Essentials
- Respect the App Router layout in `src/app/` — avoid moving pages into `pages/`.
- Keep changes small and focused; prefer non-breaking edits and feature flags.
- Preserve existing tooling: `biome` for lint/format and Tailwind CSS for styling.
- Use TypeScript types when editing `*.ts`/`*.tsx` files; follow current `tsconfig.json` settings.

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router, `next` v16) 
- [React](https://reactjs.org/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Biome](https://biomejs.dev/) for linting/formatting

## Project Structure
src/
  app/
    globals.css
    layout.tsx
    page.tsx

Other top-level files:
  - `package.json` — scripts and deps
  - `next.config.ts` — Next.js config
  - `tsconfig.json` — TypeScript config
  - `postcss.config.mjs` — PostCSS/Tailwind setup

## Key files
- `src/app/layout.tsx` — root layout for App Router
- `src/app/page.tsx` — home page entry
- `next.config.ts` — framework configuration
- `package.json` — dev/build scripts (`dev`, `build`, `start`, `lint`, `format`)
- `tsconfig.json` — TypeScript rules

## Development Guidelines
### Editing Code
- Make minimal, well-scoped PRs. When adding or modifying routes, update or add matching `metadata` and ensure static/dynamic rendering choices align with data-fetching patterns.
- Prefer server components by default in `*.tsx` files under `src/app/`. Use `'use client'` only when necessary for client-side interactivity.

### Tooling & Scripts
- Use `npm run dev` to start the dev server locally.
- Use `npm run build` and `npm run start` for production verification.
- Run `npm run lint` to check code style and `npm run format` to auto-format using Biome.

### Next.js AI SDK
- When integrating LLMs or AI features, prefer using the Next.js AI SDK patterns so model calls are made from server-side code (server components, server actions, or API/route handlers) to avoid exposing secrets.
- Keep API keys and secrets out of client bundles; store them in environment variables and only reference them from server-side modules (do NOT use `NEXT_PUBLIC_` for secrets).
- Choose runtime deliberately: use the Edge runtime (`export const runtime = 'edge'`) for low-latency inference if the model provider supports it, otherwise use Node.js server runtime for compatibility.
- Use server components or server actions to orchestrate AI calls and pass only sanitized, necessary data to client components.
- Implement caching, rate limiting, and retry/backoff for expensive model calls. Consider response streaming patterns only when UI requires incremental updates.
- Security: validate and sanitize user input before sending to models; strip or redact PII and avoid logging model outputs that may contain sensitive data.
- Testing: provide mock/stub implementations for model responses during local development and tests to avoid provider costs and flakiness.

### Styling
- Tailwind v4 is used; keep utility-first styling patterns. Edit `src/app/globals.css` for global styles.

### Type Safety
- Keep TypeScript strict. When adding types, prefer explicit interfaces/types over `any`.

### Accessibility & Security
- Follow WCAG basics: ensure semantic HTML, keyboard focus states, and ARIA attributes when necessary.
- Validate inputs, avoid exposing secrets in code; use environment variables and `next.config.ts` for server-side configuration.

## Reference Resources
- Next.js App Router docs: https://nextjs.org/docs/app
- Tailwind CSS docs: https://tailwindcss.com/docs
- Biome docs: https://biomejs.dev/
- TypeScript Handbook: https://www.typescriptlang.org/docs/
