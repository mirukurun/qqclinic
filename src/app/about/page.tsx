'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <>
      <Header opaque />

      <div className="page-hero page-hero--has-img">
        <div className="page-hero__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1400&q=80&fit=crop&auto=format')" }} />
        <div className="page-hero__inner">
          <span className="label">{t(lang, 'about.label')}</span>
          <div style={{ height: '0.75rem' }} />
          <h1 className="title-xl serif" style={{ color: '#fff' }}>{t(lang, 'about.title').replace('\n', ' ')}</h1>
          <div className="gold-rule" style={{ background: 'rgba(199,167,93,0.6)' }} />
        </div>
      </div>

      <section className="section section--white">
        <div className="container">
          <div className="about-intro">
            <div className="about-img">
              <div className="about-img__frame">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&fit=crop&auto=format"
                  alt="Queens Qoncept Clinic interior"
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="about-img__gold" />
            </div>
            <div>
              <div className="about-intro-heading">
                <span className="label">{t(lang, 'about.label')}</span>
                <div style={{ height: '0.75rem' }} />
                <h2 className="title-lg serif" style={{ marginBottom: '1.5rem' }}>{t(lang, 'about.title').replace('\n', ' ')}</h2>
              </div>
              <div className="gold-rule" />
              <p style={{ fontSize: '0.9rem', lineHeight: '1.85', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>{t(lang, 'about.p1')}</p>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.85', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>{t(lang, 'about.p2')}</p>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.85', color: 'var(--text-muted)' }}>{t(lang, 'about.p3')}</p>
              <div style={{ height: '2.5rem' }} />
              <div className="stat-strip">
                <div className="stat-item"><div className="stat-num">4.9</div><div className="stat-label">{t(lang, 'home.brand.rat.label')}</div></div>
                <div className="stat-item"><div className="stat-num">445+</div><div className="stat-label">{t(lang, 'home.brand.rev.label')}</div></div>
                <div className="stat-item"><div className="stat-num">17+</div><div className="stat-label">{t(lang, 'home.brand.exp.label')}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="carpet-section">
        <div className="container">
          <div className="carpet-section__inner">
            <div className="carpet-img">
              <span className="carpet-label">Clinic interior — signature detail</span>
            </div>
            <div>
              <span className="label">{t(lang, 'about.carpet.label')}</span>
              <div style={{ height: '0.75rem' }} />
              <h2 className="title-lg serif" style={{ marginBottom: 0 }}>{t(lang, 'about.carpet.title')}</h2>
              <div className="carpet-rule">
                <div className="carpet-rule-bar" />
                <span className="carpet-rule-label">Queens Qoncept</span>
              </div>
              <p className="carpet-quote">{t(lang, 'about.carpet.q')}</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>{t(lang, 'about.carpet.p1')}</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>{t(lang, 'about.carpet.p2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="label">{t(lang, 'about.vals.label')}</span>
            <div style={{ height: '0.75rem' }} />
            <h2 className="title-lg serif">{t(lang, 'about.vals.title')}</h2>
            <div className="gold-rule" style={{ margin: '1.5rem auto' }} />
          </div>
          <div className="values-grid">
            {[
              { num: '01', titleKey: 'about.v1.title' as const, textKey: 'about.v1.text' as const },
              { num: '02', titleKey: 'about.v2.title' as const, textKey: 'about.v2.text' as const },
              { num: '03', titleKey: 'about.v3.title' as const, textKey: 'about.v3.text' as const },
            ].map(({ num, titleKey, textKey }) => (
              <div key={num} className="value-card">
                <div className="value-num">{num}</div>
                <h3 className="value-title">{t(lang, titleKey)}</h3>
                <p className="value-text">{t(lang, textKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <div className="cta-strip" style={{ padding: '3rem 0' }}>
            <h2 className="title-lg serif" style={{ marginBottom: '1rem' }}>{t(lang, 'home.cta.title')}</h2>
            <Link href="/booking" className="btn btn-primary btn-lg">{t(lang, 'nav.book')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
