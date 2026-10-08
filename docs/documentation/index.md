---
title: Home
hide:
  - footer
---

# Welcome to Documentation Portal

Explore detailed information about __codbex__ across two main areas, and the open libraries and standards the platform is built with:

<div style="text-align: center;">
   <img src="/images/styled/goddess-with-books.svg" style="height: 20rem; !important; float: left !important; padding: 2em; padding-right: 4em;"/>
</div>

1. [Platform](platform/index.md): Learn about the __codbex__ Platform and its core features, including languages, engines, artefacts, SDK, widgets, services, and templates.

2. [Tooling](tooling/index.md): Discover the tools provided by __codbex__ in the Workbench, Git perspective, Databases perspective, Terminal perspective, Processes Workspace perspective, and more.

Feel free to click on each area to access specific documentation sections. Whether you're a developer, administrator, or user, __codbex__ documentation provides comprehensive information to help you make the most of the platform's capabilities.

## Libraries and Standards

Applications on the __codbex__ platform are described as intent, run on a TypeScript SDK, and render with a component library. Each of these layers is open, has its own documentation site, and can be used on its own.

| | What it is | Use it for | License |
|---|---|---|---|
| [Intent File](#intent-file) | Open specification for describing a whole application as intent | Authoring the source of truth an application is generated from | Open standard |
| [AeroKit](#aerokit) | Server-side TypeScript SDK (`@aerokit/sdk`) | Services, entities, jobs, integrations and extensions | MIT |
| [Harmonia](#harmonia) | UI component library for Alpine.js (`@codbex/harmonia`) | The user interface of generated and hand-written applications | MIT |
| [BlimpKit](#blimpkit) | UI component library for AngularJS | Workbench perspectives, views and IDE extensions | EPL-2.0 |

### Intent File

An Intent File (`*.intent`) is a single, readable YAML document that is the source of truth for a whole application: its entities and relations, business rules, processes, forms, reports, roles and seed data, together with the declarative glue between them, such as notifications, schedules, roll-ups and integrations. A conforming generator reads the file and deterministically produces the model artefacts and, from those, the complete running application. Identical intent yields identical output, so the file is small enough to read, stable enough to diff and version, and structured enough for a person or an AI assistant to propose reviewable changes against.

The format is published as an open, vendor-neutral standard at [intentfile.org](https://intentfile.org), where you will find the specification, the DSL reference and worked examples. On the __codbex__ platform, intents are authored with the Intent Editor in the [Modeling](tooling/modeling/index.md) tooling, which generates the Entity Data Model, processes, forms and reports below them.

* [Specification](https://intentfile.org/spec/), [DSL reference](https://intentfile.org/reference) and [examples](https://intentfile.org/examples)
* [Intent-Driven Development finds its home at intentfile.org](/news/2026/07/24/intent-driven-development-home-at-intentfile)
* [BusinessIntents, a whole business suite written as intent](/marketing/2026/10/08/introducing-businessintents-business-software-written-as-intent)

### AeroKit

AeroKit is the server-side TypeScript SDK of the platform, published as `@aerokit/sdk`. It is modular, with more than thirty specialized modules covering databases, HTTP and REST, components and dependency injection, messaging, caching, security, mail, templates and more, so an application imports only what it needs. It follows a code-as-configuration approach: services, entities, controllers and jobs are declared directly in TypeScript with decorators instead of XML or JSON descriptors, with full type safety and IDE support. Code runs live inside the platform runtime, so a saved controller answers requests immediately, with no build or deployment pipeline in between.

AeroKit is open source under the MIT license.

* [AeroKit documentation and API reference](https://www.codbex.com/aerokit/)
* [Source code on GitHub](https://github.com/codbex/aerokit)
* [Platform SDK overview](platform/sdk/index.md) in this portal

```sh
npm install @aerokit/sdk
```

### Harmonia

Harmonia is a modern UI component library for [Alpine.js](https://alpinejs.dev/), built with Tailwind CSS v4 and published as `@codbex/harmonia`. It ships more than seventy production-ready components, from buttons, inputs and dialogs to calendars, data tables and SVG charts, plus layouts, utilities and opt-in plugins for internationalization and icons. Every component is a plain `x-h-*` Alpine directive on your markup, accessible by default, and themeable through design tokens with automatic light and dark mode. There is no build step: markup renders and becomes interactive the moment it reaches the browser, which is why Harmonia is the UI layer of the applications the platform generates from intent. Harmonia also ships an agent-readable skill so coding agents can use every component correctly.

Harmonia is open source under the MIT license.

* [Harmonia documentation and component gallery](https://www.codbex.com/harmonia/)
* [Source code on GitHub](https://github.com/codbex/harmonia)
* [Introducing Harmonia: instant UIs, zero build step](/marketing/2026/08/04/introducing-harmonia-instant-uis-zero-build-step)

```sh
npm install @codbex/harmonia
```

### BlimpKit

BlimpKit is a UI component library for AngularJS based on SAP's fundamental-styles. It is the component set the __codbex__ Workbench itself is built with, and the toolkit for extending it: new perspectives, views, editors, dialogs and menus plug into the IDE with the same look and behaviour as the built-in tooling. Use BlimpKit when you are extending the development environment; use Harmonia for the user interface of the applications you build.

BlimpKit is open source under the Eclipse Public License 2.0.

* [BlimpKit documentation and component reference](https://blimpkit.dev/)
* [Source code on GitHub](https://github.com/blimpkit/blimpkit)
* [Extensibility](tooling/extensibility.md) of the Workbench in this portal
