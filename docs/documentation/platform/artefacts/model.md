# Application Model

## Overview

The Application Model file (`*.model`) is a JSON representation used by the Entity Data Modeler tool to define the domain model of applications. It contains metadata about entities, their properties, relationships, and other relevant information necessary for generating application artifacts.

::: tip
File extension: `*.model`
:::

## Purpose

The Application Model file serves as a blueprint for defining the structure and behavior of entities within the application domain. It enables developers to model domain-specific concepts, such as entities, attributes, and relationships, in a structured and standardized format.

## Example

Here's an example of an Application Model file:

```json
{
    "model": {
        "entities": [
            {
                "properties": [
                    {
                        "name": "Id",
                        "dataType": "VARCHAR",
                        "dataLength": "20",
                        "dataPrimaryKey": "true",
                        "widgetType": "TEXTBOX"
                    },
                    {
                        "name": "Name",
                        "dataType": "VARCHAR",
                        "dataLength": "100",
                        "widgetType": "TEXTBOX"
                    }
                ],
                "caption": "Manage entity Dimension",
                "dataName": "DIMENSION",
                ...
            },
            {
                "properties": [
                    {
                        "name": "Id",
                        "dataType": "VARCHAR",
                        "dataLength": "20",
                        "dataPrimaryKey": "true",
                        "widgetType": "TEXTBOX"
                    },
                    {
                        "name": "Name",
                        "dataType": "VARCHAR",
                        "dataLength": "100",
                        "widgetType": "TEXTBOX"
                    },
                    ...
                ],
                "caption": "Manage entity UoM",
                "dataName": "UOM",
                ...
            }
        ],
        "perspectives": [
            {
                "name": "UnitsOfMeasures",
                "label": "Units of Measures",
                "icon": "/services/web/resources/unicons/arrows-resize-v.svg",
                "order": "980",
                "role": {}
            },
            {
                "name": "Dimensions",
                "label": "Dimensions",
                "icon": "/services/web/resources/unicons/align-center-h.svg",
                "order": "990",
                "role": {}
            }
        ],
        "navigations": []
    }
}
```

In this example, the Application Model file defines two entities: "Dimension" and "UoM" (Unit of Measures), along with their properties and perspectives.

## Usage

* **Entity Modeling**: Developers use the Entity Domain Model file to define entity structures, properties, and relationships using a structured JSON format.

* **Domain Abstraction**: The Entity Domain Model file abstracts domain-specific concepts into a machine-readable format, facilitating communication and understanding between stakeholders.

* **Code Generation**: The metadata defined in the Entity Domain Model file can be used by code generation tools to automatically generate application artifacts, such as database tables, entity classes, REST APIs, and user interfaces.

## Conclusion

The Application Model file (*.model) is a JSON representation used to define the domain model of applications. It provides a structured way to model entities, properties, and relationships, enabling developers to design robust and maintainable applications.

For detailed usage instructions and best practices, refer to the documentation of the Entity Data Modeler tool or consult with your project's architecture experts.