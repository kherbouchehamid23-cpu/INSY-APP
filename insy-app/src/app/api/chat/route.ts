import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Clé Groq non configurée. Vérifiez la variable GROQ_API_KEY.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const messages = body?.messages;
    const sessionId = body?.sessionId;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
    }

    const systemPrompt = `Tu es un consultant senior IA d'IN'SY Algérie. Ton rôle est de qualifier précisément le besoin du client, comprendre son secteur, ses enjeux, son niveau de maturité et collecter ses coordonnées dans un dialogue fluide, professionnel et orienté business.

Instructions spécifiques :
- Pose des questions progressives pour qualifier le besoin
- Identifie le secteur d'activité (Bancassurance, Transport, Logistique, etc.)
- Évalue la maturité IA (1-5)
- Détermine l'urgence et le budget
- Collecte email et téléphone au format Algérie (+213)
- Quand tu as assez d'informations, propose de générer un lead

Réponds de manière naturelle et engageante.`;

    const completion = await groq.chat.completions.create({
      model: 'llama3-8b-8192',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
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
    const status = (error as any)?.status || 500;
    const message = (error as any)?.message || 'Erreur interne du serveur';

    return NextResponse.json(
      { error: message },
      { status }
    );
  }
}
