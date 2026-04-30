**📄 SPÉCIFICATIONS FONCTIONNELLES & TECHNIQUES**

**Plateforme Digitale IA -- IN\'SY Algérie**

**Version : 1.0 (Consolidée & Professionnelle)**\
**Date : Avril 2026**\
**Rôle : Architecte Fonctionnel & Technique**

**1. 🎯 CONTEXTE & OBJECTIFS**

**1.1 Contexte**

IN\'SY est un cabinet de conseil en systèmes d\'information présent en
France depuis 2022, intervenant dans les secteurs :

-   Bancassurance

-   Transport voyageurs

-   Logistique

L\'objectif est de **développer une activité IA en Algérie** autour de :

-   Formation IA

-   Audit des besoins

-   Intégration IA

-   Automatisation

**1.2 Objectifs du projet**

Créer une **plateforme digitale intelligente** permettant :

**Côté client :**

-   Présenter les services IA de manière moderne et crédible

-   Qualifier automatiquement les besoins via IA

-   Générer des leads qualifiés

**Côté IN\'SY :**

-   Centraliser les demandes clients

-   Prioriser les leads

-   Administrer les contenus et l'IA

**2. 🧩 VISION GLOBALE DE LA SOLUTION**

La solution est composée de 3 blocs principaux :

**2.1 Site Vitrine (Front public)**

-   Présentation des services

-   UX immersive futuriste

-   Chat IA interactif (remplace formulaire)

**2.2 Moteur IA**

-   Qualification intelligente du besoin

-   Génération automatique de leads

-   Basé sur architecture RAG

**2.3 Back-Office (Administration)**

-   Gestion des contenus

-   Gestion des leads

-   Paramétrage IA

**3. 🌐 SPÉCIFICATIONS FONCTIONNELLES -- SITE VITRINE**

**3.1 Identité & UX**

**Exigences**

-   Thème sombre futuriste (#0B0E14)

-   Accent néon (#00D4FF)

-   Design "tech premium"

-   Animations fluides

**Technologies UX**

-   Micro-interactions (hover, scroll)

-   Effet glassmorphism

-   Animations Framer Motion

**3.2 Arborescence du site**

**3.2.1 Page Accueil**

**Fonctionnalités :**

-   Hero avec animation 3D

-   Présentation IN\'SY

-   Accès direct au chatbot IA

-   Call-to-action

**3.2.2 Page Formation IA**

**Fonctionnalités :**

-   Catalogue des formations

-   Filtrage :

    -   Niveau (Débutant / Tech / Décideur)

-   Inscription via IA

**3.2.3 Page Audit & Diagnostic**

**Fonctionnalités :**

-   Questionnaire intelligent

-   Score de maturité IA (1 à 5)

-   Recommandations automatiques

**3.2.4 Page Secteurs**

**Ciblage :**

-   Bancassurance

-   Transport

-   Logistique

**Fonctionnalités :**

-   Cas d'usage

-   Contenu SEO local Algérie

**3.3 Chatbot IA (élément clé)**

**Fonction principale :**

Remplacer le formulaire classique par une **interaction
conversationnelle**

**Capacités :**

-   Comprendre le besoin client

-   Poser des questions dynamiques

-   Générer un formulaire structuré automatiquement

**4. 🤖 SPÉCIFICATIONS -- MOTEUR IA**

**4.1 Architecture**

-   Type : RAG (Retrieval Augmented Generation)

-   Base de connaissance :

    -   Offres IN\'SY

    -   Secteurs

    -   Cas d'usage

**4.2 Prompt système**

Exemple enrichi :

"Tu es un consultant senior IA d\'IN\'SY Algérie. Ton rôle est de
qualifier précisément le besoin du client, comprendre son secteur, ses
enjeux, son niveau de maturité et collecter ses coordonnées dans un
dialogue fluide, professionnel et orienté business."

**4.3 Extraction des données (Function Calling)**

L'IA doit produire un JSON :

{\
\"secteur\": \"Banque\",\
\"maturite\": 3,\
\"besoin\": \"Automatisation des processus\",\
\"urgence\": \"Haute\",\
\"budget\": \"Elevé\",\
\"contact\": {\
\"email\": \"client@email.com\",\
\"telephone\": \"+213XXXXXXXXX\"\
}\
}

**4.4 Règles métier**

-   Validation email obligatoire

-   Téléphone format Algérie

-   Score maturité calculé automatiquement

**5. 🛠️ BACK-OFFICE (ADMINISTRATION)**

**5.1 Accès**

-   Authentification sécurisée (JWT)

-   Non accessible publiquement

**5.2 Gestion des contenus**

**Fonctionnalités :**

-   CRUD pages/services

-   Gestion des formations

-   Gestion des secteurs

**5.3 Gestion des leads**

**Données affichées :**

-   Nom / contact

-   Secteur

-   Score

-   Historique conversation IA

**5.4 Lead Scoring**

Formule :

Score = (Secteur × 2) + (Urgence × 1.5) + (Budget × 3)

**Classification :**

  -----------------------------------------------------------------------
  **Score**     **Profil**        **Action**
  ------------- ----------------- ---------------------------------------
  A             Critique          Alerte immédiate

  B             Moyen             Relance

  C             Faible            Email automatique
  -----------------------------------------------------------------------

**5.5 Éditeur de Prompt IA**

**Fonctionnalités :**

-   Modifier prompt système

-   Ajuster température

-   Tester IA (sandbox)

**6. ⚙️ SPÉCIFICATIONS TECHNIQUES**

**6.1 Architecture globale**

**Frontend**

-   Framework : Next.js 14

-   Styling : Tailwind CSS

-   Animation : Framer Motion

**Backend**

-   Node.js

-   API REST / WebSocket

-   Edge Functions (Vercel)

**Base de données**

-   PostgreSQL (Prisma)

-   Redis (cache)

**IA**

-   OpenAI GPT-4o

-   LangChain

**6.2 APIs principales**

**API Chat IA**

-   POST /chat

-   Streaming réponse

**API Leads**

-   POST /lead

-   GET /leads

**API Admin**

-   CRUD contenus

**6.3 Performance**

-   LCP \< 1.2s

-   Lazy loading

-   Optimisation images

**6.4 Sécurité**

-   HTTPS obligatoire

-   Protection API (rate limiting)

-   Hash des données sensibles

**7. 🚀 AMÉLIORATIONS PROPOSÉES (VALEUR AJOUTÉE)**

**7.1 Ajouts fonctionnels**

-   Dashboard analytics IA

-   Heatmap comportement utilisateur

-   CRM intégré

-   Export leads (Excel/CSV)

**7.2 IA avancée**

-   Recommandation automatique de service

-   Génération devis automatisé

-   Personnalisation selon secteur

**7.3 UX Premium**

-   Mode "simulation projet"

-   Timeline projet IA interactive

-   Vidéos explicatives intégrées

**8. 📦 LIVRABLES ATTENDUS**

-   Site web responsive

-   Back-office sécurisé

-   API complète

-   Documentation technique

-   Documentation admin

**9. ✅ CONCLUSION**

Cette solution positionne IN\'SY comme :

-   Un acteur IA premium en Algérie

-   Innovant (IA conversationnelle)

-   Orienté performance et conversion

**👉 Si tu veux, je peux aller encore plus loin :**

-   te générer **le fichier Word (.docx) prêt à livrer**

-   créer **les maquettes UI (Figma)**

-   ou écrire **le code de base (Next.js + backend + IA)**

on apporte d\'abord plus de precision : le formulaire de contact doit
etre envoyé via web vers un email deja existant que nous pourrons
parametrer dans la partie administration du site , il faut aussi
detailler la partie administration du site pour pouvoir modifier le
contenu du site image texte etc sans redeploiment

Parfait --- là tu touches deux points **critiques pour un produit
réellement exploitable en production** :

1.  **Gestion des leads (email configurable)**

2.  **Back-office CMS (modification sans redéploiement)**

Je vais enrichir tes spécifications avec un niveau **architecte +
dev-ready**, directement intégrable dans ton document Word.

**🔧 10. ÉVOLUTION FONCTIONNELLE -- GESTION DES CONTACTS (EMAIL)**

**10.1 Objectif**

Permettre l'envoi automatique des demandes clients vers :

-   Une **adresse email configurable**

-   Sans intervention technique (modifiable via admin)

**10.2 Flux fonctionnel**

**Étapes :**

1.  Le client interagit avec l'IA

2.  L'IA génère un JSON structuré

3.  Le système :

    -   Enregistre en base

    -   Déclenche envoi email

4.  L'équipe IN\'SY reçoit un email formaté

**10.3 Paramétrage email (Back-office)**

**Fonctionnalités admin :**

-   Définir :

    -   Email principal

    -   Emails secondaires (CC)

-   Activer / désactiver notifications

-   Tester l'envoi (bouton "Test")

**10.4 Format de l'email**

**Sujet :**

\[NOUVEAU LEAD IA\] - Secteur : Banque - Score : A

**Contenu :**

\<h2\>Nouveau lead qualifié\</h2\>\
\
\<p\>\<strong\>Secteur :\</strong\> Banque\</p\>\
\<p\>\<strong\>Maturité :\</strong\> 3/5\</p\>\
\<p\>\<strong\>Besoin :\</strong\> Automatisation\</p\>\
\<p\>\<strong\>Urgence :\</strong\> Haute\</p\>\
\<p\>\<strong\>Budget :\</strong\> Elevé\</p\>\
\
\<h3\>Contact\</h3\>\
\<p\>Email : client@email.com\</p\>\
\<p\>Téléphone : +213XXXXXXXX\</p\>

**10.5 Spécifications techniques**

**Service d'envoi email**

Options recommandées :

-   SendGrid

-   Resend (moderne, simple)

-   SMTP custom (fallback)

**API Backend**

**Endpoint :**

POST /api/send-lead-email

**Payload :**

{\
\"leadId\": \"uuid\",\
\"emailConfigId\": \"uuid\"\
}

**Logique serveur :**

1\. récupérer lead\
2. récupérer config email\
3. générer template HTML\
4. envoyer email\
5. log succès / erreur

**10.6 Gestion des erreurs**

-   Retry automatique (3 tentatives)

-   Log en base

-   Notification admin si échec

**🧠 11. BACK-OFFICE CMS (MODIFICATION SANS REDEPLOIEMENT)**

👉 Ici on passe d'un simple site à une **plateforme administrable (type
CMS headless)**

**11.1 Objectif**

Permettre à un utilisateur non technique de :

-   Modifier textes

-   Modifier images

-   Modifier services

-   Modifier pages\
    ➡️ **Sans redéployer le site**

**11.2 Architecture recommandée**

**Option retenue (PRO) :**

👉 CMS Headless custom + base de données

Stack :

-   PostgreSQL

-   API dynamique

-   Upload média

**11.3 Structure des contenus (modélisation)**

**Table : pages**

  ------------------------------------------------------------------------
  **Champ**              **Type**        **Description**
  ---------------------- --------------- ---------------------------------
  id                     UUID            Identifiant

  slug                   string          URL

  title                  string          Titre

  content                JSON            contenu structuré

  isPublished            boolean         statut
  ------------------------------------------------------------------------

**Table : sections**

  -----------------------------------------------------------------------
  **Champ**       **Type**
  --------------- -------------------------------------------------------
  id              UUID

  pageId          FK

  type            string (hero, text, image, CTA)

  content         JSON

  order           int
  -----------------------------------------------------------------------

**Table : media**

  -----------------------------------------------------------------------
  **Champ**                   **Type**
  --------------------------- -------------------------------------------
  id                          UUID

  url                         string

  alt                         string

  type                        image/video
  -----------------------------------------------------------------------

**11.4 Fonctionnalités du Back-office**

**11.4.1 Gestion des pages**

**Fonctionnalités :**

-   Créer page

-   Modifier page

-   Supprimer page

-   Publier / dépublier

**11.4.2 Éditeur de contenu**

**Mode hybride :**

-   Éditeur visuel (simple)

-   Éditeur structuré JSON (avancé)

**Types de blocs :**

-   Texte

-   Image

-   Vidéo

-   CTA

-   Liste

-   Section IA (chat)

**11.4.3 Gestion des médias**

**Fonctionnalités :**

-   Upload image

-   Compression automatique

-   CDN (Vercel / Cloudinary)

Recommandé :

-   Cloudinary

**11.4.4 Gestion des services**

**CRUD complet :**

-   Nom

-   Description

-   Image

-   Catégorie

-   Position dans le site

**11.4.5 Gestion du chatbot IA**

**Paramètres modifiables :**

-   Prompt système

-   Température

-   Ton (formel / business / friendly)

**11.4.6 Gestion des emails**

**Interface :**

-   Champ email principal

-   Liste emails secondaires

-   Bouton test

**11.4.7 Dashboard admin**

**KPIs :**

-   Nombre de leads

-   Score moyen

-   Conversion

-   Répartition secteur

**⚙️ 11.5 API CMS**

**Endpoint contenu**

GET /api/pages/:slug

Retour :

{\
\"title\": \"Accueil\",\
\"sections\": \[\...\]\
}

**Endpoint admin**

POST /api/admin/pages\
PUT /api/admin/pages/:id\
DELETE /api/admin/pages/:id

**⚡ 11.6 Frontend dynamique**

**Fonctionnement**

Le frontend Next.js :

-   NE CONTIENT PAS de contenu statique

-   Récupère tout via API

**Exemple :**

const page = await fetch(\"/api/pages/home\")

**Avantages**

-   Aucun redéploiement

-   Mise à jour instantanée

-   Scalabilité

**🔐 11.7 Sécurité**

-   Auth JWT admin

-   RBAC (Admin / Editor)

-   Validation input

-   Protection upload

**🚀 12. AMÉLIORATION ARCHITECTURE (RECOMMANDATION EXPERT)**

👉 Pour un rendu encore plus PRO :

**Option 1 (rapide)**

-   CMS custom (comme décrit)

**Option 2 (enterprise)**

Utiliser :

-   Strapi

-   ou Sanity

➡️ Gain :

-   Interface prête

-   Moins de dev

-   plus robuste

**✅ CONCLUSION (MISE À NIVEAU PRO)**

Avec ces ajouts, ton projet devient :

**Avant :**

-   Site vitrine + IA

**Après :**

-   Plateforme SaaS IA complète

-   CMS administrable

-   Système de lead automation

-   Emailing configurable

-   Scalabilité réelle

**👉 Prochaine étape possible**

Je peux te faire :

1.  📄 **Le document Word final structuré (livrable client)**

2.  🎨 **Maquettes UI du back-office**

3.  💻 **Starter code complet (Next.js + API + IA + CMS)**

Dis-moi ce que tu veux prioriser.

on fait un document final

Parfait --- voici le **document final prêt à être copié dans Word**
(structuré, propre, niveau cabinet de conseil / client final).

**📄 SPÉCIFICATIONS FONCTIONNELLES ET TECHNIQUES**

**Plateforme Digitale IA -- IN\'SY Algérie**

**Version : 1.0 Finale**\
**Date : 30 Avril 2026**\
**Auteur : Architecte Fonctionnel & Technique**

**1. 🎯 CONTEXTE & OBJECTIFS**

**1.1 Contexte**

IN\'SY est un cabinet de conseil en systèmes d\'information présent en
France depuis 2022, intervenant dans les secteurs :

-   Bancassurance

-   Transport voyageurs

-   Logistique

Dans le cadre de son expansion en Algérie, IN\'SY souhaite développer
une offre autour de l'intelligence artificielle incluant :

-   Formation

-   Audit & diagnostic

-   Intégration

-   Automatisation

**1.2 Objectifs**

Développer une plateforme digitale permettant :

**Côté client :**

-   Découvrir les offres IA

-   Interagir avec un conseiller IA

-   Exprimer un besoin sans formulaire classique

**Côté IN\'SY :**

-   Recevoir des leads qualifiés

-   Automatiser la qualification

-   Administrer les contenus sans intervention technique

**2. 🧩 PÉRIMÈTRE DE LA SOLUTION**

La solution comprend :

**2.1 Site vitrine (public)**

-   UX immersive futuriste

-   Présentation des services

-   Chat IA interactif

**2.2 Moteur IA**

-   Qualification des besoins

-   Génération de leads

**2.3 Back-office (privé)**

-   Gestion des contenus

-   Gestion des leads

-   Paramétrage IA

-   Paramétrage email

**3. 🌐 SPÉCIFICATIONS FONCTIONNELLES -- SITE VITRINE**

**3.1 Identité visuelle**

-   Thème sombre (#0B0E14)

-   Accent néon (#00D4FF)

-   Style futuriste / tech

-   Animations fluides (micro-interactions)

**3.2 Arborescence**

**Page Accueil**

-   Hero animé (3D ou visuel dynamique)

-   Présentation IN\'SY

-   Accès chatbot IA

-   CTA

**Page Formation IA**

-   Catalogue des formations

-   Filtrage par niveau

-   Inscription via IA

**Page Audit & Diagnostic**

-   Questionnaire intelligent

-   Score de maturité IA (1 à 5)

-   Recommandations

**Page Secteurs**

-   Bancassurance

-   Transport

-   Logistique

-   Cas d'usage

**3.3 Chatbot IA**

**Objectif**

Remplacer le formulaire classique par une interaction conversationnelle.

**Fonctionnalités**

-   Dialogue dynamique

-   Qualification du besoin

-   Collecte des informations

-   Génération automatique d'un lead

**4. 🤖 SPÉCIFICATIONS DU MOTEUR IA**

**4.1 Rôle**

L'IA agit comme un consultant IN\'SY :

-   Comprend le besoin

-   Pose des questions

-   Qualifie le projet

**4.2 Prompt système**

"Tu es un consultant senior IA d\'IN\'SY Algérie. Tu dois qualifier
précisément le besoin du client, identifier son secteur, son niveau de
maturité et collecter ses coordonnées via un dialogue fluide,
professionnel et orienté business."

**4.3 Données générées**

Format JSON :

{\
\"secteur\": \"\",\
\"maturite\": 1-5,\
\"besoin\": \"\",\
\"urgence\": \"\",\
\"budget\": \"\",\
\"contact\": {\
\"email\": \"\",\
\"telephone\": \"\"\
}\
}

**5. 📩 GESTION DES LEADS & EMAIL**

**5.1 Fonctionnement**

1.  Interaction IA

2.  Génération JSON

3.  Enregistrement en base

4.  Envoi email automatique

**5.2 Paramétrage email (admin)**

-   Email principal (obligatoire)

-   Emails secondaires (optionnel)

-   Activation/désactivation notifications

-   Test d'envoi

**5.3 Format email**

**Sujet**

\[NOUVEAU LEAD IA\] - Secteur : X - Score : X

**Contenu**

-   Secteur

-   Maturité

-   Besoin

-   Urgence

-   Budget

-   Coordonnées

**5.4 Gestion des erreurs**

-   Retry automatique

-   Log des erreurs

-   Notification admin

**6. 🛠️ BACK-OFFICE (ADMINISTRATION)**

**6.1 Accès**

-   Authentification sécurisée

-   Accès privé uniquement

**6.2 Fonctionnalités principales**

**6.2.1 Gestion des pages**

-   Créer / modifier / supprimer

-   Publier / dépublier

**6.2.2 Éditeur de contenu (CMS)**

Objectif : modification sans redéploiement

**Types de contenu :**

-   Texte

-   Image

-   Vidéo

-   CTA

-   Sections

**6.2.3 Gestion des médias**

-   Upload images

-   Compression

-   Stockage CDN

**6.2.4 Gestion des services**

-   CRUD complet

-   Organisation par catégorie

-   Mise en avant

**6.2.5 Gestion des leads**

-   Visualisation liste

-   Détail du lead

-   Historique conversation

-   Statut

**6.2.6 Lead scoring**

Formule :

Score = (Secteur × 2) + (Urgence × 1.5) + (Budget × 3)

**6.2.7 Paramétrage IA**

-   Prompt système

-   Température

-   Mode test (sandbox)

**6.2.8 Paramétrage email**

-   Configuration destinataires

-   Test envoi

**6.2.9 Dashboard**

-   Nombre de leads

-   Répartition secteur

-   Score moyen

**7. 🧠 ARCHITECTURE TECHNIQUE**

**7.1 Frontend**

-   Next.js 14

-   Tailwind CSS

-   Framer Motion

**7.2 Backend**

-   Node.js

-   API REST

-   WebSockets

**7.3 Base de données**

-   PostgreSQL

-   Prisma ORM

-   Redis (cache)

**7.4 IA**

-   OpenAI GPT-4o

-   LangChain

**7.5 Email**

-   API email (type Resend / SendGrid)

-   SMTP fallback

**8. ⚙️ ARCHITECTURE CMS (SANS REDEPLOIEMENT)**

**8.1 Principe**

-   Contenu stocké en base

-   Chargement dynamique via API

-   Aucun contenu en dur dans le code

**8.2 Modélisation**

**Pages**

-   slug

-   title

-   contenu JSON

**Sections**

-   type

-   contenu

-   ordre

**Media**

-   URL

-   type

-   alt

**8.3 Fonctionnement frontend**

-   Appels API dynamiques

-   Mise à jour instantanée

**9. 🔐 SÉCURITÉ**

-   HTTPS obligatoire

-   Authentification JWT

-   Protection API

-   Validation des données

-   Sécurisation upload

**10. ⚡ PERFORMANCE**

-   LCP \< 1.2s

-   Lazy loading

-   Optimisation images

-   CDN

**11. 🚀 ÉVOLUTIONS FUTURES**

-   CRM intégré

-   Génération automatique de devis

-   Analytics avancés

-   Personnalisation IA par secteur

**12. ✅ CONCLUSION**

La plateforme permettra à IN\'SY :

-   D'avoir une présence digitale premium en Algérie

-   D'automatiser la génération de leads

-   De proposer une expérience innovante basée sur l'IA

-   De gérer ses contenus de manière autonome
