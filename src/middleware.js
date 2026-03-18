import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("admin-auth")?.value;

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = req.nextUrl.pathname === "/admin/login";

  // Not logged in
  if (!token && isAdminRoute && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Already logged in
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};