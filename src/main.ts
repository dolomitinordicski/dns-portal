import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/700.css';
import '@fontsource/roboto/400.css';
import { initDNSFoundation } from '@dolomitinordicski/dns-shared-data/foundation';
import './styles.css';

type Language = 'it' | 'de' | 'en';
const content = {
  it: {label:'Portale riservato', heading:'Benvenuti nel DNS Ecosystem', description:'Seleziona il tuo ambiente di lavoro.', partners:'Partner', partnersDescription:'Accesso riservato alle strutture e ai partner convenzionati', areas:'Aree DNS', areasDescription:'Accesso al Workspace per le organizzazioni territoriali', enter:'Accedi', soon:'In preparazione', footer:'Portale ufficiale Dolomiti NordicSki', notice:'Il login e i permessi sono gestiti dalle applicazioni di destinazione.'},
  de: {label:'Geschützter Zugang', heading:'Willkommen im DNS Ecosystem', description:'Wählt euren Arbeitsbereich.', partners:'Partner', partnersDescription:'Zugang für Partnerbetriebe und Kooperationspartner', areas:'DNS Regionen', areasDescription:'Workspace für die Mitgliedsregionen', enter:'Öffnen', soon:'In Vorbereitung', footer:'Offizielles Portal Dolomiti NordicSki', notice:'Anmeldung und Berechtigungen werden in den Zielanwendungen verwaltet.'},
  en: {label:'Access portal', heading:'Welcome to DNS Ecosystem', description:'Select your workspace.', partners:'Partners', partnersDescription:'Access for accommodation and participating partners', areas:'DNS Areas', areasDescription:'Workspace for member organisations', enter:'Continue', soon:'Coming soon', footer:'Official Dolomiti NordicSki portal', notice:'Sign-in and permissions are managed by the destination applications.'}
} as const;
const workspaceUrl = import.meta.env.VITE_DNS_WORKSPACE_URL || 'https://dolomitinordicski.github.io/dns-workspace/';
const partnerHubUrl = import.meta.env.VITE_DNS_PARTNER_HUB_URL || '';
const safeUrl = (raw: string) => { try { const u = new URL(raw); return u.protocol === 'https:' ? u.href : ''; } catch { return ''; } };
const foundation = initDNSFoundation({ shellProfile:'portal', footer:true, chrome:false, accessibility:false });
let language:Language = 'it';
try { const preferred = localStorage.getItem('dns-portal-language'); if(preferred==='it'||preferred==='de'||preferred==='en') language=preferred; } catch {}
const app = document.getElementById('app');
if (!app) throw new Error('Missing app root');
function render() {
  const t=content[language]; document.documentElement.lang=language;
  const cards = [
    {title:t.partners, description:t.partnersDescription, icon:'⌂', url:safeUrl(partnerHubUrl)},
    {title:t.areas, description:t.areasDescription, icon:'△', url:safeUrl(workspaceUrl)}
  ];
  app!.replaceChildren();
  const header=document.createElement('header');header.className='header';header.innerHTML='<div class="header-inner"><div class="brand"><span class="brand-mark" aria-hidden="true">◆</span><div><strong>DOLOMITI NORDICSKI</strong><span>DNS ECOSYSTEM</span></div></div><nav aria-label="Language" class="languages"></nav></div>';
  const nav=header.querySelector('nav')!;
  (['it','de','en'] as Language[]).forEach(lang=>{const b=document.createElement('button');b.type='button';b.textContent=lang.toUpperCase();b.lang=lang;b.setAttribute('aria-pressed',String(language===lang));b.addEventListener('click',()=>{language=lang;try{localStorage.setItem('dns-portal-language',lang);}catch{}render();});nav.appendChild(b);});
  const main=document.createElement('main');main.className='main';main.dataset.dnsShellMain='';
  const intro=document.createElement('section');intro.className='intro';const over=document.createElement('p');over.className='eyebrow';over.textContent=t.label;const h=document.createElement('h1');h.textContent=t.heading;const p=document.createElement('p');p.textContent=t.description;intro.append(over,h,p);main.appendChild(intro);
  const grid=document.createElement('div');grid.className='cards';
  cards.forEach((c)=>{const card=document.createElement(c.url?'a':'div');card.className='destination';if(c.url){(card as HTMLAnchorElement).href=c.url;card.setAttribute('rel','noopener noreferrer');}else{card.classList.add('unavailable');}const icon=document.createElement('span');icon.className='destination-icon';icon.setAttribute('aria-hidden','true');icon.textContent=c.icon;const title=document.createElement('h2');title.textContent=c.title;const desc=document.createElement('p');desc.textContent=c.description;const cta=document.createElement('span');cta.className='cta';cta.textContent=c.url?t.enter+'  →':t.soon;card.append(icon,title,desc,cta);grid.append(card);});
  main.appendChild(grid);const note=document.createElement('p');note.className='notice';note.textContent=t.notice;main.appendChild(note);
  const footer=document.createElement('footer');footer.dataset.dnsToolFooter='';footer.dataset.dnsLang=language;footer.dataset.dnsToolName='DNS Portal';footer.dataset.dnsToolVersion='0.1.0';footer.innerHTML='<div class="dns-tool-footer-shell"><span class="dns-tool-footer-primary"></span></div>';footer.querySelector('span')!.textContent=t.footer;
  app!.append(header,main,footer); foundation.refresh();
}
render();
