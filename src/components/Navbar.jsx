import { Globe, Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ lang, setLang, labels }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'programs', href: '#programs' },
    { key: 'reserve', href: '#reserve' },
    { key: 'contact', href: '#contact' },
    { key: 'about', href: '#about' },
    { key: 'terms', href: '#terms' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600" />
            <span className="font-semibold tracking-tight">Seasons</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="text-sm text-white/80 hover:text-white transition">
                {labels[item.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#account" className="hidden sm:flex items-center gap-1.5 text-sm text-white/80 hover:text-white">
              <User className="h-4 w-4" /> {labels.account}
            </a>

            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-1.5 text-sm hover:bg-neutral-800"
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="text-sm text-white/80 hover:text-white" onClick={() => setOpen(false)}>
                {labels[item.key]}
              </a>
            ))}
            <a href="#account" className="text-sm text-white/80 hover:text-white" onClick={() => setOpen(false)}>
              {labels.account}
            </a>
            <a href="#agent" className="text-sm text-white/80 hover:text-white" onClick={() => setOpen(false)}>
              {labels.agent}
            </a>
            <a href="#admin" className="text-sm text-white/80 hover:text-white" onClick={() => setOpen(false)}>
              {labels.admin}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
