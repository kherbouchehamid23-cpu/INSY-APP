'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Lead {
  id: string;
  secteur: string;
  maturite: number;
  besoin: string;
  urgence: string;
  budget: string;
  contact: any;
  score: number;
  createdAt: string;
}

interface AdminDashboardProps {
  onSignOut: () => void;
}

export function AdminDashboard({ onSignOut }: AdminDashboardProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads');
      const data = await response.json();

      if (!response.ok) {
        setFetchError(data?.error || 'Erreur lors de la récupération des leads.');
        return;
      }

      setLeads(data);
    } catch (error) {
      console.error('Error fetching leads:', error);
      setFetchError('Impossible de récupérer les leads pour le moment.');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-400';
    if (score >= 5) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 8) return 'A - Critique';
    if (score >= 5) return 'B - Moyen';
    return 'C - Faible';
  };

  return (
    <div className="min-h-screen bg-primary p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <motion.h1
              className="text-4xl font-black mb-3 text-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Back-Office IN'SY
            </motion.h1>
            <motion.p
              className="text-muted max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Accédez aux leads qualifiés, suivez les scores et pilotez votre back-office avec un style cohérent à l’application principale.
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-accent/30 bg-white/5 px-5 py-3 text-accent transition hover:border-accent hover:bg-white/10"
            >
              Retour au site
            </Link>
            <button
              type="button"
              onClick={onSignOut}
              className="rounded-full bg-gradient-to-r from-accent to-[#7c66ff] px-5 py-3 text-primary font-semibold transition hover:scale-[1.01]"
            >
              Déconnexion
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            className="glass p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-muted mb-2">Total Leads</h3>
            <p className="text-3xl font-bold text-accent">{leads.length}</p>
          </motion.div>

          <motion.div
            className="glass p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-muted mb-2">Score Moyen</h3>
            <p className="text-3xl font-bold text-accent">
              {leads.length > 0 ? (leads.reduce((sum, lead) => sum + lead.score, 0) / leads.length).toFixed(1) : '0'}
            </p>
          </motion.div>

          <motion.div
            className="glass p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-muted mb-2">Leads Critiques</h3>
            <p className="text-3xl font-bold text-accent">
              {leads.filter(lead => lead.score >= 8).length}
            </p>
          </motion.div>

          <motion.div
            className="glass p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-muted mb-2">Conversion</h3>
            <p className="text-3xl font-bold text-accent">0%</p>
          </motion.div>
        </div>

        {/* Leads Table */}
        <motion.div
          className="glass rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-6 border-b border-primary/20">
            <h2 className="text-2xl font-semibold text-text">Gestion des Leads</h2>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full mx-auto"></div>
              <p className="text-muted mt-4">Chargement des leads...</p>
            </div>
          ) : fetchError ? (
            <div className="p-8 text-center text-red-300">
              <p className="text-lg font-semibold">{fetchError}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-text font-semibold">Secteur</th>
                    <th className="px-6 py-4 text-left text-text font-semibold">Maturité</th>
                    <th className="px-6 py-4 text-left text-text font-semibold">Besoin</th>
                    <th className="px-6 py-4 text-left text-text font-semibold">Contact</th>
                    <th className="px-6 py-4 text-left text-text font-semibold">Score</th>
                    <th className="px-6 py-4 text-left text-text font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-t border-primary/10 hover:bg-primary/5">
                      <td className="px-6 py-4 text-text">{lead.secteur}</td>
                      <td className="px-6 py-4 text-muted">{lead.maturite}/5</td>
                      <td className="px-6 py-4 text-muted max-w-xs truncate">{lead.besoin}</td>
                      <td className="px-6 py-4 text-muted">
                        <div>
                          <p>{lead.contact?.email ?? '-'}</p>
                          <p className="text-sm">{lead.contact?.telephone ?? '-'}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`font-semibold ${getScoreColor(lead.score)}`}>
                          {lead.score.toFixed(1)} - {getScoreLabel(lead.score)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted">
                        {new Date(lead.createdAt).toLocaleDateString('fr-FR')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {leads.length === 0 && (
                <div className="p-8 text-center text-muted">
                  Aucun lead pour le moment
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}