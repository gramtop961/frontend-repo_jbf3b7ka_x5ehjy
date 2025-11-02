import { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProgramsGrid from './components/ProgramsGrid.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' | 'ar'

  // Persist language across refreshes
  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'ar' || saved === 'en') setLang(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = useMemo(() => ({
    en: {
      nav: {
        home: 'Home',
        programs: 'Programs',
        reserve: 'Reserve',
        login: 'Login',
        register: 'Register',
        contact: 'Contact',
        about: 'About',
        terms: 'Terms',
        account: 'My Account',
        agent: 'Agent Dashboard',
        admin: 'Admin Dashboard',
      },
      hero: {
        kicker: 'Futuristic Booking Agency',
        title: 'Seasons — Travel, Simplified.',
        subtitle:
          'Discover curated programs, seamless reservations, and real‑time agent support — all in one modern experience.',
        ctaPrimary: 'Browse Programs',
        ctaSecondary: 'Contact Sales',
      },
      programs: {
        title: 'Popular Programs',
        subtitle: 'Hand‑picked experiences across seasons and cities.',
        viewAll: 'View all programs',
      },
      footer: {
        rights: 'All rights reserved.'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        programs: 'البرامج',
        reserve: 'الحجز',
        login: 'تسجيل الدخول',
        register: 'إنشاء حساب',
        contact: 'اتصل بنا',
        about: 'من نحن',
        terms: 'الشروط',
        account: 'حسابي',
        agent: 'لوحة الوكلاء',
        admin: 'لوحة المشرف',
      },
      hero: {
        kicker: 'وكالة حجز مستقبلية',
        title: 'سيزونز — السفر بلمسة واحدة',
        subtitle:
          'اكتشف برامج مختارة، حجوزات سلسة، ودعم فوري من الوكلاء — في تجربة حديثة واحدة.',
        ctaPrimary: 'استعرض البرامج',
        ctaSecondary: 'تواصل معنا',
      },
      programs: {
        title: 'البرامج الأكثر شهرة',
        subtitle: 'تجارب مختارة عبر المواسم والمدن.',
        viewAll: 'عرض جميع البرامج',
      },
      footer: {
        rights: 'جميع الحقوق محفوظة.'
      }
    }
  }), []);

  const dict = t[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={dir} className="min-h-screen bg-neutral-950 text-white selection:bg-orange-500/40 selection:text-white">
      <Navbar lang={lang} setLang={setLang} labels={dict.nav} />
      <main>
        <Hero lang={lang} content={dict.hero} />
        <ProgramsGrid lang={lang} content={dict.programs} />
      </main>
      <Footer lang={lang} content={dict.footer} />
    </div>
  );
}
