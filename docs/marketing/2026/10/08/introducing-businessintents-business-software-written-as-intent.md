---
title: "Introducing BusinessIntents: Business Software Written as Intent"
description: Meet BusinessIntents, the connected business suite that codbex builds and operates on its own intent-driven platform. Sales, purchasing, inventory, people, projects, services and accounting on one shared set of records, ready-made for small and medium-sized businesses and open for any organization to build a suite of its own. Here is what it is, how its 31 modules are written as intent files, what that changes, and how far along it is
date: 2026-10-08
author: nedelcho
editLink: false
---

# Introducing BusinessIntents: Business Software Written as Intent

Every company runs on the same handful of documents. A quotation becomes an order, the order becomes a delivery and an invoice, a payment settles the invoice, and the ledger reflects it. A timesheet turns into an invoice, an expense claim into a reimbursement, a vacation request into an approved absence. The software that carries those documents from one desk to the next is usually a spreadsheet that has outgrown itself, or an ERP that was configured once, at great cost, by someone who has since left.

We spent this year building a third option. **BusinessIntents** is a connected suite of business applications: sales, purchasing, inventory, people, projects, services and accounting, on one shared set of records. It is built and operated by codbex, hosted in the European Union, works in English and Bulgarian, and every standard app costs €10 per active user per month. It lives at [businessintents.com](https://businessintents.com).

It is also built in a way we think is worth writing about. The whole suite is written as intent.

<div style="text-align: center;">
   <img src="/images/2026-10-08-introducing-businessintents/sales-invoice-document.png" alt="A sales invoice in BusinessIntents, with its line items, totals and the status rail from DRAFT to PAID" style="max-width: 100%; border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.18);" />
   <p style="font-size: 0.9em; opacity: 0.8;">A sales invoice, with its items, totals and status rail. Numbered only when issued, settled automatically as payments arrive.</p>
</div>

## What BusinessIntents Is

Enter each record once and let it carry the work forward. Customers, suppliers, products, companies, currencies and tax rates are shared by every application, so a quotation becomes an order, an order becomes a delivery note and an invoice, and nobody re-types the customer for the next team. Every document carries a status that controls which action is valid, who gets the next task, and when the record becomes read-only history.

Approvals reach the right inbox. Invoices, purchase orders, expense claims, vacation requests and payroll runs move through their approval steps as tasks, each addressed to a role, with the actions on the task itself. Every employee also gets a personal workspace that shows only what is theirs: their expenses, vacations, timesheets and payslips, with the tasks waiting for them first.

Learn one app and you know them all. Every list searches, filters, sorts, exports to CSV and prints the same way. Every document has the same line arithmetic, the same status pill, the same print layouts in English and Bulgarian.

Small and medium-sized businesses start from a ready-made solution for their industry:

- **Professional Services** for consultancies, agencies and firms selling expertise. Projects, monthly timesheets, billable approval, and a draft invoice from an approved project month.
- **Retail** for shops and chains. Orders, replenishment, stock across stores, delivery notes, invoicing, payments, leave, payroll and accounting.
- **Wholesale** for B2B distributors. Quotations and sales orders on one side, RFQs and purchasing on the other, multi-store inventory in between.
- **Construction** for contractors running jobs and sites. Projects, site time, material sourcing, purchasing, stock, expenses and crew administration.
- **Logistics** for warehouse and goods operators. Inbound and outbound orders, warehouse movements, delivery notes and service tickets.

The free demo has no time limit. Standard runs in your own environment with a dedicated database in AWS Frankfurt, daily backups, automatic updates and email support, for €10 per active user per month, excluding VAT. Adaptations are scoped and quoted as Custom work.

## Written as Intent, Not Configured

This is the part that makes BusinessIntents different from the products it will be compared with, and the reason we are writing about it here rather than only on its own site.

BusinessIntents is 31 modules. Each one is a single `.intent` file: a readable YAML document that describes what the module is. Its entities and their fields, the relations between them, the business rules, the approval workflow, the reports, the forms, the seed data, and which other modules' master data it reuses. The platform reads that file and generates everything below it: the data model, the persistence and REST services, the BPMN processes, the user interface, the roles and the reference data. Identical intent produces identical output, byte for byte. Nothing in the running application is hand-written against a particular screen.

Here is what that looks like. This is a trimmed excerpt from the real expenses module, the one that handles employee expense claims:

```yaml
name: expenses
description: Employee expense claims with an approval workflow
languages: [en, bg]
uses:
  - { model: employees }
  - { model: currencies }
  - { model: tax-rates }
entities:
  - name: ExpenseClaim
    audit: true
    checks:
      - kind: itemsMin
        count: 1
        status: 2
        message: "Expense claim needs at least one line before it can be submitted"
    fields:
      - name: number
        type: string
        number: { series: Expense, per: Company, stampOn: create }
        documentTitle: true
      - { name: date, type: date, required: true }
      - name: total
        type: decimal
        precision: 18
        scale: 2
        aggregate: true
    relations:
      - name: Employee
        kind: manyToOne
        to: Employee
        model: employees
        required: true
        personal: true
      - name: Status
        kind: manyToOne
        to: ExpenseStatus
        function: EntityStatus
        init: 1
  - name: ExpenseClaimItem
    fields:
      - name: amount
        type: decimal
        precision: 18
        scale: 2
        required: true
      - name: vat
        type: decimal
        precision: 18
        scale: 2
        calculatedOnCreate: "round(Amount * VatRate / 100, 2)"
processes:
  - name: ExpenseApproval
    trigger: { onCreate: ExpenseClaim }
    steps:
      - name: submit
        kind: userTask
        args:
          assignee: employee
          form: SubmitExpense
          setRelationField: Status
          value: 2
          next: approve
      - name: approve
        kind: userTask
        args: { assignee: approver, form: ApproveExpense }
      - name: approveDecision
        kind: decision
        args:
          if: "action == 'approve'"
          then: activate
          else: reject
      - name: activate
        kind: serviceTask
        args: { setRelationField: Status, value: 3, next: reimburse }
      - name: reimburse
        kind: userTask
        args:
          assignee: payer
          form: ReimburseExpense
          setRelationField: Status
          value: 4
          next: end
      - name: reject
        kind: serviceTask
        args: { setRelationField: Status, value: 5, next: end }
      - { name: end, kind: end }
```

Read it once and you know the module. A claim has numbered lines whose VAT is computed from the rate. It cannot be submitted empty. The employee submits it, an approver approves or rejects it, a payer reimburses it, and the status follows each step. The employee relation is marked personal, which is all it takes for the claim to appear in that employee's own workspace and nowhere else. Every one of those sentences is a line in the file, and the running application is a function of the file.

The format itself is not ours. It is the Intent File Specification, published as an open, vendor-neutral standard at [intentfile.org](https://intentfile.org), and BusinessIntents is the largest body of intent written against it so far. The stack underneath is open all the way down:

<div style="text-align: center; margin: 2em 0;">
<svg viewBox="0 0 780 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The BusinessIntents stack, bottom up: eclipse.org, intentfile.org, dirigible.io, codbex.com, businessintents.com" style="max-width: 780px; width: 100%; font-family: inherit;">
  <defs>
    <marker id="bi-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--vp-c-brand-1)"/>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5">
    <rect x="120" y="330" width="560" height="56" rx="8"/>
    <rect x="120" y="258" width="560" height="56" rx="8"/>
    <rect x="120" y="186" width="560" height="56" rx="8"/>
    <rect x="120" y="114" width="560" height="56" rx="8"/>
  </g>
  <rect x="120" y="42" width="560" height="56" rx="8" fill="var(--vp-c-brand-soft)" stroke="var(--vp-c-brand-1)" stroke-width="2"/>
  <g fill="currentColor" font-size="15" font-weight="600">
    <text x="140" y="364">eclipse.org</text>
    <text x="140" y="292">intentfile.org</text>
    <text x="140" y="220">dirigible.io</text>
    <text x="140" y="148">codbex.com</text>
    <text x="140" y="76">businessintents.com</text>
  </g>
  <g fill="currentColor" fill-opacity="0.75" font-size="12.5">
    <text x="310" y="364">open-source governance, process and ecosystem</text>
    <text x="310" y="292">open standard for describing business intent</text>
    <text x="310" y="220">open-source application technology, upstream</text>
    <text x="310" y="148">Atlas, the codbex application platform</text>
    <text x="310" y="76">business apps, ready-made or built to order</text>
  </g>
  <line x1="80" y1="380" x2="80" y2="52" stroke="var(--vp-c-brand-1)" stroke-width="2.5" marker-end="url(#bi-arrow)"/>
  <text x="62" y="222" fill="currentColor" fill-opacity="0.6" font-size="12" transform="rotate(-90 62 222)" text-anchor="middle">built on</text>
</svg>
</div>

The user interface is [Harmonia](/marketing/2026/08/04/introducing-harmonia-instant-uis-zero-build-step), our MIT-licensed component library, which is why every list and every form across 31 modules behaves the same way without anyone enforcing a style guide.

### What That Changes

**The description is the product.** When a customer tells us an invoice should refuse a due date earlier than the invoice date, the fix is one line in the sales-invoices intent, a `compare` check with a message. The regenerated module carries the rule in the API, the form and the task that would have approved it. The user guide is written against the same file, so the documentation and the behaviour cannot drift apart for long.

**Regeneration is routine, not a project.** Every platform release regenerates all 31 modules from unchanged intents, runs the suite's tests, and ships new images. The suite picks up platform improvements, from a faster list to a new document capability, without anyone rewriting a module. We call this the release train, and it has run more than a dozen times this year.

**Connected by construction.** The `uses:` block at the top of each intent is how the suite stays one suite. The sales-invoices module does not define a customer, a product, a tax rate or a currency. It reuses the ones owned by their own modules, and contributes its own screens to the shared shell. A solution is a composition of modules, and composing a new one for a new industry is a manifest, not a rewrite.

**Rules live next to the data.** Checks, status gates, number series stamped at issue, read-only documents after posting, roll-ups that keep an invoice's paid balance in step with its payment allocations. All of it is declared in the file where the entity is declared, which is where a reader looks for it.

**Built for working with AI.** A file small enough to read in one sitting and structured enough to validate is exactly what a coding assistant can propose a reviewable patch against. Our own team builds BusinessIntents this way, with AI agents working on the intents under human review and the platform's own tests as the gate. The generated code never has to be trusted or inspected. It is regenerated.

<div style="text-align: center;">
   <img src="/images/2026-10-08-introducing-businessintents/stock-movements.png" alt="The stock movements ledger in BusinessIntents, one signed movement per line with the goods receipt or issue that caused it" style="max-width: 100%; border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.18);" />
   <p style="font-size: 0.9em; opacity: 0.8;">Stock is a ledger, not a guess. Every receipt, issue, transfer and return posts a signed movement with the document that caused it.</p>
</div>

## Two Ways to Use It

**Standard** is the ready-made path. The five industry solutions, assembled from the standard modules, documented page by page, priced per active user and run by us. It is the right fit for a small or medium-sized business that wants to be working this month.

**Your own suite** is the other path, and it is where the intent approach pays off for everyone else. Any organization, including a large enterprise, can take the standard modules as a starting point and add its own records, documents, approval paths and reports, written as intents by its own team or its consultants. There is no size or sector limit, because there is nothing to outgrow: the suite is a set of files, and changing the business means changing the description.

## How Far Along It Is

BusinessIntents is a young product, and we would rather show that than hide it. For every solution we publish how much of the functionality a business typically expects in each area is already in the standard product, what readiness band that puts it in, and the month in which we plan to call it fully ready. The main workflows of every solution run end to end today and are in use on Standard. The figures below were last reviewed on 6 October 2026.

| Solution | Coverage | Readiness | Planned fully ready |
|---|---|---|---|
| Retail | 46% | Early access | March 2027 |
| Wholesale | 44% | Early access | April 2027 |
| Professional Services | 42% | Early access | May 2027 |
| Logistics | 41% | Early access | June 2027 |
| Construction | 40% | Early access | July 2027 |

The shared registries are at 90% and sales and billing at 65%. Payroll, accounting and the service desk are around 20%, and the [readiness roadmap](https://businessintents.com/roadmap) lists what comes next in each area, from bank reconciliation to shipments and carriers. If something you depend on is in the "coming next" column, tell us. It helps us order the work.

## What It Taught Us About the Platform

BusinessIntents is the most demanding user the codbex platform has ever had. Thirty-one modules written entirely as intent, regenerated on every release, tested as a whole, and operated for paying customers, find every gap in a generator that a demo application never would. Over the past months that pressure produced hundreds of upstream issues and pull requests: validation checks that compare two fields, document numbering series per company, cross-model roll-ups, duplicable documents with fresh dates, unique keys that span modules, personal workspaces derived from a single `personal: true` flag. Each one started as a line we wanted to write in an intent and could not, and each one is now part of the open platform and, where it is general enough, of the specification at intentfile.org.

That is the loop we wanted when we set out. A real product written as intent pushes the platform. The platform makes the next product cheaper to write. Harmonia went public the same way, after years of powering generated interfaces. BusinessIntents is the next piece of that work to step out into the open.

## Try It

- Explore the solutions and the free demo at [businessintents.com](https://businessintents.com). The demo has no time limit.
- Bring one real workflow to a [guided review](https://businessintents.com/try-now) and see which parts fit as they are.
- Read the [readiness roadmap](https://businessintents.com/roadmap) before you decide, and the [Trust Center](https://businessintents.com/trust/) if you are the one asking about hosting, security and data.
- Read the Intent File Specification at [intentfile.org](https://intentfile.org) if you want to see the format behind every module.
- Write to [office@codbex.com](mailto:office@codbex.com) if your organization wants a suite of its own.

Describe how your business works. Get the software that runs it.
