# DNS Portal — release notes and deployment preflight

## Existing DNS Identity

This is an unauthenticated entry page only. It must NOT authenticate users or forward tokens.
Workspace retains its own Google sign-in and organisation/AT authorisation.
Partner Hub retains its own partner sign-in and permissions. No second login is created.
Do not interpret the selection of a destination as proof of authorisation.

## Destinations

- `VITE_DNS_WORKSPACE_URL` defaults to `https://dolomitinordicski.github.io/dns-workspace/`.
- `VITE_DNS_PARTNER_HUB_URL` must be set to the verified, accessible production URL when Partner Hub is ready. Until then the Partner card is visibly unavailable.
- Only HTTPS destinations are accepted.

## Publishing

The code belongs to `dolomitinordicski`. CI builds only; publishing is a separate manual GitHub Actions workflow (`DNS Portal — Publish GitHub Pages`). Merging a PR does not publish. Only run this workflow after the explicit release approval and a successful CI build.
In Settings → Pages choose Source: GitHub Actions. For first release, leave the custom domain empty; verify the generated `github.io/dns-portal/` URL before any domain cutover.
Do not add a CNAME yet; avoid breaking an existing `partner.dolomitinordicski.com` service.
Keep the current DNS records unchanged until the target Pages deployment has been verified.
GitHub Pages is not an authentication server; never store secrets or private member data here.

## Foundation

Consumes `@dolomitinordicski/dns-shared-data/foundation` at the existing `foundation-v1.4.1` release and calls `initDNSFoundation({ shellProfile: 'portal' })`. No local copies of corporate color tokens are maintained.
