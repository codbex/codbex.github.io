# Logging

The Logging API serves as a fundamental tool for developers to track and record the execution of their applications. Logging involves capturing various events, messages, and errors that occur during the execution of the software. These logs are invaluable for debugging, monitoring, and auditing purposes, providing insights into the application's behavior and performance.

### Importance of Logging

Logging plays a crucial role in software development for several reasons:

1. **Debugging**: Logs help developers identify and diagnose issues within their code. By logging relevant information at strategic points in the application, developers can trace the flow of execution and pinpoint the root causes of bugs or unexpected behavior.

2. **Monitoring and Alerting**: Logs are essential for monitoring the health and performance of applications in real-time. Monitoring systems can analyze log data to detect anomalies, errors, or performance bottlenecks, triggering alerts or notifications for immediate attention.

3. **Auditing and Compliance**: Logging facilitates compliance with regulatory requirements and industry standards by maintaining a record of critical events and transactions. Detailed logs provide an audit trail for tracking user actions, system changes, and security incidents.

4. **Performance Analysis**: Logs capture valuable metrics and statistics related to the application's performance, such as response times, resource utilization, and throughput. Analyzing these metrics over time helps identify areas for optimization and improvement.

### Logging Levels

The Logging API supports different log levels to categorize messages based on their severity or importance. Each log level serves a specific purpose and provides valuable insights into the application's behavior:

- **INFO**: Informational messages that highlight the normal operation of the application.
- **WARN**: Warning messages indicating potential issues or unexpected conditions that do not necessarily cause immediate problems.
- **ERROR**: Error messages indicating critical issues or failures that require attention.
- **DEBUG**: Debugging messages providing detailed information for troubleshooting and diagnosing problems during development.
- **TRACE**: Trace messages offering the most detailed level of logging, typically used for tracing the execution flow or capturing fine-grained details.

### Logging Best Practices

To leverage the Logging API effectively, developers should adhere to the following best practices:

- **Use Descriptive Messages**: Ensure that log messages are clear, concise, and descriptive, providing sufficient context to understand the event or condition being logged.
- **Choose Appropriate Log Levels**: Select the appropriate log level for each message based on its significance and impact on the application's behavior.
- **Log Relevant Information**: Include relevant details in log messages, such as timestamps, error codes, stack traces, and contextual data, to facilitate troubleshooting and analysis.
- **Avoid Excessive Logging**: Be mindful of logging too much information, as it can overwhelm log files and obscure critical messages. Focus on logging essential events and errors.
- **Configure Log Levels Dynamically**: Implement mechanisms to adjust log levels dynamically based on deployment environments or runtime conditions, allowing for flexible logging configurations.
- **Secure Log Data**: Protect sensitive information in log messages, such as user credentials or personal data, to prevent unauthorized access or disclosure.

By following these best practices and leveraging the capabilities of the Logging API, developers can effectively manage and analyze log data to improve the reliability, performance, and security of their applications.

### Example Usage

```javascript
import { logging } from "sdk/log";

let logger = logging.getLogger("com.codbex.mylogger");

logger.debug("Hello from {} {}!", "MyLogger");
logger.error("Oops", new Error("Something wrong happened"));
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**getLogger(name)**   | Returns the Logger object by this name | *Logger*


## Objects

---


### Logger


Function     | Description | Returns
------------ | ----------- | --------
**info(message, args?)**   | Logs the *message* with the INFO log level | -
**warn(message, args?)**   | Logs the *message* with the WARN log level | -
**error(message, args?)**   | Logs the *message* with the ERROR log level | -
**debug(message, args?)**   | Logs the *message* with the DEBUG log level | -
**trace(message, args?)**   | Logs the *message* with the TRACE log level | -
**log(message, level, args?)**   | Logs the *message* with the provided log *level* and optional message parameters | -
**infoError(message, error)**   | Logs the *error* with the stack trace with the INFO log level | -
**warnError(message, error)**   | Logs the *error* with the stack trace with the WARN log level | -
**errorError(message, error)**   | Logs the *error* with the stack trace with the ERROR log level | -
**debugError(message, error)**   | Logs the *error* with the stack trace with the DEBUG log level | -
**traceError(message, error)**   | Logs the *error* with the stack trace with the TRACE log level | -
**setLevel(level)**   | Sets the log level ('INFO', 'WARN', 'ERROR', 'DEBUG', 'TRACE') | -
