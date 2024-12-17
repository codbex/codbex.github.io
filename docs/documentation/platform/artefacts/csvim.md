# CSVIM (Comma Separated Values Import Model)


## Overview:

The CSVIM (Comma Separated Values Import Model) file is used in the __codbex__ platform to define the parameters and configuration for importing data from CSV files into a specified table in the database. This model allows you to customize the import process based on your specific requirements.

::: tip
File extension: `*.csvim`
:::

## CSVIM File Structure

A typical CSVIM file has the following structure:

```json
{
  "files": [
    {
      "table": "MY_DATA",
      "schema": "PUBLIC",
      "file": "/my-project/csvim/data.csv",
      "header": true,
      "useHeaderNames": true,
      "delimField": ",",
      "delimEnclosing": "\"",
      "distinguishEmptyFromNull": true
    }
    // Additional file configurations can be added...
  ]
}
```

### CSVIM File Properties:

* `table` (String): Specifies the name of the table in the database where the data will be imported.

* `schema` (String, Optional): Specifies the schema of the table. If not provided, the default schema is used.

* `file` (String): Specifies the path to the CSV file that contains the data to be imported.

* `header` (Boolean): Indicates whether the CSV file contains a header row. If set to true, the first row is treated as a header and skipped during the import.

* `useHeaderNames` (Boolean): Specifies whether to use header names when mapping columns. If set to true, header names are used.

* `delimField` (String): Specifies the delimiter used between fields in the CSV file, such as a comma (`,`).

* `delimEnclosing` (String): Specifies the enclosing character for fields in the CSV file, such as double quotes (`"`).

* `distinguishEmptyFromNull` (Boolean): Specifies whether to distinguish empty values from `null`. If set to true, empty values are treated as null during the import.

## Example Usage:

In the provided example, a CSV file (`/my-project/csvim/data.csv`) is imported into the `MY_DATA` table in the `PUBLIC` schema. The CSV file has a header, and header names are used for column mapping. The fields are delimited by a comma (`,`), and double quotes (`"`) are used for enclosing fields. Empty values are distinguished from `null`.

## Getting Started

### Create CSVIM File:

Create a new CSVIM file or modify an existing one based on your import requirements.

### Configure File Properties:

Adjust the properties within the files array to specify the target table, schema, CSV file path, and import settings.

### Import Data:

Use the CSVIM file to initiate the data import process. This is done through the import mechanisms provided by the platform.

## Best Practices

### Validate CSV Data:

Ensure that the CSV file is well-formed and matches the specified configuration in the CSVIM file.

### Review Import Results:

After importing data, review any log or error messages to ensure a successful import.

### Backup Data:

Before performing data imports, consider backing up existing data in the target table to prevent accidental data loss.

## Conclusion:

The CSVIM (Comma Separated Values Import Model) in the __codbex__ platform provides a flexible and configurable approach to importing data from CSV files into database tables. Customize the CSVIM file based on your data and import requirements to streamline the data loading process.