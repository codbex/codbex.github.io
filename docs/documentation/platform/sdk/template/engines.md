# API: engines

> Source: `template/engines.ts`

An internal wrapper class that adapts a native template engine implementation.
It manages the engine instance and optional custom start/end markers.

## Usage
```javascript
import { engines } from "sdk/template"
import { response } from "sdk/http";

let mustache = engines.getMustacheEngine();
let generated = mustache.generate('Hello {{name}}', [['name', 'John Smith']]);

response.println(generated);

response.flush();
response.close();

```


## Classes

### TemplateEngine

An internal wrapper class that adapts a native template engine implementation.<br/>It manages the engine instance and optional custom start/end markers.

#### Methods

<hr/>

#### generate

- `generate (location:string, template:string, parameters:{[key:string]:any}):string`

  Generates the final output by executing the template with the provided parameters.<br/>Note: Parameters are internally serialized to JSON before being passed to the native engine.<br/><br/>@param location A string identifying the template (used for error reporting/caching, often a file path).<br/>@param template The raw template string content to process.<br/>@param parameters An object containing the context data to be used in the template.<br/>@returns The processed output string.

<hr/>

#### setSm

- `setSm (sm:any):any)`

  Sets a custom start marker for the template engine. This is primarily useful for Mustache.<br/><br/>@param sm The new start marker string.

<hr/>

#### setEm

- `setEm (em:any):any)`

  Sets a custom end marker for the template engine. This is primarily useful for Mustache.<br/><br/>@param em The new end marker string.

### TemplateEngines

Provides access to various server-side template engines (Velocity, Mustache, JavaScript).<br/>It offers utility methods for generating content from templates directly or from files<br/>stored in the registry.

#### Methods

<hr/>

#### getDefaultEngine

- `getDefaultEngine ():TemplateEngine`

  Retrieves the default template engine, which is currently the Velocity engine.<br/><br/>@returns The default template engine instance.

<hr/>

#### getMustacheEngine

- `getMustacheEngine ():TemplateEngine`

  Retrieves the Mustache template engine instance.<br/>Mustache is often used for logic-less templating and uses '{{' and '}}' as default markers.<br/><br/>@returns The Mustache template engine instance.

<hr/>

#### getVelocityEngine

- `getVelocityEngine ():TemplateEngine`

  Retrieves the Velocity template engine instance.<br/>Velocity is often used for complex templating with directives (e.g., #set, #foreach).<br/><br/>@returns The Velocity template engine instance.

<hr/>

#### getJavascriptEngine

- `getJavascriptEngine ():TemplateEngine`

  Retrieves the JavaScript template engine instance (usually used for server-side evaluation).<br/><br/>@returns The JavaScript template engine instance.

<hr/>

#### generate

- `generate (location:string, template:string, parameters:{[key:string]:any}):string`

  Generates output by processing a raw template string using the **default template engine (Velocity)**.<br/><br/>@param location A string identifying the template (used for error reporting/caching, often a file path).<br/>@param template The raw template string content to process.<br/>@param parameters An object containing key-value pairs to be used as context variables in the template.<br/>@returns The processed output string.

<hr/>

#### generateFromFile

- `generateFromFile (location:string, parameters:{[key:string]:any}):string|undefined`

  Loads a template from the public registry, selects an appropriate engine, and generates output.<br/>It uses the **Mustache engine** if the file extension is `.mustache`, otherwise it uses the **default (Velocity)**.<br/><br/>@param location The path to the template file within the `/registry/public/` directory (e.g., 'templates/email.mustache').<br/>@param parameters An object containing key-value pairs to be used as context variables in the template.<br/>@returns The processed output string, or `undefined` if the resource does not exist.

