# Template Engines

The Template Engines group provides functionality for working with various template engines such as Velocity, Mustache, and JavaScript template engines.

## Velocity Template Engine

The Velocity Template Engine allows for the dynamic generation of content using Velocity Template Language (VTL).

### Functions

- **generate(template, parameters)**: Renders the given Velocity template with the provided context.

## Mustache Template Engine

The Mustache Template Engine provides support for rendering Mustache templates.

### Functions

- **generate(template, parameters)**: Renders the given Mustache template with the provided context.

## JavaScript Template Engine

The JavaScript Template Engine enables the rendering of templates using JavaScript functions.

### Functions

- **generate(template, parameters)**: Renders the given JavaScript template with the provided context.

### Example Usage

```javascript
import { engines } from "sdk/template"
import { response } from "sdk/http";

let mustache = engines.getMustacheEngine();
let generated = mustache.generate('Hello {{name}}', [['name', 'John Smith']]);

response.println(generated);

response.flush();
response.close();
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**getDefaultEngine()**   | Creates a default template engine (Velocity) | *TemplateEngine*
**getVelocityEngine()**   | Creates the Velocity template engine | *TemplateEngine*
**getMustacheEngine()**   | Creates the Mustache template engine | *TemplateEngine*
**getJavascriptEngine()**   | Creates the Javascript template engine | *TemplateEngine*
**generate(template, parameters)**   | Generate content using the provided `template` and the default engine and `parameters` provided | *string*
**generateFromFile(location, parameters)**   | Generate content using the template from `location` and the default engine and `parameters` provided | *string*

## Objects

---

### TemplateEngine

Function     | Description | Returns
------------ | ----------- | --------
**generate(template, parameters)**   | Generate content using the provided `template` with `parameters` | *string*
**setSm(sm)**   | Set start markup for parameters | *-*
**setEm(em)**   | Set end markup for parameters | *-*
