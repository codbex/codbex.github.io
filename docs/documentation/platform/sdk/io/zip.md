# API: zip

> Source: `io/zip.ts`

Provides a façade for handling ZIP archive operations, including
file compression, decompression, and stream-based entry processing.

## Classes

### Zip

The Zip class provides static utility methods for managing ZIP archives<br/>at both file path level and stream level.

#### Methods

<hr/>

#### zip

- `zip (sourcePath:string, zipTargetPath:string):void`

  Zips the content of a source directory or file into a target ZIP file.<br/><br/>@param sourcePath The file system path to the content to be compressed.<br/>@param zipTargetPath The file system path where the resulting ZIP file should be saved.

<hr/>

#### unzip

- `unzip (zipPath:string, targetPath:string):void`

  Unzips an existing ZIP file into a target directory.<br/><br/>@param zipPath The file system path to the ZIP file to be extracted.<br/>@param targetPath The file system path to the directory where content should be extracted.

<hr/>

#### createZipInputStream

- `createZipInputStream (inputStream:InputStream):ZipInputStream`

  Creates a {@link ZipInputStream} that reads ZIP archive data from a provided<br/>generic {@link InputStream}. This allows for reading ZIP entries without<br/>writing the archive to disk first.<br/><br/>@param inputStream The source stream containing the raw ZIP data.<br/>@returns A new {@link ZipInputStream} instance.

<hr/>

#### createZipOutputStream

- `createZipOutputStream (outputStream:OutputStream):ZipOutputStream`

  Creates a {@link ZipOutputStream} that writes compressed ZIP archive data<br/>to a provided generic {@link OutputStream}. This allows for creating ZIP archives<br/>in memory or streaming them directly.<br/><br/>@param outputStream The destination stream where the raw ZIP data will be written.<br/>@returns A new {@link ZipOutputStream} instance.

### ZipInputStream

Represents an input stream for reading data from a ZIP archive.<br/>Data is accessed sequentially by iterating through {@link ZipEntry} objects.

#### Methods

<hr/>

#### getNextEntry

- `getNextEntry ():ZipEntry`

  Reads the next ZIP file entry and positions the stream at the beginning of the entry data.<br/>Must be called before reading data for an entry.<br/><br/>@returns The next {@link ZipEntry} object, or null if there are no more entries.

<hr/>

#### read

- `read ():any[]`

  Reads the data for the current entry and returns it as a JavaScript byte array.<br/><br/>@returns A JavaScript array (`number[]`) of the byte values for the current entry.

<hr/>

#### readNative

- `readNative ():any[]`

  Reads the data for the current entry and returns the native Java byte array.<br/><br/>@returns The native Java byte array object.

<hr/>

#### readText

- `readText ():string`

  Reads the data for the current entry and converts it to a string<br/>using the platform's default character encoding.<br/><br/>@returns The content of the current entry as a string.

<hr/>

#### close

- `close ():void`

  Closes the underlying native ZipInputStream.

### ZipOutputStream

Represents an output stream for writing data to a ZIP archive.<br/>Entries must be explicitly created and closed.

#### Methods

<hr/>

#### createZipEntry

- `createZipEntry (name:string):ZipEntry`

  Creates a new {@link ZipEntry} with the given name, and begins writing the<br/>entry's header to the archive stream. All subsequent write operations<br/>will apply to this entry until {@link closeEntry} is called.<br/><br/>@param name The file or directory name to use inside the ZIP archive.<br/>@returns The newly created {@link ZipEntry} object.

<hr/>

#### write

- `write (data:any[]):void`

  Writes the data from a JavaScript byte array to the current active entry in the stream.<br/><br/>@param data The JavaScript array (`number[]`) of byte values to write.

<hr/>

#### writeNative

- `writeNative (data:any[]):void`

  Writes the data from a native Java byte array to the current active entry in the stream.<br/><br/>@param data The native Java byte array object to write.

<hr/>

#### writeText

- `writeText (text:string):void`

  Converts the string to bytes and writes it to the current active entry in the stream.<br/><br/>@param text The string content to write.

<hr/>

#### closeEntry

- `closeEntry ():void`

  Closes the current active ZIP entry and positions the stream for the next entry.

<hr/>

#### close

- `close ():void`

  Finalizes the writing of the ZIP file, flushes the stream, and closes the native object.<br/>This must be called after all entries have been written.

### ZipEntry

Represents an entry (file or directory) within a ZIP archive.<br/>It holds metadata about the archived item.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the name of the entry (path relative to the ZIP root).<br/>@returns The name of the entry.

<hr/>

#### getSize

- `getSize ():number`

  Gets the uncompressed size of the entry data.<br/>@returns The size in bytes.

<hr/>

#### getCompressedSize

- `getCompressedSize ():number`

  Gets the compressed size of the entry data.<br/>@returns The compressed size in bytes.

<hr/>

#### getTime

- `getTime ():number`

  Gets the modification time of the entry.<br/>@returns The time as a numerical timestamp.

<hr/>

#### getCrc

- `getCrc ():number`

  Gets the CRC-32 checksum of the uncompressed entry data.<br/>@returns The CRC value.

<hr/>

#### getComment

- `getComment ():string`

  Gets the optional comment for the entry.<br/>@returns The comment string.

<hr/>

#### isDirectory

- `isDirectory ():boolean`

  Checks if the entry represents a directory.<br/>@returns True if it is a directory, false otherwise.

<hr/>

#### isValid

- `isValid ():boolean`

  Checks if the underlying native ZipEntry object is defined and non-null.<br/>@returns True if the entry is valid, false otherwise.

