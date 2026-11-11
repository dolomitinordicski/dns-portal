import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/700.css';
import '@fontsource/roboto/400.css';
import { initDNSFoundation } from '@dolomitinordicski/dns-shared-data/foundation';
import { DNS_FOUNDATION_RELEASE_VERSION } from '@dolomitinordicski/dns-shared-data/release';
import { DNS_DESIGN_SYSTEM } from '@dolomitinordicski/dns-shared-data/design-system';
import { initDNSNavigationStyles } from '@dolomitinordicski/dns-shared-data/ui/navigation';
import { BRAND_GUIDELINES } from './content/brand-guidelines';
import './styles.css';
import './portal-visual.css';

import { translations, type Language } from './content/translations';

// Published resources are owned by DNS Shared Data. No copied logo files or color definitions.
const assetBase = `https://raw.githubusercontent.com/dolomitinordicski/dns-shared-data/foundation-v${DNS_FOUNDATION_RELEASE_VERSION}/brand`;
const logoWebUrl = `${assetBase}/logo-web.png`;
const logoPrintUrl = `${assetBase}/logo.png`;
const workspaceUrl = import.meta.env.VITE_DNS_WORKSPACE_URL || 'https://dolomitinordicski.github.io/dns-workspace/';
const partnerHubUrl = import.meta.env.VITE_DNS_PARTNER_HUB_URL || '';
// Enable this only when the public Widget Creator has a verified direct URL.
const widgetUrl = import.meta.env.VITE_DNS_PUBLIC_WIDGET_URL || '';
// Canonical photo uploaded by DNS to this repository (WebP bytes; original filename preserved).
const heroImageUrl = import.meta.env.VITE_DNS_PORTAL_HERO_IMAGE_URL || 'https://raw.githubusercontent.com/dolomitinordicski/dns-portal/main/sources/DN190D~1.WEB';
const safeUrl = (raw: string) => {
  try { const url = new URL(raw); return url.protocol === 'https:' ? url.href : ''; }
  catch { return ''; }
};
// Foundation owns the shared header/footer, primitives, a11y and color/theme tokens.
// Portal has no tool-tab navigation, so only the canonical header styles are loaded.
const foundation = initDNSFoundation({
  shellProfile: 'portal',
  footer: true,
  chrome: false,
  accessibility: { enabled: true, mountSelector: '[data-dns-accessibility-mount]' },
});
initDNSNavigationStyles();

let language: Language = 'it';
try {
  const previous = localStorage.getItem('dns-portal-language');
  if (previous === 'it' || previous === 'de' || previous === 'en') language = previous;
} catch { /* Storage is optional. */ }
const app = document.getElementById('app');
if (!app) throw new Error('Missing app root');

function element<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, value?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value) node.textContent = value;
  return node;
}
function sectionTitle(title: string, subtitle: string) {
  const wrapper = element('div', 'section-heading');
  wrapper.append(element('h2', 'dns-section-title', title), element('p', 'section-description', subtitle));
  return wrapper;
}
function resource(title: string, description: string, url: string, action: string) {
  const link = safeUrl(url);
  const card = element(link ? 'a' : 'div', 'dns-card resource-card');
  if (link) {
    (card as HTMLAnchorElement).href = link;
    (card as HTMLAnchorElement).rel = 'noopener noreferrer';
  } else card.classList.add('unavailable');
  card.append(element('h3', 'resource-title', title), element('p', 'resource-description', description));
  const cta = element('span', 'dns-button resource-action', link ? action : translations[language].pending);
  cta.dataset.variant = link ? 'secondary' : 'tertiary';
  card.append(cta);
  return card;
}
function icon(kind: 'partner' | 'areas' | 'brand' | 'logos' | 'widget' | 'arrow' | 'info') {
  const shapes: Record<typeof kind, string> = {
    partner: '<path d="m2 9 4-4 4 2 2-1 4-1 6 4-5 6-3-2-2 2-3-3-2 1-5-4Z"/><path d="m9 7 3 3 3-1 4 4M8 13l3 3m3-3 3 2"/>',
    areas: '<path d="m3 20 5-14 5 8 3-5 5 11H3Z"/><path d="M8 6V2m0 1h5l-2 2 2 2H8"/>',
    brand: '<path d="M4 4.5c3-1 5 0 8 2 3-2 5-3 8-2v15c-3-1-5 0-8 2-3-2-5-3-8-2v-15Z"/><path d="M12 6.5v15"/>',
    logos: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="16.5" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-3 5 5"/>',
    widget: '<path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16"/>',
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>',
  };
  const span = element('span', 'portal-icon');
  span.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + shapes[kind] + '</svg>';
  span.setAttribute('aria-hidden', 'true');
  return span;
}
function render() {
  const t = translations[language];
  app!.replaceChildren();
  document.documentElement.lang = language;

  const header = element('header', 'dns-foundation-header');
  header.dataset.dnsToolHeader = '';
  header.innerHTML = '<div class="dns-tool-header-shell"><div class="dns-tool-header-brand"><img class="dns-tool-header-logo" alt="Dolomiti NordicSki"><div class="dns-tool-header-identity"><div class="dns-tool-header-title"><strong>DNS</strong> <span>PORTAL</span></div><div class="dns-tool-header-subtitle">DNS Ecosystem</div></div></div><div class="dns-tool-header-actions"><div data-dns-accessibility-mount></div><nav class="dns-tool-header-language" aria-label="Language"></nav></div></div>';
  (header.querySelector('img') as HTMLImageElement).src = logoWebUrl;
  const langNav = header.querySelector('nav')!;
  (['it', 'de', 'en'] as Language[]).forEach(lang => {
    const button = element('button', 'dns-tool-header-session-action', lang.toUpperCase());
    button.type = 'button';
    button.lang = lang;
    button.setAttribute('aria-pressed', String(language === lang));
    button.addEventListener('click', () => {
      language = lang;
      try { localStorage.setItem('dns-portal-language', lang); } catch { /* optional */ }
      render();
    });
    langNav.append(button);
  });

  const main = element('main', 'main');
  main.dataset.dnsShellMain = '';
  const hero = element('section', 'portal-hero');
  if (safeUrl(heroImageUrl)) hero.style.setProperty('--portal-hero-image', 'url("' + safeUrl(heroImageUrl) + '")');
  const intro = element('div', 'intro');
  intro.append(element('p', 'dns-kicker', t.tagline), element('h1', undefined, 'DNS Portal'), element('p', undefined, t.description));
  const heroSignals = element('div', 'hero-signals');
  heroSignals.append(icon('partner'), element('span', undefined, t.intranet), icon('brand'), element('span', undefined, t.brand), icon('widget'), element('span', undefined, t.widget));
  intro.append(heroSignals);
  hero.append(intro);
  main.append(hero);


  // Intranet remains a selector only: authorization belongs to the destination.
  const intranet = element('section', 'portal-section intranet');
  intranet.setAttribute('aria-labelledby', 'intranet-heading');
  const intranetHeading = sectionTitle(t.intranet, `${t.who} · ${t.intranetDescription}`);
  intranetHeading.querySelector('h2')!.id = 'intranet-heading';
  intranet.append(element('div', 'intranet-label', t.intranet), intranetHeading);
  const accessCards = element('div', 'cards access-grid');
  accessCards.append(
    resource(t.partner, t.partnerDescription, partnerHubUrl, t.enter),
    resource(t.area, t.areaDescription, workspaceUrl, t.enter)
  );
  accessCards.querySelectorAll('.resource-card').forEach((card, index) => {
    card.classList.add('destination', index === 0 ? 'destination-partner' : 'destination-areas');
    card.prepend(icon(index === 0 ? 'partner' : 'areas'));
    card.append(icon('arrow'));
  });
  const authNote = element('p', 'notice');
  authNote.append(icon('info'), document.createTextNode(t.notice));
  intranet.append(accessCards, authNote);
  main.append(intranet);

  // Public resources reuse the actual Foundation palette and official assets.
  // Keep detailed guidelines on demand, not expanded on the landing screen.
  const publicSection = element('section', 'portal-section');
  publicSection.setAttribute('aria-labelledby', 'public-heading');
  const publicHeading = sectionTitle(t.publicHeading, t.publicDescription);
  publicHeading.querySelector('h2')!.id = 'public-heading';
  publicSection.append(publicHeading);
  const publicGrid = element('div', 'public-grid');

  const corporate = element('div', 'dns-card resource-card');
  corporate.append(element('h3', 'resource-title', t.brand), element('p', 'resource-description', t.brandDescription));
  const corporateDetails = element('details', 'corporate-details');
  corporateDetails.append(element('summary', undefined, t.brand));
  const palette = element('div', 'palette');
  Object.values(DNS_DESIGN_SYSTEM.corporateColors).forEach(color => {
    const item = element('div', 'color-sample');
    const swatch = element('span', 'color-swatch');
    swatch.style.backgroundColor = color.hex;
    swatch.setAttribute('aria-hidden', 'true');
    item.append(swatch, element('span', undefined, `${color.name} · ${color.hex}`));
    palette.append(item);
  });
  corporateDetails.append(palette);
  const guidelines = element('div', 'guidelines');
  BRAND_GUIDELINES.forEach(guideline => {
    const details = element('details', 'brand-guideline');
    details.append(element('summary', undefined, guideline.title[language]));
    details.append(element('p', 'resource-description', guideline.description[language]));
    const allowed = element('ul');
    guideline.dos.forEach(item => allowed.append(element('li', undefined, '✓ ' + item[language])));
    const disallowed = element('ul');
    guideline.donts.forEach(item => disallowed.append(element('li', undefined, '✕ ' + item[language])));
    details.append(allowed, disallowed);
    guidelines.append(details);
  });
  corporateDetails.append(guidelines);
  corporate.append(corporateDetails);
  corporate.prepend(icon('brand'));
  corporate.classList.add('public-tool');

  const logos = element('div', 'dns-card resource-card');
  logos.append(element('h3', 'resource-title', t.logoWeb.replace(' · Web', '').replace(' · Stampa', '').replace(' · Druck', '').replace(' · Print', '')));
  logos.append(
    resource(t.logoWeb, 'PNG', logoWebUrl, t.download),
    resource(t.logoPrint, 'PNG', logoPrintUrl, t.download)
  );
  logos.classList.add('logo-resources', 'public-tool');
  logos.prepend(icon('logos'));
  const widgetCard = resource(t.widget, t.widgetDescription, widgetUrl, t.enter);
  widgetCard.classList.add('public-tool');
  widgetCard.prepend(icon('widget'));

  publicGrid.append(corporate, logos, widgetCard);
  publicSection.append(publicGrid);
  main.append(publicSection);

  const footer = element('footer');
  footer.dataset.dnsToolFooter = '';
  footer.dataset.dnsLang = language;
  footer.dataset.dnsToolName = 'DNS Portal';
  footer.dataset.dnsToolVersion = '0.2.0';
  footer.innerHTML = '<div class="dns-tool-footer-shell"><span class="dns-tool-footer-primary"></span></div>';
  footer.querySelector('span')!.textContent = t.footer;
  app!.append(header, main, footer);
  foundation.refresh();
  // Foundation 1.4.1 localizes its controls in DE/IT; Portal additionally supports EN.
  document.documentElement.lang = language;
}
render();
