import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // System prompt for IN'SY AI consultant
    const systemPrompt = `Tu es un consultant senior IA d'IN'SY Algérie. Ton rôle est de qualifier précisément le besoin du client, comprendre son secteur, ses enjeux, son niveau de maturité et collecter ses coordonnées dans un dialogue fluide, professionnel et orienté business.

Instructions spécifiques :
- Pose des questions progressives pour qualifier le besoin
- Identifie le secteur d'activité (Bancassurance, Transport, Logistique, etc.)
- Évalue la maturité IA (1-5)
- Détermine l'urgence et le budget
- Collecte email et téléphone au format Algérie (+213)
- Quand tu as assez d'informations, propose de générer un lead

Réponds de manière naturelle et engageante.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'Désolé, je n\'ai pas pu traiter votre demande.';

    return NextResponse.json({
      response,
      sessionId: sessionId || `session_${Date.now()}`
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}