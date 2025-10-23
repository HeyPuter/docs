---
title: puter.workers.exec()
description: Execute workers as an authenticated user.
---

Sends a request to a worker endpoint while automatically passing your authentication credentials.

## Syntax

```js
puter.workers.exec(workerURL, options);
```

## Parameters

#### `workerURL` (String)(Required)

The URL of the worker to execute.

#### `options` (Object)

Request options similar to the Fetch API:

- `method` (String) - HTTP method (default: 'GET')
- `headers` (Object) - Request headers
- `body` (String|Object) - Request body
- `cache` (String) - Cache mode
- `credentials` (String) - Credentials mode
- `mode` (String) - Request mode
- `redirect` (String) - Redirect mode
- `referrer` (String) - Referrer
- `signal` (AbortSignal) - Abort signal

## Return Value

A `Promise` that resolves to a `Response` object (similar to the Fetch API).
