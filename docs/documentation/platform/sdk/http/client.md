# API: client

> Source: `http/client.ts`

Provides a JavaScript/TypeScript wrapper (Facade) for making synchronous HTTP requests.

## Usage
```javascript
import { client, response } from "sdk/http";

const httpResponse = client.get("https://services.odata.org/V4/Northwind/Northwind.svc/");

response.println(httpResponse.statusMessage);
response.println(httpResponse.text);
response.flush();
response.close();

```


## Classes

### HttpClient

A static class providing methods for making synchronous HTTP requests.<br/>All methods call the underlying Java Facade and parse the JSON response.

#### Methods

<hr/>

#### get

- `get (url:string, options:HttpClientRequestOptions={}):HttpClientResponse`

  Executes a synchronous HTTP GET request.<br/>@param url The target URL.<br/>@param options Configuration options for the request.<br/>@returns The parsed response object containing status, headers, and body.

<hr/>

#### post

- `post (url:string, options:HttpClientRequestOptions={}):HttpClientResponse`

  Executes a synchronous HTTP POST request.<br/>@param url The target URL.<br/>@param options Configuration options for the request, including request body in `text` or `data`.<br/>@returns The parsed response object.

<hr/>

#### put

- `put (url:string, options:HttpClientRequestOptions={}):HttpClientResponse`

  Executes a synchronous HTTP PUT request.<br/>@param url The target URL.<br/>@param options Configuration options for the request.<br/>@returns The parsed response object.

<hr/>

#### patch

- `patch (url:string, options:HttpClientRequestOptions={}):HttpClientResponse`

  Executes a synchronous HTTP PATCH request.<br/>@param url The target URL.<br/>@param options Configuration options for the request.<br/>@returns The parsed response object.

<hr/>

#### delete

- `delete (url:string, options:HttpClientRequestOptions={}):HttpClientResponse`

  Executes a synchronous HTTP DELETE request.<br/>@param url The target URL.<br/>@param options Configuration options for the request.<br/>@returns The parsed response object.

<hr/>

#### del

- `del (url:string, options:HttpClientRequestOptions={}):HttpClientResponse`

  Alias for {@link HttpClient.delete}. Executes a synchronous HTTP DELETE request.<br/>@param url The target URL.<br/>@param options Configuration options for the request.<br/>@returns The parsed response object.

<hr/>

#### head

- `head (url:string, options:HttpClientRequestOptions={}):HttpClientResponse`

  Executes a synchronous HTTP HEAD request (fetches headers only).<br/>@param url The target URL.<br/>@param options Configuration options for the request.<br/>@returns The parsed response object. The body (`text` and `data`) will typically be empty.

<hr/>

#### trace

- `trace (url:string, options:HttpClientRequestOptions={}):HttpClientResponse`

  Executes a synchronous HTTP TRACE request.<br/>@param url The target URL.<br/>@param options Configuration options for the request.<br/>@returns The parsed response object.

<hr/>

#### buildUrl

- `buildUrl (url:string, options:HttpClientRequestOptions):string`

  @private<br/>Builds the request URL by appending query parameters from options.params,<br/>then removes `params` from the options object before passing it to the Java Facade.<br/>@param url The base URL.<br/>@param options The request options object.<br/>@returns The URL with appended query parameters.

