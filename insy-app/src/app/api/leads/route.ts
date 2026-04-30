import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prisma } = await import('@/lib/prisma');
    const {
      secteur,
      maturite,
      besoin,
      urgence,
      budget,
      contact
    } = await request.json();

    // Calculate score
    const secteurScore = secteur === 'Bancassurance' ? 3 : secteur === 'Transport' ? 2 : 1;
    const urgenceScore = urgence === 'Haute' ? 1.5 : urgence === 'Moyenne' ? 1 : 0.5;
    const budgetScore = budget === 'Élevé' ? 3 : budget === 'Moyen' ? 2 : 1;
    const score = secteurScore * 2 + urgenceScore + budgetScore * 3;

    const lead = await prisma.lead.create({
      data: {
        secteur,
        maturite: parseInt(maturite),
        besoin,
        urgence,
        budget,
        contact,
        score
      }
    });

    // TODO: Send email notification

    return NextResponse.json(lead);

  } catch (error) {
    console.error('Lead creation error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du lead' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { prisma } = await import('@/lib/prisma');
    const leads = await prisma.lead.findMany({
      orderBy: { score: 'desc' }
    });

    return NextResponse.json(leads);

  } catch (error) {
    console.error('Leads fetch error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des leads' },
      { status: 500 }
    );
  }
}