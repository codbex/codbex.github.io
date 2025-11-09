# API: upload

> Source: `http/upload.ts`

Provides a static façade (`Upload` class) for checking and parsing
multipart/form-data HTTP requests, typically used for file uploads.

## Usage
```javascript
import { upload, request, response } from "sdk/http";

if (request.getMethod() === "POST") {
    if (upload.isMultipartContent()) {
        const fileItems = upload.parseRequest();
        for (let i = 0; i < fileItems.size(); i++) {
            const fileItem = fileItems.get(i);
            const contentType = fileItem.getContentType();
            console.log(`Content Type: ${contentType}`);
            console.log(`Filename: ${fileItem.getOriginalFilename()}`);
            // console.log(`Text: ${fileItem.getText()}`);

            response.setContentType(contentType);
            response.write(fileItem.getBytesNative());
        }
    } else {
        response.println("The request's content must be 'multipart'");
    }
} else if (request.getMethod() === "GET") {
    response.println("Use POST request.");
}

response.flush();
response.close();


// -----------
// upload.html
// -----------

<!DOCTYPE html>
<html>
    <body>
        <form action="/services/js/http-tests/upload/upload.js" method="post" enctype="multipart/form-data">
            <label for="file">Filename:</label>
            <input type="file" name="file" id="file" multiple>
            <br>
            <input type="submit" name="submit" value="Submit">
        </form>
    </body>
</html>

```


## Classes

### Upload

The static Upload class provides methods to determine if a request contains<br/>multipart content and to parse that content into file items.

#### Methods

<hr/>

#### isMultipartContent

- `isMultipartContent ():boolean`

  Checks if the current incoming HTTP request contains multipart content<br/>(e.g., from an HTML form with `enctype="multipart/form-data"`).<br/>@returns True if the request is multipart, false otherwise.

<hr/>

#### parseRequest

- `parseRequest ():FileItems`

  Parses the incoming multipart request content into a collection of file items.<br/>This operation typically consumes the request body.<br/>@returns A FileItems object representing all parts (files and form fields) of the request.

### FileItems

Represents a collection of uploaded file and form field items parsed from a multipart request.

#### Methods

<hr/>

#### get

- `get (index:number):FileItem`

  Retrieves a specific item (file or form field) by its index in the collection.<br/>@param index The zero-based index of the item.<br/>@returns A FileItem object representing the item at the specified index.

<hr/>

#### size

- `size ():number`

  Returns the total number of items (files and form fields) in the collection.<br/>@returns The size of the collection.

### FileItem

Represents a single item (either an uploaded file or a regular form field)<br/>within a multipart request.

#### Methods

<hr/>

#### getName

- `getName ():string`

  For a file upload, returns the original filename as reported by the client.<br/>For a regular form field, this is typically null or undefined.<br/>@returns The original filename string.

<hr/>

#### getContentType

- `getContentType ():string`

  Returns the MIME type of the uploaded file or content part.<br/>@returns The content type string (e.g., 'image/png', 'text/plain').

<hr/>

#### isEmpty

- `isEmpty ():boolean`

  Checks if the uploaded item is empty (e.g., a file upload with zero bytes).<br/>@returns True if the item is empty, false otherwise.

<hr/>

#### getSize

- `getSize ():number`

  Returns the size of the uploaded item in bytes.<br/>@returns The size as a number.

<hr/>

#### getBytes

- `getBytes ():any[]`

  Retrieves the content of the file item as a JavaScript array of bytes.<br/>This uses a utility (`Bytes.toJavaScriptBytes`) to convert the native Java byte array.<br/>@returns An array of bytes (`any[]`).

<hr/>

#### getBytesNative

- `getBytesNative ():any[]`

  Retrieves the content of the file item as the native Java byte array.<br/>@returns The native byte array (`any[]`).

<hr/>

#### getText

- `getText ():string`

  Retrieves the content of the file item as a string.<br/>Note: This assumes the content is text and may not handle all encodings correctly.<br/>It relies on JavaScript's `String.fromCharCode.apply` for conversion.<br/>@returns The content as a string.

<hr/>

#### getInputStream

- `getInputStream ():InputStream`

  Gets an input stream for reading the content of the file item.<br/>This is useful for handling large files without loading the entire content into memory.<br/>@returns An InputStream object wrapping the native input stream.

