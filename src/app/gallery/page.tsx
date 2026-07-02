'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';

const GALLERY_ITEMS = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80&fit=crop&auto=format', caption: 'Reception area', gradient: 'linear-gradient(135deg,#E0D5C8,#CDBFAF)' },
  { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80&fit=crop&auto=format', caption: 'Treatment suite', gradient: 'linear-gradient(135deg,#D5C8BB,#C0AF9F)' },
  { src: null, caption: 'Signature red carpet', gradient: 'linear-gradient(160deg,#C8A09A 0%,#A0544F 55%,#6B0A0A 100%)' },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&fit=crop&auto=format', caption: 'Facial treatment', gradient: 'linear-gradient(135deg,#E8E0D5,#D5C8BB)' },
  { src: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80&fit=crop&auto=format', caption: 'Treatment products', gradient: 'linear-gradient(135deg,#CDBFAF,#BAA898)' },
  { src: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80&fit=crop&auto=format', caption: 'Massage room', gradient: 'linear-gradient(135deg,#D8D0C8,#C5B8A8)' },
  { src: 'https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=700&q=80&fit=crop&auto=format', caption: 'Interior detail', gradient: 'linear-gradient(135deg,#E0DAD2,#D0C8BE)' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80&fit=crop&auto=format', caption: 'Skin care', gradient: 'linear-gradient(135deg,#DDD5CC,#CCC0B2)' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&fit=crop&auto=format', caption: 'Atmosphere', gradient: 'linear-gradient(135deg,#CDBFAF,#BFB0A0)' },
];

export default function GalleryPage() {
  const { lang } = useLang();

  return (
    <>
      <Header opaque />

      <div className="page-hero">
        <div className="page-hero__inner">
          <span className="label">{t(lang, 'gallery.label')}</span>
          <div style={{ height: '0.75rem' }} />
          <h1 className="title-xl serif">{t(lang, 'gallery.title')}</h1>
          <div className="gold-rule" />
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '500px', lineHeight: '1.75' }}>
            {t(lang, 'gallery.sub')}
          </p>
        </div>
      </div>

      <section className="section section--white">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item, i) => (
              <div key={i} className="gallery-item">
                {item.src
                  ? <img className="gallery-item__img" src={item.src} alt={item.caption} onError={e => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
                  : null
                }
                <div className="gallery-item__placeholder" style={{ background: item.gradient, display: item.src ? 'none' : 'flex' }} />
                <div className="gallery-item__caption">
                  <span className="gallery-item__caption-text">{item.caption}</span>
                </div>
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
