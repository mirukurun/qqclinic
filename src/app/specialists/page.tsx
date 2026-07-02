'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';

const PROFILES = [
  {
    id: 'ludmila',
    num: '01 / 03',
    name: 'Ludmila',
    role: 'Head Cosmetologist & Founder',
    img: '/images/ludmila.jpg',
    imgGradient: 'linear-gradient(160deg,#E0D5C8 0%,#CDBFAF 100%)',
    bio1: 'Ludmila founded Queens Qoncept Clinic after years of building a loyal client base through her work at Beauty by Ludmila Stockholm. Known for her precise, personalised approach and exceptional results, she now leads the clinic\'s cosmetology team.',
    bio2: 'With deep expertise in advanced skin treatments, PRX-T33 and microneedling, Ludmila focuses on visible results delivered in a calm, professional environment.',
    exp: '7+ years',
    lang: 'Swedish, Russian, English',
    spec: 'Aesthetic treatments, PRX-T33, Facials, Peels',
    tags: ['Dermapen', 'PRX-T33', 'Multi Facial', 'Deep Cleansing Facial', 'Peels', 'Insculpt Chair'],
    reverse: false,
    frameStyle: {},
  },
  {
    id: 'olena',
    num: '02 / 03',
    name: 'Olena',
    role: 'Massage & Wellness Therapist',
    img: '/images/olena.jpg',
    imgGradient: 'linear-gradient(160deg,#D5CCC0 0%,#C4B5A5 100%)',
    bio1: 'Olena brings a wide range of therapeutic and wellness treatments — from deep tissue and hot stone massage to pressotherapy, RF-lifting and sugaring. Known for her attentive, results-focused approach, she adapts each session to the client\'s individual needs.',
    bio2: 'Her sessions leave clients genuinely rested and renewed. Whether you\'re looking for relaxation, body care, or targeted treatment, Olena delivers with skill and care.',
    exp: '5+ years',
    lang: 'Ukrainian, Russian, English',
    spec: 'Massage, Pressotherapy, RF-lifting, Sugaring',
    tags: ['Massage (14 types)', 'Pressotherapy', 'RF-Lifting', 'Sugaring'],
    reverse: true,
    frameStyle: { bottom: 'auto', top: '-1rem', right: 'auto', left: '-1rem' },
  },
  {
    id: 'caroline',
    num: '03 / 03',
    name: 'Caroline',
    role: 'Cosmetologist',
    img: '/images/caroline.jpg',
    imgGradient: 'linear-gradient(160deg,#CBBDB0 0%,#BAA898 100%)',
    bio1: 'Caroline offers one of the clinic\'s most comprehensive treatment menus — spanning facials, chemical peels, advanced skincare, brow and lash services, lash extensions, microblading, manicure, pedicure, and body treatments. Her approach is meticulous and client-focused, with a strong eye for detail.',
    bio2: 'Known for her calm, reassuring presence, Caroline adapts every session to the individual, delivering lasting results across a wide range of aesthetic treatments.',
    exp: '6+ years',
    lang: 'Swedish, English',
    spec: 'Facials, Peels, Brows & Lashes, Lash Extensions, Microblading',
    tags: ['Facials', 'Peels', 'Dermapen', 'Advanced Skincare', 'Lash Extensions', 'Microblading', 'Manicure & Pedicure'],
    reverse: false,
    frameStyle: {},
  },
];

export default function SpecialistsPage() {
  const { lang } = useLang();

  return (
    <>
      <Header opaque />

      <div className="page-hero">
        <div className="page-hero__inner">
          <span className="label">{t(lang, 'specialists.label')}</span>
          <div style={{ height: '0.75rem' }} />
          <h1 className="title-xl serif">{t(lang, 'specialists.title')}</h1>
          <div className="gold-rule" />
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '480px', lineHeight: '1.75' }}>
            {t(lang, 'specialists.sub')}
          </p>
        </div>
      </div>

      <section className="section section--white">
        <div className="container">
          {PROFILES.map(p => (
            <div key={p.id} className={`specialist-profile${p.reverse ? ' specialist-profile--reverse' : ''}`} id={p.id}>
              <div className="specialist-photo">
                <div className="specialist-photo__placeholder" style={{ background: p.imgGradient, aspectRatio: '3/4' }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => (e.currentTarget.style.display = 'none')}
                  />
                </div>
                <div className="specialist-photo__gold-frame" style={p.frameStyle} />
              </div>
              <div className="specialist-info">
                <div className="label label--gold" style={{ marginBottom: '0.75rem' }}>{p.num}</div>
                <h2 className="specialist-name">{p.name}</h2>
                <p className="specialist-role">{p.role}</p>
                <p className="specialist-bio">{p.bio1}</p>
                <p className="specialist-bio">{p.bio2}</p>
                <div className="specialist-meta">
                  <div className="specialist-meta-row">
                    <span className="specialist-meta-label">{t(lang, 'specialist.exp')}</span>
                    <span className="specialist-meta-value">{p.exp}</span>
                  </div>
                  <div className="specialist-meta-row">
                    <span className="specialist-meta-label">{t(lang, 'specialist.lang')}</span>
                    <span className="specialist-meta-value">{p.lang}</span>
                  </div>
                  <div className="specialist-meta-row">
                    <span className="specialist-meta-label">{t(lang, 'specialist.spec')}</span>
                    <span className="specialist-meta-value">{p.spec}</span>
                  </div>
                </div>
                <div className="specialist-services-list">
                  {p.tags.map(tag => <span key={tag} className="specialist-service-tag">{tag}</span>)}
                </div>
                <Link href={`/booking?specialist=${p.name}`} className="btn btn-primary">
                  {t(lang, 'specialist.book')}&nbsp;{p.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <div className="cta-strip" style={{ padding: '4rem 0' }}>
            <h2 className="title-lg serif" style={{ marginBottom: '1rem' }}>{t(lang, 'home.cta.title')}</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '380px', margin: '0 auto 2.5rem', lineHeight: '1.75' }}>
              {t(lang, 'home.cta.sub')}
            </p>
            <Link href="/booking" className="btn btn-primary btn-lg">{t(lang, 'nav.book')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
