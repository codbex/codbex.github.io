# Registry

The Registry API provides access to the content in the repository section for the published artifacts and also the pre-delivered content. It facilitates retrieving content from the repository in various formats.

### Example Usage

```javascript
import { registry } from "sdk/platform";
import { response } from "sdk/http";

let text = registry.getText("platform/registry.js");

response.println(text);
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**getContent(path)**   | Gets the content of resource by path, as byte array | *array of bytes*
**getContentNative(path)**   | Gets the content of resource by path, as array of Java bytes | *array of Java bytes*
**getText(path)**   | Gets the content of resource by path, as text | *string*
**find(path, pattern)**   | Find resources under certain path (e.g. /) by pattern (e.g. *.js) | *array of strings*