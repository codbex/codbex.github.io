# API: procedure

> Source: `db/procedure.ts`

API Procedure

## Usage
```javascript
// Create Procedure

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


// Call Procedure

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


## Classes

### Procedure

@interface ProcedureParameter<br/>@description Defines a structured parameter for procedure calls, allowing the type<br/>to be explicitly defined when the natural JavaScript type mapping is insufficient.

#### Methods

<hr/>

#### create

- `create (sql:string, datasourceName?:string):void`

  Executes a DDL/DML statement to create or modify a stored procedure without results.<br/>* @param {string} sql The SQL statement (e.g., CREATE PROCEDURE).<br/>@param {string} [datasourceName] Optional name of the data source to use.

<hr/>

#### execute

- `execute (sql:string, parameters:(string|number|ProcedureParameter):any[]`

  Executes a stored procedure call and returns the result set(s).<br/>* @param {string} sql The callable statement (e.g., {CALL my_procedure(?, ?)}).<br/>@param {(string | number | ProcedureParameter)[]} [parameters=[]] An array of parameters. Primitives (string/number) are automatically typed. Use ProcedureParameter for explicit types.<br/>@param {string} [datasourceName] Optional name of the data source to use.<br/>@returns {any[]} An array of JSON objects representing the result set(s).

