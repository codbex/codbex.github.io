# API: cmis

> Source: `cms/cmis.ts`

API CMIS
* Note: This module is supported only with the Mozilla Rhino engine
* Provides static access to the CMIS (Content Management Interoperability Services) repository session and utility constants.

## Usage
```javascript
import { cmis } from "sdk/cms";
import { response } from "sdk/http";
import { streams } from "sdk/io";


let cmisSession = cmis.getSession();

let rootFolder = cmisSession.getRootFolder();

let children = rootFolder.getChildren();
response.println("Listing the children of the root folder:");
for (let i in children) {
    response.println("Object ID: " + children[i].getId());
    response.println("Object Name: " + children[i].getName());
}

const textFileName = "test.txt";
response.println("Creating a simple text file, " + textFileName);

const mimetype = "text/plain; charset=UTF-8";
let content = "This is some test content.";
let filename = textFileName;

let outputStream = streams.createByteArrayOutputStream();
outputStream.writeText(content);
let bytes = outputStream.getBytes();
let inputStream = streams.createByteArrayInputStream(bytes);

let contentStream = cmisSession.getObjectFactory().createContentStream(filename, bytes.length, mimetype, inputStream);

let properties = { "cmis:name": "", "cmis:objectTypeId": "" };
properties[cmis.OBJECT_TYPE_ID] = cmis.OBJECT_TYPE_DOCUMENT;
properties[cmis.NAME] = filename;
let newDocument;
try {
    newDocument = rootFolder.createDocument(properties, contentStream, cmis.VERSIONING_STATE_MAJOR);
} catch (e) {
    response.println("Error: " + e);
}
let documentId = newDocument?.getId();

response.println("Document ID: " + documentId);

children = rootFolder.getChildren();
response.println("Listing the children of the root folder again:");
for (let i in children) {
    response.println("Object ID: " + children[i].getId());
    response.println("Object Name: " + children[i].getName());
    response.println("Object Type: " + JSON.stringify(children[i].getType().getId().toString()));
}

// Get the contents of the file
let doc;
if (documentId !== undefined) {
    doc = cmisSession.getObject(documentId);
} else {
    response.println("No content");
}

contentStream = doc?.getContentStream(); // returns null if the document has no content
if (contentStream !== null) {
    content = contentStream.getStream().readText();
    response.println("Contents of " + filename + " are: " + content);
} else {
    response.println("No content.");
}

response.println("Deleting the newly created document");
if (newDocument) {
    newDocument.delete();
}

response.flush();
response.close();
```


## Classes

### Cmis

#### Methods

<hr/>

#### getSession

- `getSession ():Session`

  Gets a new CMIS session instance to interact with the repository.<br/>@returns A new {@link Session} instance.

<hr/>

#### getAccessDefinitions

- `getAccessDefinitions (path:string, method:string):AccessDefinition[]`

  Retrieves access control definitions for a specific path and method.<br/>@param path The path of the CMIS object.<br/>@param method The operation method (e.g., {@link Cmis.METHOD_READ}, {@link Cmis.METHOD_WRITE}).<br/>@returns A list of access definitions.

### Session

Session object<br/>* Represents an active connection to a CMIS repository, used as the main entry point for CMIS operations.

#### Methods

<hr/>

#### getRepositoryInfo

- `getRepositoryInfo ():RepositoryInfo`

  Gets information about the repository this session is connected to.<br/>@returns Repository metadata.

<hr/>

#### getRootFolder

- `getRootFolder ():Folder`

  Gets the root folder of the repository.<br/>@returns The root {@link Folder} object.

<hr/>

#### getObjectFactory

- `getObjectFactory ():ObjectFactory`

  Gets the object factory for creating new CMIS objects like ContentStream.<br/>@returns An {@link ObjectFactory} instance.

<hr/>

#### getObject

- `getObject (objectId:string):Folder|Document`

  Retrieves a CMIS object (Document or Folder) by its unique ID.<br/>@param objectId The unique ID of the object.<br/>@returns A {@link Document} or {@link Folder} instance.<br/>@throws Error if the object type is unsupported.

<hr/>

#### getObjectByPath

- `getObjectByPath (path:string):Folder|Document`

  Retrieves a CMIS object (Document or Folder) by its path.<br/>@param path The path of the object in the repository (e.g., "/path/to/object").<br/>@returns A {@link Document} or {@link Folder} instance.<br/>@throws Error if read access is not allowed or the object type is unsupported.

<hr/>

#### createFolder

- `createFolder (location:string):Folder`

  Creates a folder structure recursively based on a path. This is a convenience method that<br/>creates all non-existent parent folders.<br/>Example: `createFolder("/new/path/structure")`<br/>@param location The path of the folder to create.<br/>@returns The newly created (or existing) innermost {@link Folder} object.

<hr/>

#### createDocument

- `createDocument (location:string, properties:{[key:string]:any}, contentStream:ContentStream, versioningState:string):Document`

  Creates a new document at the specified location. This method ensures the parent folder structure exists.<br/>@param location The path of the parent folder (e.g., "/path/to/folder").<br/>@param properties A map of CMIS properties for the new document (must include {@link Cmis.NAME}).<br/>@param contentStream The content stream containing the document's binary data.<br/>@param versioningState The versioning state (e.g., {@link Cmis.VERSIONING_STATE_MAJOR}).<br/>@returns The newly created {@link Document} object.

### RepositoryInfo

RepositoryInfo object<br/>* Provides basic information about the connected CMIS repository.

#### Methods

<hr/>

#### getId

- `getId ():string`

  Gets the unique identifier of the repository.<br/>@returns The repository ID.

<hr/>

#### getName

- `getName ():string`

  Gets the name of the repository.<br/>@returns The repository name.

### Folder

Folder object<br/>* Represents a CMIS folder object, allowing operations like creating children, deleting, and renaming.

#### Methods

<hr/>

#### getId

- `getId ():string`

  Gets the unique identifier of the folder.<br/>@returns The folder ID.

<hr/>

#### getName

- `getName ():string`

  Gets the name of the folder.<br/>@returns The folder name.

<hr/>

#### createFolder

- `createFolder (properties:{[key:string]:any}):Folder`

  Creates a new folder within this folder.<br/>@param properties A map of CMIS properties for the new folder (must include {@link Cmis.NAME}).<br/>@returns The newly created {@link Folder} object.<br/>@throws Error if write access is not allowed.

<hr/>

#### createDocument

- `createDocument (properties:{[key:string]:any}, contentStream:ContentStream, versioningState:string):Document`

  Creates a new document within this folder.<br/>@param properties A map of CMIS properties for the new document (must include {@link Cmis.NAME}).<br/>@param contentStream The content stream containing the document's binary data.<br/>@param versioningState The versioning state (e.g., {@link Cmis.VERSIONING_STATE_MAJOR}).<br/>@returns The newly created {@link Document} object.<br/>@throws Error if write access is not allowed.

<hr/>

#### getChildren

- `getChildren ():CmisObject[]`

  Retrieves the children of this folder.<br/>@returns A list of generic {@link CmisObject} wrappers for the children.<br/>@throws Error if read access is not allowed.

<hr/>

#### getPath

- `getPath ():string`

  Gets the path of the folder.<br/>@returns The folder path.

<hr/>

#### isRootFolder

- `isRootFolder ():boolean`

  Checks if this folder is the root folder of the repository.<br/>@returns True if it is the root folder, false otherwise.

<hr/>

#### getFolderParent

- `getFolderParent ():Folder`

  Gets the parent folder of this folder.<br/>@returns The parent {@link Folder} object.

<hr/>

#### delete

- `delete ():void`

  Deletes this folder (must be empty to succeed).<br/>@throws Error if write access is not allowed.

<hr/>

#### rename

- `rename (newName:string):void`

  Renames this folder.<br/>@param newName The new name for the folder.<br/>@throws Error if write access is not allowed.

<hr/>

#### deleteTree

- `deleteTree ():void`

  Deletes this folder and all its contents recursively.<br/>@throws Error if write access is not allowed.

<hr/>

#### getType

- `getType ():TypeDefinition`

  Gets the type definition of the folder.<br/>@returns The folder's {@link TypeDefinition}.

### CmisObject

CmisObject object<br/>* A generic wrapper for CMIS objects, used primarily for children lists.

#### Methods

<hr/>

#### getId

- `getId ():string`

  Gets the unique identifier of the object.<br/>@returns The object ID.

<hr/>

#### getName

- `getName ():string`

  Gets the name of the object.<br/>@returns The object name.

<hr/>

#### getPath

- `getPath ():string`

  Gets the path of the CMIS object. Handles differences in native CMIS implementations.<br/>@returns The object path.<br/>@throws Error if the path cannot be determined.

<hr/>

#### getType

- `getType ():TypeDefinition`

  Gets the type definition of the object.<br/>@returns The object's {@link TypeDefinition}.

<hr/>

#### delete

- `delete ():void`

  Deletes the CMIS object.

<hr/>

#### rename

- `rename (newName:string):void`

  Renames the CMIS object.<br/>@param newName The new name for the object.

### ObjectFactory

ObjectFactory object<br/>* Provides methods to create content streams.

#### Methods

<hr/>

#### createContentStream

- `createContentStream (filename:string, length:number, mimetype:string, inputStream:streams.InputStream):ContentStream`

  Creates a new content stream instance that can be used to create or update document content.<br/>@param filename The name of the file.<br/>@param length The size of the content stream in bytes.<br/>@param mimetype The MIME type of the content.<br/>@param inputStream The input stream containing the data.<br/>@returns A new {@link ContentStream} object.

### ContentStream

ContentStream object<br/>* Represents the binary content stream of a CMIS Document.

#### Methods

<hr/>

#### getStream

- `getStream ():streams.InputStream`

  Gets the Java-backed input stream for reading the content.<br/>@returns An {@link streams.InputStream} wrapper.

<hr/>

#### getMimeType

- `getMimeType ():string`

  Gets the MIME type of the content stream.<br/>@returns The MIME type string.

### Document

Document object<br/>* Represents a CMIS document object, allowing operations like reading content, deleting, and renaming.

#### Methods

<hr/>

#### getId

- `getId ():string`

  Gets the unique identifier of the document.<br/>@returns The document ID.

<hr/>

#### getName

- `getName ():string`

  Gets the name of the document.<br/>@returns The document name.

<hr/>

#### getType

- `getType ():TypeDefinition`

  Gets the type definition of the document.<br/>@returns The document's {@link TypeDefinition}.

<hr/>

#### getPath

- `getPath ():string`

  Gets the path of the document.<br/>@returns The document path.

<hr/>

#### delete

- `delete ():void`

  Deletes this document.<br/>@throws Error if write access is not allowed.

<hr/>

#### getContentStream

- `getContentStream ():ContentStream|null`

  Gets the binary content stream of the document.<br/>@returns The {@link ContentStream} object, or `null` if the document has no content.

<hr/>

#### getSize

- `getSize ():number`

  Gets the size of the document's content stream in bytes.<br/>@returns The size in bytes.

<hr/>

#### rename

- `rename (newName:string):void`

  Renames this document.<br/>@param newName The new name for the document.<br/>@throws Error if write access is not allowed.

### TypeDefinition

Represents the definition of a CMIS object type (e.g., cmis:document, cmis:folder).

#### Methods

<hr/>

#### getId

- `getId ():string`

  Gets the unique ID of the object type (e.g., 'cmis:document').<br/>@returns The type ID.

