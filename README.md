# ROR RAG Chat

A Next.js application for building a RAG (Retrieval-Augmented Generation) chat system, featuring a modern web app with App Router, TypeScript, Tailwind CSS, and shadcn/ui component primitives.

## Project Overview

This is a monorepo with multiple services providing a complete AI-powered chat application with user authentication and dashboard:

- **Main Frontend**: Next.js 16.0.3 app in `src/` (port 3000) - AI chat interface with RAG capabilities, dashboard, and modern UI components
- **Auth Frontend**: Next.js 15.3.5 authentication UI in `auth/frontend/` (port 3001) - User login/signup interface
- **Auth API**: Node.js/Express 5.1.0 backend in `auth/api/` (port 8000) - RESTful API for user management and sessions
- **Database**: PostgreSQL 15 Alpine via Docker (port 5432) - User data and session storage

For full Docker setup with all services, see [DOCKER.md](./DOCKER.md).

## Tech Stack

**Main Application**:

- Next.js 16.0.3 with App Router
- React 19.2.0
- TypeScript 5 (strict mode)
- Tailwind CSS v4
- shadcn/ui (Radix-based component library via `components.json`)
- Biome 2.2.0 (linting & formatting)
- Bun 1.0.0 (package manager)

**Auth Services**:

- Next.js 15.3.5 (frontend)
- React ^19.0.0 (frontend)
- Express 5.1.0 (API)
- PostgreSQL 15 (database)
- Knex.js (migrations)

## Getting Started

### Main App Development

Using Bun (recommended):

```bash
bun install
bun run dev
```

Or with npm/yarn/pnpm:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

The home screen lives in `src/app/page.tsx`; shared UI primitives are in `src/components/ui`. Updates auto-reload with Fast Refresh.

For authentication and full chat features, set up the auth services as described in [DOCKER.md](./DOCKER.md).

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Run production server
- `bun run lint` - Lint code with Biome
- `bun run fix` - Auto-fix Biome issues
- `bun run format` - Format code with Biome
- `bun run show-services` - Show Docker service status and URLs

### Full Stack with Docker

To run all services (frontend, auth, API, database):

```bash
docker compose up --build
```

Check service status and access URLs:

```bash
bun run services
```

See [DOCKER.md](./DOCKER.md) for detailed Docker setup instructions.

## Project Structure

```
src/                             # Main Next.js application
├── app/                         # Next.js App Router pages
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page component
│   ├── api/                     # API routes
│   │   ├── auth/                # Authentication API routes
│   │   └── chat/                # Chat API routes
│   ├── auth/                    # Authentication pages
│   │   ├── auth-flow.mermaid.md # Auth flow diagram
│   │   └── callback/            # OAuth callback pages
│   └── dashboard/               # Dashboard pages
│       └── page.tsx             # Dashboard component
├── components/                  # Reusable React components
│   ├── ChatBot.tsx              # Main chat bot component
│   ├── ai-elements/             # AI-specific UI elements
│   │   ├── artifact.tsx
│   │   ├── canvas.tsx
│   │   ├── chain-of-thought.tsx
│   │   ├── checkpoint.tsx
│   │   ├── code-block.tsx
│   │   ├── confirmation.tsx
│   │   ├── connection.tsx
│   │   ├── context.tsx
│   │   ├── controls.tsx
│   │   ├── conversation.tsx
│   │   ├── edge.tsx
│   │   ├── image.tsx
│   │   ├── inline-citation.tsx
│   │   ├── loader.tsx
│   │   ├── message.tsx
│   │   ├── model-selector.tsx
│   │   ├── node.tsx
│   │   ├── open-in-chat.tsx
│   │   ├── panel.tsx
│   │   ├── plan.tsx
│   │   └── ...                  # Additional AI elements
│   └── ui/                      # shadcn/ui component primitives
├── lib/                         # Shared utilities and providers
│   ├── providers.ts             # React context providers
│   ├── session.ts               # Session management
│   └── utils.ts                 # Utility functions
└── proxy.ts                     # Proxy configuration

auth/                            # Authentication services
├── docker-compose.yml           # Auth services orchestration
├── ENV_VARIABLES.md             # Environment variables documentation
├── README.md                    # Auth services README
├── REQUIREMENTS.md              # Auth requirements
├── test-login.sh                # Login test script
├── test-signup.sh               # Signup test script
├── api/                         # Auth API (Node.js/Express)
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── jsdoc.conf.json
│   ├── knexfile.js
│   ├── package.json
│   ├── README.md
│   ├── docs/                    # API documentation
│   └── src/                     # API source code
└── frontend/                    # Auth frontend (Next.js)
    ├── components.json
    ├── Dockerfile
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── README.md
    ├── tsconfig.json
    ├── public/
    └── src/

public/                          # Static assets for main app

.github/                         # GitHub configuration
├── instructions/                # Development guidelines
│   ├── a11y.instructions.md
│   ├── features.instructions.md
│   ├── security.instructions.md
│   └── next-js.instructions.md
├── prompts/                     # AI assistant prompts
│   └── update-doc.prompt.md
├── copilot-instructions.md      # This file
└── pull_request_template.md     # PR template

biome.json                       # Biome configuration
components.json                  # shadcn/ui configuration
docker-compose.prod.yml          # Production Docker setup
docker-compose.yml               # Root Docker orchestration
DOCKER.md                        # Docker setup documentation
Dockerfile                       # Main app Dockerfile
Dockerfile.prod                  # Production Dockerfile
next-env.d.ts                    # Next.js types
next.config.ts                   # Next.js configuration
package.json                     # Main app dependencies
postcss.config.mjs               # PostCSS configuration
README.md                        # This file
show-services.sh                 # Service status script
tsconfig.json                    # TypeScript configuration
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [shadcn/ui Documentation](https://ui.shadcn.com) - Component usage reference
- [DOCKER.md](./DOCKER.md) - Full Docker setup guide
