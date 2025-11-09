# API: update

> Source: `db/update.ts`

Interface used for complex parameter types if needed, otherwise primitive types are used directly.

## Usage
```javascript
import { query, update } from "sdk/db";
import { response } from "sdk/http";

update.execute("CREATE TABLE MY_TABLE (COLUMN_A INT)", [], "DefaultDB");

update.execute("INSERT INTO MY_TABLE VALUES (1)", [], "DefaultDB");

let resultSetBefore = query.execute("SELECT COLUMN_A FROM MY_TABLE", [], "DefaultDB");
response.println("Value before update: " + JSON.stringify(resultSetBefore));

update.execute("UPDATE MY_TABLE SET COLUMN_A = 2", [], "DefaultDB");

let resultSetAfter = query.execute("SELECT COLUMN_A FROM MY_TABLE", [], "DefaultDB");
response.println("Value after update: " + JSON.stringify(resultSetAfter));

update.execute("DROP TABLE MY_TABLE", [], "DefaultDB");

```


## Classes

### Update

Facade class for executing SQL UPDATE, INSERT, and DELETE statements.

#### Methods

<hr/>

#### execute

- `execute (sql:string, parameters?:(string|number|boolean|Date|UpdateParameter):number`

  Executes a parameterized SQL update statement (INSERT, UPDATE, or DELETE).<br/><br/>@param sql The SQL statement to execute.<br/>@param parameters Optional array of parameters to bind to the SQL statement (replaces '?').<br/>These are serialized to JSON before being passed to the native API.<br/>@param datasourceName Optional name of the data source to use. Defaults to the primary data source.<br/>@returns The number of rows affected by the statement.

