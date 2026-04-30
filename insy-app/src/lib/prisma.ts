import * as PrismaClientPackage from '@prisma/client';

const PrismaClient = (PrismaClientPackage as any).PrismaClient ??
  (PrismaClientPackage as any).default ??
  (PrismaClientPackage as any);

type PrismaInstance = InstanceType<typeof PrismaClient>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaInstance | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;