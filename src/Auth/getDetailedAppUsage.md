---
title: puter.auth.getDetailedAppUsage()
description: Get detailed usage statistics for an application the user has accessed.
---

Get detailed usage statistics for an application the user has accessed.

## Syntax

```js
puter.auth.getDetailedAppUsage(appId);
```

## Parameters

#### `appId` (String) (required)

The id of the application.

## Return value

A `Promise` that resolves to an object containing resource usage of a given app, with the following properties:

- `total` (Number) - The application total resource consumption.
- `[apiName]` (Object) - Usage information per API.
  - `cost` (Number) - Total resource consumed for by this API.
  - `count` (Number) - Number of times the API is called.
  - `units` (Number) - Units of measurement for each API (e.g., tokens for AI calls, bytes for FS operations, etc).

<div class="info">

Resources in Puter are measured in microcents (e.g., $0.50 = 50,000,000).

</div>

## Example

```html
<html>
  <body>
    <script src="https://js.puter.com/v2/"></script>
    <script>
      puter.auth.getDetailedAppUsage(appId).then(function (result) {
        puter.print(`<pre>${JSON.stringify(result, null, 2)}</pre>`);
      });
    </script>
  </body>
</html>
```
