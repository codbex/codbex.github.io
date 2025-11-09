# API: query

> Source: `db/query.ts`

API Query

## Usage
```javascript
import { query } from "sdk/db";
import { response } from "sdk/http";

// Regular

const sql = "SELECT * FROM DIRIGIBLE_EXTENSIONS WHERE EXTENSION_EXTENSIONPOINT_NAME = ?";
let resultset = query.execute(sql, ["ide-editor"], "SystemDB");

response.println(JSON.stringify(resultset));

// Typed Parameters

const sql = "SELECT * FROM DIRIGIBLE_EXTENSIONS WHERE EXTENSION_EXTENSIONPOINT_NAME = ?";
let resultset = query.execute(sql, [{ "type": "VARCHAR", "value": "ide-editor" }], "SystemDB");

response.println(JSON.stringify(resultset));

// Named Parameters

const sql = "SELECT * FROM DIRIGIBLE_EXTENSIONS WHERE EXTENSION_EXTENSIONPOINT_NAME = :editor";
let resultset = query.executeNamed(sql, [{ "name": "editor", "type": "VARCHAR", "value": "ide-editor" }], "SystemDB");

response.println(JSON.stringify(resultset));

```


## Classes

### Query

Provides static methods for executing parameterized SQL SELECT statements.

#### Methods

<hr/>

#### execute

- `execute (sql:string, parameters?:(string|number|boolean|Date|QueryParameter):any[]`

  Executes a standard SQL query with positional parameters ('?').<br/><br/>@param sql The SQL query to execute.<br/>@param parameters An optional array of values (primitives or QueryParameter objects) to replace '?' placeholders.<br/>@param datasourceName The name of the database connection to use (optional).<br/>@param resultParameter Optional formatting parameters for the result set (e.g., date format).<br/>@returns An array of records representing the query results.

<hr/>

#### executeNamed

- `executeNamed (sql:string, parameters?:NamedQueryParameter[], datasourceName?:string):any[]`

  Executes a SQL query with named parameters (e.g., ":name", ":id").<br/><br/>@param sql The SQL query to execute.<br/>@param parameters An optional array of NamedQueryParameter objects.<br/>@param datasourceName The name of the database connection to use (optional).<br/>@returns An array of records representing the query results.

