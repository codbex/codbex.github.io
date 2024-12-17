# Indexing Searcher

The Indexing Searcher, a core component of the Indexing Module, serves as a powerful tool for conducting free-text or exact phrase searches over documents indexed by the Indexing Writer. Built on top of the robust Apache Lucene framework, the Indexing Searcher offers efficient and accurate retrieval of indexed content.

With the Indexing Searcher, users can perform comprehensive searches across indexed documents, leveraging advanced text analysis and search algorithms provided by Apache Lucene. Whether searching for specific keywords, phrases, or exact terms, the Indexing Searcher delivers fast and relevant results, making it ideal for applications requiring sophisticated search functionality.

By utilizing the Indexing Searcher, developers can empower their applications with high-performance search capabilities, enabling users to quickly locate relevant information within large datasets. Whether used in document management systems, knowledge bases, or search engines, the Indexing Searcher provides a reliable solution for retrieving indexed content with precision and speed.

### Example Usage

```javascript
import { writer, searcher } from "sdk/indexing";

writer.add("index2", "file1", "apache lucene", new Date(123));
writer.add("index2", "file2", "lucene - the search engine", new Date(234), { "name2": "value2" });
writer.add("index2", "file3", "search engine", new Date(345), { "name2": "value2" });

let found = searcher.between("index2", new Date(124), new Date(344));

console.log(JSON.stringify(found))
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**search(index, term)**   | Returns an array of document descriptors matching the *term* | *list of descriptors*
**before(index, date)**   | Returns an array of document descriptors where *lastModified* is before the *date* | *list of descriptors*
**after(index, date)**   | Returns an array of document descriptors where *lastModified* is after the *date* | *list of descriptors*
**between(index, lower, upper)**   | Returns an array of document descriptors where *lastModified* is between the *lower* and *upper* | *list of descriptors*