# Basic Authentication

These configuration options allow you to manage Basic authentication settings in the __codbex__ platform. By default, Basic authentication is enabled with the username and password set to admin. However, you can customize these settings as needed.

## Basic

| Parameter                     | Description                                                  | Default*  |
|-------------------------------|--------------------------------------------------------------|-----------|
| **DIRIGIBLE_BASIC_ENABLED**   | Determines whether Basic authentication is enabled or not. When set to `true`, Basic authentication is enabled. | `true`    |
| **DIRIGIBLE_BASIC_USERNAME**  | Base64 encoded property representing the username used for Basic authentication. This value is decoded to retrieve the actual username. By default, it is set to `admin`. | `admin`   |
| **DIRIGIBLE_BASIC_PASSWORD**  | Base64 encoded property representing the password used for Basic authentication. This value is decoded to retrieve the actual password. By default, it is set to `admin`. | `admin`   |

## Sample Configuration

```shell
# Enable Basic authentication
export DIRIGIBLE_BASIC_ENABLED=true

# Base64-encoded credentials (admin:admin)
export DIRIGIBLE_BASIC_USERNAME=YWRtaW4=
export DIRIGIBLE_BASIC_PASSWORD=YWRtaW4=
```

::: info Base64 Encoded Credentials
You can generate your own base64-encoded credentials using:
```shell
echo -n 'your-username' | base64
echo -n 'your-password' | base64
```
:::

## Note

This setup enables Basic authentication in the codbex platform and uses the default admin username and password. For production environments, it's strongly recommended to change these values and keep them secure or use the [Cognito](cognito-auth) or the [Keycloak](keycloak-auth) setups.
