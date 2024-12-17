# Escape

Escape object is used to escape/unescape text in CSV, HTML3, HTML4, Javascript, Java, JSON and XML format.

## Example Usage

```javascript
import { escape } from "sdk/utils";
import { response } from "sdk/http";

const input = "<script type='text/javascript'>alert('evil script')</script>";
const result = escape.escapeJavascript(input);

response.println(result);
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**escapeCsv(input)**   | Escapes an input CSV string | *string*
**escapeJavascript(input)**   | Escapes an input Javascript string | *string*
**escapeHtml3(input)**   | Escapes an input HTML3 string | *string*
**escapeHtml4(input)**   | Escapes an input HTML4 string | *string*
**escapeJava(input)**   | Escapes an input Java string | *string*
**escapeJson(input)**   | Escapes an input JSON string | *string*
**escapeXml(input)**   | Escapes an input XML string | *string*
**unescapeCsv(input)**   | Unescapes an input CSV string | *string*
**unescapeJavascript(input)**   | Unescapes an input Javascript string | *string*
**unescapeHtml3(input)**   | Unescapes an input HTML3 string | *string*
**unescapeHtml4(input)**   | Unescapes an input HTML4 string | *string*
**unescapeJava(input)**   | Unescapes an input Java string | *string*
**unescapeJson(input)**   | Unescapes an input JSON string | *string*
**unescapeXml(input)**   | Unescapes an input XML string | *string*
