# OData Engine

## Introduction

The OData Engine in the __codbex__ platform provides robust support for creating and exposing RESTful APIs adhering to the OData (Open Data Protocol) v2 specification. This documentation explores key features of the OData Engine, highlighting its customization capabilities using a modified version of Apache Olingo.

## OData Engine Features

### OData v2 Specification Support

The OData Engine fully supports the OData v2 specification, allowing developers to define, expose, and consume RESTful APIs with a standardized and interoperable approach.

Example OData v2 Endpoint: [http://example.com/odata/v2/](http://example.com/odata/v2/)

### Customized Apache Olingo Backend

The embeded __codbex__ platform OData Engine leverages a customized version of the Apache Olingo library as its backend. This customization enhances the capabilities of the OData Engine, providing additional features and optimizations tailored for the __codbex__ platform.

### Entity Sets, Navigation, and Query Support

The OData Engine supports the definition of entity sets, navigation between entities, and querying capabilities according to the OData v2 specification. Developers can model complex data structures and relationships while providing efficient query capabilities.

Example `*.odata` Descriptor Configuration:

```json
{
  "namespace": "com.codbex.odata.Employees",
  "entities":
  [
    {
      "name": "Employee",
      "alias": "Employees",
      "table": "EMPLOYEE"
    }
  ]
}
```

Example `*.table` Descriptor neded for database artefacts creation:

```json
{
    "name": "EMPLOYEE",
    "type": "TABLE",
    "columns": [
        {
            "name": "EMPLOYEE_ID",
            "type": "INTEGER",
            "length": 0,
            "nullable": true,
            "primaryKey": "true",
            "identity": "true",
            "unique": false,
            "defaultValue": null,
            "precision": null,
            "scale": null
        },
        {
            "name": "EMPLOYEE_NAME",
            "type": "VARCHAR",
            "length": "20",
            "nullable": true,
            "primaryKey": false,
            "identity": false,
            "unique": false,
            "defaultValue": null,
            "precision": null,
            "scale": null
        }
    ]
}
```

## Conclusion

The OData Engine in the __codbex__ platform offers a powerful solution for creating, customizing, and exposing RESTful APIs compliant with the OData v2 specification. Leveraging `*.odata` descriptors to define entity sets, aliases, and table mappings simplifies the configuration process, allowing developers to model complex data structures and provide efficient query capabilities.
