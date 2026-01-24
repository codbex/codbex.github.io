# API Documentation

> **Accelerate your application and integration development with a unified TypeScript SDK for modern cloud platforms.**

---

## Overview

`@aerokit/sdk` provides a **modular**, **server-side TypeScript** runtime API designed for developing lightweight applications, automation scripts, and extensions across cloud or on-premise environments.

---

## Core Features

- **TypeScript-first API** – Rich type definitions and IDE autocompletion for productive, safe scripting.  
- **Unified platform model** – Common abstractions for HTTP, I/O, Database, Filesystem, Security, Jobs, and Messaging.  
- **Built-in decorators** – Simplify development with `@Controller`, `@Entity`, `@Scheduled`, `@Component`, `@Injected`, and more.  
- **Seamless dependency injection** – Lightweight IoC mechanism for connecting modular business logic.  
- **Pluggable persistence** – Work with SQL and NoSQL through the `sdk/sdk/db` API.  
- **Enterprise-ready HTTP layer** – Build APIs and web services with `sdk/sdk/http`.  
- **Background jobs and listeners** – Schedule recurring tasks using `sdk/sdk/job` or event-driven listeners with `sdk/component`.  
- **Extensible runtime** – Deploy, extend, and run modules dynamically without redeployment.  

---

## Example

### `CountryEntity.ts`

```typescript
import { Entity, Table, Id, Generated, Column, Documentation } from "@aerokit/sdk/db";

@Entity("CountryEntity")
@Table("SAMPLE_COUNTRY")
@Documentation("Sample Country Entity")
export class CountryEntity {

    @Id()
    @Generated("sequence")
    @Column({ name: "COUNTRY_ID", type: "long" })
    @Documentation("My Id")
    public Id?: number;

    @Column({ name: "COUNTRY_NAME", type: "string" })
    @Documentation("My Name")
    public Name?: string;

    @Column({ name: "COUNTRY_CODE2", type: "string" })
    public Code2?: string;

    @Column({ name: "COUNTRY_CODE3", type: "string" })
    public Code3?: string;

    @Column({ name: "COUNTRY_NUMERIC", type: "string" })
    public Numeric?: string;

}
```

### `CountryRepository.ts`

```typescript
import { Repository, EntityConstructor } from "@aerokit/sdk/db";
import { Component } from "@aerokit/sdk/component";
import { CountryEntity } from "./CountryEntity";

@Component('CountryRepository')
export class CountryRepository extends Repository<CountryEntity> {

    constructor() {
        super((CountryEntity as EntityConstructor));
    }

}

CountryRepository;
```

### `CountryController.ts`

```typescript
import { Controller, Get, Documentation } from "@aerokit/sdk/http"
import { HttpUtils } from "@aerokit/sdk/http/utils";
import { Options } from "@aerokit/sdk/db";
import { Injected, Inject } from "@aerokit/sdk/component";
import { CountryEntity } from "./CountryEntity";
import { CountryRepository } from "./CountryRepository";

@Controller
@Documentation("Sample Country Controller")
@Injected()
class CountryController {

    @Inject('CountryRepository')
    private readonly repository!: CountryRepository;

    @Get("/")
    @Documentation("Sample Get All Countries")
    public getAll(): CountryEntity[] {
        try {
            const options: Options = {limit: 20, offset: 0};
            return this.repository.findAll(options);
        } catch (error: any) {
            HttpUtils.sendInternalServerError(error.message);
        }
        return [];
    }

}
```

## Use Cases

- API-first business logic for internal or customer apps.
- Lightweight integrations between enterprise systems.
- Automation scripts (scheduled or event-driven).
- Custom platform extensions in modular runtimes.

## Philosophy

`@aerokit` follows a code-as-configuration philosophy — instead of XML or JSON descriptors, you define services, entities, and jobs directly in TypeScript using decorators.
This makes your code self-documenting, testable, and portable across environments.

## Getting Started

```npm install @aerokit/sdk```


Then import only what you need:

```javascript
import { Request, Response } from "@aerokit/sdk/http";
import { Entity, Column } from "@aerokit/sdk/db";
```

## SDK Modules

### BPM

- [deployer](./bpm/deployer.md)
- [process](./bpm/process.md)
- [tasks](./bpm/tasks.md)
- [values](./bpm/values.md)

### CACHE

- [cache](./cache/cache.md)

### CMS

- [cmis](./cms/cmis.md)

### COMPONENT

- [decorators](./component/decorators.md)

### CORE

- [configurations](./core/configurations.md)
- [context](./core/context.md)
- [env](./core/env.md)
- [globals](./core/globals.md)

### DB

- [dao](./db/dao.md)
- [database](./db/database.md)
- [decorators](./db/decorators.md)
- [insert](./db/insert.md)
- [orm](./db/orm.md)
- [ormstatements](./db/ormstatements.md)
- [procedure](./db/procedure.md)
- [query](./db/query.md)
- [repository](./db/repository.md)
- [sequence](./db/sequence.md)
- [sql](./db/sql.md)
- [store](./db/store.md)
- [translator](./db/translator.md)
- [update](./db/update.md)

### ETCD

- [client](./etcd/client.md)

### EXTENSIONS

- [extensions](./extensions/extensions.md)

### GIT

- [client](./git/client.md)

### HTTP

- [client-async](./http/client-async.md)
- [client](./http/client.md)
- [decorators](./http/decorators.md)
- [errors](./http/errors.md)
- [request](./http/request.md)
- [response](./http/response.md)
- [rs](./http/rs.md)
- [session](./http/session.md)
- [upload](./http/upload.md)
- [utils](./http/utils.md)

### INDEXING

- [searcher](./indexing/searcher.md)
- [writer](./indexing/writer.md)

### INTEGRATIONS

- [integrations](./integrations/integrations.md)

### IO

- [bytes](./io/bytes.md)
- [files](./io/files.md)
- [image](./io/image.md)
- [streams](./io/streams.md)
- [zip](./io/zip.md)

### JOB

- [decorators](./job/decorators.md)
- [scheduler](./job/scheduler.md)

### JUNIT

- [junit](./junit/junit.md)

### KAFKA

- [consumer](./kafka/consumer.md)
- [producer](./kafka/producer.md)

### LOG

- [logging](./log/logging.md)

### MAIL

- [client](./mail/client.md)

### MESSAGING

- [consumer](./messaging/consumer.md)
- [decorators](./messaging/decorators.md)
- [producer](./messaging/producer.md)

### MONGODB

- [client](./mongodb/client.md)
- [dao](./mongodb/dao.md)

### NET

- [soap](./net/soap.md)
- [websockets](./net/websockets.md)

### PDF

- [pdf](./pdf/pdf.md)

### PLATFORM

- [command](./platform/command.md)
- [engines](./platform/engines.md)
- [lifecycle](./platform/lifecycle.md)
- [os](./platform/os.md)
- [problems](./platform/problems.md)
- [registry](./platform/registry.md)
- [repository](./platform/repository.md)
- [workspace](./platform/workspace.md)

### QLDB

- [qldb](./qldb/qldb.md)

### RABBITMQ

- [consumer](./rabbitmq/consumer.md)
- [producer](./rabbitmq/producer.md)

### REDIS

- [client](./redis/client.md)

### SECURITY

- [decorators](./security/decorators.md)
- [oauth](./security/oauth.md)
- [user](./security/user.md)

### TEMPLATE

- [engines](./template/engines.md)

### UTILS

- [alphanumeric](./utils/alphanumeric.md)
- [base64](./utils/base64.md)
- [converter](./utils/converter.md)
- [digest](./utils/digest.md)
- [escape](./utils/escape.md)
- [hex](./utils/hex.md)
- [jsonpath](./utils/jsonpath.md)
- [qrcode](./utils/qrcode.md)
- [url](./utils/url.md)
- [utf8](./utils/utf8.md)
- [uuid](./utils/uuid.md)
- [xml](./utils/xml.md)


