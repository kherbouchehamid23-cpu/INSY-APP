'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Formation {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  price: number;
}

export function FormationsPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const formations: Formation[] = [
    {
      id: '1',
      title: 'Introduction à l\'IA',
      description: 'Comprendre les fondamentaux de l\'intelligence artificielle et ses applications métier.',
      level: 'Débutant',
      duration: '2 jours',
      price: 150000 // DZD
    },
    {
      id: '2',
      title: 'Machine Learning Avancé',
      description: 'Techniques avancées de machine learning pour les professionnels.',
      level: 'Tech',
      duration: '5 jours',
      price: 350000
    },
    {
      id: '3',
      title: 'IA pour les Décideurs',
      description: 'Stratégie IA et prise de décision pour les dirigeants d\'entreprise.',
      level: 'Décideur',
      duration: '3 jours',
      price: 250000
    }
  ];

  const filteredFormations = selectedLevel === 'all'
    ? formations
    : formations.filter(f => f.level === selectedLevel);

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-text to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Formations IA
          </motion.h1>

          <motion.p
            className="text-xl text-muted mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Développez vos compétences en intelligence artificielle avec nos programmes adaptés à tous les niveaux.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'Débutant', 'Tech', 'Décideur'].map((level) => (
              <motion.button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedLevel === level
                    ? 'bg-accent text-primary'
                    : 'border border-accent text-accent hover:bg-accent hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {level === 'all' ? 'Toutes les formations' : level}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFormations.map((formation, index) => (
              <motion.div
                key={formation.id}
                className="glass p-6 rounded-xl hover:bg-accent/10 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                    {formation.level}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-text">
                  {formation.title}
                </h3>

                <p className="text-muted mb-4 leading-relaxed">
                  {formation.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted">
                    Durée: {formation.duration}
                  </span>
                  <span className="text-lg font-semibold text-accent">
                    {formation.price.toLocaleString()} DZD
                  </span>
                </div>

                <motion.button
                  className="w-full py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/80 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  S'inscrire via IA
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}