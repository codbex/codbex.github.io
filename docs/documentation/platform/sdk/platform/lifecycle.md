# Lifecycle

The Lifecycle API provides utility functions for managing the lifecycle of the projects in the system, such as publishing and unpublishing.

### Basic Usage

```javascript
import { bytes } from "sdk/io";
import { user } from "sdk/security";
import { workspace, lifecycle } from "sdk/platform";
import { response } from "sdk/http";

const currentUser = user.getName();
const workspaceName = "workspace";
const projectName = "project";

let myWorkspace = workspace.createWorkspace(workspaceName);
let myProject = myWorkspace.createProject(projectName);
let myFile = myProject.createFile("file.js");
myFile.setContent(bytes.textToByteArray("console.log('Hello World!');"));

let publishResult = lifecycle.publish(currentUser, workspaceName, projectName);

response.println("publishResult: " + publishResult)
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**publish(user, workspace, project)**   | Publish project from the workspace, the **project** parameter is optional | *boolean*
**unpublish(user, workspace, project)**   | Unpublish project from the workspace, the **project** parameter is optional | *boolean*
