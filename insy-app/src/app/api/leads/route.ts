export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(leads);
  } catch (error) {
    console.error('[API_LEADS_GET_ERROR]', error);
    return NextResponse.json({ error: "Erreur interne lors de la récupération" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const lead = await prisma.lead.create({
      data: {
        secteur: body.secteur || "Non renseigné",
        maturite: Number(body.maturite) || 0,
        besoin: body.besoin || "Non renseigné",
        urgence: body.urgence || "Non renseigné",
        budget: body.budget || "Non renseigné",
        contact: body.contact || { email: body.email, telephone: body.telephone },
      },
    });
    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error('[API_LEADS_POST_ERROR]', error);
    return NextResponse.json(
      { success: false, message: "Erreur interne" },
      { status: 500 }
    );
  }
}
