import { useEffect, useState } from 'react';
import { translations, type Language } from '../content/translations';
import { PortalHeader } from '../components/PortalHeader';
import { PortalFooter } from '../components/PortalFooter';
import { PortalHome } from '../pages/PortalHome';
import { foundation } from '../shared/foundation';

function initialLanguage(): Language {
  try {
    const stored = localStorage.getItem('dns-portal-language');
    if (stored === 'it' || stored === 'de' || stored === 'en') return stored;
  } catch { /* Storage is optional. */ }
  return 'it';
}

export default function App() {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    try { localStorage.setItem('dns-portal-language', language); } catch { /* Storage is optional. */ }
    foundation.refresh();
    document.documentElement.lang = language;
    document.title = 'DNS Portal | Dolomiti NordicSki';
  }, [language]);

  return <>
    <PortalHeader language={language} onLanguageChange={setLanguage} />
    <PortalHome language={language} />
    <PortalFooter language={language} />
  </>;
}
