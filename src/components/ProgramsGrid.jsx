import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';

const samplePrograms = [
  {
    id: 'spring-city',
    season: 'Spring',
    season_ar: 'الربيع',
    name: 'Blossom Trails — Kyoto',
    name_ar: 'دروب الزهور — كيوتو',
    location: 'Kyoto, Japan',
    location_ar: 'كيوتو، اليابان',
    duration: '5 days',
    duration_ar: '٥ أيام',
    slots: 12,
  },
  {
    id: 'summer-coast',
    season: 'Summer',
    season_ar: 'الصيف',
    name: 'Azure Coast — Amalfi',
    name_ar: 'الساحل اللازوردي — أمالفي',
    location: 'Amalfi, Italy',
    location_ar: 'أمالفي، إيطاليا',
    duration: '7 days',
    duration_ar: '٧ أيام',
    slots: 8,
  },
  {
    id: 'autumn-safari',
    season: 'Autumn',
    season_ar: 'الخريف',
    name: 'Golden Safari — Serengeti',
    name_ar: 'سفاري الذهب — سيرينغيتي',
    location: 'Serengeti, Tanzania',
    location_ar: 'سيرينغيتي، تنزانيا',
    duration: '6 days',
    duration_ar: '٦ أيام',
    slots: 10,
  },
  {
    id: 'winter-north',
    season: 'Winter',
    season_ar: 'الشتاء',
    name: 'Aurora Quest — Tromsø',
    name_ar: 'رحلة الشفق — ترومسو',
    location: 'Tromsø, Norway',
    location_ar: 'ترومسو، النرويج',
    duration: '4 days',
    duration_ar: '٤ أيام',
    slots: 6,
  },
];

export default function ProgramsGrid({ lang, content }) {
  const isAr = lang === 'ar';

  return (
    <section id="programs" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-end justify-between ${isAr ? 'flex-row-reverse' : ''}`}>
          <div className={`${isAr ? 'text-right' : ''}`}>
            <h2 className="text-2xl sm:text-3xl font-semibold">{content.title}</h2>
            <p className="mt-2 text-white/70">{content.subtitle}</p>
          </div>
          <a
            href="#all-programs"
            className="text-sm text-orange-400 hover:text-orange-300"
          >
            {content.viewAll}
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {samplePrograms.map((p) => (
            <article key={p.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-5 hover:border-orange-500/40 transition">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wide text-orange-300/90">
                  {isAr ? p.season_ar : p.season}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 px-2 py-1 text-[11px] text-orange-300">
                  <Ticket className="h-3.5 w-3.5" /> {p.slots}
                </span>
              </div>
              <h3 className={`mt-3 text-lg font-medium ${isAr ? 'text-right' : ''}`}>
                {isAr ? p.name_ar : p.name}
              </h3>

              <div className={`mt-4 flex flex-col gap-2 text-sm text-white/70 ${isAr ? 'items-end text-right' : ''}`}>
                <div className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-white/50" />
                  <span>{isAr ? p.location_ar : p.location}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-white/50" />
                  <span>{isAr ? p.duration_ar : p.duration}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-white/50" />
                  <span>{isAr ? 'مواعيد متعددة' : 'Multiple schedules'}</span>
                </div>
              </div>

              <div className={`mt-6 flex ${isAr ? 'justify-start' : 'justify-end'}`}>
                <a
                  href={`#program-${p.id}`}
                  className="text-sm font-medium text-orange-300 hover:text-orange-200"
                >
                  {isAr ? 'التفاصيل والحجز' : 'Details & Reserve'}
                </a>
              </div>

              <div className="pointer-events-none absolute -inset-px opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(253,186,116,0.18), transparent 40%)' }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
