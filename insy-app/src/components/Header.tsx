'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/15 text-accent font-black shadow-[0_0_20px_rgba(0,212,255,0.12)]">
              IN
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent/90">IN'SY</p>
              <p className="text-xs text-muted">Plateforme IA</p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 sm:hidden"
            aria-label="Ouvrir le menu"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

        <nav
          className={`overflow-hidden transition-all duration-300 sm:block ${menuOpen ? 'max-h-60' : 'max-h-0'} sm:max-h-fit`}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/services"
              className="rounded-full px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
