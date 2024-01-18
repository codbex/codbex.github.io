---
title: Gaia Edition
---

<div style="text-align: center;">
   <img src="/images/products/Gaia.svg" style="width: 30%; !important;"/>
</div>

<div class="product-tag"><a href="https://github.com/codbex/codbex-gaia" target="_blank" class="product-link">Source Code</a></div>

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

Support depends on the plan you selected from <a href="https://www.codbex.com/pricing/">Pricing</a>.

