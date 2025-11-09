# API: decorators

> Source: `db/decorators.ts`

* ECMAScript 2025-compliant ORM decorator implementation
Compatible with GraalJS runtime.
* Features:
- Uses context.addInitializer for stable decorator timing
- Stores metadata in a global WeakMap cache
- Finalizes entity metadata once per class
- Defers finalization via microtask (Promise.resolve().then)

## Usage
```javascript
// ----------------
// CountryEntity.ts
// ----------------

import { Entity, Table, Id, Generated, Column, Documentation } from "sdk/db";

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

// --------------------
// CountryRepository.ts
// --------------------

import { CountryEntity } from "./CountryEntity";
import { Repository, EntityConstructor } from "sdk/db";
import { Component } from "sdk/component";

@Component('CountryRepository')
export class CountryRepository extends Repository<CountryEntity> {

    constructor() {
        super((CountryEntity as EntityConstructor));
    }

}

CountryRepository;
```


