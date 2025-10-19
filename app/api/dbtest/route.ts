import { NextResponse } from 'next/server';
import { Client } from 'pg';

export async function GET() {
  const url = process.env.DATABASE_URL;
  if (!url)
    return NextResponse.json({ ok: false, error: 'DATABASE_URL ontbreekt' }, { status: 500 });

  const client = new Client({
    connectionString: url,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    const result = await client.query('SELECT NOW() AS tijd');
    await client.end();
    return NextResponse.json({ ok: true, db: result.rows[0] });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
