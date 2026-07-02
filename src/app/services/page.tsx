'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';
import { SERVICE_CATS } from '@/lib/data';

interface FilterState {
  specialist: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  maxDur: number;
}

function parsePrice(s: string | null): number {
  return parseInt(String(s ?? '0').replace(/\s/g, ''), 10) || 0;
}

export default function ServicesPage() {
  const { lang } = useLang();
  const filterBarRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState<FilterState>({
    specialist: '',
    category: '',
    minPrice: 0,
    maxPrice: 0,
    maxDur: 0,
  });
  const [activeSectionId, setActiveSectionId] = useState(SERVICE_CATS[0]?.id ?? '');

  function isActive(catId: string, trSpec: string[], trPrice: string | null, trDur: number) {
    const price = parsePrice(trPrice);
    const { specialist, category, minPrice, maxPrice, maxDur } = filters;
    if (specialist && !trSpec.includes(specialist)) return false;
    if (category && catId !== category) return false;
    if (minPrice && price < minPrice) return false;
    if (maxPrice && price > maxPrice) return false;
    if (maxDur && trDur > maxDur) return false;
    return true;
  }

  const hasActiveFilter = !!(filters.specialist || filters.category || filters.minPrice || filters.maxPrice || filters.maxDur);

  function clearFilters() {
    setFilters({ specialist: '', category: '', minPrice: 0, maxPrice: 0, maxDur: 0 });
  }

  // Scroll-active sidebar
  useEffect(() => {
    function update() {
      const filterH = filterBarRef.current?.offsetHeight ?? 0;
      const offset = 72 + filterH + 16;
      let current = SERVICE_CATS[0].id;
      SERVICE_CATS.forEach(cat => {
        const el = document.getElementById(cat.id);
        if (el && el.getBoundingClientRect().top <= offset) current = cat.id;
      });
      setActiveSectionId(current);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  // Sync filter bar height as CSS var
  useEffect(() => {
    function sync() {
      const h = filterBarRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty('--filter-h', h + 'px');
    }
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [filters]);

  return (
    <>
      <Header opaque />

      <div className="page-hero">
        <div className="page-hero__inner">
          <span className="label">{t(lang, 'services.label')}</span>
          <h1 className="title-xl serif">{t(lang, 'services.title')}</h1>
          <div className="gold-rule" />
        </div>
      </div>

      {/* Filter bar */}
      <div className="services-filter-bar" ref={filterBarRef}>
        <div className="container">
          <div className="filter-row">
            <div className="filter-group">
              <span className="filter-label">Specialist</span>
              <div className="filter-pills">
                {['', 'Ludmila', 'Caroline', 'Olena'].map(sp => (
                  <button
                    key={sp}
                    className={`filter-pill${filters.specialist === sp ? ' active' : ''}`}
                    onClick={() => setFilters(f => ({ ...f, specialist: sp }))}
                  >
                    {sp || 'All'}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label" htmlFor="filterCat">Category</label>
              <select
                className="filter-select"
                id="filterCat"
                value={filters.category}
                onChange={e => setFilters(f => ({ ...f, category: e.target.value }))}
              >
                <option value="">All categories</option>
                {SERVICE_CATS.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.title}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <span className="filter-label">Price, kr</span>
              <div className="filter-price-inputs">
                <input
                  type="number"
                  className="filter-price-input"
                  placeholder="From"
                  aria-label="Min price"
                  value={filters.minPrice || ''}
                  onChange={e => setFilters(f => ({ ...f, minPrice: parseInt(e.target.value) || 0 }))}
                />
                <span className="filter-price-sep">—</span>
                <input
                  type="number"
                  className="filter-price-input"
                  placeholder="To"
                  aria-label="Max price"
                  value={filters.maxPrice || ''}
                  onChange={e => setFilters(f => ({ ...f, maxPrice: parseInt(e.target.value) || 0 }))}
                />
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label" htmlFor="filterDur">Duration</label>
              <select
                className="filter-select"
                id="filterDur"
                value={filters.maxDur || ''}
                onChange={e => setFilters(f => ({ ...f, maxDur: parseInt(e.target.value) || 0 }))}
              >
                <option value="">Any duration</option>
                <option value="15">Up to 15 min</option>
                <option value="30">Up to 30 min</option>
                <option value="45">Up to 45 min</option>
                <option value="60">Up to 60 min</option>
                <option value="90">Up to 90 min</option>
              </select>
            </div>
          </div>

          {hasActiveFilter && (() => {
            const total = SERVICE_CATS.flatMap(c => c.treatments).filter(tr => {
              const cat = SERVICE_CATS.find(c => c.treatments.includes(tr))!;
              return isActive(cat.id, tr.by, tr.price, tr.duration);
            }).length;
            return (
              <div className="filter-meta active">
                <span className="filter-count">{total} treatment{total !== 1 ? 's' : ''} found</span>
                <button className="filter-clear" onClick={clearFilters}>Clear all ×</button>
              </div>
            );
          })()}
        </div>
      </div>

      <section className="section section--white">
        <div className="container">
          <div className="services-layout">
            <aside className="services-sidebar">
              <nav className="services-sidebar__nav" id="sidebarNav">
                {SERVICE_CATS.map(cat => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className={`sidebar-link${activeSectionId === cat.id ? ' active' : ''}`}
                  >
                    {cat.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div>
              {SERVICE_CATS.map(cat => {
                const visibleTreatments = cat.treatments.filter(tr =>
                  isActive(cat.id, tr.by, tr.price, tr.duration)
                );
                if (hasActiveFilter && visibleTreatments.length === 0) return null;
                const shown = hasActiveFilter ? visibleTreatments : cat.treatments;
                return (
                  <div key={cat.id} className="service-category" id={cat.id}>
                    <div className="service-category__header">
                      <h2 className="service-category__title">{cat.title}</h2>
                      <span className="service-category__count">
                        {hasActiveFilter
                          ? `${visibleTreatments.length} / ${cat.treatments.length} treatment${cat.treatments.length !== 1 ? 's' : ''}`
                          : `${cat.treatments.length} treatment${cat.treatments.length !== 1 ? 's' : ''}`
                        }
                      </span>
                    </div>
                    {shown.map(tr => (
                      <div key={tr.name} className="service-row">
                        <div>
                          <div className="service-row__name">{tr.name}</div>
                          <div className="service-row__desc">{tr.desc}</div>
                          <div className="service-row__specialists">
                            {tr.by.map(sp => (
                              <span key={sp} className="service-row__by">{sp}</span>
                            ))}
                          </div>
                        </div>
                        <div className="service-row__duration">{tr.duration} <span>{t(lang, 'min')}</span></div>
                        {tr.price
                          ? <div className="service-row__price">{tr.price} <span>{t(lang, 'kr')}</span></div>
                          : <div />
                        }
                        <Link href={`/booking?treatment=${encodeURIComponent(tr.name)}`} className="btn btn-ghost btn-sm">
                          {t(lang, 'nav.book')}
                        </Link>
                      </div>
                    ))}
                  </div>
                );
              })}
              {hasActiveFilter && SERVICE_CATS.every(cat =>
                cat.treatments.every(tr => !isActive(cat.id, tr.by, tr.price, tr.duration))
              ) && (
                <div className="filter-no-results visible">No treatments match your filters.</div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
