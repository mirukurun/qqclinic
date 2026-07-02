'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';

const NAV_LINKS = [
  { href: '/',            nav: 'home',        key: 'nav.home' as const },
  { href: '/services',    nav: 'services',    key: 'nav.services' as const },
  { href: '/specialists', nav: 'specialists', key: 'nav.specialists' as const },
  { href: '/about',       nav: 'about',       key: 'nav.about' as const },
  { href: '/gallery',     nav: 'gallery',     key: 'nav.gallery' as const },
  { href: '/contact',     nav: 'contact',     key: 'nav.contact' as const },
];

interface HeaderProps {
  opaque?: boolean;
}

export default function Header({ opaque = false }: HeaderProps) {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isBooking = pathname === '/booking';

  return (
    <>
      <header
        className={`header${opaque ? ' header--opaque' : ''}${scrolled ? ' scrolled' : ''}`}
        id="header"
      >
        <div className="header__inner">
          <Link href="/" className="header__logo">
            <Image src="/logo.png" alt="Queens Qoncept Clinic" className="header__logo-img" width={140} height={40} />
          </Link>

          <nav className="header__nav">
            {NAV_LINKS.map(({ href, nav, key }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link key={nav} href={href} className={active ? 'active' : undefined}>
                  {t(lang, key)}
                </Link>
              );
            })}
          </nav>

          <div className="header__right">
            <div className="lang-toggle">
              <button
                className={`lang-btn${lang === 'en' ? ' active' : ''}`}
                onClick={() => setLang('en')}
              >EN</button>
              <button
                className={`lang-btn${lang === 'sv' ? ' active' : ''}`}
                onClick={() => setLang('sv')}
              >SV</button>
            </div>
            {!isBooking && (
              <Link href="/booking" className="btn btn-primary btn-sm">
                {t(lang, 'nav.book')}
              </Link>
            )}
          </div>

          <button
            className={`header__burger${mobileOpen ? ' open' : ''}`}
            id="burger"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`} id="mobileNav">
        {NAV_LINKS.map(({ href, nav, key }) => (
          <Link key={nav} href={href} onClick={() => setMobileOpen(false)}>
            {t(lang, key)}
          </Link>
        ))}
        {!isBooking && (
          <Link
            href="/booking"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            onClick={() => setMobileOpen(false)}
          >
            {t(lang, 'nav.book')}
          </Link>
        )}
      </nav>

      {mobileOpen && (
        <div className="nav-backdrop open" onClick={() => setMobileOpen(false)} />
      )}

      {/* bottom bar for mobile */}
      <div className="mobile-book-bar">
        {!isBooking && (
          <Link href="/booking" className="btn btn-primary btn-sm">
            {t(lang, 'nav.book')}
          </Link>
        )}
        <button
          className={`mobile-book-bar__burger${mobileOpen ? ' open' : ''}`}
          aria-label="Menu"
          onClick={() => setMobileOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </>
  );
}
