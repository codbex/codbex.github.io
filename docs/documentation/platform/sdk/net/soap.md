# SOAP

The SOAP (Simple Object Access Protocol) API provides a comprehensive web services framework for manipulating SOAP messages, making calls to external end-points, and creating web services. SOAP is a protocol for exchanging structured information in the implementation of web services. It relies on XML as its message format and typically operates over HTTP.

## Overview

SOAP is a widely adopted protocol for communication between distributed applications. It allows programs running on different operating systems and platforms to communicate by exchanging XML-based messages. The SOAP API enables developers to interact with SOAP-based web services seamlessly.

## Key Features

- **SOAP Message Handling**: The API offers functionalities for creating, parsing, and manipulating SOAP messages, including headers, bodies, and attachments.
- **Service Invocation**: Developers can make calls to external SOAP-based services, invoking remote methods and exchanging data using SOAP messages.
- **Web Service Creation**: The SOAP API facilitates the creation of SOAP-based web services, allowing developers to expose their functionalities as SOAP endpoints.
- **Protocol Support**: The API supports various protocols for message transport, including HTTP, HTTPS, SMTP, and more, providing flexibility in communication.

### Example Usage

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
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**createMessage()**   | Creates an empty SOAP Message | *Message*
**parseMessage(mimeHeaders, inputStream)**    | Creates a message by a given MIME Headers and by parsing of the provided input stream | *Message*
**parseRequest()**  | Creates a message by parsing the standard Request input and empty headers | *Message*
**createMimeHeaders()**  | Creates an empty MimeHeaders | *MimeHeaders*
**call(request, url)**  | Calls an end-point of a SOAP Web Service with a request Message and returns the response Message | *Message*


## Objects

---

### Message


Function     | Description | Returns
------------ | ----------- | --------
**getMimeHeaders()**   | Returns the MimeHeaders object of this Message | *MimeHeaders*
**getPart()**   | Returns the Part object of this Message | *Part*
**save()**   | Save the changes made on the Message and its components | -
**getText()**  | Returns a text representation of the Message | *string*


### MimeHeaders

Function     | Description | Returns
------------ | ----------- | --------
**addHeader(name, value)**   | Creates and add a new MIME header | *-*


### Part

Function     | Description | Returns
------------ | ----------- | --------
**getEnvelope()**   | Returns the Envelope object of this Part | *Envelope*


### Envelope

Function     | Description | Returns
------------ | ----------- | --------
**getBody()**   | Returns the Body object of this Envelope | *Body*
**getHeader()**   | Returns the Header object of this Envelope | *Header*
**addNamespaceDeclaration(prefix, uri)**   | Creates and add a namespace attribute | -
**createName(localName, prefix, uri)**   | Creates a Name object to be used further | *Name*


### Body

Function     | Description | Returns
------------ | ----------- | --------
**getChildElements()**   | Returns an array of the child Elements | *[Element]*
**addChildElement(localName, prefix)**   | Creates and add a child Element | *Element*


### Header

Function     | Description | Returns
------------ | ----------- | --------
**addHeaderElement(name)**   | Creates and add a Header Element with a Name | *Element*


### Name

Function     | Description | Returns
------------ | ----------- | --------
**getLocalName()**   | Returns the Local Name of the Name object | *string*
**getPrefix()**   | Returns the Prefix of the Name object | *string*
**getQualifiedName()**   | Returns the Qualified Name of the Name object | *string*
**getURI()**   | Returns the URI of the Name object | *string*


### Element

Function     | Description | Returns
------------ | ----------- | --------
**getChildElements()**   | Returns an array of the child Elements | *[Element]*
**getElementName()**   | Returns the name of the Element | *Name*
**getValue()**   | Returns the value of the Element if any | *string*
**addChildElement(localName, prefix)**   | Creates and add a child Element | *Element*
**addTextNode(text)**   | Creates and add a text node | *Element*
**addAttribute(name, value)**   | Creates and add an attribute | *Element*
**isSOAPElement()**   | Returns true if the Element is SOAP Element and false otherwise (e.g. CDATA, PDATA, etc.) | *string*
