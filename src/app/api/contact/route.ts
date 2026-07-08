import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const { name, email, message, ...otherFields } = data;
    
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      message,
      ...otherFields,
      createdAt: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), 'data', 'messages.json');
    
    let messages: any[] = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      if (fileData) {
        messages = JSON.parse(fileData);
      }
    } else {
      // Create directory if it doesn't exist
      const dirPath = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    }

    messages.push(newMessage);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

    return NextResponse.json({ success: true, message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
