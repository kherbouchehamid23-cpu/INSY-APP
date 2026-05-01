'use server';

import prisma from '@/lib/prisma';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { ratelimit } from '@/lib/ratelimit';
import * as Sentry from '@sentry/nextjs';

const LeadSchema = z.object({
  secteur: z.string().min(1),
  maturite: z.coerce.number().default(1),
  besoin: z.string().min(1),
  urgence: z.string().min(1),
  budget: z.string().min(1),
  email: z.string().email(),
  telephone: z.string().optional(),
});

export async function createLead(prevState: any, formData: FormData) {
  try {
    const ip = headers().get('x-forwarded-for') ?? '127.0.0.1';
    const { success } = await ratelimit.limit(`lead_submission_${ip}`);
    if (!success) return { success: false, message: "Trop de demandes. Réessayez plus tard." };

    const rawData = Object.fromEntries(formData.entries());
    const validatedData = LeadSchema.parse(rawData);

    await prisma.lead.create({
      data: {
        secteur: validatedData.secteur,
        maturite: validatedData.maturite,
        besoin: validatedData.besoin,
        urgence: validatedData.urgence,
        budget: validatedData.budget,
        contact: {
          email: validatedData.email,
          telephone: validatedData.telephone || 'Non renseigné',
        },
      },
    });

    revalidatePath('/admin');
    return { success: true, message: "Votre demande a été enregistrée !" };

  } catch (error) {
    Sentry.captureException(error);
    console.error("Erreur Lead:", error);
    return { success: false, message: "Une erreur technique est survenue." };
  }
}
