# Indexing Writer

The Indexing Writer is an object, designed to store text content along with additional parameters for efficient free-text search operations. Powered by the Apache Lucene framework, the Indexing Writer offers a robust solution for indexing and searching textual data. 

With the Indexing Writer, users can store text content along with metadata attributes, enabling fast and accurate retrieval of information based on search queries. This functionality is particularly useful in applications where efficient search capabilities are essential, such as document management systems, content repositories, or data analytics platforms.

### Example Usage

```javascript
import { writer, searcher } from "sdk/indexing";

writer.add("index1", "file1", "apache lucene", new Date(), { "name1": "value1" });
writer.add("index1", "file2", "lucene - the search engine", new Date(), { "name2": "value2" });

let found = searcher.search("index1", "lucene");

console.log(JSON.stringify(found))
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**add(index, location, contents, lastModified, parameters)**   | Adds a document *contents* with the given *location* and *parameters* to an *index* | -