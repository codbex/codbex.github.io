# API: rs

> Source: `http/rs.ts`

## Usage
```javascript
import { rs } from "sdk/http";

rs.service()
    .resource("")
    .get(function (_ctx, _request, response) {
        response.println("Hello there!");
    })
    .execute();

```


