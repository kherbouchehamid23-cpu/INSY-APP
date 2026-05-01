import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          
          // Vérification simple avec votre variable d'env ADMIN_PASSWORD
          if (email === "admin@insy.fr" && password === process.env.ADMIN_PASSWORD) {
            return { id: "1", name: "Admin", email: "admin@insy.fr", role: "admin" };
          }
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login', // Si vous avez une page de login personnalisée
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      if (isOnAdmin) {
        if (isLoggedIn) return true;
        return false; // Redirige vers le login
      }
      return true;
    },
    // FORCE LA REDIRECTION VERS /admin APRES LE LOGIN
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/admin`;
    },
  },
})
