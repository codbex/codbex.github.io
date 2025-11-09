# API: client-async

> Source: `http/client-async.ts`

Defines a single HTTP header, used for both request and response.

## Usage
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


## Classes

### HttpAsyncClient

The asynchronous HTTP client class. All request methods return immediately<br/>and execute callbacks upon completion.

#### Methods

<hr/>

#### getAsync

- `getAsync (url:string, config:HttpClientAsyncConfig, options?:HttpClientRequestOptions):void`

  Executes an asynchronous HTTP GET request.<br/>@param url The target URL.<br/>@param config The callback configuration object.<br/>@param options Request configuration options (e.g., headers, body, params).

<hr/>

#### postAsync

- `postAsync (url:string, config:HttpClientAsyncConfig, options?:HttpClientRequestOptions):void`

  Executes an asynchronous HTTP POST request.<br/>@param url The target URL.<br/>@param config The callback configuration object.<br/>@param options Request configuration options.

<hr/>

#### putAsync

- `putAsync (url:string, config:HttpClientAsyncConfig, options?:HttpClientRequestOptions):void`

  Executes an asynchronous HTTP PUT request.<br/>@param url The target URL.<br/>@param config The callback configuration object.<br/>@param options Request configuration options.

<hr/>

#### patchAsync

- `patchAsync (url:string, config:HttpClientAsyncConfig, options?:HttpClientRequestOptions):void`

  Executes an asynchronous HTTP PATCH request.<br/>@param url The target URL.<br/>@param config The callback configuration object.<br/>@param options Request configuration options.

<hr/>

#### deleteAsync

- `deleteAsync (url:string, config:HttpClientAsyncConfig, options?:HttpClientRequestOptions):void`

  Executes an asynchronous HTTP DELETE request.<br/>@param url The target URL.<br/>@param config The callback configuration object.<br/>@param options Request configuration options.

<hr/>

#### headAsync

- `headAsync (url:string, config:HttpClientAsyncConfig, options?:HttpClientRequestOptions):void`

  Executes an asynchronous HTTP HEAD request.<br/>@param url The target URL.<br/>@param config The callback configuration object.<br/>@param options Request configuration options.

<hr/>

#### traceAsync

- `traceAsync (url:string, config:HttpClientAsyncConfig, options?:HttpClientRequestOptions):void`

  Executes an asynchronous HTTP TRACE request.<br/>@param url The target URL.<br/>@param config The callback configuration object.<br/>@param options Request configuration options.

<hr/>

#### execute

- `execute ():void`

  Initiates the execution of queued asynchronous requests (depending on the underlying Java client's threading model).

