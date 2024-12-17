# CMS Engine

## Introduction

The CMS Engine in the __codbex__ platform serves as a robust Content Management System, enabling developers to manage and organize content across different backing services. This documentation explores key features of the CMS Engine, highlighting its adherence to the CMIS (Content Management Interoperability Services) specification and its support for various backing services, including Internal (file systems based), Amazon S3, and others.

## CMS Engine Features

### CMIS Specification Compliance

The CMS Engine follows the CMIS specification, a standard for interoperable content management across different systems. This compliance ensures seamless integration and content exchange with other CMIS-compliant repositories.

CMIS compliance in the CMS Engine is achieved through Apache Chemistry, an open-source Java library that provides a CMIS client and server API. Apache Chemistry facilitates communication with CMIS-compliant repositories, allowing seamless integration with external content management systems.

### Backing Services Options

CMS Engine supports multiple backing services for storing and managing content. Developers can choose from different options, including:

* Internal (File Systems Based): Utilizes the internal file system for content storage.
* Amazon S3: Integrates with Amazon S3 for scalable and reliable object storage.

### Content Versioning and Metadata

The CMS Engine provides support for content versioning, allowing developers to track and manage changes to content over time. Additionally, metadata can be associated with content, providing context and additional information.

## Conclusion

The CMS Engine in __codbex__ platform provides a versatile Content Management System with support for the CMIS specification and various backing services. Whether utilizing the internal file system or integrating with cloud-based solutions like Amazon S3, developers can manage content efficiently while benefiting from content versioning, metadata association, and seamless switching between backing services.

