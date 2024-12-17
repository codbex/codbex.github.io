# User

The User API, part of the Security Module, provides access to information about the currently logged-in user, if any.

### Example Usage

```javascript
import { user } from "sdk/security";
import { response } from "sdk/http";

response.println("[UserName]: " + user.getName());
response.println("[Is in Role]: " + user.isInRole("Developer"));
```

### Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**getName()**   | Returns the name of the currently logged in user, if any or null | *string*
**isInRole(role)**   | Returns true if the user has a given *role* and false otherwise | *boolean*