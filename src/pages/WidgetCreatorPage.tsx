import type { Language } from '../content/translations';
import { WidgetCreator } from '../features/widget-creator/WidgetCreator';

export function WidgetCreatorPage({ language, onBack }: { language: Language; onBack: () => void }) {
  const label = language === 'de' ? 'Zurück zum Portal' : language === 'it' ? 'Torna al Portal' : 'Back to Portal';
  return <main data-dns-shell-main="" className="main widget-creator-page">
    <div className="widget-page-back">
      <button type="button" onClick={onBack} className="widget-back-link">← {label}</button>
    </div>
    <WidgetCreator lang={language} />
  </main>;
}
