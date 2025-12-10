# ROR RAG Chat Docker Setup

This repository includes a complete Docker Compose setup that orchestrates:

## Services

### Frontend (Port 3000)

- Next.js 16 application with React 19
- Built with Bun package manager
- Standalone output for optimized Docker builds

### Auth Frontend (Port 3001)

- Next.js authentication interface
- Built with npm package manager
- Standalone output for optimized Docker builds

### Auth API (Port 8000)

- Node.js authentication service
- RESTful API for user management
- Database integration with migrations

### Database (Port 5432)

- PostgreSQL 15 Alpine
- Persistent data storage
- Health checks enabled

### Optional Services

- **Auth Docs** (Port 8001): JSDoc generated API documentation
- **Adminer** (Port 8080): Database administration interface

## Quick Start

1. **Environment Setup**

   ```bash
   # Copy environment template
   cp .env.example .env
   # Add necessary environment variables (see Environment Variables section)
   ```

2. **Build and Start Services**

   ```bash
   # Build and start all services
   docker compose up --build

   # Or run in background
   docker compose up --build -d

   # with services
   docker compose up --build -d && bun run show-services
   ```

3. **Check Service Status**

   ```bash
   # Display all services with status and access URLs
   ./show-services.sh

   # Or use npm/bun script
   bun run services
   ```

4. **Access Services**
   - Frontend: http://localhost:3000
   - Auth Frontend: http://localhost:3001
   - Auth API: http://localhost:8000
   - API Docs: http://localhost:8001
   - Adminer: http://localhost:8080

## Development Mode

For development, you can run individual services:

```bash
# Start only database
docker-compose up auth-db

# Start auth API in development mode
cd auth/api && npm run dev

# Start frontend in development mode
bun run dev

# Start auth frontend in development mode
cd auth/frontend && npm run dev
```

## Environment Variables

Create a `.env` file with:

```env
# Database Configuration
DB_NAME=nodejs_app
DB_USER=postgres
DB_PASSWORD=postgres

# API Configuration
API_KEY=your-api-key-here

# Application Environment
NODE_ENV=development
```

## Network Architecture

All services run on the `app-network` bridge network, allowing internal communication:

- Frontend → Auth API: `http://auth-api:8000`
- Auth Frontend → Auth API: `http://auth-api:8000`
- Auth API → Database: `auth-db:5432`

## Data Persistence

- Database data persists in the `auth_postgres_data` volume
- API documentation regenerates on container restart

## Health Checks

- Database: PostgreSQL ready check
- Auth API: HTTP health endpoint at `/health`

## Service Management

### Check Status

```bash
# Show all services with status and URLs
./show-services.sh

# Or use the npm script
bun run services
```

### Stopping Services

```bash
# Stop all services
docker compose down

# Stop and remove volumes
docker compose down -v
```
