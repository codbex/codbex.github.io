# Command Engine

## Introduction

This documentation focuses on how developers can configure the Command Engine to execute various shell scripts, allowing for flexibility based on the operating system.

## Executing Shell Scripts

The Command Engine allows developers to configure and execute shell scripts. This feature is particularly useful for tasks that involve interacting with the underlying operating system.

Example:

```json
{
   "description":"command description",
   "contentType":"text/plain",
   "commands":[
      {
         "os":"linux",
         "command":"uname -a"
      },
      {
         "os":"mac",
         "command":"uname -a"
      },
      {
         "os":"windows",
         "command":"ver"
      }
   ]
}
```

## Environment Variable

 The set and unset properties define environment variables, and the commands array specifies OS-specific commands.

 Example:

`print.sh`

 ```shell
 echo $GREETING
 ```

`print.command`

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

## Conclusion

The Command Engine in the __codbex__ platform provides a flexible and extensible commands interface for developers. By configuring shell scripts in the `*.command` files, developers can execute OS-specific tasks seamlessly, enhancing the platform's adaptability to different operating environments.