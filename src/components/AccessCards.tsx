import { translations, type Language } from '../content/translations';
import { PortalIcon } from '../shared/PortalIcon';
import { portalConfig, safeUrl } from '../shared/portalConfig';

function Destination({ title, description, url, kind, pending }: {
  title: string; description: string; url: string; kind: 'partner' | 'areas'; pending: string;
}) {
  const href = safeUrl(url);
  const content = <>
    <PortalIcon name={kind} />
    <h3 className="resource-title">{title}</h3>
    <p className="resource-description">{description}</p>
    {href ? <PortalIcon name="arrow" /> : <span className="destination-status">{pending}</span>}
  </>;
  const className = `resource-card destination destination-${kind === 'partner' ? 'partner' : 'areas'}${href ? '' : ' unavailable'}`;
  return href ? <a className={className} href={href} rel="noopener noreferrer" aria-label={title}>{content}</a>
    : <div className={className}>{content}</div>;
}

export function AccessCards({ language }: { language: Language }) {
  const t = translations[language];
  return <section className="portal-section intranet" aria-labelledby="intranet-heading">
    <div className="intranet-label">{t.intranet}</div>
    <div className="section-heading"><h2 id="intranet-heading" className="dns-section-title">{t.who}</h2></div>
    <div className="cards access-grid">
      <Destination title={t.partner} description={t.partnerDescription}
        url={portalConfig.partnerHubUrl} kind="partner" pending={t.pending} />
      <Destination title={t.area} description={t.areaDescription}
        url={portalConfig.workspaceUrl} kind="areas" pending={t.pending} />
    </div>
  </section>;
}
