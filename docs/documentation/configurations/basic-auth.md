# Basic Authentication

These configuration options allow you to manage Basic authentication settings in the __codbex__ platform. By default, Basic authentication is enabled with the username and password set to admin. However, you can customize these settings as needed.

## Basic

| Parameter                     | Description                                                  | Default*  |
|-------------------------------|--------------------------------------------------------------|-----------|
| **DIRIGIBLE_BASIC_ENABLED**   | Determines whether Basic authentication is enabled or not. When set to `true`, Basic authentication is enabled. | `true`    |
| **DIRIGIBLE_BASIC_USERNAME**  | Base64 encoded property representing the username used for Basic authentication. This value is decoded to retrieve the actual username. By default, it is set to `admin`. | `admin`   |
| **DIRIGIBLE_BASIC_PASSWORD**  | Base64 encoded property representing the password used for Basic authentication. This value is decoded to retrieve the actual password. By default, it is set to `admin`. | `admin`   |
