'use client';

import { FormEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AdminDashboard } from './AdminDashboard';

const AUTH_STORAGE_KEY = 'insy-admin-auth';

export default function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(AUTH_STORAGE_KEY);
    setAuthenticated(saved === 'true');
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data?.error || 'Échec de l’authentification');
        return;
      }

      localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      setAuthenticated(true);
    } catch (error) {
      console.error('Login error:', error);
      setError('Impossible de se connecter pour le moment.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setAuthenticated(false);
  };

  if (authenticated) {
    return <AdminDashboard onSignOut={handleSignOut} />;
  }

  return (
    <div className="min-h-screen bg-primary px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="glass rounded-[32px] border border-white/10 p-8 shadow-[0_30px_80px_-40px_rgba(0,212,255,0.6)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-3">Accès Administration</p>
            <h1 className="text-4xl font-black text-text mb-3">Authentification requise</h1>
            <p className="text-muted leading-relaxed">
              Saisissez le mot de passe administrateur pour accéder à la gestion des leads et au back-office.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="••••••••••"
                autoComplete="current-password"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-[#7c66ff] px-8 py-4 text-sm font-semibold text-primary transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          <p className="mt-8 text-sm text-muted">
            Si le mot de passe n'est pas configuré, le système utilise un mot de passe par défaut. Pour plus de sécurité, ajoutez la variable d'environnement <code>ADMIN_PASSWORD</code>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
