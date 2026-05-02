import { PrismaClient } from '@prisma/client';
import { neonConfig, Pool } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';

if (typeof window === 'undefined') {
  neonConfig.webSocketConstructor = ws;
}

const prismaClientSingleton = () => {
  const url = process.env.DATABASE_URL;
  
  // Si l'URL est manquante (ex: pendant le build Vercel), on retourne un client natif
  // Cela évite de faire exploser la couche WebSocket de Neon avec une URL factice.
  if (!url) {
    console.warn("⚠️ DATABASE_URL est manquante. Assurez-vous qu'elle est définie dans Vercel.");
    return new PrismaClient();
  }

  const pool = new Pool({ connectionString: url });
  const adapter = new PrismaNeon(pool as any);
  
  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}
