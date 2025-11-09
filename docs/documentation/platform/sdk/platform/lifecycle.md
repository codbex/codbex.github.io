# API: lifecycle

> Source: `platform/lifecycle.ts`

Provides a wrapper for managing the application lifecycle (publish/unpublish)

## Usage
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


## Classes

### Lifecycle

@class Lifecycle<br/>@description Static utility class to publish and unpublish projects on the platform.

#### Methods

<hr/>

#### publish

- `publish (user:string, workspace:string, project:string="*"):boolean`

  Publishes a project for a specific user and workspace.<br/><br/>@param {string} user The username of the owner of the workspace.<br/>@param {string} workspace The name of the workspace to publish from.<br/>@param {string} [project="*"] The specific project name to publish. Use "*" to publish all projects in the workspace.<br/>@returns {boolean} True if the publish operation was successful, false otherwise.

<hr/>

#### unpublish

- `unpublish (project:string="*"):boolean`

  Unpublishes a currently deployed project.<br/><br/>@param {string} [project="*"] The specific project name to unpublish. Use "*" to unpublish all currently deployed projects.<br/>@returns {boolean} True if the unpublish operation was successful, false otherwise.

