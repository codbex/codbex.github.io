# Files

The Files module provides access to the underlying File System, offering a wide range of functions for managing files and directories.

## Overview

### list(path)

Lists the files under the specified path.

- **Parameters:**
  - `path`: The path of the directory to list files from.
  
- **Returns:** An array of strings representing the files under the specified path.

### exists(path)

Checks whether a file exists at the specified path.

- **Parameters:**
  - `path`: The path of the file to check for existence.
  
- **Returns:** A boolean value indicating whether the file exists.

### isExecutable(path)

Checks whether the file at the specified path is executable.

- **Parameters:**
  - `path`: The path of the file to check.
  
- **Returns:** A boolean value indicating whether the file is executable.

### isReadable(path)

Checks whether the file at the specified path is readable.

- **Parameters:**
  - `path`: The path of the file to check.
  
- **Returns:** A boolean value indicating whether the file is readable.

### isWritable(path)

Checks whether the file at the specified path is writable.

- **Parameters:**
  - `path`: The path of the file to check.
  
- **Returns:** A boolean value indicating whether the file is writable.

### isHidden(path)

Checks whether the file at the specified path is hidden.

- **Parameters:**
  - `path`: The path of the file to check.
  
- **Returns:** A boolean value indicating whether the file is hidden.

### isDirectory(path)

Checks whether the file at the specified path is a directory.

- **Parameters:**
  - `path`: The path of the file to check.
  
- **Returns:** A boolean value indicating whether the file is a directory.

### isFile(path)

Checks whether the file at the specified path is a regular file.

- **Parameters:**
  - `path`: The path of the file to check.
  
- **Returns:** A boolean value indicating whether the file is a regular file.

### isSameFile(path1, path2)

Checks whether two paths point to the same file.

- **Parameters:**
  - `path1`: The first path to compare.
  - `path2`: The second path to compare.
  
- **Returns:** A boolean value indicating whether the two paths point to the same file.

### getCanonicalPath(path)

Returns the canonical path of the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  
- **Returns:** A string representing the canonical path of the file.

### getName(path)

Returns the name of the file or directory at the specified path.

- **Parameters:**
  - `path`: The path of the file or directory.
  
- **Returns:** A string representing the name of the file or directory.

### getParentPath(path)

Returns the parent directory's path of the file or directory at the specified path.

- **Parameters:**
  - `path`: The path of the file or directory.
  
- **Returns:** A string representing the parent directory's path.

### readBytes(path)

Returns the content of the file at the specified path as a byte array.

- **Parameters:**
  - `path`: The path of the file.
  
- **Returns:** An array of bytes representing the content of the file.

### readBytesNative(path)

Returns the content of the file at the specified path as an array of Java bytes.

- **Parameters:**
  - `path`: The path of the file.
  
- **Returns:** An array of Java bytes representing the content of the file.

### readText(path)

Returns the content of the file at the specified path as a string.

- **Parameters:**
  - `path`: The path of the file.
  
- **Returns:** A string representing the content of the file.

### writeBytes(path, bytes)

Writes the given byte array content to the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  - `bytes`: The byte array content to write.
  
- **Returns:** None.

### writeBytesNative(path, bytes)

Writes the given array of Java bytes content to the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  - `bytes`: The array of Java bytes content to write.
  
- **Returns:** None.

### writeText(path, text)

Writes the given text content to the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  - `text`: The text content to write.
  
- **Returns:** None.

### getLastModified(path)

Returns the last modification date of the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  
- **Returns:** A Date object representing the last modification date.

### setLastModified(path, date)

Sets the last modification date of the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  - `date`: The Date object representing the last modification date.
  
- **Returns:** None.

### getOwner(path)

Returns the owner of the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  
- **Returns:** A string representing the owner of the file.

### setOwner(path, owner)

Sets the owner of the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  - `owner`: The owner to set for the file.
  
- **Returns:** None.

### getPermissions(path)

Returns the POSIX permissions of the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  
- **Returns:** A string representing the POSIX permissions of the file.

### setPermissions(path, permissions)

Sets the POSIX permissions of the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  - `permissions`: The permissions to set for the file.
  
- **Returns:** None.

### size(path)

Returns the size of the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  
- **Returns:** A long value representing the size of the file.

### createFile(path)

Creates a new file at the specified path.

- **Parameters:**
  - `path`: The path of the file to create.
  
- **Returns:** None.

### createDirectory(path)

Creates a new directory at the specified path.

- **Parameters:**
  - `path`: The path of the directory to create.
  
- **Returns:** None.

### copy(source, target)

Copies a file from the source path to the target path.

- **Parameters:**
  - `source`: The source path of the file to copy.
  - `target`: The target path to copy the file to.
  
- **Returns:** None.

### move(source, target)

Moves a file from the source path to the target path.

- **Parameters:**
  - `source`: The source path of the file to move.
  - `target`: The target path to move the file to.
  
- **Returns:** None.

### deleteFile(path)

Deletes the file at the specified path.

- **Parameters:**
  - `path`: The path of the file to delete.
  
- **Returns:** None.

### deleteDirectory(path)

Deletes the directory at the specified path.

- **Parameters:**
  - `path`: The path of the directory to delete.
  
- **Returns:** None.

### createTempFile(prefix, suffix)

Creates a new temporary file with the given prefix and suffix.

- **Parameters:**
  - `prefix`: The prefix for the temporary file name.
  - `suffix`: The suffix for the temporary file name.
  
- **Returns:** None.

### createTempDirectory(prefix)

Creates a new temporary directory with the given prefix.

- **Parameters:**
  - `prefix`: The prefix for the temporary directory name.
  
- **Returns:** None.

### createInputStream(path)

Creates an InputStream pointing to the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  
- **Returns:** A streams.InputStream object representing the InputStream.

### createOutputStream(path)

Creates an OutputStream pointing to the file at the specified path.

- **Parameters:**
  - `path`: The path of the file.
  
- **Returns:** A streams.OutputStream object representing the OutputStream.

::: info
Note that the parameter `path` takes either an absolute path or relative path from your working instance
:::

### Example Usage

```javascript
import { files } from "sdk/io";

let tempFile = files.createTempFile("file", ".txt");

console.log("Temp file: " + tempFile);

files.writeText(tempFile, "Sample text here...");
files.deleteFile(tempFile);
```

## Constants

---

Constant     | Description | Returns
------------ | ----------- | --------
**separator**   | OS file separator | *string*

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**list(path)**   | List files under this *path* | *array of string*
**exists(path)**   | Whether a file by this *path* exists | *boolean*
**isExecutable(path)**   | Whether the file by this *path* is executable | *boolean*
**isReadable(path)**   | Whether the file by this *path* is readable | *boolean*
**isWritable(path)**   | Whether the file by this *path* is writable | *boolean*
**isHidden(path)**   | Whether the file by this *path* is hidden | *boolean*
**isDirectory(path)**   | Whether the file by this *path* is directory | *boolean*
**isFile(path)**   | Whether the file by this *path* is file | *boolean*
**isSameFile(path1, path2)**   | Whether the files by these *path1* and *path2* are pointing to the same file | *boolean*
**getCanonicalPath(path)**   | Returns the canonical path of the file by this *path* | *string*
**getName(path)**   | Returns the name of the file by this *path* | *string*
**getParentPath(path)**   | Returns the parent's path of the file by this *path* | *string*
**readBytes(path)**   | Returns the content of the given file as byte array | *array of bytes*
**readBytesNative(path)**   | Returns the content of the given file as array of Java bytes | *array of Java bytes*
**readText(path)**   | Returns the content of the given file as string | *string*
**writeBytes(path, bytes)**   | Writes the given byte array content to the file | -
**writeBytesNative(path, bytes)**   | Writes the given array of Java bytes content to the file | -
**writeText(path, text)**   | Writes the given text content to the file | -
**getLastModified(path)**   | Returns the last modification date of the file by this *path* | *Date*
**setLastModified(path, date)**   | Sets the last modification date of the file by this *path* | -
**getOwner(path)**   | Returns the owner of the file by this *path* | *string*
**setOwner(path, owner)**   | Sets the owner of the file by this *path* | -
**getPermissions(path)**   | Returns the POSIX permissions of the file by this *path* | *string*
**setPermissions(path, owner)**   | Sets the POSIX permissions of the file by this *path* | -
**size(path)**   | Returns the size of the file by this *path* | *long*
**createFile(path)**   | Creates a new file by the given path | -
**createDirectory(path)**   | Creates a new directory by the given path | -
**copy(source, target)**   | Copies a source file to a target | -
**move(source, target)**   | Moves a source file to a target | -
**deleteFile(path)**   | Deletes the file by the given path | -
**deleteDirectory(path)**   | Deletes the directory by the given path | -
**createTempFile(prefix, suffix)**   | Creates a new temporary file by the given prefix and suffix | -
**createTempDirectory(prefix)**   | Creates a new temporary directory by the given prefix | -
**createInputStream(path)**   | Creates an InputStream pointing to a file by the given path | *streams.InputStream*
**createOutputStream(path)**   | Creates an OutputStream pointing to a file by the given path | *streams.OutputStream*
