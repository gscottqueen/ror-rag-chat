# ROR RAG Chat

A Next.js application for building a RAG (Retrieval-Augmented Generation) chat system, featuring a modern web app with App Router, TypeScript, Tailwind CSS, and shadcn/ui component primitives.

## Project Overview

This is a monorepo with multiple services:

- **Main Frontend**: Next.js 16.0.3 app in `src/` (port 3000) - Bun runtime, shared UI in `src/components/ui`
- **Auth Frontend**: Next.js 15.3.5 authentication UI in `auth/frontend/` (port 3001) - Uses npm
- **Auth API**: Node.js/Express 5.1.0 backend in `auth/api/` (port 8000)
- **Database**: PostgreSQL 15 Alpine via Docker (port 5432)

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

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Run production server
- `bun run lint` - Lint code with Biome
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
src/                    # Main Next.js app
├── app/                # App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page (uses shadcn/ui Card/Button)
│   └── globals.css     # Global styles & shadcn tokens
├── components/         # Reusable components
│   └── ui/             # shadcn/ui primitives (button, card, input, ...)
├── lib/                # Shared utilities (cn)
│   └── utils.ts
└── components.json     # shadcn/ui configuration

auth/                   # Authentication services
├── frontend/           # Auth UI (Next.js)
├── api/                # Auth API (Node.js/Express)
└── docker-compose.yml  # Auth services orchestration

.github/                # GitHub configuration
├── instructions/       # Development guidelines
└── prompts/            # AI assistant prompts

biome.json              # Biome configuration
next.config.ts          # Next.js configuration
tsconfig.json           # TypeScript configuration
docker-compose.yml      # Root Docker orchestration
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [shadcn/ui Documentation](https://ui.shadcn.com) - Component usage reference
- [DOCKER.md](./DOCKER.md) - Full Docker setup guide
