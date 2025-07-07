# Keycloak Authentication

These configuration options allow you to manage Keycloak authentication settings in the **codbex** platform. By default, Keycloak authentication is **disabled**. To enable it, you must activate the appropriate Spring profiles and provide the required credentials and configuration values.

## Keycloak

| Parameter                     | Description                                                  | Default*  |
|-------------------------------|--------------------------------------------------------------|-----------|
| **SPRING_PROFILES_ACTIVE**   | Specifies the active Spring profiles. Set to `common,keycloak,app-default` to enable Keycloak authentication. | `-`    |
| **DIRIGIBLE_KEYCLOAK_CLIENT_ID**  | The Client ID of your Keycloak application, used for OAuth2 client identification. | `-`   |
| **DIRIGIBLE_KEYCLOAK_CLIENT_SECRET**  | The Client Secret associated with the Keycloak client, used to authenticate the application with the Keycloak server. | `-`   |
| **DIRIGIBLE_KEYCLOAK_AUTH_SERVER_URL**  | The full URL to your Keycloak realm’s OpenID configuration endpoint _(e.g., `https://auth.eu1.codbex.com/auth/realms/platform`)_. | `-`   |
| **DIRIGIBLE_HOST**  | The public host of your application, used as the OAuth 2.0 redirect URI _(e.g., `https://your-app.eu1.codbex.com`)_. | `-`   |

::: info Keycloak Realm
The realm name in the Keycloak URL _(`.../realms/<realm-name>`)_ must match the one configured in your Keycloak admin console.
:::

## Sample Configuration

```shell
# Enable Keycloak authentication
export SPRING_PROFILES_ACTIVE=common,keycloak,app-default

# Keycloak Configuration
export DIRIGIBLE_KEYCLOAK_CLIENT_ID=your_keycloak_client_id
export DIRIGIBLE_KEYCLOAK_CLIENT_SECRET=your_keycloak_client_secret
export DIRIGIBLE_KEYCLOAK_AUTH_SERVER_URL=https://auth.eu1.codbex.com/auth/realms/platform

# Host Configuration
export DIRIGIBLE_HOST=https://your-app.eu1.codbex.com
```
