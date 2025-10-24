---
title: puter.auth.getDetailedAppUsage()
description: Get the user's specific application detailed resource usage.
---

Get the user's specific application detailed resource usage.

## Syntax

```js
puter.auth.getDetailedAppUsage(appId);
```

## Parameters

#### `appId` (String) (required)

The id of the user application.

## Return value

A `Promise` that resolves to the total resource usage of a given app:

- `total` - The total app's usage

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
