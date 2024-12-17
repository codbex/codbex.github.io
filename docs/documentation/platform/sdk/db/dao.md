# Data Access Object (DAO)

## Introduction

The provided code defines a Data Access Object (DAO) module in JavaScript/TypeScript for interfacing with a database. The module is intended to work with a specific Object-Relational Mapping (ORM) configuration.

Here's an overview of the main functionalities:

## DAO Constructor:

```javascript
export function DAO(orm, logCtxName, dataSourceName) { ... }
```

**Parameters:**

* `orm`: The Object-Relational Mapping configuration.
* `logCtxName`: (Optional) Log context name.
* `dataSourceName`: (Optional) Data source name.

## Methods

### execute(sqlBuilder, parameterBindings)

Executes SQL statements (select, insert, update) based on the provided SQL builder and parameter bindings.

**Parameters:**

* `sqlBuilder`: SQL statement builder.
* `parameterBindings`: Parameter bindings for the SQL statement.

### notify(event)

Notifies an event.

**Parameters:**

* `event`: Event to notify.

### createSQLEntity(entity)

Prepares a JSON object for insertion into the database.

### createEntity(resultSetEntry, entityPropertyNames)

Creates an entity as a JSON object from a ResultSet current row.

### validateEntity(entity, skip)

Validates the entity based on mandatory properties.

### insert(_entity)

Inserts an entity or an array of entities into the database.

### update(entity)

Updates an entity in the database.

### remove(...)

Deletes an entity by ID or an array of IDs, or deletes all entities.

### expand(expansionPath, context)

Expands an entity based on the provided expansion path and context.

### find(id, expand, select)

Reads a single entity by ID, parsed into a JSON object. It supports expansion and selection.

### count(settings)

Counts entities based on the provided settings.

### list(settings)

Lists entities based on the provided settings, supporting expansion and selection.

### existsTable()

Checks if the table associated with the ORM definition exists.

### createTable()

Creates the table associated with the ORM definition.

### dropTable(dropIdSequence)

Drops the table associated with the ORM definition, optionally dropping the ID sequence.

## Additional Functions:

### isNotEmptyArray(array)

Checks if an array is not empty.

### create(oDefinition, logCtxName, dataSourceName)

Creates a DAO instance based on the ORM definition.

### dao(oDefinition, logCtxName, dataSourceName)

Alias for the create function.

## Usage Example:

```javascript
import { dao } from "sdk/db";

//create a DAO from configuration
const customers = dao.create({
    table: "CUSTOMERS",
    properties: [{
        name: "id",
        column: "ID",
        type: "BIGINT",
        id: true
    }, {
        name: "orgName",
        column: "ORG_NAME",
        type: "VARCHAR",
        required: true
    }, {
        name: "employeesNumber",
        column: "ORG_EMP_NUM",
        type: "INTEGER",
        required: true
    }, {
        name: "orgDescription",
        column: "ORG_DESCR",
        type: "VARCHAR",
        required: false
    }]
});

//Create CUSTOMERS table
customers.createTable();

try {

    //Create a new customer entity
    let customerId = customers.insert({
        orgName: "ACME",
        employeesNumber: 1000
    });

    //List all customer entities
    let customersList = customers.list();

    //Get a particular customer entity by its id
    let customer = customers.find(customerId);

    //Update a customer entity property
    customer.orgDescription = "ACME is a company";
    customers.update(customer);

    //Delete a customer entity
    customers.remove(customerId);

} finally {
    //Drop CUSTOMERS table
    customers.dropTable();
}
```


### Advance Usage

#### "Filter"

To apply filter use the `$filter` property with the followin options:

- `equals` - exact match of the given value(s) _(single value or array of values)_.
- `notEquals` - exclude for the given value(s) from the result _(single value or array of values)_.
- `contains` - performs `LIKE %...%` operation _(case sensitive)_.
- `greaterThan` - performs comparison operation _(`>`)_.
- `lessThan` - performs comparison operation _(`<`)_.
- `greaterThanOrEqual` - performs comparison operation _(`>=`)_.
- `lessThanOrEqual` - performs comparison operation _(`<=`)_.

::: info 
The "key" (e.g. `Team`, `Country`, etc.) should match a property in the DAO definition.
:::

::: details DAO Definition

```javascript

import { dao as daoApi } from "sdk/db";

const dao = daoApi.create({
    table: "SAMPLE_EMPLOYEE",
    properties: [
    {
        name: "Id",
        column: "EMPLOYEE_ID",
        type: "INTEGER",
        id: true,
        autoIncrement: true,
    },
    {
        name: "Name",
        column: "EMPLOYEE_NAME",
        type: "VARCHAR",
    },
    {
        name: "Email",
        column: "EMPLOYEE_EMAIL",
        type: "VARCHAR",
    },
    {
        name: "Phone",
        column: "EMPLOYEE_PHONE",
        type: "VARCHAR",
    },
    {
        name: "Address",
        column: "EMPLOYEE_ADDRESS",
        type: "VARCHAR",
    },
    {
        name: "PostCode",
        column: "EMPLOYEE_POSTCODE",
        type: "VARCHAR",
    },
    {
        name: "City",
        column: "EMPLOYEE_CITY",
        type: "VARCHAR",
    },
    {
        name: "Country",
        column: "EMPLOYEE_COUNTRY",
        type: "VARCHAR",
    },
    {
        name: "Team",
        column: "EMPLOYEE_TEAM",
        type: "INTEGER",
    },
    {
        name: "Company",
        column: "EMPLOYEE_COMPANY",
        type: "INTEGER",
    },
    {
        name: "Vacation",
        column: "EMPLOYEE_VACATION",
        type: "INTEGER",
    }
    ]
});
```
:::

```javascript
const data = dao.list({
    $filter: {
        equals: {
            Team: [11, 12, 18]
        },
        notEquals: {
            Country: ["Indonesia", "Chile"],
            Company: 4
        },
        contains: {
            Address: "Cedar St",
            City: "town"
        },
        greaterThan: {
            Vacation: 20
        },
        // lessThan: {
        //     Vacation: 35
        // },
        // greaterThanOrEqual: {
        //     Vacation: 20
        // },
        lessThanOrEqual: {
            Vacation: 35
        }
    }
});
```

The following SQL is being executed:

```sql
SELECT * FROM "SAMPLE_EMPLOYEE"
WHERE ("EMPLOYEE_TEAM" IN (?, ?, ?))
    AND ("EMPLOYEE_COUNTRY" NOT IN (?, ?))
    AND ("EMPLOYEE_COMPANY" != ?)
    AND ("EMPLOYEE_ADDRESS" LIKE ?)
    AND ("EMPLOYEE_CITY" LIKE ?)
    AND ("EMPLOYEE_VACATION" > ?)
    AND ("EMPLOYEE_VACATION" <= ?)
```

#### "Select"

The `$select` property can be used to select only a set of properties/columns from the DAO query.

::: info
The selected "key" (e.g. `Name`, `Country`, etc.) should match a property in the DAO definition.
:::

::: details DAO Definition
```javascript
import { dao as daoApi } from "sdk/db";

const dao = daoApi.create({
    table: "SAMPLE_EMPLOYEE",
    properties: [
    {
        name: "Id",
        column: "EMPLOYEE_ID",
        type: "INTEGER",
        id: true,
        autoIncrement: true,
    },
    {
        name: "Name",
        column: "EMPLOYEE_NAME",
        type: "VARCHAR",
    },
    {
        name: "Email",
        column: "EMPLOYEE_EMAIL",
        type: "VARCHAR",
    },
    {
        name: "Phone",
        column: "EMPLOYEE_PHONE",
        type: "VARCHAR",
    },
    {
        name: "Address",
        column: "EMPLOYEE_ADDRESS",
        type: "VARCHAR",
    },
    {
        name: "PostCode",
        column: "EMPLOYEE_POSTCODE",
        type: "VARCHAR",
    },
    {
        name: "City",
        column: "EMPLOYEE_CITY",
        type: "VARCHAR",
    },
    {
        name: "Country",
        column: "EMPLOYEE_COUNTRY",
        type: "VARCHAR",
    },
    {
        name: "Team",
        column: "EMPLOYEE_TEAM",
        type: "INTEGER",
    },
    {
        name: "Company",
        column: "EMPLOYEE_COMPANY",
        type: "INTEGER",
    },
    {
        name: "Vacation",
        column: "EMPLOYEE_VACATION",
        type: "INTEGER",
    }
    ]
});
```
:::

```javascript
const data = dao.list({
    $select: ["Name", "Country", "Company"]
});
```

The following SQL is being executed:

```sql
SELECT "EMPLOYEE_NAME", "EMPLOYEE_COUNTRY", "EMPLOYEE_COMPANY" FROM "SAMPLE_EMPLOYEE"
```

#### "Limit and Offset"

The `$limit` and `$offset` properties can be used together to achieve pagination of large data sets.

::: info
Values for both `$limit` and `$offset` should be provided.
:::

::: details DAO Definition
```javascript
import { dao as daoApi } from "sdk/db";

const dao = daoApi.create({
    table: "SAMPLE_EMPLOYEE",
    properties: [
    {
        name: "Id",
        column: "EMPLOYEE_ID",
        type: "INTEGER",
        id: true,
        autoIncrement: true,
    },
    {
        name: "Name",
        column: "EMPLOYEE_NAME",
        type: "VARCHAR",
    },
    {
        name: "Email",
        column: "EMPLOYEE_EMAIL",
        type: "VARCHAR",
    },
    {
        name: "Phone",
        column: "EMPLOYEE_PHONE",
        type: "VARCHAR",
    },
    {
        name: "Address",
        column: "EMPLOYEE_ADDRESS",
        type: "VARCHAR",
    },
    {
        name: "PostCode",
        column: "EMPLOYEE_POSTCODE",
        type: "VARCHAR",
    },
    {
        name: "City",
        column: "EMPLOYEE_CITY",
        type: "VARCHAR",
    },
    {
        name: "Country",
        column: "EMPLOYEE_COUNTRY",
        type: "VARCHAR",
    },
    {
        name: "Team",
        column: "EMPLOYEE_TEAM",
        type: "INTEGER",
    },
    {
        name: "Company",
        column: "EMPLOYEE_COMPANY",
        type: "INTEGER",
    },
    {
        name: "Vacation",
        column: "EMPLOYEE_VACATION",
        type: "INTEGER",
    }
    ]
});
```
:::

```javascript
const data = dao.list({
    $limit: 50,
    $offset: 0,
});
```

The following SQL is being executed:

```sql
SELECT * FROM "SAMPLE_EMPLOYEE" LIMIT 50 OFFSET 0
```

#### "Sort and Order"

The `$sort` and `$order` properties can be used together to sort the returned data.

::: info
- `$sort` - comma separated list of "keys" matching properties in the DAO definition _(e.g. `Country,City`)_.
- `$order` - either `asc` or `desc` _(the default order is `asc`)_.
:::

::: details DAO Definition
```javascript
import { dao as daoApi } from "sdk/db";

const dao = daoApi.create({
    table: "SAMPLE_EMPLOYEE",
    properties: [
    {
        name: "Id",
        column: "EMPLOYEE_ID",
        type: "INTEGER",
        id: true,
        autoIncrement: true,
    },
    {
        name: "Name",
        column: "EMPLOYEE_NAME",
        type: "VARCHAR",
    },
    {
        name: "Email",
        column: "EMPLOYEE_EMAIL",
        type: "VARCHAR",
    },
    {
        name: "Phone",
        column: "EMPLOYEE_PHONE",
        type: "VARCHAR",
    },
    {
        name: "Address",
        column: "EMPLOYEE_ADDRESS",
        type: "VARCHAR",
    },
    {
        name: "PostCode",
        column: "EMPLOYEE_POSTCODE",
        type: "VARCHAR",
    },
    {
        name: "City",
        column: "EMPLOYEE_CITY",
        type: "VARCHAR",
    },
    {
        name: "Country",
        column: "EMPLOYEE_COUNTRY",
        type: "VARCHAR",
    },
    {
        name: "Team",
        column: "EMPLOYEE_TEAM",
        type: "INTEGER",
    },
    {
        name: "Company",
        column: "EMPLOYEE_COMPANY",
        type: "INTEGER",
    },
    {
        name: "Vacation",
        column: "EMPLOYEE_VACATION",
        type: "INTEGER",
    }
    ]
});
```
:::

```javascript
const data = dao.list({
    $sort: "Country,City",
    $order: "desc",
});
```

The following SQL is being executed:

```sql
SELECT * FROM "SAMPLE_EMPLOYEE" ORDER BY "EMPLOYEE_COUNTRY" DESC, "EMPLOYEE_CITY" DESC
```

### Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**create(configuration, loggerName?)** | Creates new DAO instances from `configuraiton` JS object, which can be either standard ORM definition or a standard table definition |  DAO 


### Objects

---

#### DAO

Function     | Description | Returns
------------ | ----------- | --------
**insert(entity)** | inserts array or entity and returns id (or ids of array of entities was supplied as input)  |  any 
**list(querySettings?)** | lists entities optionally constrained with the supplied query settings |  Array 
**find(id, expand?, select?)** | returns an entity by its id(if any), optionally expanding inline the associations defined in expand and optionally constraining the entitiy properties to those specified in select |  Object
**update(entity)** | updates a persistent entity and returns for its dao chaining  |  DAO
**remove(?id)** | delete entity by id, or array of ids, or delete all (if not argument is provided). |  ---
**count()** | returns the number of persisted entities |  Number
**createTable()** | Creates a table for persisting entities  |  ---
**dropTable()** | Drops the entities table  |  ---