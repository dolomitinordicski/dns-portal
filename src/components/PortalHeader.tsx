import type { Language } from '../content/translations';
import { portalConfig } from '../shared/portalConfig';

const languages: Language[] = ['it', 'de', 'en'];

export function PortalHeader({ language, onLanguageChange }: {
  language: Language;
  onLanguageChange: (value: Language) => void;
}) {
  return <header className="dns-foundation-header" data-dns-tool-header="">
    <div className="dns-tool-header-shell">
      <div className="dns-tool-header-brand">
        <img className="dns-tool-header-logo" src={portalConfig.logoWebUrl} alt="Dolomiti NordicSki" />
        <div className="dns-tool-header-identity">
          <div className="dns-tool-header-title"><strong>DNS</strong> <span>PORTAL</span></div>
        </div>
      </div>
      <div className="dns-tool-header-actions">
        <div data-dns-accessibility-mount="" />
        <nav className="dns-tool-header-language" aria-label="Language">
          {languages.map(lang => <button key={lang} type="button" lang={lang}
            className="dns-tool-header-session-action" aria-pressed={language === lang}
            onClick={() => onLanguageChange(lang)}>{lang.toUpperCase()}</button>)}
        </nav>
      </div>
    </div>
  </header>;
}
