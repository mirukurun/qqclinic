'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';
import { SPECIALISTS, ALL_SERVICES, TREATMENTS, type Treatment } from '@/lib/data';

interface BookingData {
  service: string | null;
  treatment: Treatment | null;
  specialistId: number | null;
  specialist: string | null;
}

function BookingFlow() {
  const { lang } = useLang();
  const searchParams = useSearchParams();

  const [mode, setModeState] = useState<'service' | 'specialist'>('service');
  const [step, setStep] = useState(1);
  const [step1Phase, setStep1Phase] = useState<'category' | 'treatment'>('category');
  const [step2Phase, setStep2Phase] = useState<'category' | 'treatment'>('category');
  const [data, setData] = useState<BookingData>({ service: null, treatment: null, specialistId: null, specialist: null });

  // Init from URL params
  useEffect(() => {
    const treatParam = searchParams.get('treatment');
    if (treatParam) {
      for (const [cat, treatments] of Object.entries(TREATMENTS)) {
        const tr = treatments.find(t => t.name.toLowerCase() === treatParam.toLowerCase());
        if (tr) {
          setModeState('service');
          const newData: BookingData = { service: cat, treatment: tr, specialistId: null, specialist: null };
          if (tr.by.length === 1) {
            const sp = SPECIALISTS.find(s => s.name === tr.by[0]);
            if (sp) { newData.specialistId = sp.id; newData.specialist = sp.name + ' — ' + sp.role; }
          }
          setData(newData);
          setStep1Phase('treatment');
          setStep(2);
          return;
        }
      }
    }
    const spParam = searchParams.get('specialist');
    if (spParam) {
      const match = SPECIALISTS.find(s => s.name.toLowerCase() === spParam.toLowerCase());
      if (match) {
        setModeState('specialist');
        setData({ service: null, treatment: null, specialistId: match.id, specialist: match.name + ' — ' + match.role });
        setStep(2);
      }
    }
  }, [searchParams]);

  function setMode(m: 'service' | 'specialist') {
    setModeState(m);
    setData({ service: null, treatment: null, specialistId: null, specialist: null });
    setStep1Phase('category');
    setStep2Phase('category');
    setStep(1);
  }

  // Stepper
  function StepCircle({ n }: { n: number }) {
    const done = n < step;
    const active = n === step;
    return (
      <div className={`step-circle${active ? ' active' : ''}${done ? ' done' : ''}`}>
        {done ? '✓' : n}
      </div>
    );
  }

  // Step 1
  function renderStep1() {
    if (mode === 'service') {
      if (step1Phase === 'category') {
        return (
          <div className="options-grid">
            {ALL_SERVICES.map(s => (
              <div
                key={s.key}
                className={`option-card${data.service === s.key ? ' selected' : ''}`}
                onClick={() => { setData(d => ({ ...d, service: s.key, treatment: null })); setStep1Phase('treatment'); }}
              >
                <div className="option-card__title">{s.key}</div>
                <div className="option-card__sub">{s.sub}</div>
              </div>
            ))}
          </div>
        );
      }
      const list = data.service ? (TREATMENTS[data.service] ?? []) : [];
      return (
        <>
          <button className="treatment-back" onClick={() => { setStep1Phase('category'); setData(d => ({ ...d, treatment: null })); }}>
            ← {data.service}
          </button>
          <div className="treatment-list">
            {list.map(tr => (
              <div
                key={tr.name}
                className={`treatment-item${data.treatment?.name === tr.name ? ' selected' : ''}`}
                onClick={() => setData(d => ({ ...d, treatment: tr }))}
              >
                <div className="treatment-item__left">
                  <div className="treatment-item__name">{tr.name}</div>
                  <div className="treatment-item__desc">{tr.desc}</div>
                </div>
                <div className="treatment-item__meta">
                  <span className="treatment-item__duration">{tr.duration} min</span>
                  {tr.price && <span className="treatment-item__price">{tr.price} kr</span>}
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
    // mode === specialist
    return (
      <div className="options-grid options-grid--2col">
        {SPECIALISTS.map(sp => (
          <div
            key={sp.id}
            className={`option-card${data.specialistId === sp.id ? ' selected' : ''}`}
            onClick={() => setData(d => ({ ...d, specialistId: sp.id, specialist: sp.name + ' — ' + sp.role, service: null, treatment: null }))}
          >
            <div className="option-card__title">{sp.name}</div>
            <div className="option-card__sub">{sp.role}</div>
          </div>
        ))}
      </div>
    );
  }

  // Step 2
  function renderStep2() {
    if (mode === 'service') {
      const avail = (data.treatment && data.treatment.by)
        ? SPECIALISTS.filter(sp => data.treatment!.by.includes(sp.name))
        : SPECIALISTS.filter(sp => data.service ? sp.services.includes(data.service) : false);

      if (!avail.length) {
        return <div style={{ padding: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t(lang, 'no.avail')}</div>;
      }
      return (
        <div className="options-grid options-grid--2col">
          {avail.map(sp => (
            <div
              key={sp.id}
              className={`option-card${data.specialistId === sp.id ? ' selected' : ''}`}
              onClick={() => setData(d => ({ ...d, specialistId: sp.id, specialist: sp.name + ' — ' + sp.role }))}
            >
              <div className="option-card__title">{sp.name}</div>
              <div className="option-card__sub">{sp.role}</div>
            </div>
          ))}
        </div>
      );
    }
    // mode === specialist
    const sp = SPECIALISTS.find(s => s.id === data.specialistId);
    const svcs = sp ? ALL_SERVICES.filter(s => sp.services.includes(s.key)) : [];
    if (step2Phase === 'category') {
      return (
        <div className="options-grid">
          {svcs.map(s => (
            <div
              key={s.key}
              className={`option-card${data.service === s.key ? ' selected' : ''}`}
              onClick={() => { setData(d => ({ ...d, service: s.key, treatment: null })); setStep2Phase('treatment'); }}
            >
              <div className="option-card__title">{s.key}</div>
              <div className="option-card__sub">{s.sub}</div>
            </div>
          ))}
        </div>
      );
    }
    const list = data.service ? (TREATMENTS[data.service] ?? []) : [];
    return (
      <>
        <button className="treatment-back" onClick={() => { setStep2Phase('category'); setData(d => ({ ...d, treatment: null })); }}>
          ← {data.service}
        </button>
        <div className="treatment-list">
          {list.map(tr => (
            <div
              key={tr.name}
              className={`treatment-item${data.treatment?.name === tr.name ? ' selected' : ''}`}
              onClick={() => setData(d => ({ ...d, treatment: tr }))}
            >
              <div className="treatment-item__left">
                <div className="treatment-item__name">{tr.name}</div>
                <div className="treatment-item__desc">{tr.desc}</div>
              </div>
              <div className="treatment-item__meta">
                <span className="treatment-item__duration">{tr.duration} min</span>
                {tr.price && <span className="treatment-item__price">{tr.price} kr</span>}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  // Step 3
  function Step3() {
    const sp = SPECIALISTS.find(s => s.id === data.specialistId);
    const url = sp ? `https://www.bokadirekt.se/places/${sp.bokadirekt}` : null;
    const dash = <span style={{ color: 'var(--beige-sand)' }}>—</span>;

    useEffect(() => {
      if (url) window.open(url, '_blank', 'noopener');
    }, [url]);

    const svcDisplay = data.treatment
      ? <>{data.treatment.name}<span className="summary-sub">{data.treatment.duration} min · {data.treatment.price} kr</span></>
      : (data.service || dash);

    return (
      <>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem', letterSpacing: '0.04em' }}>
          {t(lang, 'step3.redirect')}
        </p>
        <div className="booking-summary" style={{ marginBottom: '2rem' }}>
          <div className="summary-row">
            <span className="summary-label">{t(lang, 'summary.service')}</span>
            <span className="summary-value">{svcDisplay}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">{t(lang, 'summary.specialist')}</span>
            <span className="summary-value">{data.specialist || dash}</span>
          </div>
        </div>
        {url && (
          <a href={url} target="_blank" rel="noopener" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem', display: 'flex' }}>
            {t(lang, 'btn.openBokadirekt')}
          </a>
        )}
        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '1.5rem' }}>
          {t(lang, 'step3.redirectNote')}
        </p>
      </>
    );
  }

  const step1Label = mode === 'service' ? t(lang, 'step.service') : t(lang, 'step.specialist');
  const step2Label = mode === 'service' ? t(lang, 'step.specialist') : t(lang, 'step.service');

  return (
    <div className="booking-wrap">
      <div className="booking-tabs">
        <button className={`booking-tab${mode === 'service' ? ' active' : ''}`} onClick={() => setMode('service')}>
          {t(lang, 'booking.byService')}
        </button>
        <button className={`booking-tab${mode === 'specialist' ? ' active' : ''}`} onClick={() => setMode('specialist')}>
          {t(lang, 'booking.bySpecialist')}
        </button>
      </div>

      <div className="booking-stepper">
        <div className="step-node"><StepCircle n={1} /><span className={`step-text${step === 1 ? ' active' : ''}${step > 1 ? ' done' : ''}`}>{step1Label}</span></div>
        <div className="step-line" />
        <div className="step-node"><StepCircle n={2} /><span className={`step-text${step === 2 ? ' active' : ''}${step > 2 ? ' done' : ''}`}>{step2Label}</span></div>
        <div className="step-line" />
        <div className="step-node"><StepCircle n={3} /><span className={`step-text${step === 3 ? ' active' : ''}`}>{t(lang, 'step.book')}</span></div>
      </div>

      {step === 1 && (
        <div className="booking-step active">
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem', letterSpacing: '0.04em' }}>
            {mode === 'service' ? t(lang, 'step1.hint.svc') : t(lang, 'step1.hint.sp')}
          </p>
          {renderStep1()}
          <div className="step-actions">
            <span />
            <button className="btn btn-primary" onClick={() => setStep(2)}>{t(lang, 'btn.continue')}</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="booking-step active">
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem', letterSpacing: '0.04em' }}>
            {mode === 'service' ? t(lang, 'step2.hint.svc') : t(lang, 'step2.hint.sp')}
          </p>
          {renderStep2()}
          <div className="step-actions">
            <button className="btn btn-secondary" onClick={() => setStep(1)}>{t(lang, 'btn.back')}</button>
            <button className="btn btn-primary" onClick={() => setStep(3)}>{t(lang, 'btn.continue')}</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="booking-step active">
          <Step3 />
          <div className="step-actions">
            <button className="btn btn-secondary" onClick={() => setStep(2)}>{t(lang, 'btn.back')}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BookingPage() {
  const { lang } = useLang();
  return (
    <>
      <Header opaque />
      <section className="section section--white" style={{ paddingTop: 'calc(var(--header-h) + 3rem)' }}>
        <div className="container">
          <Suspense fallback={null}>
            <BookingFlow />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
}
