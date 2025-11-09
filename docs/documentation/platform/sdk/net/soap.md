# API: soap

> Source: `net/soap.ts`

Utility class for creating, parsing, and calling SOAP messages.
It wraps the underlying Java javax.xml.soap API.

## Usage
```javascript
import { soap } from "sdk/net";
import { response } from "sdk/http";

response.setContentType("text/plain; charset=UTF-8");

let requestMessage = soap.createMessage();
let part = requestMessage.getPart();
let envelope = part.getEnvelope();
envelope.addNamespaceDeclaration("ws", "http://ws.cdyne.com/");
let body = envelope.getBody();
let resolveIPElement = body.addChildElement("ResolveIP", "ws");
let ipAddressElement = resolveIPElement.addChildElement("ipAddress", "ws");
ipAddressElement.addTextNode("213.239.203.158");
let licenseKeyElement = resolveIPElement.addChildElement("licenseKey", "ws");
licenseKeyElement.addTextNode("");

let mimeHeaders = requestMessage.getMimeHeaders();
mimeHeaders.addHeader("SOAPAction", "http://ws.cdyne.com/ResolveIP");

requestMessage.save();
response.println("Request: " + requestMessage.getText());

let responseMessage = soap.call(requestMessage, "http://ws.cdyne.com/ip2geo/ip2geo.asmx");

response.println("Response: " + responseMessage.getText());

response.flush();
response.close();

```


## Classes

### SOAP

Utility class for creating, parsing, and calling SOAP messages.<br/>It wraps the underlying Java javax.xml.soap API.

#### Methods

<hr/>

#### call

- `call (message:Message, url:string):string)`

  Call a given SOAP endpoint with a given request message<br/>@param message The SOAP Message wrapper object.<br/>@param url The target SOAP endpoint URL.

<hr/>

#### trustAll

- `trustAll ()void`

<hr/>

#### createMessage

- `createMessage ():Message`

  Creates a new, empty SOAP message.

<hr/>

#### parseMessage

- `parseMessage (mimeHeaders:MimeHeaders, inputStream:InputStream):Message`

  Parses a SOAP message from an InputStream and MimeHeaders.<br/>@param mimeHeaders The MimeHeaders wrapper object.<br/>@param inputStream The InputStream wrapper object.

<hr/>

#### parseRequest

- `parseRequest ():Message`

  Parses a SOAP message from the current HTTP request input stream.

<hr/>

#### createMimeHeaders

- `createMimeHeaders ():MimeHeaders`

  Creates a new, empty MimeHeaders object.

### Message

SOAP Message Wrapper

#### Methods

<hr/>

#### getPart

- `getPart ():Part`

  SOAP Message Wrapper

<hr/>

#### getMimeHeaders

- `getMimeHeaders ():MimeHeaders`

<hr/>

#### save

- `save ():void`

<hr/>

#### getText

- `getText ():string`

### Part

SOAP Part Wrapper

#### Methods

<hr/>

#### getEnvelope

- `getEnvelope ():Envelope`

  SOAP Part Wrapper

### MimeHeaders

SOAP Mime Headers Wrapper

#### Methods

<hr/>

#### addHeader

- `addHeader (name:string, value:string):void`

  SOAP Mime Headers Wrapper

<hr/>

#### addBasicAuthenticationHeader

- `addBasicAuthenticationHeader (username:string, password:string):void`

### Envelope

SOAP Envelope Wrapper

#### Methods

<hr/>

#### addNamespaceDeclaration

- `addNamespaceDeclaration (prefix:string, uri:string):void`

  SOAP Envelope Wrapper

<hr/>

#### getBody

- `getBody ():Body`

<hr/>

#### getHeader

- `getHeader ():Header`

<hr/>

#### createName

- `createName (localName:string, prefix:string, uri:string):Name`

### Body

SOAP Body Wrapper

#### Methods

<hr/>

#### addChildElement

- `addChildElement (localName:string, prefix:string):Element`

  SOAP Body Wrapper

<hr/>

#### getChildElements

- `getChildElements ():Element[]`

### Header

SOAP Header Wrapper

#### Methods

<hr/>

#### addHeaderElement

- `addHeaderElement (element:Element):void`

  SOAP Header Wrapper

### Name

SOAP Name Wrapper

#### Methods

<hr/>

#### getNative

- `getNative ():string`

  SOAP Name Wrapper

<hr/>

#### getLocalName

- `getLocalName ():string`

<hr/>

#### getPrefix

- `getPrefix ():string`

<hr/>

#### getQualifiedName

- `getQualifiedName ():string`

<hr/>

#### getURI

- `getURI ():string`

### Element

SOAP Element Wrapper

#### Methods

<hr/>

#### addChildElement

- `addChildElement (localName:string, prefix:string):string)`

  SOAP Element Wrapper

<hr/>

#### addTextNode

- `addTextNode (text:string):Element`

<hr/>

#### addAttribute

- `addAttribute (name:Name, value:any):Element`

<hr/>

#### getChildElements

- `getChildElements ():Element[]`

<hr/>

#### getElementName

- `getElementName ():Name|undefined`

<hr/>

#### getValue

- `getValue ():any`

<hr/>

#### isSOAPElement

- `isSOAPElement ():boolean`

