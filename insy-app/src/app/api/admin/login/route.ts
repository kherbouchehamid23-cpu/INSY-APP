import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'InsyAdmin2026!';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const password = body?.password;

    if (!password || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Mot de passe invalide ou absent' },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Impossible de valider les informations de connexion' },
      { status: 500 }
    );
  }
}
