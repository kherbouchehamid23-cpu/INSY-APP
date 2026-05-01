import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// On exporte maintenant la fonction en tant que "proxy" (ou par défaut)
export default function proxy(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const sessionToken = request.cookies.get('session_token');

  if (isAdminRoute && !sessionToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const response = NextResponse.next();
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
