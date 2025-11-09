# API: insert

> Source: `db/insert.ts`

Interface used to wrap complex or other specific values for database insertion.

## Usage
```javascript
import { query, update, insert } from "sdk/db";
import { response } from "sdk/http";

update.execute("CREATE TABLE MY_TABLE (COLUMN_A INT)", [], "DefaultDB");

insert.execute("INSERT INTO MY_TABLE VALUES (1)", [], "DefaultDB");

let resultSetBefore = query.execute("SELECT COLUMN_A FROM MY_TABLE", [], "DefaultDB");
response.println("Value before update: " + JSON.stringify(resultSetBefore));

update.execute("UPDATE MY_TABLE SET COLUMN_A = 2", [], "DefaultDB");

let resultSetAfter = query.execute("SELECT COLUMN_A FROM MY_TABLE", [], "DefaultDB");
response.println("Value after update: " + JSON.stringify(resultSetAfter));

update.execute("DROP TABLE MY_TABLE", [], "DefaultDB");

```


## Classes

### Insert

Provides static methods for executing INSERT SQL statements.

#### Methods

<hr/>

#### execute

- `execute (sql:string, parameters?:ParameterValue[], datasourceName?:string):Array<Record<string,any>>`

  Executes a single parameterized INSERT statement.<br/>* @param sql The SQL query to execute, with '?' placeholders for parameters.<br/>@param parameters An optional array of values to replace the '?' placeholders.<br/>@param datasourceName The name of the database connection to use (optional).<br/>@returns An array of records representing the result of the insertion (e.g., generated keys).

<hr/>

#### executeMany

- `executeMany (sql:string, parameters?:ParameterValue[][], datasourceName?:string):Array<Record<string,any>>`

  Executes multiple parameterized INSERT statements as a batch operation.<br/>* @param sql The SQL query to execute, with '?' placeholders for parameters.<br/>@param parameters An optional array of parameter arrays, where each inner array corresponds to one execution of the SQL statement.<br/>@param datasourceName The name of the database connection to use (optional).<br/>@returns An array of records representing the results of the batched insertions.

