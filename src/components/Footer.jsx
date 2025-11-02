export default function Footer({ lang, content }) {
  const year = new Date().getFullYear();
  const links = [
    { key: 'about', label: lang === 'ar' ? 'من نحن' : 'About', href: '#about' },
    { key: 'contact', label: lang === 'ar' ? 'اتصل بنا' : 'Contact', href: '#contact' },
    { key: 'terms', label: lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions', href: '#terms' },
    { key: 'privacy', label: lang === 'ar' ? 'الخصوصية' : 'Privacy', href: '#privacy' },
  ];

  return (
    <footer className="border-t border-white/10 bg-neutral-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className={`flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between ${lang === 'ar' ? 'text-right' : ''}`}>
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-gradient-to-br from-orange-500 to-amber-600" />
              <span className="font-medium">Seasons</span>
            </div>
            <p className="mt-2 text-sm text-white/60">
              {lang === 'ar' ? 'أسلوب حديث للحجز عبر الإنترنت.' : 'A modern way to book travel online.'}
            </p>
          </div>

          <nav className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${lang === 'ar' ? 'justify-end' : ''}`}>
            {links.map((l) => (
              <a key={l.key} href={l.href} className="text-sm text-white/80 hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50 flex items-center justify-between">
          <span>© {year} Seasons. {content.rights}</span>
          <span className="text-white/40">v1.0</span>
        </div>
      </div>
    </footer>
  );
}
