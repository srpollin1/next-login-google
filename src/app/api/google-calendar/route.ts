import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // Manejar la solicitud GET (ya implementado en tu caso)
  try {
    const res = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      headers: {
        'Authorization': `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`,
      },
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(req: Request) {
  // Manejar la solicitud POST para crear un nuevo evento
  try {
    const event = await req.json();
    
    // Aquí debes enviar el evento a Google Calendar o a tu base de datos
    const res = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        summary: event.title,
        start: {
          dateTime: event.start,
          timeZone: 'America/Los_Angeles', // Ajusta según tu zona horaria
        },
        end: {
          dateTime: event.end,
          timeZone: 'America/Los_Angeles', // Ajusta según tu zona horaria
        },
      }),
    });
    
    if (!res.ok) {
      throw new Error('Failed to create event');
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.error();
  }
}
