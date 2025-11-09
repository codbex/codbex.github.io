# API: writer

> Source: `indexing/writer.ts`

Provides a static façade (`Writer` class) for adding new documents
or content to the native indexing service.

## Usage
```javascript
import { writer, searcher } from "sdk/indexing";

writer.add("index1", "file1", "apache lucene", new Date(), { "name1": "value1" });
writer.add("index1", "file2", "lucene - the search engine", new Date(), { "name2": "value2" });

let found = searcher.search("index1", "lucene");

console.log(JSON.stringify(found))

```


## Classes

### Writer

The Writer class provides a static method for indexing documents, allowing<br/>for full-text content, a last modification timestamp, and optional metadata.

#### Methods

<hr/>

#### add

- `add (index:string, location:string, contents:string, lastModified:Date=newDate():string})`

  Adds a new document entry to the specified index.<br/><br/>@param index The name or identifier of the index (e.g., 'documents', 'users').<br/>@param location A unique identifier or path for the indexed document (e.g., a file path or URL).<br/>@param contents The full-text content of the document to be indexed and made searchable.<br/>@param lastModified The Date object representing the last modification time of the document. Defaults to the current date/time if omitted.<br/>@param parameters Optional key-value map of additional metadata to associate with the document.

