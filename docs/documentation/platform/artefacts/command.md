# Command

## Overview:

The __codbex__ provides provides support for command files (*.command) as a way to define and execute commands in the runtime environment. Command files are written in JSON, and they allow users to define and run server-side scripts or execute specific tasks within the platform.

Here's an overview of the support for Command files (*.command):

::: tip
File extension: `*.command`
:::

### Command Files:

#### File Format:

Command files have a `.command` file extension and are written in JSON. These files typically contain reference to server-side script code that can interact with various aspects of the runtime environment or shell script interacting with the underliying operating system.

Example:

```json
{
    "description": "command description",
    "contentType": "text/plain",
    "set": {
        "GREETING": "hello world!"
    },
    "unset": [
        "BYE"
    ],
    "commands": [
        {
            "os": "linux",
            "command": "sh print.sh"
        },
        {
            "os": "mac",
            "command": "sh print.sh"
        },
        {
            "os": "windows",
            "command": "print.bat"
        }
    ]
}
```

The provided example is a JSON representation of a command file. Let's break down the structure and elements of this command file:

#### Elements of the Command File:

* description: A description providing information about the purpose or nature of the command.

* contentType: Specifies the content type, indicating the type of data expected or returned. In this example, it is set to "text/plain."

* set: A section where variables are set. In this case, a variable named "GREETING" is set with the value "hello world!"

* unset: An array of variables to unset or remove. In this example, the variable "BYE" is to be unset.

* commands: An array of commands to be executed based on the operating system.

#### Command Object:

* os: Specifies the operating system for which the command is intended. Can be "linux," "mac," or "windows."

* command: The actual command to be executed. For Linux and macOS, it is "sh print.sh," and for Windows, it is "print.bat."

### Usage and Execution:

When this command file is executed in the environment, it will perform the following actions:

* Set the variable "GREETING" to "hello world!"
* Unset the variable "BYE."
* Execute different commands based on the operating system:
    * On Linux and macOS, it will execute the shell script "print.sh."
    * On Windows, it will execute the batch file "print.bat."

::: info
Ensure that the specified shell script ("print.sh") and batch file ("print.bat") exist and are appropriately configured in the respective operating system environments.

This command file structure is a versatile way to define and execute commands, making it useful for various scenarios, including environment setup, configuration changes, or system interactions. Adjustments can be made based on specific requirements and the desired behavior in different operating systems.
:::

#### Scripting Capabilities:

Command files leverage the scripting capabilities of the platform, allowing developers to write server-side JavaScript code that can perform operations such as data manipulation, file handling, or integration with other services.

#### Execution Environment:

Command files are executed within the runtime environment. This means that they have access to the platform's APIs, services, and resources, enabling developers to create powerful and customizable server-side logic.

### Features and Use Cases:

#### Task Automation:

Command files are commonly used for task automation within the platform. Developers can define scripts to perform routine tasks, data processing, or other server-side operations without manual intervention.

#### Integration:

Command files can be used to integrate with other artifacts, such as database tables, entities, or web services. This enables the creation of comprehensive solutions where command files interact with other components within the platform.

#### Collaborative Development:

Like other artifacts in the __codbex__ platform, command files can be part of collaborative development projects. Multiple developers can work on the same project, share and version control command files, fostering teamwork and efficient development practices.

### Execution:

Command files can be executed within the platform using various methods, such as the scripting services, scheduled jobs, or manual triggering through the Web IDE or the REST endpoint.

## Notes

It's important to note that features and capabilities may evolve over time, so it's recommended to refer to the latest documentation or release notes for the most up-to-date information on command file support and usage.

The Command artefacts are processed by the [Command Engine](../engines/command.md).
