import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Record<string, unknown>
    // TODO: Wire to real CRM/email endpoint. For now, echo back for dev.
    return NextResponse.json({ ok: true, received: data }, { status: 200 })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid payload' },
      { status: 400 },
    )
  }
}
