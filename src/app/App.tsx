import { useEffect, useState } from 'react';
import { WidgetCreatorPage } from '../pages/WidgetCreatorPage';
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
  const [view, setView] = useState(() => new URLSearchParams(window.location.search).get('view') === 'widget' ? 'widget' : 'home');
  useEffect(() => {
    const sync = () => setView(new URLSearchParams(window.location.search).get('view') === 'widget' ? 'widget' : 'home');
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);
  const navigate = (next: 'home' | 'widget') => {
    const url = new URL(window.location.href);
    if (next === 'widget') url.searchParams.set('view', 'widget');
    else url.searchParams.delete('view');
    window.history.pushState(null, '', url);
    setView(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    try { localStorage.setItem('dns-portal-language', language); } catch { /* Storage is optional. */ }
    foundation.refresh();
    document.documentElement.lang = language;
    document.title = 'DNS Portal | Dolomiti NordicSki';
  }, [language]);

  return <>
    <PortalHeader language={language} onLanguageChange={setLanguage} />
    {view === 'widget' ? <WidgetCreatorPage language={language} onBack={() => navigate('home')} /> : <PortalHome language={language} onOpenWidget={() => navigate('widget')} />}
    <PortalFooter language={language} />
  </>;
}
