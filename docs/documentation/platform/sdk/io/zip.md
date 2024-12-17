# ZIP

The Zip API provides essential functionality for creating zip archives from files in scripting environments. Zip archives are commonly used for compressing and packaging multiple files and directories into a single file, making it easier to distribute and transfer large amounts of data. With the Zip API, developers can efficiently create zip archives, add files and directories to them, and customize compression settings as needed. This API offers convenient methods for managing zip archives, enabling seamless integration of zip functionality into scripting workflows. Whether it's for bundling files for distribution or archiving data for storage, the Zip API equips developers with the tools needed to handle zip compression tasks effectively.

### Example Usage

To test the API first create a zip file using the following snippet:

```javascript
import { zip, files } from "sdk/io";

let outputStream = files.createOutputStream("test.zip");
let zipOutputStream = zip.createZipOutputStream(outputStream);

if (outputStream.isValid()) {
    try {
        zipOutputStream.createZipEntry("test1.txt");
        zipOutputStream.writeText("some text");
        zipOutputStream.createZipEntry("test2.bin");
        zipOutputStream.write([60, 61, 62, 63]);
    } finally {
        zipOutputStream.close();
    }
}
```

Then you can read the contents of the zip file:

```javascript
import { zip, files } from "sdk/io";

let inputStream = files.createInputStream("test.zip");
let zipInputStream = zip.createZipInputStream(inputStream);

if (inputStream.isValid()) {
    try {
        let zipEntry = zipInputStream.getNextEntry();
        while (zipEntry.isValid()) {
            console.log(zipEntry.getName());
            console.log(zipInputStream.read());
            zipEntry = zipInputStream.getNextEntry();
        }
    }
    finally {
        zipInputStream.close();
    }
} else {
    console.log('No such file');
}
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**createZipInputStream(inputStream)**   | Returns the Zip archive reader object | *ZipInputStream*
**createZipOutputStream(outputStream)**   | Returns the Zip archive writer object | *ZipOutputStream*



## Objects

---

### ZipInputStream

Function     | Description | Returns
------------ | ----------- | --------
**getNextEntry()**   | Returns the next entry from the archive or null if no more entries found | *ZipEntry*
**read()**   | Reads from the zip input stream at the current entry point and returns the result as array of bytes | *array of bytes*
**readNative()**   | Reads from the zip input stream at the current entry point and returns the result as array of Java bytes | *array of Java bytes*
**readText()**   | Reads from the zip input stream at the current entry point and returns the result as text | *string*
**close()**   | Closes the zip input stream | -


### ZipOutputStream

Function     | Description | Returns
------------ | ----------- | --------
**createZipEntry()**   | Returns a new entry for the archive | *ZipEntry*
**write(bytes)**   | Writes an array of bytes to the zip output stream at the current entry point | -
**writeNative(bytes)**   | Writes an array of Java bytes to the zip output stream at the current entry point | -
**writeText(text)**   | Writes a text to the zip output stream at the current entry point | -
**closeEntry()**   | Closes the current entry (optional) | -
**close()**   | Finishes, flushes and closes the zip output stream | -


### ZipEntry

Function     | Description | Returns
------------ | ----------- | --------
**getName()**   | Returns the name of the entry | *string*
**getSize()**   | Returns the size of the entry | *integer*
**getCompressedSize()**   | Returns the compressed size of the entry | *integer*
**getTime()**   | Returns the time stamp of the entry | *integer*
**getCrc()**   | Returns the CRC sum of the entry | *integer*
**getComment()**   | Returns the comment text of the entry | *integer*
**isDirectory()**   | Returns true if the entry represents a directory and false otherwise | *integer*
**isValid()**   | Returns true if the entry is a valid one and false otherwise (after last) | *boolean*