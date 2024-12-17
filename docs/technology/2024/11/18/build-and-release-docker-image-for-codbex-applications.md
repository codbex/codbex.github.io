---
title:  Building and Releasing Docker Image for codbex Applications
description: At codbex, we rely on Docker to create lightweight, portable application images. This post will guide you through the step-by-step process of building a Docker image for a codbex application using GitHub Actions and automating its release
date: 2024-11-18
author: tomi
editLink: false
---

# Building and Releasing Docker Image for codbex Applications

At **codbex**, we rely on Docker to create lightweight, portable application images. This post will guide you through the step-by-step process of building a Docker image for a **codbex** application using **GitHub Actions** and automating its release.

::: tip Related Content
Learn more about Dockerizing Eclipse Dirigible applications in [this blog post](https://www.dirigible.io/blogs/2024/11/18/build-and-release/).
:::

## Why Docker for codbex Applications?

Docker streamlines deployment by packaging your application with all its dependencies. This ensures:

- **Portability**: Run your application on any environment.
- **Reproducibility**: Consistent builds across development, staging, and production.
- **Efficiency**: Reduce manual setup with automated workflows.

In this guide, we’ll focus on creating Docker images for **codbex** applications, including setup, GitHub Actions workflows, and best practices.

## Setting Up Your Project

Your repository should contain two key folders:  
1. `application` - Your main application module.  
2. `application-data-sample` - An optional folder for sample data modules (if applicable).  

Here’s what you’ll need:

### Dockerfile

The `Dockerfile` defines the environment and steps for building your Docker image. Here’s an example tailored for a **codbex** application:

```Dockerfile
FROM ghcr.io/codbex/codbex-gaia:0.26.0

COPY <your-application> target/dirigible/repository/root/registry/public/<your-application>
COPY node_modules/@codbex target/dirigible/repository/root/registry/public/

ENV DIRIGIBLE_HOME_URL=/services/web/<your-application>/index.html
```

**Key Notes:**
- Replace `<your-directory>` with the actual application folder name (e.g., `application` or `application-data-sample`).
- The base image `codbex-gaia` includes runtime essentials but excludes tools like the Web IDE for improved security.  
- Always include `@codbex/ide-branding` in your `package.json` dependencies, or your own custom branding module.  
- You can set additional [Eclipse Dirigible environment variables](https://www.dirigible.io/help/setup/setup-environment-variables/).  

### package.json

The `package.json` file manages build-time dependencies and scripts. Here's an example:

```json
{
  "scripts": {
    "login": "npm login --scope=@codbex --auth-type=legacy --registry=https://npm.pkg.github.com"
  },
  "dependencies": {
    "@codbex/codbex-package1": "0.1.0",
    "@codbex/codbex-package2": "0.1.0",
    "@codbex/ide-branding": "0.1.0"
  }
}
```

**Why package.json?**
- Ensures consistent dependency management across builds.  
- Specifies required npm packages in the `dependencies` section.  

## Automating with GitHub Actions

GitHub Actions simplifies CI/CD by automating Docker builds and releases. Place workflow files in the `.github/workflows/` folder of your repository.

### Main Branch Workflow

Trigger builds automatically on every `main` branch push. Here’s an example `build.yaml`:

```yaml
name: Build - Application

on:
  push:
    branches:
      - main

jobs:
  application:
    uses: codbex/codbex-infra/.github/workflows/application-build.yaml@main
    with:
      application-name: codbex-application
      install-dependencies: true
      dockerfile-location: application/
    secrets: inherit

  application-data-sample:
    uses: codbex/codbex-infra/.github/workflows/application-build.yaml@main
    with:
      application-name: codbex-application-data-sample
      install-dependencies: true
      dockerfile-location: application-data-sample/
    secrets: inherit
```

**Highlights:**
- The [codbex/codbex-infra](https://github.com/codbex/codbex-infra) repository provides reusable workflows like `application-build.yaml`.
- Dependencies are installed automatically if `install-dependencies` is set to `true`.
- Secrets are passed securely via `secrets: inherit`.

### Pull Request Workflow

For pull requests, skip deployments but still build Docker images. Here’s a sample configuration:

```yaml
name: Pull Request - Application

on:
  pull_request:
    branches:
      - main

jobs:
  application:
    uses: codbex/codbex-infra/.github/workflows/application-pull-request.yaml@main
    with:
      application-name: codbex-application
      install-dependencies: true
      dockerfile-location: application/
    secrets: inherit
```

### Release Workflow

Trigger releases manually via `workflow_dispatch` to push versioned Docker images. Example:

```yaml
name: Release - Application

on:
  workflow_dispatch:
    inputs:
      release-version:
        description: Release Version
        required: true
        default: 1.0.0

jobs:
  application:
    uses: codbex/codbex-infra/.github/workflows/application-release.yaml@main
    with:
      application-name: codbex-application
      install-dependencies: true
      dockerfile-location: application/
      release-version: ${{ inputs.release-version }}
    secrets: inherit
```

## Releasing the Docker Image

1. Navigate to the **Actions** tab in your repository.  
2. Select the **Release - Application** workflow.  
3. Input the release version (e.g., `1.0.0`) and click **Run workflow**.  

Once complete, your Docker image will be available in GitHub Container Registry (GHCR).

## Key Takeaways

By integrating Docker and GitHub Actions, **codbex** achieves:  
- **Automated Builds**: Push changes, and the pipeline handles the rest.  
- **Consistency**: Ensure uniform builds and deployments.  
- **Scalability**: Simplify development across teams and projects.

Start streamlining your development today and unleash the full potential of CI/CD with Docker and GitHub Actions!
