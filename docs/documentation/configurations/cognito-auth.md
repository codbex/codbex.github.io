# Cognito Authentication

These configuration options allow you to manage AWS Cognito authentication settings in the **codbex** platform. By default, Cognito authentication is **disabled**. To enable it, you must activate the appropriate Spring profiles and provide the required credentials and configuration values.

## Cognito

| Parameter                     | Description                                                  | Default*  |
|-------------------------------|--------------------------------------------------------------|-----------|
| **SPRING_PROFILES_ACTIVE**   | Specifies the active Spring profiles. Set to `common,cognito,app-default` to enable Cognito authentication. | `-`    |
| **DIRIGIBLE_COGNITO_CLIENT_ID**  | The Client ID of your AWS Cognito User Pool App Client. | `-`   |
| **DIRIGIBLE_COGNITO_CLIENT_SECRET**  | The Client Secret of your AWS Cognito User Pool App Client. | `-`   |
| **DIRIGIBLE_COGNITO_DOMAIN**  | The domain URL of your AWS Cognito User Pool _(e.g., `https://your-app.auth.eu-central-1.amazoncognito.com`)_. | `-`   |
| **DIRIGIBLE_COGNITO_REGION_ID**  | The AWS region where your Cognito User Pool is located _(e.g., `eu-central-1`)_. | `-`   |
| **DIRIGIBLE_COGNITO_USER_POOL_ID**  | The unique ID of your AWS Cognito User Pool. | `-`   |
| **DIRIGIBLE_HOST**  | The public host of your application, used as the OAuth 2.0 redirect URI _(e.g., `https://your-app.eu1.codbex.com`)_. | `-`   |

## Sample Configuration

```shell
# Enable Cognito authentication
export SPRING_PROFILES_ACTIVE=common,cognito,app-default

# AWS Cognito Configuration
export DIRIGIBLE_COGNITO_CLIENT_ID=your_cognito_client_id
export DIRIGIBLE_COGNITO_CLIENT_SECRET=your_cognito_client_secret
export DIRIGIBLE_COGNITO_DOMAIN=https://your-app.auth.eu-central-1.amazoncognito.com
export DIRIGIBLE_COGNITO_REGION_ID=eu-central-1
export DIRIGIBLE_COGNITO_USER_POOL_ID=your_user_pool_id

# Host Configuration
export DIRIGIBLE_HOST=https://your-app.eu1.codbex.com
```
