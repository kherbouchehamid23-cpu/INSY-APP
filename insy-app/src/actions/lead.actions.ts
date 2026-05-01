'use server';

import prisma from '@/lib/prisma';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const LeadSchema = z.object({
  name: z.string().min(2, "Le nom est trop court").max(100),
  email: z.string().email("Email invalide"),
  interest: z.string().optional(),
});

export async function createLead(prevState: any, formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries());
    const validatedData = LeadSchema.parse(rawData);

    await prisma.lead.create({
      data: validatedData,
    });

    revalidatePath('/admin');
    return { success: true, message: "Demande envoyée avec succès !" };
  } catch (error) {
    return { success: false, message: "Erreur lors de l'envoi de la demande." };
  }
}
