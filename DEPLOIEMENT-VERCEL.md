# 🚀 Guide Déploiement Vercel - IN'SY

## ✅ Prérequis

1. **Compte Vercel** : [vercel.com](https://vercel.com)
2. **Base de données PostgreSQL** : 
   - [Neon](https://neon.tech) (recommandé)
   - [Supabase](https://supabase.com)
   - [Railway](https://railway.app)
3. **Clés API** :
   - OpenAI API Key
   - Resend API Key (pour emails)

## 🔧 Configuration Base de Données

### Option 1 : Neon (Recommandé)
```bash
# Créer un compte sur neon.tech
# Créer un nouveau projet
# Copier la connection string
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

### Option 2 : Supabase
```bash
# Créer un compte sur supabase.com
# Créer un nouveau projet
DATABASE_URL="postgresql://postgres:password@db.xxx.supabase.co:5432/postgres"
```

## 📝 Variables d'Environnement

Dans le dashboard Vercel > Project Settings > Environment Variables :

### Production
```
DATABASE_URL=postgresql://...
OPENAI_API_KEY=sk-...
JWT_SECRET=votre-secret-jwt
REDIS_URL=redis://...
RESEND_API_KEY=re_...
```

### Développement (optionnel)
```
NODE_ENV=development
```

## 🚀 Déploiement

### Étape 1 : Authentification
```bash
cd insy-app
npx vercel login
# Suivre les instructions (code dans le navigateur)
```

### Étape 2 : Premier Déploiement
```bash
npx vercel --yes
```

### Étape 3 : Migration Base de Données
```bash
npx prisma migrate deploy
```

### Étape 4 : Générer Client Prisma
```bash
npx prisma generate
```

## 🌐 Configuration Domaine

1. **Acheter un domaine** : insy.dz ou insy-algerie.com
2. **Ajouter dans Vercel** :
   - Project Settings > Domains
   - Ajouter votre domaine
   - Suivre les instructions DNS

## 🔍 Vérification Déploiement

Après déploiement, vérifier :

- ✅ **Site accessible** : https://insy-app.vercel.app
- ✅ **Chatbot fonctionne** : Tester l'IA
- ✅ **Admin accessible** : /admin
- ✅ **APIs répondent** : /api/leads

## 📊 Monitoring

### Analytics Vercel
- Activer dans Project Settings > Analytics
- Suivre les performances et erreurs

### Logs
```bash
npx vercel logs
```

## 🔧 Maintenance

### Mise à jour
```bash
git add .
git commit -m "Update IN'SY"
git push origin main
# Vercel déploie automatiquement
```

### Variables d'environnement
- Modifier dans Vercel Dashboard
- Redéployer si nécessaire

## 🚨 Dépannage

### Erreur Build
```bash
# Vérifier les logs
npx vercel logs --follow

# Redéployer
npx vercel --prod
```

### Erreur Base de Données
- Vérifier DATABASE_URL
- Vérifier connexion Prisma
- Vérifier migrations

### Erreur OpenAI
- Vérifier OPENAI_API_KEY
- Vérifier quota API

## 🎯 Optimisations Vercel

### Performance
- ✅ Edge Functions activées
- ✅ Image optimization
- ✅ CDN global

### Sécurité
- ✅ HTTPS automatique
- ✅ Headers de sécurité
- ✅ Rate limiting APIs

## 📞 Support

En cas de problème :
1. Vérifier les logs Vercel
2. Tester localement : `npm run dev`
3. Contacter support Vercel

---

**🎉 Félicitations !** Votre plateforme IN'SY est maintenant en ligne ! 🚀