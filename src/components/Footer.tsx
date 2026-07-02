'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Image src="/logo.png" alt="Queens Qoncept Clinic" className="footer__logo-img" width={120} height={35} />
            <p className="footer__tagline">{t(lang, 'footer.tagline')}</p>
          </div>
          <div>
            <p className="footer__col-title">{t(lang, 'footer.col1')}</p>
            <ul className="footer__links">
              <li><Link href="/services#microneedling">{t(lang, 'cat.aesthetic')}</Link></li>
              <li><Link href="/services#prx">PRX-T33</Link></li>
              <li><Link href="/services#facials">{t(lang, 'cat.facials')}</Link></li>
              <li><Link href="/services#peels">{t(lang, 'cat.peels')}</Link></li>
              <li><Link href="/services#brows">{t(lang, 'cat.brows')}</Link></li>
              <li><Link href="/services#massage">{t(lang, 'cat.massage')}</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer__col-title">{t(lang, 'footer.col2')}</p>
            <ul className="footer__links">
              <li><Link href="/specialists">{t(lang, 'nav.specialists')}</Link></li>
              <li><Link href="/booking">{t(lang, 'nav.book')}</Link></li>
              <li><Link href="/about">{t(lang, 'nav.about')}</Link></li>
              <li><Link href="/gallery">{t(lang, 'nav.gallery')}</Link></li>
              <li><Link href="/contact">{t(lang, 'nav.contact')}</Link></li>
              <li>
                <a href="https://www.instagram.com/queens.qoncept/" target="_blank" rel="noopener">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{t(lang, 'footer.copy')}</span>
          <div className="footer__carpet">
            <div className="footer__carpet-line" />
            <span className="footer__carpet-text">{t(lang, 'footer.carpet')}</span>
            <div className="footer__carpet-line" />
          </div>
        </div>
      </div>
    </footer>
  );
}
