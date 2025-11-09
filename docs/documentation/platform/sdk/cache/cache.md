# API: cache

> Source: `cache/cache.ts`

Cache
* Provides a static utility for interacting with a server-side cache facade, enabling
simple key-value storage, retrieval, and invalidation operations.

## Usage
```javascript

```


## Classes

### Cache

Cache<br/>* Provides a static utility for interacting with a server-side cache facade, enabling<br/>simple key-value storage, retrieval, and invalidation operations.

#### Methods

<hr/>

#### contains

- `contains (key:string):boolean`

  Checks if the cache contains a value for the specified key.<br/>@param key The key to check.<br/>@returns True if the key exists in the cache, false otherwise.

<hr/>

#### get

- `get (key:any):any|undefined`

  Retrieves the value associated with the specified key from the cache.<br/>@param key The key to retrieve.<br/>@returns The cached value, or `undefined` if the key is not found.

<hr/>

#### set

- `set (key:string, data:any):void`

  Stores a value in the cache under the specified key.<br/>Note: The duration/time-to-live (TTL) is typically configured server-side.<br/>@param key The key to store the data under.<br/>@param data The data to store.

<hr/>

#### delete

- `delete (key:string):void`

  Removes the key and its associated value from the cache.<br/>@param key The key to delete.

<hr/>

#### clear

- `clear ():void`

  Clears all entries from the cache.

