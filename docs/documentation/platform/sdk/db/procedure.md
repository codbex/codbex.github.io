# Procedure

## Overview

The provided TypeScript module `Procedure` facilitates the execution of stored procedures in a database. It includes methods for creating and executing stored procedures.

Here's an explanation of the key components:

## ProcedureParameter Interface:

```javascript
export interface ProcedureParameter {
	readonly type: string;
	readonly value: any;
}
```

This interface represents a parameter that can be used in a stored procedure call. It includes the `type` of the parameter (string) and its `value` (any).

## Procedure Class:

The `Procedure`` class provides static methods for creating and executing stored procedures.


### Methods:

#### create

```javascript
create(sql: string, datasourceName?: string): void
```

Creates a stored procedure using an Update operation. (Assumed to be part of the Update class, as Update.execute is used.)

**Parameters:**

* `sql`: The SQL statement for creating the stored procedure.
* `datasourceName`: (Optional) The name of the data source.

#### execute

```javascript
execute(sql: string, parameters: (string | number | ProcedureParameter)[] = [], datasourceName?: string): any[]
```

Executes a stored procedure and returns the result sets.

**Parameters:**

* `sql`: The SQL statement for executing the stored procedure.
* `parameters`: (Optional) An array of parameters to be included in the stored procedure call. Parameters can be of type string, number, or an object conforming to the ProcedureParameter interface.
* `datasourceName`: (Optional) The name of the data source.
* Return Value: An array containing the result sets of the stored procedure execution.

## Example Usage:

::: info
To use procedures you need to add database that supports them (default DB is H2 that does not support procedures):

1. Open `Database` perspective and click on `Databases` at the bottom.
2. Click `New` and add your database information.
3. Use you newly added database in most methods as `databaseType`.
:::

### Create Procedure:

```javascript
import { procedure } from "sdk/db";
import { response } from "sdk/http";

const sql = " \
CREATE PROCEDURE CUSTOMERS_BY_COUNTRY_AND_ALL_CUSTOMERS(c_id integer, c_name text, c_country text) \
LANGUAGE SQL \
AS $$ \
  INSERT INTO CUSTOMERS(id, name, country) values (c_id, c_name, c_country); \
$$; \
"

procedure.create(sql, "psql");

response.println("Procedure created");
response.flush();
response.close();
```

Call Procedure:

```javascript
import { query, procedure } from "sdk/db";
import { response } from "sdk/http";

const sql = "CALL CUSTOMERS_BY_COUNTRY_AND_ALL_CUSTOMERS(c_id => ?, c_name => ?, c_country => ?)";

try {
    procedure.execute(sql, [6, "IBM", "USA"], "psql");
} finally {
    let result = query.execute("SELECT * FROM CUSTOMERS", [], "psql");

    response.println(JSON.stringify(result));
    response.flush();
    response.close();
}
```

### Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**create(sql, datasourceName?)**   | Creates a SQL Stored Procedure in the selected *datasourceName*, throws Error, if issue occur | *-*
**execute(sql, parameters?, datasourceName?)**   | Execute SQL Stored Procedure in the selected *datasourceName* with the provided parameters and returns the result, if any | *array of arrays*

Sample Parameters Array:

```javascript
let parameters = [1, 'John', 34.56];
```

or
```javascript
let parameters = [
  {
    value: 1,
    type: "int"
  }, {
    value: 'John',
    type: "string"
  }, {
    value: 34.56
    type: "double"
  }
];
```