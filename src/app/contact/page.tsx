'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const HOURS = [
  { dayKey: 'hours.weekday' as const, time: '10:00 – 20:00' },
  { dayKey: 'hours.sat'     as const, time: '10:00 – 16:00' },
  { dayKey: 'hours.sun'     as const, time: 'hours.closed'  },
];

export default function ContactPage() {
  const { lang } = useLang();

  return (
    <>
      <Header opaque />

      <div className="page-hero">
        <div className="page-hero__inner">
          <span className="label">{t(lang, 'contact.label')}</span>
          <div style={{ height: '0.75rem' }} />
          <h1 className="title-xl serif">{t(lang, 'contact.title')}</h1>
          <div className="gold-rule" />
        </div>
      </div>

      <section className="section section--white">
        <div className="container">
          <div className="contact-layout">
            {/* Left: info */}
            <div className="contact-info">
              <div className="contact-block">
                <div className="contact-block__label">{t(lang, 'contact.address')}</div>
                <div className="contact-block__value">
                  <a
                    href="https://maps.google.com/?q=Birger+Jarlsgatan+37,+Stockholm"
                    target="_blank"
                    rel="noopener"
                    className="contact-link"
                  >
                    Birger Jarlsgatan 37, 111 45 Stockholm
                  </a>
                </div>
              </div>

              <div className="contact-block">
                <div className="contact-block__label">{t(lang, 'contact.phone')}</div>
                <div className="contact-block__value">
                  <a href="tel:+46707294000" className="contact-link">+46 70 729 40 00</a>
                </div>
              </div>

              <div className="contact-block">
                <div className="contact-block__label">{t(lang, 'contact.email')}</div>
                <div className="contact-block__value">
                  <a href="mailto:queensqoncept@gmail.com" className="contact-link">queensqoncept@gmail.com</a>
                </div>
              </div>

              <div className="contact-block">
                <div className="contact-block__label">{t(lang, 'contact.hours')}</div>
                <div className="hours-table">
                  {HOURS.map(({ dayKey, time }) => {
                    const isClosed = time === 'hours.closed';
                    return (
                      <div key={dayKey} className="hours-row">
                        <span className="hours-day">{t(lang, dayKey)}</span>
                        <span className={`hours-time${isClosed ? ' hours-time--closed' : ''}`}>
                          {isClosed ? t(lang, 'hours.closed') : time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="contact-block">
                <div className="contact-block__label">{t(lang, 'contact.social')}</div>
                <div className="contact-block__value" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://www.instagram.com/queensqoncept"
                    target="_blank"
                    rel="noopener"
                    className="social-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2.163c2.204 0 2.466.009 3.337.048 3.066.14 4.494 1.592 4.634 4.634.039.871.047 1.133.047 3.337s-.008 2.466-.047 3.337c-.14 3.04-1.563 4.493-4.634 4.634-.871.039-1.133.047-3.337.047s-2.466-.008-3.337-.047c-3.066-.14-4.494-1.592-4.634-4.634C.009 12.637 0 12.376 0 12.163V8c0-2.204.009-2.466.048-3.337C.188 1.592 1.616.139 4.663 0 5.534-.009 5.796 0 8 0zm0 1.441c-2.167 0-2.418.008-3.278.047C2.414 1.62 1.62 2.414 1.488 4.722 1.449 5.582 1.441 5.833 1.441 8s.008 2.418.047 3.278c.132 2.308.926 3.102 3.234 3.234.86.039 1.111.047 3.278.047s2.418-.008 3.278-.047c2.308-.132 3.103-.926 3.234-3.234.039-.86.047-1.111.047-3.278s-.008-2.418-.047-3.278c-.131-2.308-.926-3.103-3.234-3.234C10.418 1.449 10.167 1.441 8 1.441zm0 2.453a4.106 4.106 0 1 1 0 8.212 4.106 4.106 0 0 1 0-8.212zm0 1.441a2.665 2.665 0 1 0 0 5.33 2.665 2.665 0 0 0 0-5.33zm5.23-2.572a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92z" /></svg>
                    @queensqoncept
                  </a>
                </div>
              </div>

              <Link href="/booking" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                {t(lang, 'contact.book')}
              </Link>
            </div>

            {/* Right: map */}
            <div className="contact-map">
              <Map />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
