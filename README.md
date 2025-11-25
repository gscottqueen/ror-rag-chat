This is a Next.js application for building a RAG (Retrieval-Augmented Generation) chat system, featuring a modern web app with App Router, TypeScript, and Tailwind CSS.

## Project Overview

This project is a monorepo with multiple services:

- **Main Frontend**: Next.js 16 app in `src/` (runs on port 3000)
- **Auth Frontend**: Authentication UI in `frontend/` (runs on port 3001)
- **API Backend**: Node.js API in `api/` (runs on port 8000)
- **Database**: PostgreSQL via Docker

For full setup with all services, see [DOCKER.md](./DOCKER.md).

## Getting Started

First, run the development server (using Bun is recommended):

```bash
bun dev
# or
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
