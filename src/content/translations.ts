/** Portal copy only; canonical design and brand metadata live in Foundation. */
export type Language = 'it' | 'de' | 'en';
export const translations = {
  it: {
    tagline: 'DNS Ecosystem', heading: 'Dolomiti NordicSki', description: 'Risorse pubbliche e accesso agli ambienti riservati.',
    publicHeading: 'Risorse pubbliche', publicDescription: 'Informazioni e materiali ufficiali accessibili senza login.',
    brand: 'Corporate Design', brandDescription: 'Colori ufficiali e identità visiva condivisa.',
    logoWeb: 'Logo DNS · Web', logoPrint: 'Logo DNS · Stampa', download: 'Apri il file ufficiale',
    widget: 'Widget Creator', widgetDescription: 'Genera un widget DNS per il tuo sito, anche senza essere partner.',
    intranet: 'DNS Intranet', who: 'Chi siete?', intranetDescription: 'Seleziona il tuo ambiente di lavoro.',
    partner: 'Partner', partnerDescription: 'Accesso riservato alle strutture e ai partner convenzionati.',
    area: 'Aree DNS', areaDescription: 'Workspace delle organizzazioni territoriali.',
    enter: 'Accedi', pending: 'Collegamento in preparazione',
    notice: 'Le credenziali e i permessi sono gestiti dalle applicazioni di destinazione.',
    footer: 'Portale ufficiale Dolomiti NordicSki'
  },
  de: {
    tagline: 'DNS Ecosystem', heading: 'Dolomiti NordicSki', description: 'Öffentliche Ressourcen und Zugang zu geschützten Arbeitsbereichen.',
    publicHeading: 'Öffentliche Ressourcen', publicDescription: 'Offizielle Informationen und Materialien ohne Anmeldung.',
    brand: 'Corporate Design', brandDescription: 'Offizielle Farben und einheitlicher Markenauftritt.',
    logoWeb: 'DNS Logo · Web', logoPrint: 'DNS Logo · Druck', download: 'Offizielle Datei öffnen',
    widget: 'Widget Creator', widgetDescription: 'Erstellt ein DNS Widget für eure Website – auch ohne Partnerbetrieb.',
    intranet: 'DNS Intranet', who: 'Wer seid ihr?', intranetDescription: 'Wählt euren Arbeitsbereich.',
    partner: 'Partnerbetriebe', partnerDescription: 'Geschützter Zugang für Partnerbetriebe und Kooperationspartner.',
    area: 'DNS Regionen', areaDescription: 'Workspace der Mitgliedsregionen.',
    enter: 'Öffnen', pending: 'Verknüpfung in Vorbereitung',
    notice: 'Anmeldung und Berechtigungen werden in den Zielanwendungen verwaltet.',
    footer: 'Offizielles Portal Dolomiti NordicSki'
  },
  en: {
    tagline: 'DNS Ecosystem', heading: 'Dolomiti NordicSki', description: 'Public resources and access to private workspaces.',
    publicHeading: 'Public resources', publicDescription: 'Official information and materials available without signing in.',
    brand: 'Corporate Design', brandDescription: 'Official colors and shared visual identity.',
    logoWeb: 'DNS Logo · Web', logoPrint: 'DNS Logo · Print', download: 'Open official file',
    widget: 'Widget Creator', widgetDescription: 'Create a DNS website widget, even if you are not a partner.',
    intranet: 'DNS Intranet', who: 'Who are you?', intranetDescription: 'Select your workspace.',
    partner: 'Partners', partnerDescription: 'Restricted access for accommodation and participating partners.',
    area: 'DNS Areas', areaDescription: 'Workspace for member organizations.',
    enter: 'Continue', pending: 'Link coming soon',
    notice: 'Sign-in and permissions are handled by the destination applications.',
    footer: 'Official Dolomiti NordicSki portal'
  }
} as const;

