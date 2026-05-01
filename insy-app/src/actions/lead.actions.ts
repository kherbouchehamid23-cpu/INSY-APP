'use server';

import prisma from '@/lib/prisma';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const LeadSchema = z.object({
  secteur: z.string().min(1, "Le secteur est requis"),
  maturite: z.coerce.number().int().default(0),
  besoin: z.string().min(1, "Le besoin est requis"),
  urgence: z.string().min(1, "L'urgence est requise"),
  budget: z.string().min(1, "Le budget est requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
});

export async function createLead(prevState: any, formData: FormData) {
  try {
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
          telephone: validatedData.telephone || "",
        }
      },
    });

    revalidatePath('/admin');
    return { success: true, message: "Demande envoyée avec succès !" };
  } catch (error) {
    console.error("Erreur création lead :", error);
    return { success: false, message: "Erreur lors de l'envoi de la demande." };
  }
}
