# Update

## Overview

The provided TypeScript module `Update` contains a class with a static method for executing database update operations. Here's an explanation of the key components:

## QueryParameter Interface:

```javascript
export interface UpdateParameter {
	readonly type: string;
	readonly value: any;
}
```

This interface represents a parameter that can be used in an SQL update. It includes the `type` of the parameter (string) and its `value` (any).


## Update Class:

The `Update` class provides a static method for executing SQL update statements.

### Methods

#### execute

```javascript
execute(sql: string, parameters?: (string | number | boolean | Date | UpdateParameter)[], datasourceName?: string): number
```

Executes the SQL update statement with optional parameters.

**Parameters:**

* `sql`: The SQL update statement to be executed.
* `parameters`: (Optional) An array of update parameters, including type and value.
* `datasourceName`: (Optional) The name of the data source.
* Return Value: The number of rows affected by the update operation.

## Example Usage:

```javascript
import { Update, UpdateParameter } from 'sdk/db/update';

// Example SQL update statement
const sqlStatement = 'UPDATE your_table SET column1 = ?, column2 = ? WHERE id = ?';

// Example update parameters
const updateParameters: UpdateParameter[] = [
  { type: 'string', value: 'new_value1' },
  { type: 'number', value: 42 },
  { type: 'number', value: 123 },
];

// Example data source name
const datasourceName = 'yourDataSource';

// Execute the SQL update statement
const affectedRows = Update.execute(sqlStatement, updateParameters, datasourceName);
console.log('Affected Rows:', affectedRows);
```

Replace `your_table`, `new_value1`, `42`, `123`, `yourDataSource`, and other placeholders with your actual module path, SQL update statement, update parameters, data source, and details.

### Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**execute(sql, parameters?, datasourceName?)**   | Executes a SQL update against the selected *datasourceName* with the provided parameters and returns the number of affected rows | *int*

::: info
Parameters array supports primitives:

```javascript
[1, 'John', 34.56]
```

and objects in format:
```javascript
{'type':'[DATA_TYPE]', 'value':[VALUE]}
```

Example using both primitives and objects:

```javascript
[1, 'John', { type: 'CHAR', value: 'ISBN19202323322' }]
```
:::