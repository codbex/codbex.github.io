# API: repository

> Source: `platform/repository.ts`

Provides a wrapper for the platform's RepositoryFacade to manage files (Resources)
and folders (Collections), including CRUD operations, movement, and content handling.

## Usage
```javascript
import { repository } from "sdk/platform";
import { response } from "sdk/http";

let resource = repository.getResource("/registry/public/modules/src/platform/repository.ts");

response.println("Exists: " + resource.exists());
response.flush();
response.close();

```


## Classes

### Repository

@class Repository<br/>@description Static utility class providing high-level methods for interacting with the<br/>repository facade to manage resources and collections by path.

#### Methods

<hr/>

#### getResource

- `getResource (path:string):Resource`

  Retrieves a resource (file) object from the repository by its path.<br/><br/>@param {string} path The absolute path to the resource.<br/>@returns {Resource} A Resource instance wrapping the native repository object.

<hr/>

#### createResource

- `createResource (path:string, content:string, contentType:string):Resource`

  Creates a new resource (file) with content provided as a string.<br/><br/>@param {string} path The absolute path where the resource should be created.<br/>@param {string} content The string content for the resource.<br/>@param {string} contentType The MIME type of the content (e.g., "text/plain").<br/>@returns {Resource} The newly created Resource instance.

<hr/>

#### createResourceNative

- `createResourceNative (path:string, content:any[], contentType:string):Resource`

  Creates a new resource (file) with content provided as a native byte array.<br/><br/>@param {string} path The absolute path where the resource should be created.<br/>@param {any[]} content The native byte array content.<br/>@param {string} contentType The MIME type of the content.<br/>@returns {Resource} The newly created Resource instance.

<hr/>

#### updateResource

- `updateResource (path:string, content:string):Resource`

  Updates the content of an existing resource using a string.<br/><br/>@param {string} path The absolute path to the resource to update.<br/>@param {string} content The new string content.<br/>@returns {Resource} The updated Resource instance.

<hr/>

#### updateResourceNative

- `updateResourceNative (path:string, content:any[]):Resource`

  Updates the content of an existing resource using a native byte array.<br/><br/>@param {string} path The absolute path to the resource to update.<br/>@param {any[]} content The new native byte array content.<br/>@returns {Resource} The updated Resource instance.

<hr/>

#### deleteResource

- `deleteResource (path:string):void`

  Deletes the resource (file) at the specified path.<br/><br/>@param {string} path The absolute path of the resource to delete.

<hr/>

#### getCollection

- `getCollection (path:string):Collection`

  Retrieves a collection (folder) object from the repository by its path.<br/><br/>@param {string} path The absolute path to the collection.<br/>@returns {Collection} A Collection instance wrapping the native repository object.

<hr/>

#### createCollection

- `createCollection (path:string):Collection`

  Creates a new collection (folder) at the specified path.<br/><br/>@param {string} path The absolute path where the collection should be created.<br/>@returns {Collection} The newly created Collection instance.

<hr/>

#### deleteCollection

- `deleteCollection (path:string):void`

  Deletes the collection (folder) at the specified path.<br/><br/>@param {string} path The absolute path of the collection to delete.

<hr/>

#### find

- `find (path:string, pattern:string):string[]`

  Searches the repository starting from a given path for resources matching a glob pattern.<br/><br/>@param {string} path The starting path for the search.<br/>@param {string} pattern The glob pattern to match resource names against (e.g., "*.js").<br/>@returns {string[]} An array of repository paths (strings) that match the search criteria.

### Resource

@class Resource<br/>@description Represents a file or resource (non-collection) within the Repository,<br/>providing instance methods for file operations.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the name of the resource (file name).<br/>@returns {string} The name.

<hr/>

#### getPath

- `getPath ():string`

  Gets the full repository path of the resource.<br/>@returns {string} The repository path.

<hr/>

#### getParent

- `getParent ():Collection`

  Gets the parent collection (folder) of this resource.<br/>@returns {Collection} The parent Collection instance.

<hr/>

#### getInformation

- `getInformation ():EntityInformation`

  Gets detailed metadata about the resource.<br/>@returns {EntityInformation} The metadata object.

<hr/>

#### create

- `create ():void`

  Creates the resource if it does not already exist.

<hr/>

#### delete

- `delete ():void`

  Deletes the resource from the repository.

<hr/>

#### renameTo

- `renameTo (name:string):void`

  Renames the resource within its current collection.<br/>@param {string} name The new name for the resource.

<hr/>

#### moveTo

- `moveTo (path:string):void`

  Moves the resource to a new path.<br/>@param {string} path The new absolute path for the resource.

<hr/>

#### copyTo

- `copyTo (path:string):void`

  Copies the resource to a new path.<br/>@param {string} path The new absolute path for the copied resource.

<hr/>

#### exists

- `exists ():boolean`

  Checks if the resource currently exists in the repository.<br/>@returns {boolean} True if the resource exists, false otherwise.

<hr/>

#### isEmpty

- `isEmpty ():boolean`

  Checks if the resource (file) is empty (has zero size).<br/>@returns {boolean} True if the content is empty, false otherwise.

<hr/>

#### getText

- `getText ():string`

  Gets the content of the resource as a text string.<br/>@returns {string} The text content.

<hr/>

#### getContent

- `getContent ():any[]`

  Gets the content of the resource as a JavaScript-friendly byte array.<br/>@returns {any[]} The content bytes.

<hr/>

#### getContentNative

- `getContentNative ():any[]`

  Gets the content of the resource as its native Java byte array representation.<br/>@returns {any[]} The content bytes.

<hr/>

#### setText

- `setText (text:string):void`

  Sets the content of the resource using a text string.<br/>The string is converted to a byte array before saving.<br/>@param {string} text The new text content.

<hr/>

#### setContent

- `setContent (content:any[]):void`

  Sets the content of the resource using a JavaScript byte array.<br/>The array is converted to a native byte array before saving.<br/>@param {any[]} content The new content bytes.

<hr/>

#### setContentNative

- `setContentNative (content:any[]):void`

  Sets the content of the resource using a native Java byte array.<br/>@param {any[]} content The new native content bytes.

<hr/>

#### isBinary

- `isBinary ():boolean`

  Checks if the resource content is determined to be binary.<br/>@returns {boolean} True if binary, false if text.

<hr/>

#### getContentType

- `getContentType ():string`

  Gets the content type (MIME type) of the resource.<br/>@returns {string} The content type string.

### Collection

@class Collection<br/>@description Represents a directory or folder within the Repository, providing<br/>instance methods for collection and resource management.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the name of the collection (folder name).<br/>@returns {string} The name.

<hr/>

#### getPath

- `getPath ():string`

  Gets the full repository path of the collection.<br/>@returns {string} The repository path.

<hr/>

#### getParent

- `getParent ():Collection`

  Gets the parent collection (folder) of this collection.<br/>@returns {Collection} The parent Collection instance.

<hr/>

#### getInformation

- `getInformation ():EntityInformation`

  Gets detailed metadata about the collection.<br/>@returns {EntityInformation} The metadata object.

<hr/>

#### create

- `create ():void`

  Creates the collection if it does not already exist.

<hr/>

#### delete

- `delete ():void`

  Deletes the collection from the repository.

<hr/>

#### renameTo

- `renameTo (name:string):void`

  Renames the collection within its current parent.<br/>@param {string} name The new name for the collection.

<hr/>

#### moveTo

- `moveTo (path:string):void`

  Moves the collection to a new path.<br/>@param {string} path The new absolute path for the collection.

<hr/>

#### copyTo

- `copyTo (path:string):void`

  Copies the collection to a new path.<br/>@param {string} path The new absolute path for the copied collection.

<hr/>

#### exists

- `exists ():boolean`

  Checks if the collection currently exists in the repository.<br/>@returns {boolean} True if the collection exists, false otherwise.

<hr/>

#### isEmpty

- `isEmpty ():boolean`

  Checks if the collection is empty (contains no files or sub-directories).<br/>@returns {boolean} True if empty, false otherwise.

<hr/>

#### getCollectionsNames

- `getCollectionsNames ():string[]`

  Gets the names of all sub-collections (folders) within this collection.<br/>@returns {string[]} An array of sub-collection names.

<hr/>

#### createCollection

- `createCollection (name:string):Collection`

  Creates a new sub-collection (folder) within this collection.<br/>@param {string} name The name of the new sub-collection.<br/>@returns {Collection} The newly created Collection instance.

<hr/>

#### getCollection

- `getCollection (name:string):Collection`

  Gets a specific sub-collection by name.<br/>@param {string} name The name of the sub-collection.<br/>@returns {Collection} The child Collection instance.

<hr/>

#### removeCollection

- `removeCollection (name:string):void`

  Removes a sub-collection by name.<br/>@param {string} name The name of the sub-collection to remove.

<hr/>

#### getResourcesNames

- `getResourcesNames ():string[]`

  Gets the names of all resources (files) within this collection.<br/>@returns {string[]} An array of resource names.

<hr/>

#### getResource

- `getResource (name:string):Resource`

  Gets a specific resource (file) by name.<br/>@param {string} name The name of the resource.<br/>@returns {Resource} The child Resource instance.

<hr/>

#### removeResource

- `removeResource (name:string):void`

  Removes a resource (file) by name.<br/>@param {string} name The name of the resource to remove.

<hr/>

#### createResource

- `createResource (name:string, content:string):Resource`

  Creates a new resource (file) within this collection.<br/>@param {string} name The name of the new resource.<br/>@param {string} content The string content for the resource.<br/>@returns {Resource} The newly created Resource instance.

### EntityInformation

@class EntityInformation<br/>@description Represents detailed metadata (creation date, size, permissions, etc.) for a<br/>Resource or Collection.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the name of the entity (resource or collection).<br/>@returns {string} The name.

<hr/>

#### getPath

- `getPath ():string`

  Gets the full repository path of the entity.<br/>@returns {string} The repository path.

<hr/>

#### getPermissions

- `getPermissions ():number`

  Gets the access permissions for the entity (typically an integer bitmask).<br/>@returns {number} The permissions value.

<hr/>

#### getSize

- `getSize ():number`

  Gets the size of the resource content in bytes (0 for a collection).<br/>@returns {number} The size in bytes.

<hr/>

#### getCreatedBy

- `getCreatedBy ():string`

  Gets the user who created the entity.<br/>@returns {string} The creator's name.

<hr/>

#### getCreatedAt

- `getCreatedAt ():Date`

  Gets the creation timestamp.<br/>@returns {Date} The creation date and time.

<hr/>

#### getModifiedBy

- `getModifiedBy ():string`

  Gets the user who last modified the entity.<br/>@returns {string} The modifier's name.

<hr/>

#### getModifiedAt

- `getModifiedAt ():Date`

  Gets the last modification timestamp.<br/>@returns {Date} The modification date and time.

