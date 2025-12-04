import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get("session");
  const hasSession = !!sessionCookie?.value;

  const isProtectedPage = request.nextUrl.pathname.startsWith("/dashboard");

  if (!hasSession && isProtectedPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
