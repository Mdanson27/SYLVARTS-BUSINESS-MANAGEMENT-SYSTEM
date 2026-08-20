# Sylvarts Fashion Collection — Premium Business OS Demo

A presentation-ready, GitHub Pages-compatible business management system prototype for **Sylvarts Fashion Collection**.

## Live demo

GitHub Pages:

`https://mdanson27.github.io/SYLVARTS-BUSINESS-MANAGEMENT-SYSTEM/`

## Demo login

All demo accounts use password:

`demo123`

Accounts:

- Owner / Admin: `owner@sylvarts.demo`
- Manager: `manager@sylvarts.demo`
- Sales Staff: `sales@sylvarts.demo`

You can also use the one-tap role preview buttons on the login screen.

## Premium V3 modules

- Premium animated Sylvarts loader with shoe tracing, decorative growth and real logo reveal
- Responsive mobile, tablet and desktop application shell
- Demo login and role-based access previews
- Owner / Admin, Manager and Sales Staff experiences
- Executive dashboard with management KPIs
- Fashion-specific inventory by product, size and colour variant
- Variant-level reorder thresholds and low-stock alerts
- Product and variant creation/editing
- Point of Sale with product search, category filtering and exact variant selection
- Cart quantities, customer selection, payment method and discounts
- Automatic stock deduction after a completed sale
- Branded receipt generation and print / PDF workflow
- Customer profiles, segments, spend and purchase history
- Supplier directory with contacts, categories and lead times
- Purchasing and variant-level reorder recommendations
- Purchase Order creation and receiving
- Automatic inventory replenishment when a PO is received
- Branded invoice creation, draft/pending/paid states and PDF printing
- Expense recording and operating-cost tracking
- Business tracking centre for stock risk, invoice collections and inbound stock
- Management reports for Revenue, COGS, Gross Profit, Expenses and Estimated Net
- Sales by category, payment mix, best sellers and inventory valuation
- Operational activity feed
- Guided presentation tour
- Reset demo data button
- CSV inventory export and JSON demo-data export
- Browser `localStorage` persistence for presentation changes

## Project structure

- `index.html` — loader, login screen and application shell
- `styles.css` — premium visual system and component styling
- `responsive.css` — mobile/tablet/desktop viewport hardening
- `app.js` — all V3 demo data, role logic and interactive workflows
- `Slyvarts-logo.png` — supplied Sylvarts Fashion Collection logo
- `docs/DEMO-GUIDE.md` — recommended presentation flow

## Recommended presentation story

1. Log in as Owner / Admin.
2. Show the management dashboard and stock alerts.
3. Open Point of Sale and sell a specific size/colour variant.
4. Complete payment and preview the generated receipt.
5. Return to Inventory and show that exact variant stock has reduced.
6. Open Purchasing and convert a low-stock alert into a Purchase Order.
7. Receive the Purchase Order and show inventory replenishment.
8. Open a customer profile and show purchase history.
9. Create and preview an invoice.
10. Record an expense.
11. Finish in Reports with gross and estimated net performance.

## Demo architecture

This version intentionally has no production backend. It uses browser storage so the full workflow can be demonstrated without server dependencies. The next production stage would add:

- Real cloud authentication and staff invitations
- Cloud database and multi-device synchronization
- Audit logs and approval workflows
- Branch / location inventory
- Barcode or QR scanning
- Mobile Money and payment integrations
- PDF and WhatsApp delivery services
- Automated low-stock and invoice reminders
- Backups and recovery
- Production security rules

## GitHub Pages

The site is designed to deploy directly from:

- Branch: `main`
- Folder: `/ (root)`

No build process is required.
