# HTTP Upload

The HTTP Upload module facilitates the handling of file uploads within the scripting environment by consuming files posted as multipart requests. This module enables developers to receive, process, and store files uploaded by clients via HTTP requests.

Key features of the HTTP Upload module include:

* `Multipart Request Parsing`: The module parses incoming HTTP requests encoded as multipart/form-data, extracting the uploaded files along with their associated metadata such as filename, content type, and form field name. This allows developers to access and manipulate the uploaded files within their scripting logic.

* `File Storage`: Uploaded files can be stored temporarily or permanently based on the application's requirements. Developers can specify the destination directory or storage mechanism for saving the uploaded files, ensuring that they are securely stored and accessible for further processing.

* `File Handling`: The module provides APIs for interacting with uploaded files, including methods for reading file contents, extracting metadata, and performing file operations such as renaming, copying, moving, or deleting. Developers have full control over the uploaded files and can implement custom logic to handle them according to their application's needs.

* `Error Handling`: Comprehensive error handling mechanisms are integrated into the module to handle exceptions and errors related to file uploads. Developers can define error handlers to capture and process upload failures, ensuring robustness and reliability in file processing workflows.

* `Security`: The module includes security features to mitigate common risks associated with file uploads, such as file size limitations, content type restrictions, and validation of uploaded file contents. By enforcing security measures, developers can prevent malicious uploads and safeguard their application's integrity.

* `Asynchronous Processing`: File uploads can be processed asynchronously to avoid blocking the main thread and improve application responsiveness. Developers can leverage asynchronous programming techniques to handle large file uploads efficiently without impacting the performance of other requests.

* `Integration with Frameworks`: The module seamlessly integrates with popular web frameworks and middleware components, allowing developers to incorporate file upload functionality into their existing applications with minimal effort. Whether building web applications, APIs, or microservices, the HTTP Upload module provides flexible integration options to suit diverse development scenarios.

By offering a range of features for multipart request parsing, file storage, handling, error management, security, asynchronous processing, and framework integration, the HTTP Upload module simplifies the handling of file uploads within the scripting environment. It empowers developers to build robust, scalable, and secure applications that support file upload functionality with ease.

### Example Usage

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
```

#### Sample HTML Page

```html
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


## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**isMultipartContent()**   | Returns true if the HTTP request contains files content and false otherwise | *boolean*
**parseRequest()**   | Returns a HttpFileItems object by parsing the HTTP request | *HttpFileItems*




## Objects

---

### HttpFileItems


Function     | Description | Returns
------------ | ----------- | --------
**get(index)**   | The HttpFileItem object by the *index* | *HttpFileItem*
**size()**   | The size of the list of HttpFileItem objects | *HttpFileItem*


### HttpFileItem


Function     | Description | Returns
------------ | ----------- | --------
**getName()**   | The HttpFileItem's name | *string*
**getOriginalFilename()**   | The original file name | *string*
**getContentType()**   | The HttpFileItem's data content type | *string*
**isEmpty()**   | Returns whether the file is empty | *boolean*
**getSize()**   | The HttpFileItem's size | *long*
**getBytes()**   | Return the HttpFileItem's content as byte array | *array of byte*
**getBytesNative()**   | Return the HttpFileItem's content as Java byte array | *array of Java byte*
**getText()**   | Return the HttpFileItem's content as string | *string*
**getInputStream()**   | Return the input stream of the HttpFileItem's content | *streams.InputStream*