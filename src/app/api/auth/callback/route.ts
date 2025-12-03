import { NextRequest, NextResponse } from "next/server";
import { createSession } from "@/lib/session";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const session = searchParams.get("session");
  const expiresAt = searchParams.get("expiresAt");

  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";

  if (!session || !expiresAt) {
    return NextResponse.redirect(new URL("/", frontendUrl));
  }

  // Set the session cookie
  await createSession(session, new Date(expiresAt));

  // Redirect to home
  return NextResponse.redirect(new URL("/", frontendUrl));
}
