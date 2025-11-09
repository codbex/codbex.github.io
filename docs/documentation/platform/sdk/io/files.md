# API: files

> Source: `io/files.ts`

Provides a comprehensive static façade for file and directory operations,
abstracting the underlying Java file system implementation.

## Usage
```javascript
import { files } from "sdk/io";

let tempFile = files.createTempFile("temp", ".txt");

console.log("Temp file: " + tempFile);

files.writeText(tempFile, "Some text");
files.deleteFile(tempFile);

```


## Classes

### Files

The Files class provides static methods for high-level file system manipulation,<br/>including checking properties, reading/writing content, and navigating the structure.

#### Methods

<hr/>

#### exists

- `exists (path:string):boolean`

  Checks if a file or directory exists at the given path.<br/>@param path The path to check.<br/>@returns True if the path exists, false otherwise.

<hr/>

#### isExecutable

- `isExecutable (path:string):boolean`

  Checks if the file or directory at the given path is executable.<br/>@param path The path to check.<br/>@returns True if executable, false otherwise.

<hr/>

#### isReadable

- `isReadable (path:string):boolean`

  Checks if the file or directory at the given path is readable.<br/>@param path The path to check.<br/>@returns True if readable, false otherwise.

<hr/>

#### isWritable

- `isWritable (path:string):boolean`

  Checks if the file or directory at the given path is writable.<br/>@param path The path to check.<br/>@returns True if writable, false otherwise.

<hr/>

#### isHidden

- `isHidden (path:string):boolean`

  Checks if the file or directory at the given path is hidden.<br/>@param path The path to check.<br/>@returns True if hidden, false otherwise.

<hr/>

#### isDirectory

- `isDirectory (path:string):boolean`

  Checks if the path refers to a directory.<br/>@param path The path to check.<br/>@returns True if it's a directory, false otherwise.

<hr/>

#### isFile

- `isFile (path:string):boolean`

  Checks if the path refers to a regular file.<br/>@param path The path to check.<br/>@returns True if it's a file, false otherwise.

<hr/>

#### isSameFile

- `isSameFile (path1:string, path2:string):boolean`

  Checks if two paths refer to the same underlying file system object.<br/>@param path1 The first path.<br/>@param path2 The second path.<br/>@returns True if they reference the same file/directory, false otherwise.

<hr/>

#### getCanonicalPath

- `getCanonicalPath (path:string):string`

  Returns the canonical (absolute and normalized) path for the given path.<br/>@param path The path to normalize.<br/>@returns The canonical path string.

<hr/>

#### getName

- `getName (path:string):string`

  Gets the simple name of the file or directory at the given path (the last element).<br/>@param path The path.<br/>@returns The name.

<hr/>

#### getParentPath

- `getParentPath (path:string):string`

  Gets the path of the parent directory.<br/>@param path The path.<br/>@returns The parent path string, or null/empty if none exists.

<hr/>

#### readBytes

- `readBytes (path:string):any[]`

  Reads all bytes from a file into a JavaScript byte array (an array of numbers).<br/><br/>Note: This method automatically converts the native Java byte array to a<br/>JavaScript array using `Bytes.toJavaScriptBytes()`.<br/>@param path The path to the file.<br/>@returns A JavaScript array of byte values.

<hr/>

#### readBytesNative

- `readBytesNative (path:string):any[]`

  Reads all bytes from a file and returns the native Java byte array object.<br/>@param path The path to the file.<br/>@returns The native Java byte array.

<hr/>

#### readText

- `readText (path:string):string`

  Reads all text content from a file using the platform's default character encoding.<br/>@param path The path to the file.<br/>@returns The content of the file as a string.

<hr/>

#### writeBytes

- `writeBytes (path:string, data:any[]):void`

  Writes the content of a JavaScript byte array to a file. Overwrites existing content.<br/><br/>Note: This method automatically converts the JavaScript array to a native<br/>Java byte array using `Bytes.toJavaBytes()` before writing.<br/>@param path The path to the file.<br/>@param data The JavaScript array of byte values to write.

<hr/>

#### writeBytesNative

- `writeBytesNative (path:string, data:any[]):void`

  Writes the content of a native Java byte array to a file. Overwrites existing content.<br/>@param path The path to the file.<br/>@param data The native Java byte array to write.

<hr/>

#### writeText

- `writeText (path:string, text:string):void`

  Writes a string of text to a file using the platform's default character encoding. Overwrites existing content.<br/>@param path The path to the file.<br/>@param text The string content to write.

<hr/>

#### getLastModified

- `getLastModified (path:string):Date`

  Gets the last modified time of the file or directory.<br/>@param path The path to the file or directory.<br/>@returns A JavaScript Date object representing the last modified time.

<hr/>

#### setLastModified

- `setLastModified (path:string, time:Date):void`

  Sets the last modified time of the file or directory.<br/>@param path The path to the file or directory.<br/>@param time The new Date object to set as the last modified time.

<hr/>

#### getOwner

- `getOwner (path:string):string`

  Gets the owner of the file or directory.<br/>@param path The path to the file or directory.<br/>@returns The owner name as a string.

<hr/>

#### setOwner

- `setOwner (path:string, owner:string):void`

  Sets the owner of the file or directory.<br/>@param path The path to the file or directory.<br/>@param owner The new owner name.

<hr/>

#### getPermissions

- `getPermissions (path:string):string`

  Gets the permissions string for the file or directory (implementation dependent).<br/>@param path The path to the file or directory.<br/>@returns The permissions string.

<hr/>

#### setPermissions

- `setPermissions (path:string, permissions:string):void`

  Sets the permissions for the file or directory (implementation dependent).<br/>@param path The path to the file or directory.<br/>@param permissions The permissions string.

<hr/>

#### size

- `size (path:string):number`

  Gets the size of the file in bytes.<br/>@param path The path to the file.<br/>@returns The size in bytes.

<hr/>

#### createFile

- `createFile (path:string):void`

  Creates a new, empty file at the specified path.<br/>@param path The path where the file should be created.

<hr/>

#### createDirectory

- `createDirectory (path:string):void`

  Creates a new directory at the specified path.<br/>@param path The path where the directory should be created.

<hr/>

#### copy

- `copy (source:string, target:string):void`

  Copies a file or directory from a source path to a target path.<br/>@param source The source path.<br/>@param target The target path.

<hr/>

#### move

- `move (source:string, target:string):void`

  Moves or renames a file or directory.<br/>@param source The source path.<br/>@param target The target path.

<hr/>

#### deleteFile

- `deleteFile (path:string):void`

  Deletes the file at the specified path.<br/>@param path The path to the file to delete.

<hr/>

#### deleteDirectory

- `deleteDirectory (path:string, forced?:boolean):void`

  Deletes the directory at the specified path.<br/>@param path The path to the directory to delete.<br/>@param forced If true, recursively deletes the directory and its contents.

<hr/>

#### createTempFile

- `createTempFile (prefix:string, suffix:string):string`

  Creates a new temporary file with the given prefix and suffix.<br/>@param prefix The prefix string to be used in generating the file's name.<br/>@param suffix The suffix string to be used in generating the file's name.<br/>@returns The path of the created temporary file.

<hr/>

#### createTempDirectory

- `createTempDirectory (prefix:string):string`

  Creates a new temporary directory with the given prefix.<br/>@param prefix The prefix string to be used in generating the directory's name.<br/>@returns The path of the created temporary directory.

<hr/>

#### createInputStream

- `createInputStream (path:string):InputStream`

  Creates and returns a new {@link InputStream} for reading data from the file.<br/>@param path The path to the file.<br/>@returns A new InputStream instance.

<hr/>

#### createOutputStream

- `createOutputStream (path:string):OutputStream`

  Creates and returns a new {@link OutputStream} for writing data to the file.<br/>@param path The path to the file.<br/>@returns A new OutputStream instance.

<hr/>

#### traverse

- `traverse (path:string):FolderObject[]`

  Traverses a directory and returns a structured {@link FolderObject} hierarchy.<br/>@param path The path to the folder to traverse.<br/>@returns The root FolderObject containing the file system tree structure.

<hr/>

#### list

- `list (path:string):string[]`

  Lists the direct children (files and folders) of a directory, returning only their paths.<br/>@param path The path to the directory.<br/>@returns An array of string paths for the contents of the directory.

<hr/>

#### find

- `find (path:string, pattern:string):string[]`

  Finds files and directories matching a specified glob pattern within a directory tree.<br/>@param path The starting path for the search.<br/>@param pattern The glob pattern to match (e.g., "*.js", "**.txt").<br/>@returns An array of string paths that match the pattern.

