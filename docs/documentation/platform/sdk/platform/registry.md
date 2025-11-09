# API: registry

> Source: `platform/registry.ts`

Provides a set of utilities and data structures for interacting with the platform's
Registry/Repository, which manages files and directories (Artefacts and Collections).

## Usage
```javascript
import { registry } from "sdk/platform";
import { response } from "sdk/http";

let text = registry.getText("modules/src/platform/registry.ts");

response.println(text);
response.flush();
response.close();

```


## Classes

### Registry

@class Registry<br/>@description Static utility class providing high-level access to the RegistryFacade for<br/>retrieving content and metadata by path.

#### Methods

<hr/>

#### getContent

- `getContent (path:string):any[]`

  Retrieves the content of a registry resource at the given path, converting it into a<br/>JavaScript-friendly byte array format.<br/><br/>@param {string} path The absolute path to the resource (e.g., "/registry/public/myFile.txt").<br/>@returns {any[]} The resource content as a JavaScript byte array.

<hr/>

#### getContentNative

- `getContentNative (path:string):any[]`

  Retrieves the content of a registry resource at the given path in its native Java byte array format.<br/><br/>@param {string} path The absolute path to the resource.<br/>@returns {any[]} The resource content as a native Java byte array.

<hr/>

#### getText

- `getText (path:string):string`

  Retrieves the content of a registry resource at the given path as a string.<br/><br/>@param {string} path The absolute path to the resource.<br/>@returns {string} The resource content as plain text.

<hr/>

#### find

- `find (path:string, pattern:string):string[]`

  Searches the registry starting from a given path for resources matching a glob pattern.<br/><br/>@param {string} path The starting path for the search.<br/>@param {string} pattern The glob pattern to match resource names against (e.g., "*.js").<br/>@returns {string[]} An array of registry paths (strings) that match the search criteria.

<hr/>

#### getRoot

- `getRoot ():Directory`

  Gets the root directory object for the public registry space.<br/><br/>@returns {Directory} A Directory instance representing the root public collection.

### Artefact

@class Artefact<br/>@description Represents a file or resource (non-collection) within the Registry.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the name of the artefact (file name).<br/>@returns {string} The name.

<hr/>

#### getPath

- `getPath ():string`

  Gets the full registry path of the artefact.<br/>@returns {string} The registry path.

<hr/>

#### getParent

- `getParent ():Directory`

  Gets the parent directory of this artefact.<br/>@returns {Directory} The parent Directory instance.

<hr/>

#### getInformation

- `getInformation ():ArtefactInformation`

  Gets detailed metadata about the artefact.<br/>@returns {ArtefactInformation} The metadata object.

<hr/>

#### exists

- `exists ():boolean`

  Checks if the artefact currently exists in the registry.<br/>@returns {boolean} True if the artefact exists, false otherwise.

<hr/>

#### isEmpty

- `isEmpty ():boolean`

  Checks if the artefact (file) is empty (has zero size).<br/>@returns {boolean} True if the content is empty, false otherwise.

<hr/>

#### getText

- `getText ():string`

  Gets the content of the artefact as a text string.<br/>@returns {string} The text content.

<hr/>

#### getContent

- `getContent ():any[]`

  Gets the content of the artefact as a JavaScript-friendly byte array.<br/>@returns {any[]} The content bytes.

<hr/>

#### getContentNative

- `getContentNative ():any[]`

  Gets the content of the artefact as its native Java byte array representation.<br/>@returns {any[]} The content bytes.

<hr/>

#### isBinary

- `isBinary ():boolean`

  Checks if the artefact content is determined to be binary.<br/>@returns {boolean} True if binary, false if text.

<hr/>

#### getContentType

- `getContentType ():string`

  Gets the content type (MIME type) of the artefact.<br/>@returns {string} The content type string.

### Directory

@class Directory<br/>@description Represents a collection or folder within the Registry.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the name of the directory (folder name).<br/>@returns {string} The name.

<hr/>

#### getPath

- `getPath ():string`

  Gets the full registry path of the directory.<br/>@returns {string} The registry path.

<hr/>

#### getParent

- `getParent ():Directory`

  Gets the parent directory.<br/>@returns {Directory} The parent Directory instance.

<hr/>

#### getInformation

- `getInformation ():ArtefactInformation`

  Gets detailed metadata about the directory.<br/>@returns {ArtefactInformation} The metadata object.

<hr/>

#### exists

- `exists ():boolean`

  Checks if the directory currently exists in the registry.<br/>@returns {boolean} True if the directory exists, false otherwise.

<hr/>

#### isEmpty

- `isEmpty ():boolean`

  Checks if the directory is empty (contains no files or sub-directories).<br/>@returns {boolean} True if empty, false otherwise.

<hr/>

#### getDirectoriesNames

- `getDirectoriesNames ():string[]`

  Gets the names of all sub-directories within this directory.<br/>@returns {string[]} An array of sub-directory names.

<hr/>

#### getDirectory

- `getDirectory (name:string):Directory`

  Gets a specific sub-directory by name.<br/>@param {string} name The name of the sub-directory.<br/>@returns {Directory} The child Directory instance.

<hr/>

#### getArtefactsNames

- `getArtefactsNames ():string[]`

  Gets the names of all files (artefacts) within this directory.<br/>@returns {string[]} An array of artefact names.

<hr/>

#### getArtefact

- `getArtefact (name:string):Artefact`

  Gets a specific file (artefact) by name.<br/>@param {string} name The name of the artefact.<br/>@returns {Artefact} The child Artefact instance.

### ArtefactInformation

@class ArtefactInformation<br/>@description Represents detailed metadata (creation date, size, permissions, etc.) for a<br/>Directory or Artefact.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the name of the resource.<br/>@returns {string} The name.

<hr/>

#### getPath

- `getPath ():string`

  Gets the full registry path of the resource.<br/>@returns {string} The registry path.

<hr/>

#### getPermissions

- `getPermissions ():number`

  Gets the access permissions for the resource (typically an integer bitmask).<br/>@returns {number} The permissions value.

<hr/>

#### getSize

- `getSize ():number`

  Gets the size of the resource content in bytes.<br/>@returns {number} The size in bytes.

<hr/>

#### getCreatedBy

- `getCreatedBy ():string`

  Gets the user who created the resource.<br/>@returns {string} The creator's name.

<hr/>

#### getCreatedAt

- `getCreatedAt ():Date`

  Gets the creation timestamp.<br/>@returns {Date} The creation date and time.

<hr/>

#### getModifiedBy

- `getModifiedBy ():string`

  Gets the user who last modified the resource.<br/>@returns {string} The modifier's name.

<hr/>

#### getModifiedAt

- `getModifiedAt ():Date`

  Gets the last modification timestamp.<br/>@returns {Date} The modification date and time.

