'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      <div className="neural-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(77,217,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(138,103,255,0.16),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,217,255,0.08),transparent_25%,rgba(255,255,255,0.02))]" />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          className="mb-10 inline-flex items-center justify-center rounded-full border border-accent/30 px-5 py-2 text-sm uppercase tracking-[0.3em] text-accent/90 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Plateforme IA futuriste
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-[#6ef0ff] via-[#8a6dff] to-[#ffffff] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Accélérez votre transformation digitale par l'IA
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Formation, audit et automatisation pour les organisations algériennes qui veulent passer à l'ère de l'IA.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.button
            className="rounded-full bg-gradient-to-r from-accent to-[#7c66ff] px-8 py-4 text-primary font-semibold shadow-[0_25px_60px_-30px_rgba(0,212,255,0.75)] transition-all hover:scale-[1.02]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Démarrer la Conversation IA
          </motion.button>

          <motion.button
            className="rounded-full border border-accent/50 bg-white/5 px-8 py-4 text-accent font-semibold backdrop-blur-md transition-all hover:border-accent hover:bg-white/10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            En savoir plus
          </motion.button>

        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-7 h-12 rounded-full border-2 border-accent/70 flex items-start justify-center p-1">
          <motion.span
            className="block h-3 w-3 rounded-full bg-accent"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
