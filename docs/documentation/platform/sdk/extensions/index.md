# Extensions

The Extensions API allows developers to enhance and extend the functionality of their applications by providing a mechanism to add custom extensions. This documentation covers the basic usage and available functions of the Extensions API.

## Basic Usage

The Basic Usage section demonstrates how to use the Extensions API to retrieve and utilize extensions:

```javascript
import { extensions } from "sdk/extensions";
import { response } from "sdk/http";

const mainmenu = [];
const menuExtensions = extensions.getExtensions("ide-menu");
for (let i = 0; i < menuExtensions.length; i++) {
    const extensionPath = menuExtensions[i];
    
    const { getMenu } = await import(`${extensionPath}`);
    const menu = getMenu();
    mainmenu.push(menu);
}

response.println(JSON.stringify(mainmenu));
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**getExtensionPoints()** | Returns an array of the extension points names | *array of string*
**getExtensions(extensionPoint)**   | Returns an array of the extensions names for the specified extension point | *array of string*