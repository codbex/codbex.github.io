# API: decorators

> Source: `job/decorators.ts`

@Scheduled decorator
Marks an entire class as a scheduled job with a cron expression.

introduced in TypeScript 5.0, which expects a ClassDecoratorContext object.

## Usage
```javascript
import { Scheduled } from "sdk/job"

@Scheduled({ expression: "0/10 * * * * ?" })
export class MyJob {
    run() {
        console.log("MyJob executed!");
    }
}

new MyJob().run();
```


