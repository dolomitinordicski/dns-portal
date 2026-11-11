/** Brief, functional UI copy. Product names remain in the shared chrome. */
export type Language = 'it' | 'de' | 'en';
export const translations = {
  it: {
    heading: 'Tutto a portata di mano',
    description: 'Accedi alla tua area o consulta le risorse.',
    publicHeading: 'Risorse', publicDescription: '',
    brand: 'Corporate Design', brandDescription: 'Colori e linee guida.',
    logos: 'Loghi', logoWeb: 'Versione web', logoPrint: 'Versione stampa', download: 'Apri',
    widget: 'Widget Creator', widgetDescription: 'Per il tuo sito.',
    intranet: 'Accesso riservato', who: 'Dove vuoi entrare?',
    partner: 'Partner', partnerDescription: 'Per strutture e collaboratori.',
    area: 'Aree', areaDescription: 'Per i team territoriali.',
    enter: 'Entra', pending: 'In preparazione',
    footer: 'Dolomiti NordicSki'
  },
  de: {
    heading: 'Alles auf einen Blick',
    description: 'Wählt euren Bereich oder nutzt die Ressourcen.',
    publicHeading: 'Ressourcen', publicDescription: '',
    brand: 'Corporate Design', brandDescription: 'Farben und Richtlinien.',
    logos: 'Logos', logoWeb: 'Webversion', logoPrint: 'Druckversion', download: 'Öffnen',
    widget: 'Widget Creator', widgetDescription: 'Für eure Website.',
    intranet: 'Geschützter Zugang', who: 'Wohin möchtet ihr?',
    partner: 'Partnerbetriebe', partnerDescription: 'Für Betriebe und Partner.',
    area: 'Regionen', areaDescription: 'Für die regionalen Teams.',
    enter: 'Öffnen', pending: 'In Vorbereitung',
    footer: 'Dolomiti NordicSki'
  },
  en: {
    heading: 'Everything in one place',
    description: 'Choose your area or explore the resources.',
    publicHeading: 'Resources', publicDescription: '',
    brand: 'Corporate Design', brandDescription: 'Colors and guidelines.',
    logos: 'Logos', logoWeb: 'Web version', logoPrint: 'Print version', download: 'Open',
    widget: 'Widget Creator', widgetDescription: 'For your website.',
    intranet: 'Private access', who: 'Where would you like to go?',
    partner: 'Partners', partnerDescription: 'For businesses and partners.',
    area: 'Areas', areaDescription: 'For regional teams.',
    enter: 'Enter', pending: 'Coming soon',
    footer: 'Dolomiti NordicSki'
  }
} as const;
