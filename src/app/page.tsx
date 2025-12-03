"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Rules-of-Racing Chat
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
            AI interactive Rules-of-Racing chat app. Login to start chatting.
          </p>
          <button
            onClick={() =>
              (window.location.href = `${
                process.env.AUTH_FRONTEND_URL || "http://localhost:3001"
              }/login?redirect_uri=${encodeURIComponent('/api/auth/callback')}`)
            }
            className="px-3 py-3 rounded-sm text-gray-900"
          >
            Login
          </button>
        </div>
      </main>
    </div>
  );
}
