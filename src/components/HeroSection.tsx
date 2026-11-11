import type { CSSProperties } from 'react';
import { translations, type Language } from '../content/translations';
import { PortalIcon } from '../shared/PortalIcon';
import { portalConfig, safeUrl } from '../shared/portalConfig';

export function HeroSection({ language }: { language: Language }) {
  const t = translations[language];
  const imageUrl = safeUrl(portalConfig.heroImageUrl);
  const style = imageUrl ? ({ '--portal-hero-image': `url("${imageUrl}")` } as CSSProperties) : undefined;
  return <section className="portal-hero" style={style}>
    <div className="intro">
      <h1>{t.heading}</h1>
      <p>{t.description}</p>
      <div className="hero-signals">
        <PortalIcon name="partner" /><span>{t.heroCollaborate}</span>
        <PortalIcon name="brand" /><span>{t.heroResources}</span>
        <PortalIcon name="areas" /><span>{t.heroIdentity}</span>
      </div>
    </div>
  </section>;
}
