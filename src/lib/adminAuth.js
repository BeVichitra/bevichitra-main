import { cookies } from "next/headers";
import { verify } from "./auth";

export function requireAdmin() {
  const cookieStore = cookies();

  const value = cookieStore.get("admin-auth")?.value;
  const signature = cookieStore.get("admin-sign")?.value;

  if (!value || !signature || !verify(value, signature)) {
    throw new Error("Unauthorized");
  }
}