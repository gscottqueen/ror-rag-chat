# Authentication & Session Management Flow

## Overview

This document illustrates the complete authentication and session cookie management flow in the ROR RAG Chat application. The system uses a microservices architecture with three main services:

- **Main Frontend** (localhost:3000) - User-facing chat application
- **Auth Frontend** (localhost:3001) - Authentication UI service
- **Auth API** (localhost:8000) - Authentication backend with PostgreSQL

## Security Features

- **API Key Validation**: All auth API endpoints require `X-API-Key` header
- **Password Security**: PBKDF2 hashing with 10,000 iterations, SHA-512 algorithm
- **Session Encryption**: AES-256-CBC encryption with scrypt key derivation
- **Cookie Security**: httpOnly, secure in production, sameSite=lax
- **Session Validation**: Double validation (decrypted expiration + database lookup)

## Complete Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant MainApp as Main App<br/>(localhost:3000)
    participant AuthFE as Auth Frontend<br/>(localhost:3001)
    participant AuthAPI as Auth API<br/>(localhost:8000)
    participant DB as PostgreSQL<br/>(sessions, users)

    Note over User,DB: LOGIN FLOW

    User->>MainApp: 1. Click "Login" button
    MainApp->>AuthFE: 2. Redirect to /login?redirect_uri=/api/auth/callback

    AuthFE->>User: 3. Display login form
    User->>AuthFE: 4. Submit email + password

    AuthFE->>AuthAPI: 5. POST /user-auth<br/>{email, password}<br/>Header: X-API-Key

    Note over AuthAPI: API Key Validation

    AuthAPI->>DB: 6. Query users table by email
    DB-->>AuthAPI: User record with password_hash + salt

    Note over AuthAPI: PBKDF2 password verification<br/>(10k iterations, SHA-512)


    AuthAPI->>DB: 8. INSERT INTO sessions<br/>(user_id, expires_at = now + 7 days)
    DB-->>AuthAPI: Session ID

    Note over AuthAPI: AES-256-CBC Encryption<br/>encrypt({sessionId, expiresAt})<br/>Key: scrypt(SESSION_SECRET)

    AuthAPI-->>AuthFE: 9. Return:<br/>{user, token, session (encrypted), sessionExpires}

    AuthFE->>AuthFE: 10. Set httpOnly cookie in auth domain<br/>createSession(encryptedSession, expiresAt)

    AuthFE->>MainApp: 11. Redirect to /api/auth/callback?<br/>session=encrypted&expiresAt=timestamp

    MainApp->>MainApp: 12. Extract query params<br/>Set httpOnly cookie in main domain

    MainApp->>User: 13. Redirect to /dashboard (authenticated)

    Note over User,DB: SESSION VERIFICATION FLOW

    User->>MainApp: 14. Access protected page
    MainApp->>MainApp: 15. getSession() from cookie

    MainApp->>AuthAPI: 16. POST /user-auth/verify-session<br/>{session: encrypted}<br/>Header: X-API-Key

    Note over AuthAPI: Decrypt session data<br/>decrypt(encryptedSession)

    AuthAPI->>AuthAPI: 17. Check expiration in decrypted data

    AuthAPI->>DB: 18. SELECT * FROM sessions WHERE id = sessionId
    DB-->>AuthAPI: Session record

    AuthAPI->>AuthAPI: 19. Verify DB expiration not passed

    AuthAPI->>DB: 20. SELECT * FROM users WHERE id = user_id
    DB-->>AuthAPI: User record

    AuthAPI-->>MainApp: 21. Return {userId, user, expiresAt}

    MainApp->>User: 22. Render protected content

    Note over User,DB: LOGOUT FLOW

    User->>MainApp: 23. Click "Logout"
    MainApp->>MainApp: 24. getSession() from cookie

    MainApp->>AuthAPI: 25. POST /user-auth/logout<br/>{session: encrypted}<br/>Header: X-API-Key

    Note over AuthAPI: Decrypt session<br/>extract sessionId

    AuthAPI->>DB: 26. DELETE FROM sessions WHERE id = sessionId
    DB-->>AuthAPI: Deleted count

    AuthAPI-->>MainApp: 27. {message: "Logged out successfully"}

    MainApp->>MainApp: 28. Delete session cookie

    MainApp->>User: 29. Redirect to login/home
```

## Key Technical Details

### Session Encryption

```javascript
// Encryption (auth/api/src/utils.js)
export function encrypt(payload) {
  const text = JSON.stringify(payload);
  const key = crypto.scryptSync(SESSION_SECRET, "salt", 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  return `${iv.toString("hex")}:${encrypted}`;
}
```

### Cookie Configuration

```typescript
// Cookie settings (src/lib/session.ts)
cookieStore.set("session", sessionData, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  expires: expiresAt,
  sameSite: "lax",
  path: "/",
});
```

### Password Verification

```javascript
// PBKDF2 verification (auth/api/src/utils.js)
export function verifyPassword(password, hash, salt) {
  const derivedKey = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512");
  return derivedKey.toString("hex") === hash;
}
```

## Database Schema

### Sessions Table

```sql
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Users Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  salt VARCHAR(255) NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## API Endpoints

### Authentication API (auth/api/src/routes/user-auth.js)

- `POST /user-auth` - User login
- `POST /user-auth/verify-session` - Session verification
- `POST /user-auth/logout` - User logout
- `POST /user-auth/verify-token` - JWT token verification (unused)

### Main App API (src/app/api/auth/callback/route.ts)

- `GET /api/auth/callback` - Handle auth callback and set session cookie
- `GET /api/auth/check` - Check current authentication status

## Environment Variables

- `API_KEY` - Inter-service authentication
- `JWT_SECRET` - JWT token signing
- `SESSION_SECRET` - Session encryption key
- `AUTH_FRONTEND_URL` - Auth frontend service URL
- `API_URL` - Auth API service URL
- `FRONTEND_URL` - Main frontend URL

## System Architecture

```mermaid
graph TB
    subgraph "User Layer"
        U[User Browser]
    end

    subgraph "Frontend Services"
        MA[Main App<br/>localhost:3000<br/>Next.js]
        AF[Auth Frontend<br/>localhost:3001<br/>Next.js]
    end

    subgraph "Backend Services"
        AA[Auth API<br/>localhost:8000<br/>Node.js/Express]
    end

    subgraph "Data Layer"
        DB[(PostgreSQL<br/>Database)]
    end

    U --> MA
    U --> AF
    MA --> AA
    AF --> AA
    AA --> DB

    MA -.-> AF
    AF -.-> MA

    classDef frontend fill:#e1f5fe,color:black
    classDef backend fill:#f3e5f5,color:black
    classDef data fill:#e8f5e8,color:black
    classDef user fill:#fff3e0,color:black

    class MA,AF frontend
    class AA backend
    class DB data
    class U user
```

## Security Layers Overview

```mermaid
mindmap
  root((Security))
    API Layer
      API Key Validation
        X-API-Key Header
        Inter-service Auth
    Transport Layer
      HTTPS in Production
      Secure Cookies
      SameSite Protection
    Session Layer
      AES-256-CBC Encryption
      Scrypt Key Derivation
      Random IV per Session
    Database Layer
      PBKDF2 Password Hashing
      SHA-512 Algorithm
      10,000 Iterations
      Unique Salt per User
    Cookie Layer
      httpOnly Flag
      Secure Flag (Prod)
      SameSite=lax
      Path=/
      7-day Expiration
    Validation Layer
      Double Session Validation
      Decrypted Expiration Check
      Database Expiration Check
      User Existence Verification
```
