# Sylvarts Fashion Collection — Business Management System Demo

A presentation-ready, GitHub Pages-compatible business management system prototype for **Sylvarts Fashion Collection**.

## Project structure

- `index.html` — semantic application shell, branded loader, navigation and modal containers
- `styles.css` — full responsive design system, premium animations, loader, dashboard, tables, documents and mobile UI
- `app.js` — interactive demo logic, inventory, sales, receipts, invoices, tracking, reporting and local persistence
- `Slyvarts-logo.png` — supplied Sylvarts Fashion Collection logo
- `.nojekyll` — keeps GitHub Pages in simple static-site mode
- `docs/PROJECT-PLAN.md` — implementation roadmap

## Demo functionality

### Dashboard
- Business KPI overview
- Sales trend visualization
- Inventory retail value
- Low-stock / out-of-stock intelligence
- Outstanding invoice tracking
- Recent sales and operational activity

### Inventory
- Product catalogue
- SKU and category tracking
- Cost and selling prices
- Current stock levels
- Per-product reorder levels
- Automatic low-stock and out-of-stock status
- Add and edit products
- Search and stock filters
- CSV inventory export

### Sales
- Interactive sale creation
- Product/quantity selection
- Stock availability validation
- Automatic total calculation
- Automatic stock deduction after checkout
- Payment-method capture
- Customer-name capture

### Receipts
- Receipt history based on sales
- Branded printable receipt preview
- Customer, items, quantities, unit prices and totals

### Invoices
- Create demo invoices
- Draft / Pending / Paid status
- Due dates and customer details
- Outstanding receivables tracking
- Branded printable invoice preview

### Tracking & Reports
- Reorder attention board
- Payment follow-up board
- Operational event log
- Inventory at cost
- Inventory retail value
- Potential gross margin
- Stock by category

## Presentation experience

The demo includes a custom Sylvarts loader inspired by the brand’s fashion identity: a heel is drawn on screen, decorative elements grow around the silhouette, and the real Sylvarts logo is revealed before the management dashboard opens.

The UI is responsive for desktop, tablet and mobile and uses the Sylvarts navy, magenta, white and cyan-accent visual identity.

## Demo storage

This version deliberately uses browser `localStorage`. This gives the demo enough real interaction to add products, record sales, update stock and create invoices while remaining a simple static site that can run directly on GitHub Pages.

Use **Settings → Reset demo data** inside the application to restore the original sample records.

## GitHub Pages

For this repository use:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/ (root)`

Expected public URL:

`https://mdanson27.github.io/SYLVARTS-BUSINESS-MANAGEMENT-SYSTEM/`

## Production roadmap

The production system should replace browser storage with a secured backend and add authentication, role-based access, cloud backups, suppliers and purchase orders, barcode support, PDF generation, automated notifications, expenses, approval workflows, audit logs, multi-location stock and payment integrations.

## Brand link

TikTok: https://www.tiktok.com/@sylvartsfashioncolection
