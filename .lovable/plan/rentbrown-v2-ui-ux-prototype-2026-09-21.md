# RentBrown V2 UI/UX Prototype

## Scope
Build a frontend-only, light-mode prototype using realistic fictional Nigerian investment data. No backend, authentication, payments, KYC provider, persistence, calculations, or API integrations will be added.

## Experience structure
- Create a shared responsive product shell with desktop navigation, tablet adaptation, mobile bottom navigation, notifications, account access, and clear public/investor context.
- Build dedicated routes for the public experience: Home, Explore, opportunity details, How It Works, Property Proof, Company, FAQ, and Legal.
- Build dedicated routes for the investor experience: Dashboard, investment discovery/details/checkout/payment states, Portfolio and investment states, Wallet and transaction/deposit/withdrawal flows, Notifications, Referrals, Account, KYC, Security, Settings, and Help.
- Use route-specific titles and descriptions across all pages.

## Design system
- Establish the warm institutional palette from the supplied brown, warm-white, text, and green anchors using semantic tokens.
- Use Jakarta Sans for interface and numerical content, with a restrained serif display face for selected marketing headings.
- Create reusable layouts and patterns for financial summaries, opportunity cards, state banners, timelines, evidence lists, data tables, step flows, transaction rows, forms, and empty/loading/error states.
- Keep principal, profit, balances, fees, dates, and references visually explicit and separate.

## Interactions
- Add frontend-only navigation, filters, tabs, quantity controls, payment-method selection, confirmation views, notification states, KYC state switching, and validation/error demonstrations.
- Surface sold-out, nearing-capacity, empty, loading, successful, failed, pending, rejected, matured, insufficient-balance, and referral states through realistic scenarios.

## Responsive validation
- Tune page composition independently for desktop, tablet, and mobile rather than compressing desktop layouts.
- Verify key journeys in the running preview at desktop and mobile widths, including navigation, dashboard, opportunity details, checkout, wallet withdrawal, referrals, and KYC.
