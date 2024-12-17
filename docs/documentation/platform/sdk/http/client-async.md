# Client Async

Client Async is a module designed to facilitate asynchronous calls to external services via HTTP within scripting services. It provides a straightforward interface for making HTTP requests and handling responses asynchronously. This module is particularly useful for scenarios where calling external services synchronously would result in blocking operations, hindering the performance and responsiveness of the application.

With Client Async, developers can initiate HTTP requests without halting the execution flow of their scripts. This allows for concurrent processing of multiple requests, enabling improved efficiency and responsiveness in applications that interact with external services over the web.

### Example Usage

```javascript
import { client, clientAsync } from "sdk/http";

let clientAsyncInstance = clientAsync.getInstance();
let api = 'https://services.odata.org/V4/Northwind/Northwind.svc/';
let northWindResponse = client.get(api, {
    params: [{
        name: "$format",
        value: "json"
    }]
});

let northWindEntities = JSON.parse(northWindResponse.text);

for (let i = 0; i < northWindEntities.value.length; i++) {
    clientAsyncInstance.getAsync(api + northWindEntities.value[i].url, {
        success: function (response) {
            let entity = JSON.parse(response.text);
            console.error(entity["@odata.context"] + " : " + entity.value.length);
        }
    });
}

clientAsyncInstance.execute();
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**getAsync(url, config, options)**   | Makes a HTTP GET Async request to a remote service at the URL by the HttpOptions and returns HttpResponse to the HttpResponseCallback | *-*
**postAsync(url, config, options)**   | Makes a HTTP POST Async request to a remote service at the URL by the HttpOptions and returns HttpResponse to the HttpResponseCallback | *-*
**putAsync(url, config, options)**   | Makes a HTTP PUT Async request to a remote service at the URL by the HttpOptions and returns HttpResponse to the HttpResponseCallback | *-*
**deleteAsync(url, config, options)**   | Makes a HTTP DELETE Async request to a remote service at the URL by the HttpOptions and returns HttpResponse to the HttpResponseCallback | *-*
**headAsync(url, config, options)**   | Makes a HTTP HEAD Async request to a remote service at the URL by the HttpOptions and returns HttpResponse to the HttpResponseCallback | *-*
**traceAsync(url, config, options)**   | Makes a HTTP TRACE Async request to a remote service at the URL by the HttpOptions and returns HttpResponse to the HttpResponseCallback | *-*


## Objects

---

### HttpResponseCallbackConfig


Property     | Description | Type
------------ | ----------- | --------
**success**   | The success response callback | *HttpResponseCallback function*
**error**   | The error response callback | *HttpResponseCallback function*
**cancel**   | The cancel response callback | *HttpResponseCallback function*

### HttpResponseCallback


Parameters     | Description | Type
------------ | ----------- | --------
**response?**   | The HTTP Response object | *HttpResponse*
**error?**   | The HTTP Response Error Object | *HttpResponseError*



### HttpResponse


Property     | Description | Type
------------ | ----------- | --------
**statusCode**   | The Response status code | *int*
**statusMessage**   | The Response status message | *string*
**data**   | The Response data | *array of bytes*
**text**   | The Response data as text | *string*
**binary**   | Whether the Response data is binary in *data* or string in *text* | *boolean*
**protocol**   | The HTTP version of the Response | *string*
**headers**   | The Response headers | *array of HttpHeader*


### HttpResponseError


Property     | Description | Type
------------ | ----------- | --------
**message**   | The error message | *string*

### HttpHeader


Property     | Description | Type
------------ | ----------- | --------
**name**   | The name of the header | *string*
**value**   | The value of the header | *string*


### HttpParam


Property     | Description | Type
------------ | ----------- | --------
**name**   | The name of the param | *string*
**value**   | The value of the param | *string*


### HttpOptions


Property     | Description | Type
------------ | ----------- | --------
**data**     | The body of the HTTP Request as binary | *array of bytes*
**text**     | The body of the HTTP Request as text | *string*
**files**     | The body of the HTTP Request as files (for POST) | *array of strings*
**params**   | The body of the HTTP Request as form parameters | *array of HttpParam*
**binary**     | Whether the body of the HTTP Request is binary | *boolean*
**characterEncodingEnabled** | The character encoding enabled parameter. Default is true | *boolean*
**characterEncoding**   | The character encoding parameter. Default is UTF-8 | *string*
**contentType**   | The content type parameter. Default is *plain/text* | *string*
**headers**   | The Response headers | *array of HttpHeader*
**proxyHost**     | The proxy host parameter | *string*
**proxyPort**     | The proxy port parameter | *int*
**expectContinueEnabled**     | The continue enabled parameter | *boolean*
**cookieSpec**     | The cookieSpec parameter | *string*
**redirectsEnabled**     | The redirects enabled parameter | *boolean*
**relativeRedirectsAllowed**     | The relative redirects allowed parameter | *boolean*
**circularRedirectsAllowed**     | The circular redirects allowed parameter | *boolean*
**maxRedirects**     | The max redirects parameter | *int*
**authenticationEnabled**     | The authentication enabled parameter | *boolean*
**targetPreferredAuthSchemes**     | The target preferred authentication schemes parameter | *array of strings*
**proxyPreferredAuthSchemes**     | The proxy preferred authentication schemes parameter | *array of strings*
**connectionRequestTimeout**     | The connection request timeout parameter | *int*
**connectTimeout**     | The connect timeout parameter | *int*
**socketTimeout**     | The socket timeout parameter | *int*
**contentCompressionEnabled**     | The content compression enabled parameter | *boolean*
**sslTrustAllEnabled**     | The SSL trust all enabled parameter | *boolean*