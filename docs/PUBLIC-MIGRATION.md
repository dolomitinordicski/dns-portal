# DNS Portal — public content migration from Partner Hub

This inventory is based on existing `dolomitinordicski/dns-partner-hub/src/App.tsx` and its live components, not a newly invented information architecture.

| Existing Partner Hub section | Destination | Current migration status |
| --- | --- | --- |
| Vision / mission (`VisionSection`, `VISION_CONTENT`) | DNS Portal public | Pending factual/content audit: existing language variants disagree on piste-km and describe unverified figures. |
| Corporate Design (`CorporateDesignSection`) | DNS Portal public | Core Foundation corporate palette, canonical web/print logo links and existing brand rules migrated to Portal. Remaining long-form material to review before deprecating the old UI. |
| Partner benefits and quality criteria (`QualityCriteriaSection`) | DNS Portal public information; protected partner actions remain in Hub | Pending: consume canonical `DNS_PARTNER_QUALITY_CRITERIA` and source directly from Shared Data; distinguish public explanation from partner-specific actions. |
| Widget Creator (`WidgetCreator` + `widget-creator/*`) | Public visitor entry through Portal; generator remains a reusable module until extracted without duplicating app logic | Pending direct verified public URL; no fabricated address and no login requirement for non-partners. |
| DNS regions (`RegionsSection`) | DNS Portal public | Pending: use canonical regions/destinations from Shared Data, not duplicate lists. |
| Downloads (`DownloadsSection`, `DOWNLOAD_ITEMS`) | DNS Portal public files; private management stays protected | Pending verification: many current entries point to `#`, and dynamic Firestore catalog requires authorization review. Never publish placeholder files as downloadable assets. |
| Contact / FAQ (`ContactSection`) | DNS Portal public contact information and FAQ | Pending: form writes to Firestore; keep service isolated and verify public write rules before migration. |
| Partner onboarding / authentication, vouchers, admin functions | Partner Hub intranet | Stay in Partner Hub. Do not copy into public Portal. |

## Architecture

Portal is a lightweight public shell and private-area selector, not a second Partner Hub or Workspace. It imports canonical Foundation tokens and assets; public content is moved in small modules, with verified data sources. The existing source remains untouched until feature parity and security checks succeed. The protected Partner Hub and Workspace retain their own authentication and authorization.

## Deployment

No deploy is triggered by merging this code. The `pages.yml` workflow is manual. DNS CNAME and Identity are unchanged.
