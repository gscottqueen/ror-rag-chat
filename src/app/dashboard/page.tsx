import { redirect } from "next/navigation";
import { Suspense } from "react";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentUser } from "@/lib/session";

async function DashboardContent() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  const handleLogout = async () => {
    "use server";
    const { deleteSession } = await import("@/lib/session");
    await deleteSession();
    redirect("/");
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="absolute top-0 right-0 p-2 bg-white flex items-center justify-end">
        <form action={handleLogout}>
          <Button type="submit" variant="outline">
            Logout
          </Button>
        </form>
      </header>
      <div className="flex-1">
        <ChatBot />
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>Loading your dashboard...</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <DashboardContent />
    </Suspense>
  );
}
