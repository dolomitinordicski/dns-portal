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

import { translations, type Language } from './content/translations';

// Published resources are owned by DNS Shared Data. No copied logo files or color definitions.
const assetBase = `https://raw.githubusercontent.com/dolomitinordicski/dns-shared-data/foundation-v${DNS_FOUNDATION_RELEASE_VERSION}/brand`;
const logoWebUrl = `${assetBase}/logo-web.png`;
const logoPrintUrl = `${assetBase}/logo.png`;
const workspaceUrl = import.meta.env.VITE_DNS_WORKSPACE_URL || 'https://dolomitinordicski.github.io/dns-workspace/';
const partnerHubUrl = import.meta.env.VITE_DNS_PARTNER_HUB_URL || '';
// Enable this only when the public Widget Creator has a verified direct URL.
const widgetUrl = import.meta.env.VITE_DNS_PUBLIC_WIDGET_URL || '';
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
    const button = element('button', 'dns-portal-language', lang.toUpperCase());
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
  const intro = element('section', 'intro');
  intro.append(element('p', 'dns-kicker', t.tagline), element('h1', undefined, t.heading), element('p', undefined, t.description));
  main.append(intro);

  const publicSection = element('section', 'portal-section');
  publicSection.setAttribute('aria-label', t.publicHeading);
  publicSection.append(sectionTitle(t.publicHeading, t.publicDescription));
  const publicGrid = element('div', 'public-grid');
  const brandCard = element('div', 'dns-card resource-card');
  brandCard.append(element('h3', 'resource-title', t.brand), element('p', 'resource-description', t.brandDescription));
  const palette = element('div', 'palette');
  Object.values(DNS_DESIGN_SYSTEM.corporateColors).forEach(color => {
    const item = element('div', 'color-sample');
    const swatch = element('span', 'color-swatch');
    swatch.style.backgroundColor = color.hex;
    swatch.setAttribute('aria-hidden', 'true');
    item.append(swatch, element('span', undefined, `${color.name} · ${color.hex}`));
    palette.append(item);
  });
  brandCard.append(palette);
  const guidelines = element('div', 'guidelines');
  BRAND_GUIDELINES.forEach(guideline => {
    const details = element('details', 'brand-guideline');
    const summary = element('summary', undefined, guideline.title[language]);
    details.append(summary, element('p', 'resource-description', guideline.description[language]));
    const allowed = element('ul');
    guideline.dos.forEach(item => allowed.append(element('li', undefined, '✓ ' + item[language])));
    const disallowed = element('ul');
    guideline.donts.forEach(item => disallowed.append(element('li', undefined, '✕ ' + item[language])));
    details.append(allowed, disallowed);
    guidelines.append(details);
  });
  brandCard.append(guidelines);
  publicGrid.append(
    brandCard,
    resource(t.logoWeb, 'PNG', logoWebUrl, t.download),
    resource(t.logoPrint, 'PNG', logoPrintUrl, t.download),
    resource(t.widget, t.widgetDescription, widgetUrl, t.enter)
  );
  publicSection.append(publicGrid);
  main.append(publicSection);

  const intranet = element('section', 'portal-section intranet');
  intranet.setAttribute('aria-label', t.intranet);
  intranet.append(sectionTitle(t.intranet, `${t.who} · ${t.intranetDescription}`));
  const cards = element('div', 'cards');
  cards.append(
    resource(t.partner, t.partnerDescription, partnerHubUrl, t.enter),
    resource(t.area, t.areaDescription, workspaceUrl, t.enter)
  );
  cards.querySelectorAll('.resource-card').forEach(card => card.classList.add('destination'));
  intranet.append(cards, element('p', 'notice', t.notice));
  main.append(intranet);

  const footer = element('footer');
  footer.dataset.dnsToolFooter = '';
  footer.dataset.dnsLang = language;
  footer.dataset.dnsToolName = 'DNS Portal';
  footer.dataset.dnsToolVersion = '0.2.0';
  footer.innerHTML = '<div class="dns-tool-footer-shell"><span class="dns-tool-footer-primary"></span></div>';
  footer.querySelector('span')!.textContent = t.footer;
  app!.append(header, main, footer);
  foundation.refresh();
}
render();
