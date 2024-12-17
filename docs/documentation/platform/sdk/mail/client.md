# Mail API

The Mail API provides functionality for sending emails via various protocols, including SMTP (Simple Mail Transfer Protocol), allowing developers to integrate email sending capabilities into their applications.

## Overview

The Mail API simplifies the process of sending emails programmatically, enabling applications to send notifications, alerts, reports, and other types of messages to users or administrators via email.

## Features

- **SMTP Support:** Send emails using SMTP servers, which are commonly provided by email service providers or organizations.
- **Multiple Protocols:** Besides SMTP, the Mail API may support other email protocols for sending messages, such as IMAP (Internet Message Access Protocol) or POP3 (Post Office Protocol version 3).
- **Configuration:** Configure SMTP server settings, including host, port, authentication credentials (username/password), encryption (SSL/TLS), and other relevant parameters.
- **Message Composition:** Compose email messages with customizable content, including sender, recipient(s), subject, body, attachments, and headers.
- **HTML Support:** Send emails with HTML content to enable rich formatting and styling for enhanced visual appeal.
- **Attachment Support:** Attach files (e.g., documents, images) to email messages for sharing additional information or resources.
- **Error Handling:** Handle errors and exceptions gracefully, providing feedback to the application about the success or failure of email delivery.

## Usage

To send an email using the Mail API, developers typically follow these steps:

1. **Configure SMTP Settings:** Specify the SMTP server details, including the host, port, authentication credentials, and encryption settings.
2. **Compose Email Message:** Create an email message object with the desired sender, recipient(s), subject, body, attachments, and any additional headers.
3. **Send Email:** Use the Mail API functions to send the email message via the configured SMTP server.
4. **Handle Errors:** Implement error handling mechanisms to deal with any issues that may arise during the email sending process.

### Basic Usage

```javascript
import { client } from "sdk/mail";
import { response } from "sdk/http";

const sender = "developer@codbex.com";
const to = "example@gmail.com";
const subject = "Subject";
const content = "<h1>Content<h1>";
const subType = "html";

client.send(sender, to, subject, content, subType);

response.println("Mail sent");
```

### Advance Usage

```javascript
import { client } from "sdk/mail";
import { response } from "sdk/http";

let mailConfig = {
    "mail.user": "<your-user>",
    "mail.password": "<your-password>",
    "mail.transport.protocol": "smtps",
    "mail.smtps.host": "smtp.gmail.com",
    "mail.smtps.port": "465",
    "mail.smtps.auth": "true"
};

let mailClient = client.getClient(mailConfig);

let sender = "developer@codbex.com";
let recipients = {
    to: "example@gmail.com",
    cc: ["example1@gmail.com", "example2@sap.com"],
    bcc: "example3@sap.com"
};
let subject = "Subject";
let content = "<h1>Content</h1>";
let subType = "html";

mailClient.send(sender, recipients, subject, content, subType);

response.println("Mail sent");
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**getClient(options)**   | Get mail client with the provided *MailClientOptions*, if no options are provided, the default mail client configuration will be used | *MailClient*
**send(from, recipients, subject, text, subType)**   | Send mail using the default mail client configuration to *MailRecipients*| *-*

## Objects

---

### MailClient

Property     | Description | Type
------------ | ----------- | --------
**send(from, recipients, subject, text, subType)**   | Send mail to *MailRecipients* | *MailClient function*

### MailClientOptions

Property     | Description | Type
------------ | ----------- | --------
**mail.user**   | The mailbox user | *string*
**mail.password**   | The mailbox password | *string*
**mail.transport.protocol**   | (optional) The mail transport protocol, default is *smtps* | *string*
**mail.smtps.host**   | The mail SMPTPS host | *string*
**mail.smtps.port**   | The mail SMPTPS port | *number as string*
**mail.smtps.auth**   | Enable/Disable mail SMPTPS authentication | *boolean as string*
**mail.smtp.host**   | The mail SMPTP host | *string*
**mail.smtp.port**   | The mail SMPTP port | *number as string*
**mail.smtp.auth**   | Enable/Disable mail SMPTP authentication | *boolean as string*

Addition mail client options can be found here:

- [SMTP/SMTPS](https://javaee.github.io/javamail/docs/api/com/sun/mail/smtp/package-summary.html)
- [IMAP](https://javaee.github.io/javamail/docs/api/com/sun/mail/imap/package-summary.html)
- [POP3](https://javaee.github.io/javamail/docs/api/com/sun/mail/pop3/package-summary.html)

### MailRecipients

Property     | Description | Type
------------ | ----------- | --------
**to**   | The *to* recipient(s) | *string* or *Array of strings*
**cc**   | The *cc* recipient(s) | *string* or *Array of strings*
**bcc**   | The *bcc* recipient(s) | *string* or *Array of strings*
