# API: workspace

> Source: `platform/workspace.ts`

Provides a wrapper for the platform's WorkspaceFacade to manage Workspaces,
Projects, Folders, and Files.

## Usage
```javascript
import { workspace } from "sdk/platform";
import { response } from "sdk/http";

let workspacesNames = workspace.getWorkspacesNames();

response.println("Workspaces: " + workspacesNames);
response.flush();
response.close();

```


## Classes

### Workspace

@class Workspace<br/>@description Represents a logical container for projects, providing static methods for<br/>high-level workspace management and instance methods for project management within the workspace.

#### Methods

<hr/>

#### createWorkspace

- `createWorkspace (name:string):Workspace`

  Creates a new workspace with the given name.<br/><br/>@param {string} name The name of the workspace to create.<br/>@returns {Workspace} The newly created Workspace instance.

<hr/>

#### getWorkspace

- `getWorkspace (name:string):Workspace`

  Retrieves an existing workspace by name.<br/><br/>@param {string} name The name of the workspace to retrieve.<br/>@returns {Workspace} The Workspace instance.

<hr/>

#### getWorkspacesNames

- `getWorkspacesNames ():string[]`

  Retrieves the names of all existing workspaces.<br/><br/>@returns {string[]} An array of workspace names.

<hr/>

#### deleteWorkspace

- `deleteWorkspace (name:string):void`

  Deletes the workspace with the specified name.<br/><br/>@param {string} name The name of the workspace to delete.

<hr/>

#### getProjects

- `getProjects ():Projects`

  Gets a collection of all projects within this workspace.<br/><br/>@returns {Projects} A Projects collection instance.

<hr/>

#### createProject

- `createProject (name:string):Project`

  Creates a new project within this workspace.<br/><br/>@param {string} name The name of the project to create.<br/>@returns {Project} The newly created Project instance.

<hr/>

#### getProject

- `getProject (name:string):Project`

  Retrieves an existing project by name from this workspace.<br/><br/>@param {string} name The name of the project to retrieve.<br/>@returns {Project} The Project instance.

<hr/>

#### deleteProject

- `deleteProject (name:string):void`

  Deletes a project from this workspace by name.<br/><br/>@param {string} name The name of the project to delete.

<hr/>

#### exists

- `exists ():boolean`

  Checks if the workspace currently exists.<br/><br/>@returns {boolean} True if the workspace exists, false otherwise.

<hr/>

#### existsFolder

- `existsFolder (path:string):boolean`

  Checks if a specific folder path exists within the workspace's filesystem structure.<br/><br/>@param {string} path The relative path to the folder.<br/>@returns {boolean} True if the folder exists.

<hr/>

#### existsFile

- `existsFile (path:string):boolean`

  Checks if a specific file path exists within the workspace's filesystem structure.<br/><br/>@param {string} path The relative path to the file.<br/>@returns {boolean} True if the file exists.

<hr/>

#### copyProject

- `copyProject (source:string, target:string):void`

  Copies a project from a source name to a target name within the workspace.<br/><br/>@param {string} source The name of the project to copy.<br/>@param {string} target The name of the new project copy.

<hr/>

#### moveProject

- `moveProject (source:string, target:string):void`

  Moves a project from a source name to a target name (renaming it).<br/><br/>@param {string} source The current name of the project.<br/>@param {string} target The new name/path of the project.

### Projects

@class Projects<br/>@description A collection/list of projects within a workspace.

#### Methods

<hr/>

#### size

- `size ():number`

  Gets the number of projects in the collection.<br/>@returns {number} The size of the collection.

<hr/>

#### get

- `get (index:number):Project`

  Gets a Project instance at the specified index.<br/>@param {number} index The index of the project.<br/>@returns {Project} The Project instance.

### Project

@class Project<br/>@description Represents a Project within a workspace. It provides methods for managing<br/>folders and files within the project.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the name of the project.<br/>@returns {string} The project name.

<hr/>

#### getPath

- `getPath ():string`

  Gets the path of the project.<br/>@returns {string} The project path (relative to the repository/workspace root).

<hr/>

#### createFolder

- `createFolder (path:string):Folder`

  Creates a new folder within the project.<br/><br/>@param {string} path The path of the folder to create (relative to the project root).<br/>@returns {Folder} The newly created Folder instance.

<hr/>

#### exists

- `exists ():boolean`

  Checks if the project itself exists.<br/>@returns {boolean} True if the project exists.

<hr/>

#### existsFolder

- `existsFolder (path:string):boolean`

  Checks if a specific folder path exists within the project.<br/><br/>@param {string} path The relative path to the folder.<br/>@returns {boolean} True if the folder exists.

<hr/>

#### getFolder

- `getFolder (path:string):Folder`

  Retrieves a folder by its path relative to the project root.<br/><br/>@param {string} path The relative path to the folder.<br/>@returns {Folder} The Folder instance.

<hr/>

#### getFolders

- `getFolders (path:string):Folders`

  Retrieves a collection of folders at a specific path.<br/><br/>@param {string} path The path containing the folders to retrieve.<br/>@returns {Folders} The Folders collection instance.

<hr/>

#### deleteFolder

- `deleteFolder (path:string):void`

  Deletes a folder from the project.<br/><br/>@param {string} path The path of the folder to delete (relative to the project root).

<hr/>

#### createFile

- `createFile (path:string, input:any[]=[]):File`

  Creates a new file within the project.<br/><br/>@param {string} path The path of the file to create (relative to the project root).<br/>@param {any[]} [input=[]] Optional initial content as a byte array.<br/>@returns {File} The newly created File instance.

<hr/>

#### existsFile

- `existsFile (path:string):boolean`

  Checks if a specific file path exists within the project.<br/><br/>@param {string} path The relative path to the file.<br/>@returns {boolean} True if the file exists.

<hr/>

#### getFile

- `getFile (path:string):File`

  Retrieves a file by its path relative to the project root.<br/><br/>@param {string} path The relative path to the file.<br/>@returns {File} The File instance.

<hr/>

#### getFiles

- `getFiles (path:string):Files`

  Retrieves a collection of files at a specific path.<br/><br/>@param {string} path The path containing the files to retrieve.<br/>@returns {Files} The Files collection instance.

<hr/>

#### deleteFile

- `deleteFile (path:string):void`

  Deletes a file from the project.<br/><br/>@param {string} path The path of the file to delete (relative to the project root).

### Folders

@class Folders<br/>@description A collection/list of folders.

#### Methods

<hr/>

#### size

- `size ():number`

  Gets the number of folders in the collection.<br/>@returns {number} The size of the collection.

<hr/>

#### get

- `get (index:number):Folder`

  Gets a Folder instance at the specified index.<br/>@param {number} index The index of the folder.<br/>@returns {Folder} The Folder instance.

### Files

@class Files<br/>@description A collection/list of files.

#### Methods

<hr/>

#### size

- `size ():number`

  Gets the number of files in the collection.<br/>@returns {number} The size of the collection.

<hr/>

#### get

- `get (index:number):File`

  Gets a File instance at the specified index.<br/>@param {number} index The index of the file.<br/>@returns {File} The File instance.

### Folder

@class Folder<br/>@description Represents a directory or folder within a project, providing methods for<br/>managing sub-folders and files.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the name of the folder.<br/>@returns {string} The folder name.

<hr/>

#### getPath

- `getPath ():string`

  Gets the full path of the folder.<br/>@returns {string} The folder path.

<hr/>

#### createFolder

- `createFolder (path:string):Folder`

  Creates a new sub-folder within this folder.<br/><br/>@param {string} path The path of the sub-folder to create (relative to this folder).<br/>@returns {Folder} The newly created Folder instance.

<hr/>

#### exists

- `exists ():boolean`

  Checks if the folder itself exists.<br/>@returns {boolean} True if the folder exists.

<hr/>

#### existsFolder

- `existsFolder (path:string):boolean`

  Checks if a specific sub-folder path exists within this folder.<br/><br/>@param {string} path The relative path to the sub-folder.<br/>@returns {boolean} True if the sub-folder exists.

<hr/>

#### getFolder

- `getFolder (path:string):Folder`

  Retrieves a sub-folder by its path relative to this folder.<br/><br/>@param {string} path The relative path to the sub-folder.<br/>@returns {Folder} The Folder instance.

<hr/>

#### getFolders

- `getFolders (path:string):Folders`

  Retrieves a collection of folders at a specific path relative to this folder.<br/><br/>@param {string} path The path containing the folders to retrieve.<br/>@returns {Folders} The Folders collection instance.

<hr/>

#### deleteFolder

- `deleteFolder (path:string):void`

  Deletes a sub-folder from this folder.<br/><br/>@param {string} path The path of the sub-folder to delete (relative to this folder).

<hr/>

#### createFile

- `createFile (path:string, input:any[]=[]):File`

  Creates a new file within this folder.<br/><br/>@param {string} path The path of the file to create (relative to this folder).<br/>@param {any[]} [input=[]] Optional initial content as a byte array.<br/>@returns {File} The newly created File instance.

<hr/>

#### existsFile

- `existsFile (path:string):boolean`

  Checks if a specific file path exists within this folder.<br/><br/>@param {string} path The relative path to the file.<br/>@returns {boolean} True if the file exists.

<hr/>

#### getFile

- `getFile (path:string):File`

  Retrieves a file by its path relative to this folder.<br/><br/>@param {string} path The relative path to the file.<br/>@returns {File} The File instance.

<hr/>

#### getFiles

- `getFiles (path:string):Files`

  Retrieves a collection of files at a specific path relative to this folder.<br/><br/>@param {string} path The path containing the files to retrieve.<br/>@returns {Files} The Files collection instance.

<hr/>

#### deleteFile

- `deleteFile (path:string):void`

  Deletes a file from this folder.<br/><br/>@param {string} path The path of the file to delete (relative to this folder).

### File

@class File<br/>@description Represents a file (resource) within the workspace, providing methods for<br/>content access and manipulation.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the name of the file.<br/>@returns {string} The file name.

<hr/>

#### getPath

- `getPath ():string`

  Gets the full path of the file.<br/>@returns {string} The file path.

<hr/>

#### getContentType

- `getContentType ():string`

  Gets the content type (MIME type) of the file.<br/>@returns {string} The content type string.

<hr/>

#### isBinary

- `isBinary ():boolean`

  Checks if the file content is determined to be binary.<br/>@returns {boolean} True if binary, false if text.

<hr/>

#### getContent

- `getContent ():any[]`

  Gets the content of the file as a JavaScript-friendly byte array.<br/>@returns {any[]} The content bytes.

<hr/>

#### getText

- `getText ():string`

  Gets the content of the file as a text string.<br/>@returns {string} The text content.

<hr/>

#### setContent

- `setContent (input:any[]):void`

  Sets the content of the file using a byte array.<br/>@param {any[]} input The new content bytes.

<hr/>

#### setText

- `setText (input:string):void`

  Sets the content of the file using a text string.<br/>The string is converted to a byte array before saving.<br/>@param {string} input The new text content.

<hr/>

#### exists

- `exists ():boolean`

  Checks if the file exists.<br/>@returns {boolean} True if the file exists.

