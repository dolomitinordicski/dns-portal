/** Brief, functional UI copy. Product names remain in the shared chrome. */
export type Language = 'it' | 'de' | 'en';
export const translations = {
  it: {
    heading: 'Tutto a portata di mano',
    description: 'Accedi alla tua organizzazione o consulta le risorse.',
    heroCollaborate: 'Collaborazione', heroResources: 'Strumenti e risorse', heroIdentity: 'Turismo nordico',
    publicHeading: 'Risorse pubbliche', publicDescription: '',
    brand: 'Corporate Design', brandDescription: 'Colori e linee guida.',
    logos: 'Loghi', logosDescription: 'Formati ufficiali', logoWeb: 'Versione web', logoPrint: 'Versione stampa', download: 'Apri',
    widget: 'Widget Creator', widgetDescription: 'Per il tuo sito.',
    intranet: 'Accesso riservato', who: 'Dove vuoi entrare?',
    partner: 'Esercizi Partner', partnerDescription: 'Per strutture e alloggi.',
    area: 'Organizzzioni', areaDescription: 'Per i partner territoriali.',
    enter: 'Entra', pending: 'In preparazione',
    footer: 'Dolomiti NordicSki'
  },
  de: {
    heading: 'Alles auf einen Blick',
    description: 'Wählt eure Organization oder nutzt die Ressourcen.',
    heroCollaborate: 'Zusammenarbeit', heroResources: 'Tools und Ressourcen', heroIdentity: 'Nordischer Sport',
    publicHeading: 'Öffentliche Ressourcen', publicDescription: '',
    brand: 'Corporate Design', brandDescription: 'Farben und Richtlinien.',
    logos: 'Logos', logosDescription: 'Offizielle Varianten', logoWeb: 'Webversion', logoPrint: 'Druckversion', download: 'Öffnen',
    widget: 'Widget Creator', widgetDescription: 'Für eure Website.',
    intranet: 'Geschützter Zugang', who: 'Wohin möchtet ihr?',
    partner: 'Partnerbetriebe', partnerDescription: 'Für Betriebe und Unterkènfte.',
    area: 'Organisationen', areaDescription: 'Für die regionalen Partnern.',
    enter: 'Öffnen', pending: 'In Vorbereitung',
    footer: 'Dolomiti NordicSki'
  },
  en: {
    heading: 'Everything in one place',
    description: 'Choose your area or explore the resources.',
    heroCollaborate: 'Collaboration', heroResources: 'Tools and resources', heroIdentity: 'Nordic skiing',
    publicHeading: 'Public resources', publicDescription: '',
    brand: 'Corporate Design', brandDescription: 'Colors and guidelines.',
    logos: 'Logos', logosDescription: 'Official formats', logoWeb: 'Web version', logoPrint: 'Print version', download: 'Open',
    widget: 'Widget Creator', widgetDescription: 'For your website.',
    intranet: 'Private access', who: 'Where would you like to go?',
    partner: 'Partners', partnerDescription: 'For businesses and partners.',
    area: 'Organization', areaDescription: 'For regional partners.',
    enter: 'Enter', pending: 'Coming soon',
    footer: 'Dolomiti NordicSki'
  }
} as const;
