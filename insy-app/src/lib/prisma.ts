import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let prismaInstance: PrismaClient;

try {
  // En production (Runtime normal), ceci fonctionnera parfaitement.
  prismaInstance =
    globalForPrisma.prisma ??
    new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
} catch (error) {
  // Pendant le BUILD, Turbopack tente d'exécuter ce fichier dans un bac à sable restreint.
  // On intercepte le crash inévitable de Prisma pour laisser Next.js terminer sa compilation.
  console.warn("⚠️ Instanciation de Prisma esquivée pendant l'analyse Turbopack.");
  prismaInstance = {} as PrismaClient; // Objet factice pour satisfaire TypeScript
}

export const prisma = prismaInstance;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
