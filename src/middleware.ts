import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('admin_auth');
  const isAuthenticated = authCookie?.value === 'authenticated';

  const isApiRoute = request.nextUrl.pathname.startsWith('/api/messages');
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isLoginRoute = request.nextUrl.pathname === '/login';

  // If trying to access protected API without auth
  if (isApiRoute && !isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // If trying to access admin panel without auth
  if (isAdminRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If already authenticated and trying to access login page
  if (isLoginRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

// Config to specify which paths this middleware runs on
export const config = {
  matcher: ['/admin/:path*', '/api/messages/:path*', '/login'],
};
