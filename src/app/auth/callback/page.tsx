import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";

export default async function CallbackPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const session = params.session as string;
  const expiresAt = params.expiresAt as string;

  if (!session || !expiresAt) {
    redirect("/");
  }

  // Set the session cookie
  await createSession(session, new Date(expiresAt));

  // Redirect to home
  redirect("/");
}
