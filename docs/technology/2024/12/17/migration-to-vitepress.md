---
title:  Migration to VitePress from Jekyll and Material for MkDocs
description: When it comes to building and hosting documentation websites, developers have a wealth of tools to choose from. Jekyll and Material for MkDocs are long-standing favorites
date: 2024-12-17
author: yordan
editLink: false
---

# Migration to VitePress from Jekyll and Material for MkDocs

## Overview

When it comes to building and hosting documentation websites, developers have a wealth of tools to choose from. [Jekyll](https://jekyllrb.com/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) are long-standing favorites, and we have successfully used Material for MkDocs across many projects for years. While we were very happy with it, we’ve decided to invest in [Vue](https://vuejs.org/) as a core technology for our applications, making [VitePress](https://vitepress.dev/) — a natural choice from the Vue ecosystem—our new go-to solution. If you're considering migrating to VitePress, here's a high-level overview of the process and the benefits you can expect.

## Why Migrate to VitePress?

1. **Performance**: Built on Vite, VitePress offers blazing-fast hot module replacement (HMR) during development and optimized builds for production.
2. **Modern Features**: Leveraging Vue 3 and Vite, VitePress supports modern JavaScript features, dynamic theming, and Vue-powered interactivity.
3. **Simplicity**: Its minimalistic and opinionated structure ensures that setting up a documentation site is straightforward.
4. **Markdown-First**: Like Jekyll and MkDocs, VitePress uses Markdown, making it a familiar option for existing users.
5. **Customizability**: With Vue at its core, developers can extend and customize their documentation site with ease.

## Key Considerations Before Migration

- **Content Format**: Ensure your existing documentation is in Markdown or can be converted to Markdown format.
- **Hosting Platform**: Verify that your hosting platform supports Node.js-based applications, as VitePress requires a Node.js environment for building and deployment. We used GitHub Pages for our site, and the process was straightforward.
- **Plugins and Extensions**: Check if your Jekyll or MkDocs site relies on specific plugins. You may need to find Vue.js-compatible alternatives or implement custom solutions.

## Migration Process

1. **Set Up VitePress**
   - Install VitePress by initializing a new project:
     ```bash
     npm init vitepress@latest my-docs
     cd my-docs
     npm install
     ```

2. **Migrate Content**
   - Copy your Markdown files (“.md”) from Jekyll’s `_posts` or MkDocs’s `docs/` directory into VitePress’s `docs/` folder.
   - Update front matter syntax if needed. VitePress uses YAML front matter similar to Jekyll, so changes might be minimal.

3. **Recreate Navigation**
   - In Jekyll, navigation is typically managed through layouts or plugins, while MkDocs uses a `mkdocs.yml` file.
   - VitePress uses `config.js` to define the site’s structure. You have to explicitly manage the navigation in this file, and while a sidebar plugin exists, it might not suffice for more complex navigation requirements. It would be a significant improvement if VitePress implemented an auto-discovery feature for `*.md` files to simplify configuration.
     ```javascript
     export default {
       title: 'My Documentation',
       description: 'Documentation powered by VitePress',
       themeConfig: {
         nav: [
           { text: 'Home', link: '/' },
           { text: 'Guide', link: '/guide/' },
         ],
         sidebar: [
           {
             text: 'Guide',
             items: [
               { text: 'Introduction', link: '/guide/' },
               { text: 'Getting Started', link: '/guide/getting-started' },
             ],
           },
         ],
       },
     };
     ```

4. **Customize the Theme**
   - Both Jekyll and Material for MkDocs have theme configuration files. In VitePress, you can customize the theme by modifying `themeConfig` in `config.js` or extending the default theme with Vue components.

5. **Migrate Custom Code and Plugins**

JavaScript and TypeScript support was a key motivator for our decision to migrate to VitePress. This shift enables us to rewrite Jekyll Liquid templates or MkDocs plugins in Vue.js and fully leverage the Vue-based ecosystem for interactivity.
   - Rewrite Jekyll Liquid templates or MkDocs plugins in Vue.js if necessary.
   - Take advantage of VitePress’s Vue-based ecosystem for interactivity.

6. **Test Locally**
   - Run a local development server to test the migrated site:
     ```bash
     npm run dev
     ```
   - Review for missing assets, broken links, or formatting issues.

7. **Build and Deploy**
   - Build the site for production:
     ```bash
     npm run build
     ```
   - Deploy to your hosting platform, such as GitHub Pages, Netlify, or Vercel.

## Benefits Realized

- **Improved Developer Experience**: VitePress’s fast dev server and built-in HMR make development more efficient.
- **Enhanced User Experience**: Optimized builds result in faster load times for end-users.
- **Future-Proofing**: VitePress’s modern architecture ensures long-term compatibility with evolving web technologies.

## Final Thoughts

Migrating to VitePress from Jekyll or Material for MkDocs can seem daunting at first, but with careful planning and execution, it’s a rewarding process. For us, it took around one week to migrate all 400+ pages of our site to VitePress, from getting started to completion. You’ll gain a faster, more flexible documentation site that’s easier to maintain and expand. Whether you're building for a small project or a large-scale enterprise, VitePress is a solid choice for the modern web.

