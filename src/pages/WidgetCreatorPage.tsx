import type { Language } from '../content/translations';

// The only Widget Creator implementation is hosted by Partner Hub.
// Preserve the Portal page chrome and back navigation while embedding it.
const PARTNER_HUB_CREATOR_URL = 'https://dolomitinordicski.github.io/dns-partner-hub/?dnsCreator=1';

export function WidgetCreatorPage({ language, onBack }: { language: Language; onBack: () => void }) {
  const label = language === 'de' ? 'Zurück zum Portal' : language === 'it' ? 'Torna al Portal' : 'Back to Portal';
  const title = language === 'de' ? 'Dolomiti NordicSki Widget Creator'
    : language === 'it' ? 'Widget Creator Dolomiti NordicSki' : 'Dolomiti NordicSki Widget Creator';
  const url = new URL(PARTNER_HUB_CREATOR_URL);
  url.searchParams.set('lang', language);

  return <main data-dns-shell-main="" className="main widget-creator-page">
    <div className="widget-page-back">
      <button type="button" onClick={onBack} className="widget-back-link">← {label}</button>
    </div>
    <iframe
      className="widget-creator-frame"
      title={title}
      src={url.href}
      loading="eager"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="clipboard-write"
    />
  </main>;
}
