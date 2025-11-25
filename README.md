# ROR RAG Chat

A Next.js application for building a RAG (Retrieval-Augmented Generation) chat system, featuring a modern web app with App Router, TypeScript, and Tailwind CSS.

## Project Overview

This is a monorepo with multiple services:

- **Main Frontend**: Next.js 16.0.3 app in `src/` (port 3000) - Uses Bun
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
bun dev
```

Or with npm/yarn/pnpm:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

Edit `src/app/page.tsx` to modify the home page - changes auto-reload with Fast Refresh.

### Available Scripts

- `bun dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Run production server
- `bun run lint` - Lint code with Biome
- `bun run format` - Format code with Biome
- `bun run services` - Show Docker service status and URLs

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
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
└── components/         # Reusable components

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
- [Next.js GitHub](https://github.com/vercel/next.js) - Contribute to Next.js
- [DOCKER.md](./DOCKER.md) - Full Docker setup guide
