'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Service {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  category: string;
}

export function Services() {
  const [services] = useState<Service[]>([
    {
      id: '1',
      name: 'Formation IA',
      description: 'Programmes de formation adaptés à tous les niveaux pour maîtriser l\'intelligence artificielle.',
      category: 'Formation'
    },
    {
      id: '2',
      name: 'Audit & Diagnostic',
      description: 'Évaluation de votre maturité IA et identification des opportunités d\'amélioration.',
      category: 'Conseil'
    },
    {
      id: '3',
      name: 'Intégration IA',
      description: 'Implémentation de solutions IA personnalisées dans vos processus métier.',
      category: 'Intégration'
    },
    {
      id: '4',
      name: 'Automatisation',
      description: 'Optimisation et automatisation de vos workflows avec l\'IA.',
      category: 'Automatisation'
    }
  ]);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#8ae7ff] via-[#b587ff] to-[#ffffff] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nos Services IA
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="glass-card p-6 rounded-[28px] border border-white/10 shadow-[0_20px_70px_-40px_rgba(0,212,255,0.55)] transition-transform hover:-translate-y-2 hover:border-accent/40 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center rounded-3xl border border-accent/30 bg-white/5 p-4 mb-6 w-14 h-14">
                <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_20px_rgba(0,212,255,0.45)]" />
              </div>

              <div className="mb-3 text-sm uppercase tracking-[0.2em] text-accent/80">
                {service.category}
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-white">
                {service.name}
              </h3>

              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Découvrez comment l'IA peut transformer votre secteur d'activité
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {['Bancassurance', 'Transport', 'Logistique'].map((sector) => (
              <motion.button
                key={sector}
                className="px-6 py-3 rounded-full border border-accent/30 bg-white/5 text-accent transition-all hover:border-accent hover:bg-accent/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {sector}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
