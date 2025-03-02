---
title: Gaia Edition
editLink: false

layout: home

hero:
  name: Gaia Edition
  text: Runtime basis
---

<div class="product-tag">

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/codbex/codbex-gaia)

[![Eclipse License](https://img.shields.io/badge/License-EPL%202.0-brightgreen.svg?style=for-the-badge)](https://github.com/codbex/codbex-gaia/blob/main/LICENSE)

[![Maven Central](https://img.shields.io/maven-central/v/com.codbex.gaia/codbex-gaia-application.svg?style=for-the-badge)](https://central.sonatype.com/namespace/com.codbex.gaia)

</div>

Gaia Edition includes all the basic platform runtime for products.

It provides all the standard components except the Web IDE as a base Docker image for products - `ghcr.io/codbex/codbex-gaia`.

```shell
# Docker descriptor for codbex-aion
# License - http://www.eclipse.org/legal/epl-v20.html

FROM ghcr.io/codbex/codbex-gaia:latest

COPY codbex-aion target/dirigible/repository/root/registry/public/codbex-aion
COPY codbex-aion-data target/dirigible/repository/root/registry/public/codbex-aion-data
COPY codbex-ext target/dirigible/repository/root/registry/public/codbex-ext

ENV DIRIGIBLE_HOME_URL=/services/web/codbex-aion/gen/index.html
```

<br>

Support depends on the plan you selected from [pricing](/pricing/).

