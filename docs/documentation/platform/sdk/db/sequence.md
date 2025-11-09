# API: sequence

> Source: `db/sequence.ts`

API Sequence

Provides static methods for managing and accessing database sequences.

## Usage
```javascript
import { sequence } from "sdk/db";
import { response } from "sdk/http";

let value = sequence.nextval("MYSEQUENCE");

response.println(value.toString());
response.flush();
response.close();

```


## Classes

### Sequence

Utility class for interacting with database sequence objects.

#### Methods

<hr/>

#### nextval

- `nextval (sequence:string, tableName?:string, datasourceName?:string):number`

  Retrieves the next available value from a specified sequence.<br/><br/>@param sequence The name of the database sequence.<br/>@param tableName Optional: The name of the table associated with the sequence (depends on database dialect/facade implementation).<br/>@param datasourceName Optional: The name of the database connection to use.<br/>@returns The next sequence value as a number.

<hr/>

#### create

- `create (sequence:string, start?:number, datasourceName?:string):void`

  Creates a new database sequence.<br/><br/>@param sequence The name of the sequence to create.<br/>@param start Optional: The starting value for the sequence (defaults to 1 if not provided).<br/>@param datasourceName Optional: The name of the database connection to use.

<hr/>

#### drop

- `drop (sequence:string, datasourceName?:string):void`

  Drops (deletes) an existing database sequence.<br/><br/>@param sequence The name of the sequence to drop.<br/>@param datasourceName Optional: The name of the database connection to use.

