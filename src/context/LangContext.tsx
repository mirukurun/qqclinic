'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { type Lang } from '@/lib/i18n';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({ lang: 'en', setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('qqc-lang') as Lang | null;
    if (saved === 'en' || saved === 'sv') {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem('qqc-lang', l);
    document.documentElement.lang = l;
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
