import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic'; // Prevent caching for admin

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'messages.json');
    
    let messages: any[] = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      if (fileData) {
        messages = JSON.parse(fileData);
      }
    }

    // Sort by newest first
    messages.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({ messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
