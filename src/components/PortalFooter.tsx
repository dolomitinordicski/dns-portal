import type { Language } from '../content/translations';
import { translations } from '../content/translations';

export function PortalFooter({ language }: { language: Language }) {
  return <footer data-dns-tool-footer="" data-dns-lang={language}
    data-dns-tool-name="DNS Portal" data-dns-tool-version="0.2.0">
    <div className="dns-tool-footer-shell">
      <span className="dns-tool-footer-primary">{translations[language].footer}</span>
    </div>
  </footer>;
}
