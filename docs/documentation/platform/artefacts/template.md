# Template Configuration

## Overview

The Template Configuration Artefact is a JavaScript file used to define templates for generating code or files in a structured and configurable manner. It contains functions that return template configurations, including metadata about the templates, their sources, parameters, and ordering.

::: tip
File: `template.js`
:::

## Purpose

The Template Configuration Artefact serves as a mechanism for defining reusable templates that can be used to generate code or files dynamically. It allows developers to encapsulate common patterns or structures into templates, making it easier to create consistent and maintainable codebases.

## Example

Here's an example of a Template Configuration Artefact in JavaScript:

```javascript
exports.getTemplate = function() {
    return {
        "name": "Database Table (Model)",
        "description": "Database Table Template",
        "sources": [{
            "location": "/template-database-table/database.table.template", 
            "action": "generate",
            "rename": "{{fileName}}.table"
        }],
        "parameters": [{
            "name": "tableName",
            "label": "Table Name"
        }],
        "order": 40
    };
};
```

In this example, the getTemplate function returns a template configuration object with metadata such as the template name, description, sources, parameters, and order.

## Usage

* **Code Generation**: The Template Configuration Artefact is used to define templates for generating code or files based on predefined patterns or structures. Developers can specify the template's sources, parameters, and other configurations to tailor the generated output according to their needs.

* **Customization**: Templates defined in the Template Configuration Artefact can be customized or extended to accommodate specific requirements or use cases. Developers can modify the template configurations to adjust the generated code or files to suit different scenarios.

* **Automation**: By using the Template Configuration Artefact, developers can automate repetitive tasks or code generation processes. Templates can be integrated into build pipelines or development workflows to streamline development and improve productivity.

## Conclusion

The Template Configuration Artefact is a JavaScript file used to define templates for generating code or files. It provides a flexible and configurable approach to code generation, allowing developers to create reusable templates and automate repetitive tasks effectively.

For detailed instructions on creating and using templates, refer to the documentation of your development environment or template engine. Additionally, explore the available template configurations and experiment with different templates to understand their capabilities fully.

## References:

* [Template Engine](../engines/templates.md)