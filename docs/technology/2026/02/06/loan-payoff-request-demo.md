---
title: 'Building and Extending a Loan Payoff Workflow'
description: 'A practical walkthrough of implementing and extending a real-world loan payoff workflow using codbex Atlas, showcasing BPM, forms, entity modeling, and AI integration in action.'
date: 2026-02-06
author: iliyan
editLink: false
---

# Building and Extending a Loan Payoff Workflow

Modern banking processes are complex, highly regulated, and require full traceability. At the same time, teams need to deliver fast, adapt to changing requirements, and integrate new technologies like AI without re-architecting everything.

In this article, we demonstrate how a typical bank loan payoff request workflow can be implemented and easily extended using the [codbex platform](https://www.codbex.com/) [(Atlas)](https://www.codbex.com/products/atlas). The demo project shows how BPM, forms, entity modeling, integrations, and AI services come together into a single, coherent solution.

👉 A full walkthrough of the implemented workflow and its extensibility is available in the accompanying video below.
<iframe width="100%" height="450" src="https://www.youtube.com/embed/x9RIyJ4jzYw" frameborder="0" allowfullscreen></iframe>

## The Business Scenario: Loan Payoff Request
The process we model is based on a realistic bank workflow for early or full loan repayment:
1. A client visits a Financial Center and fills out a loan payoff request.
2. A front desk employee:
   - Accepts and validates the request
   - Checks the account balance
   - Notifies the client about early repayment fees
3. A request (ticket) is created in the system.
4. Credit Administration:
   - Verifies contractual clauses
   - Performs the repayment
   - Closes the request or returns it for correction
5. The client is notified about the completion.

<br/>

   <img src="/images/2026-02-06-loan-payoff-request-demo/process-pics.jpg" alt="process-pics.jpg"  style="width: 80%;">

<br/>

This is a classic **cross-departmental** process with human tasks, system checks, approvals, notifications, and strict audit requirements — a perfect fit for BPM.

## Why BPM Matters Here
Using BPM (Business Process Management) is not just about automation. In this scenario, BPM provides:
- **End-to-end traceability** of every loan payoff request
- **Auditability** – who did what and when
- **Clear ownership** across roles (Front Desk, Credit Administration, System)
- **Process visibility** – live instances, statuses, timers, and decisions
- **Safe extensibility** – changes without breaking existing logic

All of this is available out of the box in [codbex Atlas](https://www.codbex.com/products/atlas).

## The Implemented Workflow at a Glance
In the demo, we implemented the workflow as a **Flowable BPMN process**, orchestrated by codbex. The process is triggered automatically when a new loan payoff request entity is created.

### High-Level Flow
1. **Start Event**
  - Triggered when a new loan payoff request is saved
2. **Account Balance Verification (User Task)**
   - Executed by a front desk employee
   - Uses a form built with the codbex Form Builder
   - Confirms whether sufficient funds are available
3. **Decision: Sufficient Balance?**
   - If insufficient → process ends gracefully
   - If sufficient → continue with tax calculation
4. **AI Service Task: Calculate Taxes**
   - Uses AI to calculate applicable taxes based on the loan contract
   - Demonstrates seamless AI integration in BPM
5. **AI Service Task: Generate Confirmation Email**
   - AI generates a customer-friendly email explaining the taxes
6. **Mail Task: Send Confirmation Email**
  - Automatically sends the generated email to the customer
7. **Customer Confirmation**
  - The process waits for customer confirmation
  - Implemented via an event-based gateway with:
    - Message event (customer accepts)
    - Timer event (timeout)
8. **Create External Loan Payoff Ticket (User Task)**
   - Front desk employee creates a ticket in an external system
   - Ticket number is captured via a form
9. **Service Task: Save Ticket**
  - Persists the external ticket reference
10. **Credit Administration Review (User Task)**
    - Contract clauses are checked
    - Decision is made to proceed or reject
11. **Service Task: Perform Repayment**
    - Simulated in the demo
    - Represents core banking integration
12. **Mail Task: Notify Customer**
    - Customer receives a completion notification
13. **Service Task: Close Request**
    - Loan payoff request entity is marked as CLOSED
14. **End Event**

## What This Demo Shows
This demo is intentionally designed to highlight **platform capabilities**, not just BPMN modeling:

1. **BPM as the Backbone**
   - The entire process is traceable and inspectable
   - You can see all process instances, their states, and history
   - Every decision is explicit and auditable

   <img src="/images/2026-02-06-loan-payoff-request-demo/bpmn-process.png" alt="bpmn-process.png"  style="width: 80%;">

2. **Forms Without Boilerplate**
   - User tasks are connected to forms built visually
   - Forms evolve together with the process
   - No manual wiring of UI, backend, and persistence

   <img src="/images/2026-02-06-loan-payoff-request-demo/form-designer.png" alt="form-designer.png"  style="width: 80%;">

3. **Entity-Driven Architecture**
   - Database schema is generated automatically

   <img src="/images/2026-02-06-loan-payoff-request-demo/entity-modeller.png" alt="entity-modeller.png"  style="width: 80%;">

   - REST APIs are exposed automatically
   - Administration UI is available out of the box

   <img src="/images/2026-02-06-loan-payoff-request-demo/gen-ui.png" alt="gen-ui.png"  style="width: 80%;">

4. **AI as a First-Class Citizen**
   - AI tasks are just service tasks in BPM
   - Used here to:
     - Calculate taxes
     - Generate customer-friendly emails

   <img src="/images/2026-02-06-loan-payoff-request-demo/loan-payoff-email.png" alt="loan-payoff-email.png"  style="width: 80%;">

   - AI is integrated without complicating the process model

## Extending the Workflow: A Key Demo Moment
A major goal of this demo is to show **how easy it is to extend an existing process**.

As a final step in the demo, we extend the workflow by:
1. **Adding a new Mail Task at the start of the process**
   - Sends an initial notification when the request is received
   - No impact on the rest of the workflow
2. **Extending an Existing Form**
   - The account balance confirmation form is extended with a new field: bulstat
   - No refactoring required
   - Existing process instances remain unaffected

This demonstrates one of the biggest advantages of BPM-driven systems: **change is localized, safe, and transparent.**

## Watch It in Action
In the video, we walk through:
- The live workflow execution
- User tasks and forms
- AI-generated emails
- Process monitoring and traceability
- Extending the process and forms in real time

<iframe width="100%" height="450" src="https://www.youtube.com/embed/x9RIyJ4jzYw" frameborder="0" allowfullscreen></iframe>

## Final Thoughts
This Loan Payoff Request demo shows how codbex platform enables teams to:
- Model real-world business processes
- Combine human tasks, system logic, AI, and integrations
- Maintain full transparency and auditability
- Adapt quickly to new requirements

All of this is achieved without deep plumbing work, letting teams focus on business value rather than infrastructure.

If you are exploring BPM, AI-assisted workflows, or low-code enterprise platforms, this demo is a practical example of how these concepts work together in real life.

💬 Questions or business inquiries?<br>
We'd love to hear from you. Reach out via our [contact page](/contact).
