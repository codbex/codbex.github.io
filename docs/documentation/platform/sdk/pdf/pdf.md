# API: pdf

> Source: `pdf/pdf.ts`

Interface defining the structured data required to generate a table in a PDF.

## Usage
```javascript
import { response } from "sdk/http";
import { pdf } from "sdk/pdf";

const data = {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia fermentum magna, sit amet accumsan felis auctor ac.",
    columns: [{
        name: "Id",
        key: "id"
    }, {
        name: "First Name",
        key: "firstName",
    }, {
        name: "Last Name",
        key: "lastName"
    }, {
        name: "Age",
        key: "age"
    }],
    rows: [{
        id: 1001,
        firstName: "John",
        lastName: "Doe",
        age: 29
    }, {
        id: 1002,
        firstName: "Jane",
        lastName: "Doe",
        age: 26
    }, {
        id: 1003,
        firstName: "Joe",
        lastName: "Doe",
        age: 44
    }, {
        id: 1004,
        firstName: "Jill",
        lastName: "Doe",
        age: 40
    }]
};

let document = pdf.generateTable(data);

response.setContentType("application/pdf");
response.setHeader('Content-Disposition', 'filename="data.pdf"');
response.write(document);
response.flush();
response.close();

```


## Classes

### PDF

@class PDF<br/>@description Utility class for generating PDF documents using a template engine and the PDFFacade.

#### Methods

<hr/>

#### generateTable

- `generateTable (data:PDFTableData, config?:PDFTableConfig):any[]`

  Generates a PDF document containing a styled table based on the standard table template.<br/><br/>@param {PDFTableData} data The structured data to populate the table.<br/>@param {PDFTableConfig} [config] Optional configuration for page size and alignment.<br/>@returns {any[]} The generated PDF content as a byte array (Array&lt;number&gt;).

<hr/>

#### generate

- `generate (templatePath:string, data:PDFTableData):any[]`

  Generates a PDF document using a custom template path and data payload.<br/><br/>@param {string} templatePath The path to the custom template file (e.g., in the Registry).<br/>@param {PDFTableData} data The data to be injected into the template.<br/>@returns {any[]} The generated PDF content as a byte array (Array&lt;number&gt;).

<hr/>

#### setTemplateParameters

- `setTemplateParameters (templateParameters:TemplateParameters, config?:PDFTableConfig):void`

  Internal method to set template parameters based on optional configuration.<br/><br/>@param {TemplateParameters} templateParameters The object containing parameters to be modified.<br/>@param {PDFTableConfig} [config] The optional configuration object.

<hr/>

#### setDocumentAlign

- `setDocumentAlign (templateParameters:TemplateParameters, config?:PDFTableConfig):void`

  Internal method to set column and row alignment parameters.<br/><br/>@param {TemplateParameters} templateParameters The object containing parameters to be modified.<br/>@param {PDFTableConfig} [config] The optional configuration object.

<hr/>

#### setDocumentSize

- `setDocumentSize (templateParameters:TemplateParameters, config?:PDFTableConfig):void`

  Internal method to set the document size (width and height in mm) based on a standard 'size' or custom dimensions.<br/><br/>@param {TemplateParameters} templateParameters The object containing parameters to be modified.<br/>@param {PDFTableConfig} [config] The optional configuration object.

