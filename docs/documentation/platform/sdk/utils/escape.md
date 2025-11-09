# API: escape

> Source: `utils/escape.ts`

Utility class for performing context-aware string escaping and unescaping operations,
delegating to a native Java EscapeFacade. These methods are essential for security
(preventing injection attacks) and ensuring correct data serialization across different formats.

## Usage
```javascript
import { escape } from "sdk/utils";
import { response } from "sdk/http";

const input = "<script type='text/javascript'>alert('evil script')</script>";
const result = escape.escapeJavascript(input);

response.println(result);

response.flush();
response.close();

```


## Classes

### Escape

Utility class for performing context-aware string escaping and unescaping operations,<br/>delegating to a native Java EscapeFacade. These methods are essential for security<br/>(preventing injection attacks) and ensuring correct data serialization across different formats.

#### Methods

<hr/>

#### escapeCsv

- `escapeCsv (input:string):string`

  Escapes special characters in a string to make it safe for use as a value within a CSV file.<br/>Typically handles double quotes, commas, and newlines.<br/><br/>@param input The string to be escaped.<br/>@returns The CSV-safe escaped string.

<hr/>

#### escapeJavascript

- `escapeJavascript (input:string):string`

  Escapes characters in a string to create a valid JavaScript string literal.<br/>This makes it safe for embedding string values within JavaScript code blocks.<br/><br/>@param input The string to be escaped.<br/>@returns The JavaScript-safe escaped string.

<hr/>

#### escapeHtml3

- `escapeHtml3 (input:string):string`

  Escapes characters in a string using HTML 3.2 entity references.<br/><br/>@param input The string to be escaped.<br/>@returns The HTML 3.2 escaped string.

<hr/>

#### escapeHtml4

- `escapeHtml4 (input:string):string`

  Escapes characters in a string using HTML 4.0 entity references.<br/>This is the common standard for escaping characters like <, >, &, and ".<br/><br/>@param input The string to be escaped.<br/>@returns The HTML 4.0 escaped string.

<hr/>

#### escapeJava

- `escapeJava (input:string):string`

  Escapes characters in a string to create a valid Java string literal.<br/><br/>@param input The string to be escaped.<br/>@returns The Java-safe escaped string.

<hr/>

#### escapeJson

- `escapeJson (input:string):string`

  Escapes characters (like quotes, backslashes, and control characters) in a string<br/>to make it safe for embedding as a value within a JSON document.<br/><br/>@param input The string to be escaped.<br/>@returns The JSON-safe escaped string.

<hr/>

#### escapeXml

- `escapeXml (input:string):string`

  Escapes characters in a string to make it valid for use within an XML document.<br/>Typically handles characters like <, >, &, ", and '.<br/><br/>@param input The string to be escaped.<br/>@returns The XML-safe escaped string.

<hr/>

#### unescapeCsv

- `unescapeCsv (input:string):string`

  The inverse of `escapeCsv`: unescapes CSV-specific escape sequences back to their original form.<br/><br/>@param input The CSV-escaped string.<br/>@returns The unescaped string.

<hr/>

#### unescapeJavascript

- `unescapeJavascript (input:string):string`

  The inverse of `escapeJavascript`: unescapes JavaScript string literals.<br/><br/>@param input The JavaScript-escaped string.<br/>@returns The unescaped string.

<hr/>

#### unescapeHtml3

- `unescapeHtml3 (input:string):string`

  The inverse of `escapeHtml3`: unescapes HTML 3.2 entity references.<br/><br/>@param input The HTML 3.2 escaped string.<br/>@returns The unescaped string.

<hr/>

#### unescapeHtml4

- `unescapeHtml4 (input:string):string`

  The inverse of `escapeHtml4`: unescapes HTML 4.0 entity references.<br/><br/>@param input The HTML 4.0 escaped string.<br/>@returns The unescaped string.

<hr/>

#### unescapeJava

- `unescapeJava (input:string):string`

  The inverse of `escapeJava`: unescapes Java string literals.<br/><br/>@param input The Java-escaped string.<br/>@returns The unescaped string.

<hr/>

#### unescapeJson

- `unescapeJson (input:string):string`

  The inverse of `escapeJson`: unescapes JSON string escape sequences.<br/><br/>@param input The JSON-escaped string.<br/>@returns The unescaped string.

<hr/>

#### unescapeXml

- `unescapeXml (input:string):string`

  The inverse of `escapeXml`: unescapes XML entity references.<br/><br/>@param input The XML-escaped string.<br/>@returns The unescaped string.

