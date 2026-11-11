import { initDNSFoundation } from '@dolomitinordicski/dns-shared-data/foundation';
import { initDNSNavigationStyles } from '@dolomitinordicski/dns-shared-data/ui/navigation';

// One shared Foundation runtime: no cloned header/footer or token definitions.
export const foundation = initDNSFoundation({
  shellProfile: 'portal',
  footer: true,
  chrome: false,
  accessibility: { enabled: true, mountSelector: '[data-dns-accessibility-mount]' },
});
initDNSNavigationStyles();
