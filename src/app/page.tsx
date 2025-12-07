"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status on client side
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check");
        if (response.ok) {
          const userData = await response.json();
          if (userData.user) {
            // Redirect to dashboard if authenticated
            window.location.href = "/dashboard";
            return;
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = () => {
    const redirectUri = encodeURIComponent("/api/auth/callback");
    const authUrl = `${
      process.env.AUTH_FRONTEND_URL || "http://localhost:3001"
    }/login?redirect_uri=${redirectUri}`;
    window.location.href = authUrl;
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome to Rules-of-Racing Chat</CardTitle>
            <CardDescription>Loading...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

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
            <CardContent className="space-y-4">
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
