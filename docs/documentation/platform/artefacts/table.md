# Table

## Overview:

The `*.table` files in the __codbex__ platform are used to define and manage database tables. They provide a structured way to specify table properties, columns, and constraints.

Here's an explanation of the example `PERSONS.table` file and its properties:

```json
{
	"name": "PERSONS",
	"type": "TABLE",
	"columns": [
		{
			"name": "PERSON_FIRST_NAME",
			"type": "VARCHAR",
			"length": "50",
			"nullable": "false",
			"primaryKey": "false",
			"defaultValue": ""
		},
		{
			"name": "PERSON_LAST_NAME",
			"type": "VARCHAR",
			"length": "50",
			"nullable": "false",
			"primaryKey": "false",
			"defaultValue": ""
		},
		{
			"name": "PERSON_ADDRESS_ID",
			"type": "INTEGER",
			"length": "0",
			"nullable": "false",
			"primaryKey": "false",
			"defaultValue": ""
		},
		{
			"name": "PERSON_SOCIAL_NUMBER",
			"type": "REAL",
			"length": "50",
			"nullable": "true",
			"primaryKey": "false",
			"defaultValue": "",
			"precision": "5",
			"scale": "2"
		},
		{
			"name": "PERSON_YEAR_OF_BIRTH",
			"type": "INTEGER",
			"length": "0",
			"nullable": "true",
			"primaryKey": "false"
		}
	],
	"constraints": {
		"name": "PERSONS_CONSTRAINTS",
		"primaryKey": {
			"name": "PERSONS_PK",
			"columns": ["PERSON_FIRST_NAME", "PERSON_LAST_NAME"]
		},
		"foreignKeys": [
			{
				"name": "PERSONS_FK",
				"columns": ["PERSON_ADDRESS_ID"],
				"referencedTable": "ADDRESSES",
				"referencedColumns": ["ADDRESS_ID"]
			}
		],
		"uniqueIndices": [
			{
				"name": "PERSONS_UI",
				"columns": ["PERSON_SOCIAL_NUMBER"]
			}
		],
		"checks": [
			{
				"name": "PERSONS_CK",
				"expression": "PERSON_YEAR_OF_BIRTH > 2000"
			}
		]
	}
}
```

::: tip
File extension: `*.table`
:::

**Properties:**

* `name` (String): Specifies the name of the table. In this example, it is named `PERSONS`.
* `type` (String): Indicates the type of the artifact, and for tables, it is set to `TABLE`.
* `columns` (Array of Objects): Defines an array of column objects, each specifying the properties of a table column.
* Column Object Properties:
    * `name` (String): Represents the name of the column.
    * `type` (String): Specifies the data type of the column, such as `VARCHAR`, `INTEGER`, or `REAL`.
    * `length` (String): Specifies the length or size of the column.
    * `nullable` (String): Indicates whether the column allows `null` values (`true` or `false`).
    * `primaryKey` (String): Specifies whether the column is part of the primary key (`true` or `false`).
    * `defaultValue` (String): Specifies the default value for the column.
    * `precision` and `scale` (Strings): Applicable for numeric types, specifying the precision and scale of the column.
* `constraints` (Object): Defines an object containing various constraints for the table.
* Constraints Object Properties:
    * `name` (String): Specifies the name of the constraints object.
    * `primaryKey` (Object): Specifies the primary key constraint, including the name and columns.
    * `foreignKeys` (Array of Objects): Defines an array of foreign key constraints, specifying the name, columns, referenced table, and referenced columns.
    * `uniqueIndices` (Array of Objects): Defines an array of unique index constraints, specifying the name and columns.
    * `checks` (Array of Objects): Defines an array of check constraints, specifying the name and expression.

## Example Usage:

The example `PERSONS.table` file defines a table named `PERSONS` with multiple columns of various data types. It includes constraints such as a primary key, foreign key, unique index, and check constraint.

## Getting Started:

### Create a Table File:

Create a new `*.table` file or modify an existing one based on your specific table requirements.

### Define Columns:

Add column objects within the columns array, specifying the properties of each table column.

### Configure Constraints:

Define constraints within the constraints object, such as primary keys, foreign keys, unique indices, and checks.

### Use the Table:

Once defined, the table can be used within your database schema to store and retrieve data.

## Best Practices:

### Clear Naming Conventions:

Follow clear and consistent naming conventions for tables, columns, and constraints.

### Column Data Types:

Choose appropriate data types for columns based on the nature of the data they will store.

### Constraint Validation:

Ensure that constraints are appropriate for maintaining data integrity and consistency.

## Conclusion:

The `*.table` files in the platform provide a structured way to define and manage database tables, allowing for the creation of robust and well-defined database schemas.
