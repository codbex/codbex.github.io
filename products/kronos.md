---
title: Kronos Edition
---

<div class="product-tag"><a href="https://github.com/codbex/codbex-kronos" target="_blank" class="product-link">Source Code</a></div>

Kronos Edition provides a compatible environment for 
[SAP HANA Extended Application Services](https://help.sap.com/viewer/52715f71adba4aaeb480d946c742d1f6/2.0.03/en-US/a6c0749255d84a81a154a7fc87dd33ce.html) 
(XS) based applications. It is deployed outside of 
[SAP HANA](https://www.sap.com/products/hana.html?btp=991d50bf-fa15-4979-ac4b-b280b0eb951f) instance as a 
[Docker](https://www.docker.com/) a container on [Kubernetes](https://kubernetes.io/). 
Hence, some of the features can work against any other JDBC compliant RDBMS such as [PostgreSQL](https://www.postgresql.org/). 
The compatibility stack is an extension of the [Eclipse Dirigible](https://github.com/eclipse/dirigible) cloud development platform.

This is the official fork of the <a href="https://www.xsk.io" target="_blank">Project "XSK"</a>, which was discontinued by SAP in 2022.

<section>
    <div class="container flex">
        <div class="text">
            <h2>Landscapes - Before and After Migration</h2>
            <p>The main difference is that the engine running the application is now outside HANA instance, 
            hence it is possible to run it for scale on any Kubernetes or Containers as a Service offering - SAP or non-SAP.</p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/kronos-migration-landscape.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Artefacts Handling</h2>
            <p>Native execution of the XS Classic artefacts acheiving near 100% compatibility and completeness 
            is the main driving force behind the product.</p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/kronos-artefacts.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>XSJS Development Experience</h2>
            <p>Supporting further development experience brings limitless benefits for future applications enhancements.</p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/xsjs-engine.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>ABAP Development Experience</h2>
            <p>ABAP development is introduced as an experimental feature by leveraging 
            the <a href="https://github.com/open-abap" target="_blank">Open ABAP</a> and 
            <a href="https://github.com/abaplint" target="_blank">ABAP Lint</a> frameworks.
            </p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/abap-code.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Python Development Experience</h2>
            <p>Python development is available as well backed by the underlying GraalPy engine. The standard APIs can be used in a similar way as they are from JavaScript code.
            </p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/python-code.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Enterprise JavaScript Development</h2>
            <p>JavaScript Engine included is based on the <a href="https://www.graalvm.org/latest/reference-manual/js/" target="_blank">GraalVM JavaScript</a> 
            implementation. It supports also the synchronous programming model in contracts to 
            Node.js which makes it very easy to learn and use. The latest ECMA specification 
            is supported as well as the Common.js one for compatibility reasons. 
            The <a href="https://www.dirigible.io/api/" target="_blank">JavaScript Enterprise API</a> is fully supported in this package.</p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/js-editor.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Debugger</h2>
            <p>The Debugger enables you to monitor the execution of your code, stop it, 
            restart it or set breakpoints, and change values in memory.</p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/debugger-perspective.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Git</h2>
            <p>The Git perspective allows you to fully control your code and manage repositories.
            It also provides Diff Tool for reviewing the changes.</p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/git-perspective.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>User Interfaces</h2>
            <p>Authoring of the user interfaces is powered by the in-system development environment 
            where every change can be immediately visualized in Preview area. 
            The different major frameworks can be combined due to the syndication layout chosen.</p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/ui-widgets.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Databases</h2>
            <p>It visualizes the database related views in a specialized perspective focused on the database 
            administrator tasks. It can be easily deployed on any hosting environment as a Docker container, 
            so that the database inspection and quick changes can be done in a more secure way than exposing 
            the database port itself.</p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/database-perspective.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Import/Export</h2>
            <p>Off-line data migration up to 1GB, is provided for all the supported databases. 
            The relational database tables are transfered in CSV format, while the No-SQL collections in JSON format.
            There is a topology file also provided for each schema, which shows the proper order for import to the target database.
            </p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/database-import.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Transfer</h2>
            <p>On-line data transfer provides way to pipe source datasource and schema to a target ones, so to stream the data transfer.
            </p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/database-transfer.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Snowflake</h2>
            <p>Connecting and analyzing the massive amount of data in Snowflake cloud database is supported out of the box.
            </p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/database-snowflake.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>MongoDB</h2>
            <p>No-SQL database MongoDB support is also built-in, so it can be used for exploring, queries, import and export up to 1GB.
            </p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/database-mongodb.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Anonymization</h2>
            <p>Data anonymization and masking for production data sets containing personal or sensitive data. Supported types of anonymization is based on the specific input columns such as first and last names, addresses, telephones, emails, dates of birth, any numeric or alphanumeric document numbers.
            </p>
        </div>
        <div class="image">
            <img src="{{ site.baseurl }}/images/features/database-anonymization.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

### Development Experience

| Aspect                         | Scope | Description  |
| ------------------------------ |:-----:| -------------|
| Preserve hdb* descriptors      |  ✅   |              |
| Preserve XSJS code             |  ✅   |              |
| Preserve XSOData descriptors   |  ✅   |              |
| Preserve XSC development model |  ✅   |              |
| Preserve XSC security model    |  ⚠️   | Authentication is managed by the runtime container |
| Support for XSJS code          |  ✅   |              |


### Life-cycle Management

| Aspect                                | Scope | Description  |
| ------------------------------------- |:-----:| -------------|
| End-to-end life-cycle management      |  ✅   |              |
| Single-step migration                 |  ✅   |              |
| Can be deployed as a monolith         |  ✅   |              |
| Can be deployed as a microservices    |  ✅   |              |
| Can be deployed on Kubernetes         |  ✅   |              |
| Can be deployed on Cloud Foundry      |  ✅   |              |


### Artifacts Coverage

| Aspect                | Scope | Description  |
| --------------------- |:-----:| -------------|
| .xsjs                 |  ✅   |              |
| .xsjslib              |  ✅   |              |
| .calculationview      |  ⚠️   |              |
| [.hdbprocedure](https://help.sap.com/viewer/3823b0f33420468ba5f1cf7f59bd6bd9/2.0.05/en-US/93de88bf2c8242179647e40f958c24e5.html)         |  ✅   |              |
| [.hdbrole](https://help.sap.com/viewer/3823b0f33420468ba5f1cf7f59bd6bd9/2.0.05/en-US/625d7733c30b4666b4a522d7fa68a550.html)              |  ❌   |              |
| [.hdbsequence](https://help.sap.com/viewer/3823b0f33420468ba5f1cf7f59bd6bd9/2.0.05/en-US/b295c2e0a5d547f8b1717ad7dd52cc90.html)          |  ✅   |              |
| .xsodata              |  ⚠️   |              |
| .hdbdd                |  ⚠️   |              |
| .xsaccess             |  ✅   |              |
| .xsjob                |  ✅   |              |
| .xssecurestore        |  ✅   |              |
| .hdbti (+csv)         |  ✅   |              |
| .xshttpdest           |  ✅   |              |
| .hdbschema            |  ✅   |              |



### XSJS APIs Coverage

| Aspect                                                                                                     | Scope | Description                        |
| ---------------------------------------------------------------------------------------------------------- |:-----:| -----------------------------------|
| [$.session](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.Session.html)         |  ⚠️    | Represents an SAP HANA XS session   |
| [$.request](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.web.WebRequest.html)  |  ✅   | Represents the client HTTP request currently being processed. |
| [$.response](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.web.WebResponse.html)|  ✅   | Represents the HTTP response currently being populated. |
| [$.hdb](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.hdb.html)                 |  ✅   | This namespace provides means for seamless HANA database access. It is intended to be a replacement of the older $.db namespace |
| [$.db](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.db.html)                   |  ✅   | Namespace for HANA database access |
| [$.util](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.util.html)               |  ✅   | Util namespace                     |
| [$.trace](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.trace.html)             |  ✅   | Trace namespace                    |
| [$.import](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.html#import)           |  ✅   | Imports a server-side JavaScript library artifact |
| [$.net](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.net.html)                 |  ✅   | Network namespace                  |
| [$.net.http](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.net.http.html)       |  ✅   | HTTP namespace                     |
| [$.util.codec](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.util.codec.html)   |  ✅   | Codec namespace                    |
| [$.web](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.web.html)                 |  ✅   | Web namespace                      |
| [$.security](https://help.sap.com/doc/3de842783af24336b6305a3c0223a369/2.0.03/en-US/$.security.html)       |  ✅   | Security namespace                 |


## FAQ

- How long will Kronos be supported?

  > Kronos is an open source project with community support. Everyone can join and make a [PR](CONTRIBUTING.md). In fact SAP discontinued official support to project "XSK", and this fork maintained by the same developers is prove that the approach is viable and useful. The company codbex provide enterprise support for Kronos based runtimes.

- Should future developments be based on Kronos?

  > Yes, you can use Kronos for future development.

- What about the tooling? Do we get state of the art tooling for maintaining and enhancing Kronos?

  > Kronos tooling is based on [Eclipse Dirigible](https://www.dirigible.io/) and in the near future it will be possible to maintain Kronos projects with any modern IDE like VSCode, Eclipse Theia, etc.

- What about the ops aspects - will Kronos be smoothly integrated into a state-of-the-art lifecycle and ops management (be it SAP-based or non-SAP based like GitHub Actions?

  > Yes, the Kronos itself uses [GitHub actions](https://github.com/codbex/codbex-kronos/actions) for CI/CD

- Will there be limitations that will not be mitigated?

  > You can get the up-to-date list of covered [features](https://github.com/codbex/codbex-kronos/wiki/Readiness) as well as the [limitations](https://github.com/codbex/codbex-kronos/wiki/Limitations), [cheat sheet](https://github.com/codbex/codbex-kronos/wiki/Cheat-Sheet) and [readiness](https://github.com/codbex/codbex-kronos/wiki/Readiness).


<br>

Support depends on the plan you selected from <a href="https://www.codbex.com/pricing/">Pricing</a>.
