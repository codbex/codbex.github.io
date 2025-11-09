# API: client

> Source: `mail/client.ts`

Provides a client for sending emails, supporting both simple text/HTML
messages and complex multipart messages with attachments or inline content.

## Usage
```javascript
import { client } from "sdk/mail";
import { response } from "sdk/http";

const sender = "dirigible@eclipse.org";
const to = "example@gmail.com";
const subject = "Subject";
const content = "<h1>Content<h1>";
const subType = "html";

client.send(sender, to, subject, content, subType);

response.println("Mail sent");

```


## Classes

### MailClient

The MailClient provides methods for sending emails, handling recipient processing<br/>and interfacing with the underlying MailFacade.

#### Methods

<hr/>

#### sendMultipart

- `sendMultipart (from:string, recipients:string|MailRecipients, subject:string, parts:MailMultipart[]):void`

  A static convenience method to send a multipart email without instantiating a client.<br/>This is suitable for emails that require attachments, inline images, or mixed content.<br/><br/>@param from The sender's email address.<br/>@param recipients The recipient(s) structure (string for 'to', or {@link MailRecipients} object).<br/>@param subject The subject line of the email.<br/>@param parts An array of {@link MailMultipart} objects defining the email content.

<hr/>

#### send

- `send (from:string, recipients:string|MailRecipients, subject:string, text:string, contentType:MailContentType):void`

  A static convenience method to send a simple email with only a single text or HTML body.<br/><br/>@param from The sender's email address.<br/>@param recipients The recipient(s) structure (string for 'to', or {@link MailRecipients} object).<br/>@param subject The subject line of the email.<br/>@param text The body content of the email.<br/>@param contentType Specifies the body format: 'html' or 'plain'.

<hr/>

#### send

- `send (from:string, _recipients:string|MailRecipients, subject:string, text:string, contentType:MailContentType):void`

  Sends a simple email with a single body part (text or HTML).<br/><br/>@param from The sender's email address.<br/>@param _recipients The recipient(s) structure (string for 'to', or {@link MailRecipients} object).<br/>@param subject The subject line of the email.<br/>@param text The body content of the email.<br/>@param contentType Specifies the body format: 'html' or 'plain'.<br/>@throws {Error} Throws an error if the recipient format is invalid or the native call fails.

<hr/>

#### sendMultipart

- `sendMultipart (from:string, _recipients:string|MailRecipients, subject:string, parts:MailMultipart[]):void`

  Sends a complex email composed of multiple parts (text bodies, HTML, attachments, inline content).<br/><br/>@param from The sender's email address.<br/>@param _recipients The recipient(s) structure (string for 'to', or {@link MailRecipients} object).<br/>@param subject The subject line of the email.<br/>@param parts An array of {@link MailMultipart} objects defining the email content.<br/>@throws {Error} Throws an error if the recipient format is invalid or the native call fails.

