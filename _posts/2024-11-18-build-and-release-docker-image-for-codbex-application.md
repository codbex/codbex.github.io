---
date: 2024-11-18
title:  Building and Releasing Docker Image for codbex Application
categories:
  - technology
author: tomislav
---

# Building and Releasing Docker Image for codbex Application

At **codbex**, we leverage Docker for creating lightweight, portable application images. In this blog, we’ll walk through building a Docker image for a **codbex** application using GitHub Actions and releasing it.

> _**Note:** This blog referances [Building and Releasing a Docker Image for an Eclipse Dirigible Application](https://www.dirigible.io/blogs/2024/11/18/build-and-release/)_

# Necessary Files

In your repository you should have two folders `application` and `application-data-sample`, representing two Dirigible application modules. The following files should be created in each of them.

## Dockerfile

A Dockerfile is crucial for defining the environment and steps for building a Docker image. It specifies the:

- Base image to use (e.g. `codbex-gaia`).
- What to be included in the image from the repository.
- The dependencies of the application specified in the `package.json` that are installed during the build process. 
- The home url of the application via the `DIRIGIBLE_HOME_URL` environment variable.


Example:

```Dockerfile
FROM ghcr.io/codbex/codbex-gaia:0.26.0

COPY <your-directory> target/dirigible/repository/root/registry/public/<your-directory>
COPY node_modules/@codbex target/dirigible/repository/root/registry/public/

ENV DIRIGIBLE_HOME_URL=/services/web/your-application/index.html
```

**Note:** 

- Replace the `<your-directory>` placeholder with the application module (e.g. `application` or `application-data-sample`).
- In this example the `@codbex` NPM scope is used, indicating that `@codbex/xxx` NPM depdendencies are installed and need for the application. Replace the `@codbex` scope with yours.
- When you use `codbex-gaia` as a base image you should always add `@codbex/ide-branding` in the `package.json`. This is a runtime image only, meaning it excludes things from Eclipse Dirigible like the Web IDE, making it more secure.
- You can use other [Eclipse Dirigible Environment Variables](https://www.dirigible.io/help/setup/setup-environment-variables/).
- Directory `node_modules` is created in the location of your `package.json`. If it isn’t in the base directory you should specify the path like: `your/directory/node-modules/@codbex`.


## package.json

Eclipse Dirigible automatically creates `project.json` file in every project for design-time dependencies. To specify build-time dependencies, `package.json` is used. You need to add the npm packages your application is dependent in the `dependencies` section.

The` package.json` file is essential for:

- Listing dependencies and scripts required for your application to run.
- Ensuring seamless dependency management across environments.

Example:

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

# GitHub Actions

The GitHub Actions, described by the `build.yaml`,` pull-request.yaml` and `release.yaml` files resides in the `.github/workflows/` folder.

## Main Branch Action

### Highlights

1. **Triggers (on)**
   - The workflow runs whenever there’s a push to the `main` branch, ensuring `xxx:latest` images is built from the latest changes.
1. **Jobs**
   - **application**: Builds the main application image. It uses a template `build.yaml` from the [codbex/codbex-infra](https://github.com/codbex/codbex-infra) repository.
   - **application-data-sample**: Builds a secondary image for application data if there is one. The `application-data-sample` should have it’s own` Dockerfile` and `package.json`. Skip this section if the application doesn’t have a data sample.
   - **deploy**: If the application has a `Deploy GitHub Action` you can activate it immediately after building the image. Otherwise skip this section.

Create file like this one:

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
deploy:
needs: [application, application-data-sample]
uses: ./.github/workflows/deploy.yaml
with:
  application-version: latest
secrets: inherit
```

**Note:** install-dependencies and secrets fields are needed for the `codbex-infra` build. By setting install-dependencies to true we tell the build to install the npm packages in the `package.json`. By setting secrets to inherit we pass this repository secrets to the build in `codbex-infra`.

### Reusable GitHub Actions

The workflow `application-build.yaml` and others in `codbex-infra` encapsulates reusable build logic. This promotes consistency and reduces duplication across **codbex** projects. 

#### **Highlights**

1. **Checkout Code**:
   - The `actions/checkout` action fetches the repository’s code.
1. **Install Dependencies**:
   - Dependencies are installed based on the `package.json` file if `install-dependencies` is true.
1. **Build and Push Docker Image**:
   - `docker buildx` creates a multi-architecture image.
   - The image is tagged and pushed to GitHub Container Registry (GHCR).

> _**Note:** This is example of a resusable GitHub action, that is used in codbex projects. This file shouldn’t be added in your project. Go to [codbex/codbex-infra](https://github.com/codbex/codbex-infra/tree/main/.github/workflows) to find more reusable workflows._

```yaml
name: Application - Build

on:
  workflow_call:
inputs:
  application-name:
    required: true
    type: string
  install-dependencies:
    type: boolean
    default: false
  dockerfile-location:
    type: string
    default:  ./

jobs:
  build:
runs-on: ubuntu-latest
    
steps:
  - uses: actions/checkout@v3
    with:
      	fetch-depth: 0

  - name: Install NodeJS
    if: ${{ inputs.install-dependencies }}
    	uses: actions/setup-node@v4
    	with:
      	node-version: 18

  - name: Install Dependencies
    if: ${{ inputs.install-dependencies }}
    run: |
      	cd ${{ inputs.dockerfile-location }}
      	echo "@codbex:registry=https://npm.pkg.github.com
      	//npm.pkg.github.com/:_authToken=${{ secrets.GH_TOKEN }}" > .npmrc
      	npm install
      	rm -rf .npmrc

  - name: Build and Push Docker Image
    run: |
      	cd ${{ inputs.dockerfile-location }}
      	docker buildx create --name codbex-builder
      	docker buildx use codbex-builder
      	docker buildx build --tag ${{ inputs.application-name }} -o type=image --platform=linux/arm64,linux/amd64 .
      	docker login ghcr.io -u ${{ secrets.DOCKER_USERNAME }} -p ${{ secrets.DOCKER_PASSWORD }}
      	docker buildx build --push --tag ghcr.io/codbex/${{ inputs.application-name }}:latest -o type=image --platform=linux/arm64,linux/amd64 .
```

**Note:**

- This build template assumes that your `Dockerfile` and `package.json` are in the same directory.
- This build template assumes that you have `GH_TOKEN` repository secret with granted permission to read and write
- This build template assumes that you have `DOCKER_USERNAME` and `DOCKER_PASSWORD` repository secrets that login to a user with permissions to build and publish Docker images to the **codbex** registry.

## Pull Request Action

This workflow achieves the exact same functionality as the` build.yaml` except the deployment. More differences will arise when we take a look at the `application-pull-request.yaml` in `codbex-infra`.

Create a file like this one:

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
application-data-sample:
uses: codbex/codbex-infra/.github/workflows/application-pull-request.yaml@main
with:
  application-name: codbex-application-data-sample
  install-dependencies: true
  dockerfile-location: application-data-sample/
secrets: inherit
```

## Release Action

### Highlights:

1. **Version Control**: Setting the release version dynamically through `workflow_dispatch`.
1. **Application Build**: Ensuring the application and its associated components (e.g., data samples) are built using the release version.
1. **Docker Image Deployment**: Pushing versioned Docker images to GitHub Container Registry (GHCR).

Create a file like this one:

```yaml
name: Release - Application

on:
workflow_dispatch:
inputs:
  release-version:
    description: Release Version
    required: true
    default: 1.0.0

run-name: 'version set to ${{ inputs.release-version }} for release'

jobs:
application:
uses: codbex/codbex-infra/.github/workflows/application-release.yaml@main
with:
  application-name: codbex-application
  install-dependencies: true
  dockerfile-location: application/
  release-version: ${{ inputs.release-version }}
  release-content: |
    ## codbex-hermes - ${{ inputs.release-version }}

    Customer Management Application

    ## Deployment

    ```
    docker run --name codbex-application \
    --rm -p 80:80 \
    ghcr.io/codbex/codbex-application:${{ inputs.release-version }}
    ```

    ### Sample Data

    ```
    docker run --name codbex-application-data-sample \
    --rm -p 80:80 \
    ghcr.io/codbex/codbex-application-data-sample:${{ inputs.release-version }}
    ```

    ## Access points:

    - [/services/web/codbex-application/gen/](http://localhost:80/services/web/codbex-application/gen/) - Admin Panel
secrets: inherit
application-data-sample:
uses: codbex/codbex-infra/.github/workflows/application-release.yaml@main
with:
  application-name: codbex-application-data-sample
  install-dependencies: true
  dockerfile-location: application-data-sample/
  release-version: ${{ inputs.release-version }}
  release-create-branch: false
secrets: inherit
deploy:
needs: [application, application-data-sample]
uses: ./.github/workflows/deploy.yaml
with:
  application-version: ${{ inputs.release-version }}
secrets: inherit
```

**Note:** 

- This workflow is activated manually through the Action section of your repository. There you set the release version.
- There again is a section for data-sample that should be removed if you don’t have one.

# Release the Docker image

After completing the previous steps when you go to the Action section in your projects repository the available actions should be listed in the menu on the left. Open the Release Application action and click on the button `run manually`. After that in the input field type the release version (like: 0.1.0). When the build completes you should have a builded and released Docker image of your application.


# Takeaways

By leveraging Docker and GitHub Actions, we’ve automated the entire process of building, testing, and releasing Docker images for **codbex** applications. This approach ensures consistency, reproducibility, and efficiency across your development pipeline.
