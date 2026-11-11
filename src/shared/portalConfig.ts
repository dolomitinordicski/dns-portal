import { DNS_FOUNDATION_RELEASE_VERSION } from '@dolomitinordicski/dns-shared-data/release';

const assetBase = `https://raw.githubusercontent.com/dolomitinordicski/dns-shared-data/foundation-v${DNS_FOUNDATION_RELEASE_VERSION}/brand`;

export const portalConfig = {
  logoWebUrl: `${assetBase}/logo-web.png`,
  logoPrintUrl: `${assetBase}/logo.png`,
  workspaceUrl: import.meta.env.VITE_DNS_WORKSPACE_URL || 'https://dolomitinordicski.github.io/dns-workspace/',
  partnerHubUrl: import.meta.env.VITE_DNS_PARTNER_HUB_URL || '',
  widgetUrl: import.meta.env.VITE_DNS_PUBLIC_WIDGET_URL || '',
  heroImageUrl: import.meta.env.VITE_DNS_PORTAL_HERO_IMAGE_URL || 'https://raw.githubusercontent.com/dolomitinordicski/dns-portal/main/sources/DN190D~1.WEB',
} as const;

export function safeUrl(value: string): string {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : '';
  } catch {
    return '';
  }
}
