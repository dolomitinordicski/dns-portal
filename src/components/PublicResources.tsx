import { DNS_DESIGN_SYSTEM } from '@dolomitinordicski/dns-shared-data/design-system';
import { translations, type Language } from '../content/translations';
import { BRAND_GUIDELINES } from '../content/brand-guidelines';
import { PortalIcon } from '../shared/PortalIcon';
import { portalConfig } from '../shared/portalConfig';

function CorporateDesign({ language }: { language: Language }) {
  const t = translations[language];
  return <div className="resource-card public-tool">
    <PortalIcon name="brand" />
    <h3 className="resource-title">{t.brand}</h3>
    <p className="resource-description">{t.brandDescription}</p>
    <details className="corporate-details">
      <summary>{t.brand}</summary>
      <div className="palette">
        {Object.values(DNS_DESIGN_SYSTEM.corporateColors).map(color =>
          <div className="color-sample" key={color.hex}>
            <span className="color-swatch" aria-hidden="true" style={{ backgroundColor: color.hex }} />
            <span>{color.name} · {color.hex}</span>
          </div>)}
      </div>
      <div className="guidelines">
        {BRAND_GUIDELINES.map((guideline, index) =>
          <details className="brand-guideline" key={index}>
            <summary>{guideline.title[language]}</summary>
            <p className="resource-description">{guideline.description[language]}</p>
            <ul>{guideline.dos.map((item, i) => <li key={i}>✓ {item[language]}</li>)}</ul>
            <ul>{guideline.donts.map((item, i) => <li key={i}>✕ {item[language]}</li>)}</ul>
          </details>)}
      </div>
    </details>
  </div>;
}

function OfficialLogos({ language }: { language: Language }) {
  const t = translations[language];
  return <div className="resource-card logo-resources public-tool">
    <PortalIcon name="logos" />
    <h3 className="resource-title">{t.logos}</h3>
    <p className="resource-description">{t.logosDescription}</p>
    <div className="logo-downloads">
      <a className="logo-download" href={portalConfig.logoWebUrl} rel="noopener noreferrer" target="_blank">{t.logoWeb}</a>
      <a className="logo-download" href={portalConfig.logoPrintUrl} rel="noopener noreferrer" target="_blank">{t.logoPrint}</a>
    </div>
  </div>;
}

function WidgetLink({ language, onOpenWidget }: { language: Language; onOpenWidget: () => void }) {
  const t = translations[language];
  return <button type="button" className="resource-card public-tool widget-public-link" onClick={onOpenWidget}>
    <PortalIcon name="widget" />
    <h3 className="resource-title">{t.widget}</h3>
    <p className="resource-description">{t.widgetDescription}</p>
    <span className="resource-action">{t.enter}</span>
  </button>;
}

export function PublicResources({ language, onOpenWidget }: { language: Language; onOpenWidget: () => void }) {
  const t = translations[language];
  return <section className="portal-section" aria-labelledby="public-heading">
    <div className="section-heading"><h2 className="dns-section-title" id="public-heading">{t.publicHeading}</h2></div>
    <div className="public-grid">
      <CorporateDesign language={language} />
      <OfficialLogos language={language} />
      <WidgetLink language={language} onOpenWidget={onOpenWidget} />
    </div>
  </section>;
}
