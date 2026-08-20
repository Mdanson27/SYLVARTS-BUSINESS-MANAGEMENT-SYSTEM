# Sylvarts Premium V3 — Presentation Guide

## Best login

Use Owner / Admin for the full presentation:

- Email: `owner@sylvarts.demo`
- Password: `demo123`

The login screen also has one-tap previews for Owner / Admin, Manager and Sales Staff.

## 8–10 minute presentation flow

### 1. Loader + login

Allow the premium loader to complete. Explain that the system is branded specifically for Sylvarts Fashion Collection rather than being a generic ERP skin.

Log in as Owner / Admin.

### 2. Dashboard

Show:

- Sales recorded
- Gross profit
- Inventory units
- Estimated net contribution
- Stock at retail value
- Variant-level reorder alerts
- Outstanding invoices
- Recent transactions and operational activity

Key point: management sees what happened, what needs attention and what action should happen next.

### 3. Point of Sale

Open **Point of Sale**.

Choose **Classic Pink Heel** and select a specific size/colour variant. Add it to the cart, choose a customer if desired, select Mobile Money or Cash, and complete the sale.

Key point: the system sells the exact fashion variant, not just the generic product.

### 4. Receipt

After completing the sale, show the generated branded receipt and the Print / Save PDF action.

Key point: the sales transaction becomes an immediately usable customer document.

### 5. Inventory

Open **Inventory** and show the size/colour variants.

Open the product you just sold and demonstrate that only the selected variant stock changed.

Key point: a store can know that Size 38 is unavailable even while the same shoe is still available in other sizes.

### 6. Purchasing

Open **Purchasing**.

Use a low-stock recommendation to create a Purchase Order. Then press **Receive** on a PO.

Return to Inventory if time permits and show that receiving the PO automatically replenished the associated variant.

Key point: the system closes the loop from low stock → reorder → supplier → received stock.

### 7. Customers + invoices

Open **Customers**, choose a customer and show recorded purchase history and total spend.

Then open **Invoices**, create an invoice, issue it as Pending, preview it and mark it Paid.

Key point: customer management and billing are connected to the same operational system.

### 8. Expenses + Reports

Record a sample expense such as transport or packaging.

Open **Reports** and show:

- Revenue
- Cost of goods sold
- Gross profit
- Operating expenses
- Estimated net contribution
- Inventory at cost and retail value
- Category sales mix
- Payment mix
- Best sellers

Key point: the system turns day-to-day activity into management information.

## Role preview

Use the top-right user menu to preview:

- Owner / Admin — complete system access
- Manager — operations without admin/settings
- Sales Staff — focused access to dashboard, POS, inventory availability, customers and receipts

This demonstrates how production permissions would prevent every staff member from seeing sensitive cost and administrative areas.

## Guided mode

The left sidebar includes **Start guided demo**. This automatically moves through the strongest modules with a presentation explanation for each step.

## Reset before a presentation

Use **Reset demo data** in the left sidebar or Admin & Settings before each formal presentation. This restores the original inventory, sales, invoices, expenses, suppliers and purchase orders.

## Important demo limitation

Premium V3 is still a static GitHub Pages demonstration. Authentication, database synchronization and permissions are simulated in the browser. The production version should connect the same front-end workflow to secure cloud authentication, a database and server-side business rules.
