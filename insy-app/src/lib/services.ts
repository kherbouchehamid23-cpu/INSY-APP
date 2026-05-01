export interface ServiceDetail {
  slug: string;
  name: string;
  description: string;
  category: string;
  overview: string;
  sections: {
    title: string;
    content: string[];
  }[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'formation',
    name: 'Formation IA',
    category: 'Formation',
    description: 'Parcours de formation modulaires pour développer des compétences IA opérationnelles.',
    overview: "Des programmes sur mesure pour aider vos équipes à comprendre, maîtriser et déployer l'intelligence artificielle avec confiance.",
    sections: [
      {
        title: 'Trois niveaux adaptés',
        content: [
          'Débutant : introduction aux concepts IA, cas d’usage métier et culture data.',
          'Intermédiaire : modélisation, machine learning et architecture de solutions.',
          'Avancé : gouvernance IA, déploiement à grande échelle et optimisation continue.'
        ]
      },
      {
        title: 'Méthodologie pédagogique',
        content: [
          'Ateliers interactifs basés sur des cas concrets du secteur Bancassurance, Transport et Logistique.',
          'Démonstrations de prototypes IA en temps réel et retours pratiques.',
          'Suivi post-formation avec recommandations opérationnelles.'
        ]
      },
      {
        title: 'Valeur pour votre organisation',
        content: [
          'Meilleure compréhension des enjeux IA et des opportunités métier.',
          'Capacité à passer de la stratégie à l’action avec des compétences concrètes.',
          'Réduction des risques liés au déploiement de projets IA.'
        ]
      }
    ]
  },
  {
    slug: 'audit',
    name: 'Audit & Diagnostic',
    category: 'Audit',
    description: 'Évaluation complète de la maturité IA et feuille de route de transformation.',
    overview: "Un audit expert pour identifier votre niveau actuel, vos forces, vos axes d'amélioration et les accélérateurs stratégiques de votre projet IA.",
    sections: [
      {
        title: 'Diagnostic de maturité',
        content: [
          'Analyse de vos capacités data, organisationnelles et technologiques.',
          'Évaluation du niveau de maturité IA sur les processus clés.',
          'Identification des cas d’usage prioritaires à fort impact.'
        ]
      },
      {
        title: 'Recommandations concrètes',
        content: [
          'Plan d’action clair avec priorisation des initiatives.',
          'Cartographie des risques et des besoins en compétences.',
          'Recommandations pour l’architecture technique et la gouvernance.'
        ]
      },
      {
        title: 'Feuille de route stratégique',
        content: [
          'Cadrage des jalons court, moyen et long terme.',
          'Étapes de mise en production et d’industrialisation.',
          'Proposition d’un modèle ROI orienté performance métier.'
        ]
      }
    ]
  },
  {
    slug: 'automatisation',
    name: 'Automatisation IA',
    category: 'Automatisation',
    description: 'Intégration intelligente et automatisation des workflows pour plus d’efficacité.',
    overview: "Une approche pratique pour automatiser vos processus métiers avec l’IA, améliorer l’efficacité et accélérer la prise de décision.",
    sections: [
      {
        title: 'Automatisation des processus',
        content: [
          'Rationalisation des workflows répétitifs grâce à des solutions IA intégrées.',
          'Automatisation des tâches de qualification, de reporting et de traitement.',
          'Création de parcours clients plus fluides et plus rapides.'
        ]
      },
      {
        title: 'Intégration intelligente',
        content: [
          'Connexion de l’IA aux systèmes existants (CRM, ERP, outils métiers).',
          'Déploiement de modèles dans des environnements sécurisés et scalables.',
          'Supervision des performances et ajustement en continu.'
        ]
      },
      {
        title: 'Résultats business',
        content: [
          'Réduction des coûts opérationnels et amélioration de la productivité.',
          'Meilleure réactivité commerciale et plus de temps pour l’innovation.',
          'Renforcement de la fiabilité des décisions grâce à des processus automatisés.'
        ]
      }
    ]
  }
];

export function getServiceBySlug(slug: string) {
  return services.find(service => service.slug === slug);
}
