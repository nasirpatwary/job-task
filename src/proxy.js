import { NextResponse } from 'next/server';
export function proxy(request) {
  const token = request.cookies.get('auth_token');
  const {pathname} = request.nextUrl
  if (!token && pathname.startsWith('/add-item')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}