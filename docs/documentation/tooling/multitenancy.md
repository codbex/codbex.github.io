# Multitenancy

The __codbex__ platform provides robust multitenancy support, allowing organizations to efficiently manage and isolate resources for multiple tenants within a single instance of the platform. This documentation page outlines the key aspects of multitenancy support in various areas of the codbex platform.

## DataSources

The platform supports multitenancy in DataSources, enabling tenants to have their own dedicated databases or data sources. Each tenant can configure their DataSources independently, ensuring data isolation and security.

## CSV Import/Export

Multitenancy extends to CSV Import/Export functionality, allowing tenants to import and export data from their own segregated datasets. Tenants can perform bulk data operations without affecting other tenants' data.

## OData

OData endpoints in __codbex__ are multitenant-aware, providing tenants with their own OData APIs to access and manipulate their data securely. Tenants can leverage OData features while ensuring data isolation and compliance.

## Documents

Multitenancy in the platform Documents ensures that each tenant has its own dedicated storage for managing documents. Tenants can upload, download, and manage documents independently, with strict access control policies enforced for data security.

## Jobs

Job scheduling system supports multitenancy, allowing the background jobs to be executed for all the tenants. Each tenant receives the processing of the executed jobs tailored to their specific requirements without interference from other tenants.

## Listeners

Listeners are multitenant-aware, enabling tenants to define and configure their own event listeners to react to system events or custom triggers. Tenants can implement custom business logic or integrations specific to their needs.

## Exclusions

While multitenancy is a core aspect of the __codbex__ platform, certain features and functionalities are excluded from multitenant support. These include:

- Processes: Process instances and workflows are not multitenant-aware and operate at the system level.
- Integrations: Integration flows and endpoints are managed at the system level and are not tenant-isolated.
- Extensions: Extensions and customizations applied to the platform are shared across all tenants.
- Git: Version control and repository management functionalities are not isolated per tenant.
- Dev Scenarios: Development scenarios and environments are shared among all tenants and not segregated.

## Conclusion

Multitenancy support provides a robust framework for organizations to host multiple tenants securely and efficiently within a single instance of the platform. By offering tenant isolation in key areas such as DataSources, CSV Import/Export, OData, Documents, Jobs, and Listeners, the __codbex__ platform ensures data integrity, privacy, and compliance for each tenant's operations.
