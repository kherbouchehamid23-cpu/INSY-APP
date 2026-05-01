import { auth } from "@/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const session = await auth();
  const isOnAdmin = request.nextUrl.pathname.startsWith('/admin');
  
  if (isOnAdmin && !session) {
    // Redirige vers la page de login au lieu de la page d'accueil
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
}
