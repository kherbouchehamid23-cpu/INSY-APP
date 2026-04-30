# IN'SY - Plateforme IA Algérie

Plateforme digitale intelligente pour IN'SY Algérie, spécialisée dans les services d'intelligence artificielle pour les secteurs bancassurance, transport et logistique.

## 🚀 Fonctionnalités

### Site Vitrine
- **Design futuriste** : Thème sombre (#0B0E14) avec accent néon (#00D4FF)
- **Animations fluides** : Framer Motion pour micro-interactions
- **Chatbot IA** : Interaction conversationnelle remplaçant les formulaires classiques
- **Pages spécialisées** : Formations, Audit & Diagnostic, Secteurs

### Moteur IA (RAG)
- **Qualification automatique** : Analyse des besoins clients
- **Génération de leads** : JSON structuré avec scoring
- **Base de connaissance** : Offres IN'SY, secteurs, cas d'usage
- **OpenAI GPT-4o** : Conversations naturelles et professionnelles

### Back-Office CMS
- **Gestion des contenus** : Modification sans redéploiement
- **Gestion des leads** : Scoring et priorisation automatique
- **Paramétrage IA** : Prompt système et température
- **Email configurable** : Notifications automatiques

## 🛠️ Technologies

- **Frontend** : Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Backend** : Next.js API Routes, Edge Functions
- **Base de données** : PostgreSQL avec Prisma ORM
- **IA** : OpenAI GPT-4o, LangChain
- **Cache** : Redis
- **Email** : Resend API
- **Déploiement** : Vercel

## 📦 Installation

1. **Cloner le repository**
```bash
git clone <repository-url>
cd insy-app
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration de la base de données**
```bash
# Créer une base PostgreSQL (local ou cloud)
# Configurer DATABASE_URL dans .env
npx prisma migrate dev
npx prisma generate
```

4. **Variables d'environnement**
Créer un fichier `.env.local` :
```env
DATABASE_URL="postgresql://..."
OPENAI_API_KEY="sk-..."
JWT_SECRET="your-secret"
REDIS_URL="redis://..."
RESEND_API_KEY="re_..."
```

5. **Lancer le serveur de développement**
```bash
npm run dev
```

## 🚀 Déploiement sur Vercel

### Prérequis
- Compte Vercel
- Base de données PostgreSQL (Neon, Supabase, etc.)
- Clés API (OpenAI, Resend)

### Étapes de déploiement

1. **Connecter le repository**
```bash
# Via Vercel Dashboard ou CLI
vercel
```

2. **Variables d'environnement**
Dans Vercel Dashboard > Project Settings > Environment Variables :
- `DATABASE_URL`
- `OPENAI_API_KEY`
- `JWT_SECRET`
- `REDIS_URL`
- `RESEND_API_KEY`

3. **Migration de la base de données**
```bash
npx prisma migrate deploy
```

4. **Build et déploiement**
Vercel gère automatiquement le build et le déploiement.

### Optimisations Vercel
- **Edge Functions** : APIs déployées en Edge Runtime
- **Image Optimization** : Optimisation automatique des images
- **Caching** : Headers appropriés pour le cache
- **Analytics** : Intégration Vercel Analytics

## 📊 Architecture

```
├── src/
│   ├── app/
│   │   ├── api/           # APIs Next.js
│   │   │   ├── chat/      # API chatbot IA
│   │   │   └── leads/     # API gestion leads
│   │   ├── admin/         # Back-office
│   │   ├── formations/    # Page formations
│   │   └── page.tsx       # Page d'accueil
│   ├── components/        # Composants React
│   └── lib/               # Utilitaires
├── prisma/
│   ├── schema.prisma      # Schéma base de données
│   └── migrations/        # Migrations Prisma
└── public/                # Assets statiques
```

## 🔧 Scripts disponibles

```bash
npm run dev          # Développement
npm run build        # Build production
npm run start        # Démarrage production
npm run lint         # Linting
npx prisma studio    # Interface Prisma
npx prisma migrate dev  # Migration développement
```

## 📈 Performance

- **LCP < 1.2s** : Optimisation des images et lazy loading
- **Edge Runtime** : APIs proches des utilisateurs
- **Caching Redis** : Cache des données fréquentes
- **CDN Vercel** : Distribution globale

## 🔒 Sécurité

- **HTTPS obligatoire**
- **Rate limiting** sur les APIs
- **Validation des inputs**
- **Hash des mots de passe** (bcrypt)
- **JWT pour l'authentification**

## 📞 Support

Pour toute question ou support :
- Email : contact@insy.dz
- Documentation : [Lien vers la doc]

## 📄 Licence

Propriétaire - IN'SY Algérie

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
