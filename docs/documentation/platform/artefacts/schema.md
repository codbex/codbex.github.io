# Schema

## Overview:

The `*.schema` files in the __codbex__ platform are used to define and manage database schemas, including tables, foreign keys, views, and more. A schema can contain various structures that define the organization of data within a database.

Here's an explanation of the example `example.schema` file and its properties:

```json
{
    "schema": {
        "structures": [
            {
                "name": "TABLE1",
                "type": "TABLE",
                "columns": [
                    {
                        "name": "TABLE1_ID",
                        "type": "INTEGER",
                        "length": "0",
                        "primaryKey": "true",
                        "identity": "true",
                        "precision": "",
                        "scale": ""
                    },
                    {
                        "name": "TABLE2_ID",
                        "type": "INTEGER",
                        "length": "0",
                        "precision": "",
                        "scale": ""
                    }
                ]
            },
            {
                "name": "TABLE2",
                "type": "TABLE",
                "columns": [
                    {
                        "name": "TABLE2_ID",
                        "type": "INTEGER",
                        "length": "0",
                        "primaryKey": "true",
                        "identity": "true",
                        "precision": "",
                        "scale": ""
                    }
                ]
            }
            {
                "name": "VIEW3",
                "type": "VIEW",
                "query": "SELECT * FROM TABLE1",
            }
        ]
    },
    "datasource": "DefaultDB"
}
```

::: tip
File extension: `*.schema`
:::

**Properties:**

* `schema` (Object): Contains the definition of the database schema.
* `structures` (Array of Objects): Defines an array of structures within the schema, including tables, foreign keys, and views.
* Table Structure:
    * `name` (String): Specifies the name of the table.
    * `type` (String): Indicates the type of structure, and for tables, it is set to `TABLE`.
    * `columns` (Array of Objects): Defines an array of column objects specifying the properties of each table column.
* View Structure:
    * `name` (String): Specifies the name of the view.
    * `type` (String): Indicates the type of structure, and for views, it is set to `VIEW`
    * `query` (String): Contains the SQL query that defines the view.
* `datasource` (String): Specifies the name of the datasource associated with the schema. In this example, it is `DefaultDB`.

## Example Usage:

The example `example.schema` file defines a schema with three structures:

* Table `TABLE1`
* Table `TABLE2`
* View `VIEW3`

## Getting Started:

### Create a Schema File:

Create a new `*.schema` file or modify an existing one based on your specific schema requirements.

### Define Structures:

Add structures within the structures array, specifying tables, foreign keys, and views.

### Configure Columns and Relationships:

For tables and foreign keys, define columns and relationships as needed.

### Specify Datasource:

Specify the name of the datasource within the datasource property.

### Apply Schema:

Use the schema to create or update the database structure based on your defined configurations.

## Best Practices:

### Clear Naming Conventions:

Follow clear and consistent naming conventions for tables, foreign keys, views, and columns.

### Relationship Integrity:

Ensure that foreign keys are correctly configured to maintain relationship integrity.

### Optimize Views:

Optimize view queries to retrieve only the necessary columns for performance.

## Conclusion:

The `*.schema` files in the platform provide a structured way to define and manage database schemas, making it easier to organize and maintain database structures.

