import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Extracted fields that are sent from the frontend
    const { name, email, company, project, budget, message } = data;
    
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    // Attempt to insert data into PostgreSQL
    try {
      await sql`
        INSERT INTO messages (name, email, company, project, budget, message)
        VALUES (${name}, ${email}, ${company || ''}, ${project || ''}, ${budget || ''}, ${message})
      `;
    } catch (dbError: any) {
      // If table doesn't exist, create it and try again
      if (dbError.message.includes('relation "messages" does not exist')) {
        await sql`
          CREATE TABLE messages (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            company VARCHAR(255),
            project VARCHAR(255),
            budget VARCHAR(255),
            message TEXT NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          );
        `;
        // Retry insertion
        await sql`
          INSERT INTO messages (name, email, company, project, budget, message)
          VALUES (${name}, ${email}, ${company || ''}, ${project || ''}, ${budget || ''}, ${message})
        `;
      } else {
        throw dbError;
      }
    }

    return NextResponse.json({ success: true, message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
