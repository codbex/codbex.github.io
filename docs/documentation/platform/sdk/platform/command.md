# Command

The Command API is used to execute shell commands.

### Basic Usage

```javascript
import { command } from "sdk/platform";
import { response } from "sdk/http";

let result = command.execute("echo 'hello world!'");

response.println("[Result]: " + result);
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**execute(command, add, remove)**   | Executes the *command* string and returns the result from the execution or exception message. Passing an object as *add* parameter sets the corresponding variables. *remove* parameter is used to unset the variables  | *string*