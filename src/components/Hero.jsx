import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero({ lang, content }) {
  return (
    <section id="home" className="relative isolate h-[78vh] min-h-[540px]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays should not block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className={`max-w-2xl ${lang === 'ar' ? 'ml-auto text-right' : ''}`}>
          <p className="text-sm uppercase tracking-widest text-orange-400/90">
            {content.kicker}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
            {content.title}
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            {content.subtitle}
          </p>
          <div className={`mt-8 flex flex-wrap gap-3 ${lang === 'ar' ? 'justify-end' : ''}`}>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30"
            >
              {content.ctaPrimary}
              <ArrowRight className={`h-4 w-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-900/70 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
