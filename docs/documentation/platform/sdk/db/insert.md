# Insert

## Overview

The provided API defines a TypeScript module `Insert` that facilitates the execution of SQL `INSERT` statements in a database.

Here's an explanation of the key components:

### InsertParameter Interface:

```javascript
export interface InsertParameter {
	readonly type: string;
	readonly value: any;
}
```

This interface represents a parameter that can be used in an SQL `INSERT` statement. It includes the `type` of the parameter (string) and its `value` (any).

### Insert Class:

The Insert class provides a static method execute for executing SQL `INSERT` statements.

#### execute

```javascript
execute(sql: string, parameters?: (string | number | boolean | Date | InsertParameter)[], datasourceName?: string): number
```

**Parameters:**

* `sql`: The SQL INSERT statement to be executed.
* `parameters`: (Optional) An array of parameters to be included in the INSERT statement. Parameters can be of type string, number, boolean, Date, or an object conforming to the InsertParameter interface.
* `datasourceName`: (Optional) The name of the data source.

* Return Value: The method returns a number, possibly representing the result of the INSERT operation.

## Example Usage:

```javascript
import { Insert } from 'sdk/db';

// Example SQL INSERT statement
const sql = 'INSERT INTO your_table (column1, column2) VALUES (?, ?)';

// Example parameters
const parameters: (string | number | boolean | Date )[] = [
  'value1',
  42,
  true,
  new Date()
];

// Execute the INSERT statement
const result = Insert.execute(sql, parameters, 'yourDataSource');

console.log('INSERT result:', result);
```

Replace `your_table`, `column1`, `column2`, `value1`, `42`, `true`, `yourDataSource`, and other placeholders with your actual module path, table name, column names, values, data source, and other details.