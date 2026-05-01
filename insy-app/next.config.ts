import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dit à Turbopack/Webpack de ne SURTOUT PAS essayer de compiler Prisma
  serverExternalPackages: ["@prisma/client", "prisma"],
};

export default nextConfig;
