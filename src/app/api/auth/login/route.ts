import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.ADMIN_PASSWORD;

    if (!correctPassword) {
      console.error("ADMIN_PASSWORD environment variable is not set.");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (password === correctPassword) {
      // Set the cookie
      const cookieStore = await cookies();
      cookieStore.set('admin_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
