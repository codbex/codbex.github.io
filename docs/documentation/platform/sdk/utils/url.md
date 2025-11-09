# API: url

> Source: `utils/url.ts`

Utility class for performing various forms of URL encoding and decoding.
It wraps native Java URL utility methods for handling query parameters,
path segments, and form data.

## Usage
```javascript
import { url } from "sdk/utils";
import { response } from "sdk/http";

response.println(url.encode('<![CDATA[<meta http-equiv="refresh" content="0;url=javascript:document.vulnerable=true;">]]>', 'UTF8'));
response.println(url.decode('%3C%21%5BCDATA%5B%3Cmeta+http-equiv%3D%22refresh%22+content%3D%220%3Burl%3Djavascript%3Adocument.vulnerable%3Dtrue%3B%22%3E%5D%5D%3E', 'UTF8'));

response.flush();
response.close();

```


## Classes

### URL

Utility class for performing various forms of URL encoding and decoding.<br/>It wraps native Java URL utility methods for handling query parameters,<br/>path segments, and form data.

#### Methods

<hr/>

#### encode

- `encode (input:string, charset?:string):string`

  URL-encodes the input string, typically used for encoding query parameter values.<br/><br/>@param input The string to be encoded.<br/>@param charset The character set (e.g., 'UTF-8', 'ISO-8859-1') to use for encoding. Defaults to the system's preferred encoding if omitted.<br/>@returns The URL-encoded string.

<hr/>

#### decode

- `decode (input:string, charset?:string):string`

  URL-decodes the input string, typically used for decoding query parameter values.<br/><br/>@param input The string to be decoded.<br/>@param charset The character set (e.g., 'UTF-8', 'ISO-8859-1') that was used for encoding. Defaults to the system's preferred encoding if omitted.<br/>@returns The URL-decoded string.

<hr/>

#### escape

- `escape (input:string):string`

  Escapes the input string using general URL escaping rules.<br/>This is typically equivalent to `encodeURIComponent` and is suitable for<br/>encoding query parameter *values*.<br/><br/>@param input The string to escape.<br/>@returns The escaped string.

<hr/>

#### escapePath

- `escapePath (input:string):string`

  Escapes the input string specifically for use as a **URL path segment**.<br/>It typically preserves path delimiters like `/` that might otherwise be escaped<br/>in standard URL encoding.<br/><br/>@param input The path string to escape.<br/>@returns The escaped path string.

<hr/>

#### escapeForm

- `escapeForm (input:string):string`

  Escapes the input string according to the rules for **HTML Form Data**<br/>(application/x-www-form-urlencoded). This typically replaces spaces with `+`<br/>instead of `%20`.<br/><br/>@param input The form data string to escape.<br/>@returns The escaped form data string.

