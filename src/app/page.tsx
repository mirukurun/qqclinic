'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';

const TEAM = [
  {
    name: 'Ludmila',
    role: 'Head Cosmetologist & Founder',
    bio: "Over a decade of expertise in advanced aesthetic treatments. Specialises in Dermapen microneedling, PRX-T33, and bespoke facial protocols tailored to each client's skin.",
    href: '/specialists#ludmila',
    img: '/images/ludmila.jpg',
  },
  {
    name: 'Olena',
    role: 'Massage Therapist',
    bio: 'From deep tissue and hot stone massage to pressotherapy, RF-lifting and sugaring, Olena creates deeply restorative experiences that blend therapeutic skill with an intuitive, healing touch.',
    href: '/specialists#olena',
    img: '/images/olena.jpg',
  },
  {
    name: 'Caroline',
    role: 'Cosmetologist',
    bio: 'Certified cosmetologist with a precise, results-driven approach. Known for her meticulous brow work and restorative facials that leave skin visibly transformed.',
    href: '/specialists#caroline',
    img: '/images/caroline.jpg',
  },
];

const TESTIMONIALS_COL1 = [
  { text: '"The atmosphere is calm, elegant and completely professional. I felt at ease from the very first moment I walked in."', name: 'Anna K.', role: 'Dermapen microneedling', initials: 'AK' },
  { text: '"Beautiful clinic and attentive specialists. My skin has never looked so radiant. I will definitely be returning."', name: 'Maria L.', role: 'Facial & Peel', initials: 'ML' },
  { text: '"Outstanding results after just one PRX-T33 session. Every step was explained clearly and I felt completely comfortable."', name: 'Sofia R.', role: 'PRX-T33 Biorevitalisation', initials: 'SR' },
];
const TESTIMONIALS_COL2 = [
  { text: '"The most careful brow shaping I have ever experienced. You can see the precision and care in every single detail."', name: 'Elena V.', role: 'Brow styling', initials: 'EV' },
  { text: '"The hot stone massage with Olena was the most relaxing experience I have had in years. A true sanctuary."', name: 'Karin M.', role: 'Hot stone massage', initials: 'KM' },
  { text: '"After my anti-age facial, several people asked if I had been on holiday. The results speak for themselves."', name: 'Lena P.', role: 'Anti-age facial', initials: 'LP' },
];
const TESTIMONIALS_COL3 = [
  { text: '"From reception to treatment room, every detail is considered. The deep cleanse facial left my skin glowing for weeks."', name: 'Sara J.', role: 'Deep cleanse facial', initials: 'SJ' },
  { text: '"The Dermapen and peel package was exactly what my skin needed. Visible, lasting results that exceeded my expectations."', name: 'Petra H.', role: 'Dermapen & Peel package', initials: 'PH' },
  { text: '"Caroline gave me the most beautiful lash colour. The attention to detail is remarkable and the result looks completely natural."', name: 'Ida N.', role: 'Lash colour', initials: 'IN' },
];

function TestimonialsSection({ lang }: { lang: string }) {
  return (
    <section className="tc-section">
      <div className="container">
        <div className="tc-header">
          <span className="label">{t(lang as 'en', 'home.review.label')}</span>
          <div style={{ height: '0.75rem' }} />
          <h2 className="title-xl serif">{t(lang as 'en', 'home.reviews.title')}</h2>
          <div className="gold-rule" style={{ margin: '1.5rem auto' }} />
        </div>
      </div>
      <div className="tc-columns">
        {[
          { col: TESTIMONIALS_COL1, dur: '15s' },
          { col: TESTIMONIALS_COL2, dur: '19s', cls: 'tc-col--md' },
          { col: TESTIMONIALS_COL3, dur: '17s', cls: 'tc-col--lg' },
        ].map(({ col, dur, cls }, ci) => (
          <div key={ci} className={`tc-col${cls ? ' ' + cls : ''}`}>
            <div className="tc-track" style={{ '--tc-dur': dur } as React.CSSProperties}>
              {[...col, ...col].map((r, i) => (
                <div key={i} className="tc-card">
                  <p className="tc-card__text">{r.text}</p>
                  <div className="tc-card__footer">
                    <div className="tc-avatar">{r.initials}</div>
                    <div>
                      <div className="tc-name">{r.name}</div>
                      <div className="tc-role">{r.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeamCarousel({ lang }: { lang: string }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const total = TEAM.length;
  const slideRef = useRef<HTMLDivElement>(null);

  function goTo(idx: number) {
    const next = ((idx % total) + total) % total;
    setFading(true);
    setTimeout(() => { setCurrent(next); setFading(false); }, 260);
  }

  function getState(i: number) {
    if (i === current) return 'active';
    if (i === ((current - 1 + total) % total)) return 'left';
    if (i === ((current + 1) % total)) return 'right';
    return 'hidden';
  }

  return (
    <section className="section section--white">
      <div className="container">
        <div className="team-carousel">
          <div className="team-carousel__visual" id="teamVisual">
            {TEAM.map((m, i) => (
              <img
                key={m.name}
                className="team-carousel__img"
                src={m.img}
                alt={m.name}
                data-state={getState(i)}
              />
            ))}
          </div>
          <div className="team-carousel__info">
            <span className="label">{t(lang as 'en', 'home.team.label')}</span>
            <div className="gold-rule" style={{ margin: '1rem 0 2rem' }} />
            <div ref={slideRef} className={`team-carousel__slide${fading ? ' fading' : ''}`}>
              <h2 className="team-carousel__name serif">{TEAM[current].name}</h2>
              <p className="team-carousel__role">{TEAM[current].role}</p>
              <p className="team-carousel__bio">{TEAM[current].bio}</p>
              <Link href={TEAM[current].href} className="team-carousel__link">
                View profile
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
            <div className="team-carousel__controls">
              <button className="team-carousel__arrow" aria-label="Previous" onClick={() => goTo(current - 1)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4.5L6.5 9l4.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button className="team-carousel__arrow" aria-label="Next" onClick={() => goTo(current + 1)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 4.5L11.5 9 7 13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <span className="team-carousel__counter">{current + 1}&thinsp;/&thinsp;{total}</span>
              <Link href="/specialists" className="team-carousel__all">{t(lang as 'en', 'home.team.link')}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCover() {
  const coverRef = useRef<HTMLDivElement>(null);
  const heroLeftRef = useRef<HTMLDivElement>(null);
  const heroRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cover = coverRef.current;
    const heroLeft = heroLeftRef.current;
    const heroRight = heroRightRef.current;
    if (!cover || !heroLeft || !heroRight) return;

    if (sessionStorage.getItem('qqc_intro_seen')) {
      cover.classList.add('gone');
      heroLeft.classList.add('revealed');
      heroRight.style.visibility = 'visible';
      return;
    }

    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      const rect = heroRight.getBoundingClientRect();

      if (window.innerWidth < 900) {
        cover.style.transition = 'opacity 0.7s ease';
        cover.style.opacity = '0';
        heroLeft.classList.add('revealed');
        document.body.style.overflow = '';
        setTimeout(() => {
          cover.classList.add('gone');
          cover.style.transition = '';
          cover.style.opacity = '';
          sessionStorage.setItem('qqc_intro_seen', '1');
        }, 720);
        return;
      }

      cover.classList.add('morphing');
      cover.style.top    = rect.top    + 'px';
      cover.style.left   = rect.left   + 'px';
      cover.style.width  = rect.width  + 'px';
      cover.style.height = rect.height + 'px';
      heroLeft.classList.add('revealed');
      document.body.style.overflow = '';

      setTimeout(() => {
        cover.classList.add('gone');
        heroRight.style.visibility = 'visible';
        sessionStorage.setItem('qqc_intro_seen', '1');
      }, 950);
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return { coverRef, heroLeftRef, heroRightRef };
}

export default function HomePage() {
  const { lang } = useLang();
  const { coverRef, heroLeftRef, heroRightRef } = HeroCover();

  return (
    <>
      {/* Hero video cover */}
      <div className="hero-cover" id="heroCover" ref={coverRef}>
        <video autoPlay muted playsInline preload="auto">
          <source src="/intro.mp4" type="video/mp4" />
        </video>
        <div className="hero-cover__overlay">
          <img src="/logo-emblem.png" alt="" className="hero-cover__logo" />
          <div className="hero-cover__rule" />
          <p className="hero-cover__title">Queens Qoncept Clinic</p>
          <p className="hero-cover__sub">Beauty &amp; Aesthetic</p>
        </div>
      </div>

      <Header />

      {/* Hero */}
      <section className="hero">
        <div className="hero__left" id="heroLeft" ref={heroLeftRef}>
          <div className="hero__label-wrap">
            <span className="label">{t(lang, 'hero.label')}</span>
          </div>
          <div style={{ height: '1.5rem' }} />
          <h1 className="hero__title">
            <span className="line1">{t(lang, 'hero.title1')}</span>
            <span className="line2">{t(lang, 'hero.title2')}</span>
            <span className="line3">{t(lang, 'hero.title3')}</span>
          </h1>
          <div className="gold-rule hero__rule" />
          <p className="hero__sub">{t(lang, 'hero.sub')}</p>
          <div className="hero__cta">
            <Link href="/booking" className="btn btn-primary">{t(lang, 'hero.cta1')}</Link>
            <Link href="/services" className="btn btn-secondary">{t(lang, 'hero.cta2')}</Link>
          </div>
        </div>
        <div className="hero__right" id="heroRight" ref={heroRightRef} style={{ visibility: 'hidden' }}>
          <video className="hero__img" autoPlay muted loop playsInline style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block' }}>
            <source src="/intro.mp4" type="video/mp4" />
          </video>
          <div className="hero__red-strip" />
        </div>
      </section>

      {/* Brand strip */}
      <div className="brand-strip">
        <div className="container">
          <div className="brand-strip__inner">
            <div className="brand-strip__text">
              <span className="label">{t(lang, 'home.brand.label')}</span>
              <div style={{ height: '1rem' }} />
              <h2 className="title-md serif" style={{ marginBottom: '1rem' }}>{t(lang, 'home.brand.title')}</h2>
              <p className="brand-strip__p">{t(lang, 'home.brand.text')}</p>
            </div>
            <div className="brand-strip__stats">
              <div className="brand-stat">
                <div className="brand-stat__num">{t(lang, 'home.brand.rating')}</div>
                <div className="brand-stat__label">{t(lang, 'home.brand.rat.label')}</div>
              </div>
              <div style={{ width: '1px', height: '48px', background: 'var(--beige-light)' }} />
              <div className="brand-stat">
                <div className="brand-stat__num">{t(lang, 'home.brand.rev')}</div>
                <div className="brand-stat__label">{t(lang, 'home.brand.rev.label')}</div>
              </div>
              <div style={{ width: '1px', height: '48px', background: 'var(--beige-light)' }} />
              <div className="brand-stat">
                <div className="brand-stat__num">{t(lang, 'home.brand.exp')}</div>
                <div className="brand-stat__label">{t(lang, 'home.brand.exp.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services preview */}
      <section className="section section--ivory">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="label label--red">{t(lang, 'home.services.label')}</span>
              <div style={{ height: '0.75rem' }} />
              <h2 className="title-xl serif">{t(lang, 'home.services.title')}</h2>
              <div className="gold-rule" />
            </div>
            <Link href="/services" className="btn btn-secondary">{t(lang, 'home.services.link')}</Link>
          </div>
          <div className="service-cards">
            {[
              { href: '/services#microneedling', num: '01', titleKey: 'cat.aesthetic' as const, descKey: 'cat.aesthetic.sub' as const },
              { href: '/services#facials',       num: '02', titleKey: 'cat.facials'   as const, descKey: 'cat.facials.sub'   as const },
              { href: '/services#peels',         num: '03', titleKey: 'cat.peels'     as const, descKey: 'cat.peels.sub'     as const },
              { href: '/services#massage',       num: '04', titleKey: 'cat.massage'   as const, descKey: 'cat.massage.sub'   as const },
              { href: '/services#brows',         num: '05', titleKey: 'cat.brows'     as const, descKey: 'cat.brows.sub'     as const },
              { href: '/services#packages',      num: '06', titleKey: 'cat.packages'  as const, descKey: 'cat.packages.sub'  as const },
            ].map(({ href, num, titleKey, descKey }) => (
              <Link key={num} href={href} className="service-card">
                <div className="service-card__num">{num}</div>
                <h3 className="service-card__title">{t(lang, titleKey)}</h3>
                <p className="service-card__desc">{t(lang, descKey)}</p>
                <span className="service-card__arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TeamCarousel lang={lang} />

      <TestimonialsSection lang={lang} />

      {/* CTA */}
      <section className="section section--white">
        <div className="container">
          <div className="cta-strip">
            <span className="label">{t(lang, 'home.cta.label')}</span>
            <div style={{ height: '1.5rem' }} />
            <h2 className="title-xl serif" style={{ marginBottom: '1rem' }}>{t(lang, 'home.cta.title')}</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 2.5rem', lineHeight: '1.75' }}>
              {t(lang, 'home.cta.sub')}
            </p>
            <Link href="/booking" className="btn btn-primary btn-lg">{t(lang, 'home.cta.btn')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
