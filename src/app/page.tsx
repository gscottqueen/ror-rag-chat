"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const handleLogin = () => {
    const redirectUri = encodeURIComponent("/api/auth/callback");
    const authUrl = `${
      process.env.AUTH_FRONTEND_URL || "http://localhost:3001"
    }/login?redirect_uri=${redirectUri}`;
    window.location.href = authUrl;
  };

  return (
    <div>
      <main>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Welcome to Rules-of-Racing Chat</CardTitle>
              <CardDescription>
                AI interactive Rules-of-Racing chat app. Login to start
                chatting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
