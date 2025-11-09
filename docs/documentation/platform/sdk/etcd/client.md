# API: client

> Source: `etcd/client.ts`

Converts a string to a native Etcd ByteSequence object.
@param str The string to convert.
@returns The native ByteSequence object (Java type).

## Usage
```javascript
// Load the etcd client module.
import { etcd } from "sdk/etcd";

// Initialize the etcd client.
let etcdClient = etcd.getClient();

// Put key-value pair where the value is a string.
etcdClient.putStringValue("foo", "bar");

// Get key-value pair where value will be returned as a string.
etcdClient.getKvsStringValue("foo"); // => { "foo": "bar" }

// Put key-value pair where the value is a byte array.
etcdClient.putByteArrayValue("foo", [98, 97, 114]);

// Get key-value pair where value will be returned as a byte array.
etcdClient.getKvsByteArrayValue("foo"); // => { "foo": [98, 97, 114] }

// Delete key-value pair.
etcdClient.delete("foo");

```


## Classes

### Header

Represents the header metadata of an Etcd response.

#### Methods

<hr/>

#### getRevision

- `getRevision ():string`

  The revision of the key-value store when the request was processed.

<hr/>

#### getClusterId

- `getClusterId ():string`

  The ID of the cluster which the request was sent to.

<hr/>

#### getMemberId

- `getMemberId ():string`

  The ID of the member which the request was handled by.

<hr/>

#### getRaftTerm

- `getRaftTerm ():string`

  The Raft term.

### GetResponse

Represents the response object for a Get operation from Etcd.

#### Methods

<hr/>

#### getHeader

- `getHeader ():Header`

  Retrieves the response header containing cluster metadata.

<hr/>

#### getKvsString

- `getKvsString ():string}`

  Retrieves the Key-Value pairs with values converted to strings.

<hr/>

#### getKvsByteArray

- `getKvsByteArray ():Int8Array}`

  Retrieves the Key-Value pairs with values converted to Int8Array (byte arrays).

<hr/>

#### getCount

- `getCount ():number`

  Retrieves the number of Key-Value pairs returned.

### Client

Client facade for interacting with the Etcd key-value store.

#### Methods

<hr/>

#### get

- `get (key:string):GetResponse`

  Executes a blocking GET request on the specified key.<br/>@param key The key to retrieve.<br/>@returns The processed GetResponse object.

<hr/>

#### putStringValue

- `putStringValue (key:string, value:string):void`

  Puts (writes) a string value to the specified key.<br/>@param key The key to write to.<br/>@param value The string value.

<hr/>

#### putByteArrayValue

- `putByteArrayValue (key:string, value:Int8Array):void`

  Puts (writes) a byte array value to the specified key.<br/>@param key The key to write to.<br/>@param value The Int8Array (byte array) value.

<hr/>

#### getHeader

- `getHeader (key:string):Header`

  Retrieves the response header metadata for a key.<br/>@param key The key to query.<br/>@returns The {@link Header} object.

<hr/>

#### getKvsStringValue

- `getKvsStringValue (key:string):string}`

  Retrieves the Key-Value pairs as a JavaScript object with string values.<br/>@param key The key (or key prefix) to query.<br/>@returns An object mapping keys to string values.

<hr/>

#### getKvsByteArrayValue

- `getKvsByteArrayValue (key:string):Int8Array}`

  Retrieves the Key-Value pairs as a JavaScript object with Int8Array values.<br/>@param key The key (or key prefix) to query.<br/>@returns An object mapping keys to Int8Array values.

<hr/>

#### getCount

- `getCount (key:string):number`

  Retrieves the count of Key-Value pairs matching the key (or key prefix).<br/>@param key The key (or key prefix) to query.<br/>@returns The count of matching entries.

<hr/>

#### delete

- `delete (key:string):void`

  Deletes the specified key.<br/>@param key The key to delete.

