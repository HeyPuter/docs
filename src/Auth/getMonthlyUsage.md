---
title: puter.auth.getMonthlyUsage()
description: Get the user's current monthly resource usage in the Puter ecosystem.
---

Get the user's current monthly resource usage in the Puter ecosystem.

## Syntax

```js
puter.auth.getMonthlyUsage();
```

## Parameters

None

## Return value

A `Promise` that resolves to an object containing the user's monthly usage, with the following properties:

- `allowanceInfo` (Object) - Information about the user's resource allowance and consumption.
  - `monthUsageAllowance` (Number) - Total resource allowance.
  - `remaining` (Number) - The remaining allowance that can be used.
- `appTotals` (Object) - Total usage by application.
  - `count` (Number) - Number of Puter API calls per application.
  - `totals` (Number) - Total resources consumed per application.
- `usage` (Object) - Usage information by API type.
  - `cost` (Number) - Total resource consumed for by this API.
  - `count` (Number) - Number of times the API is called.
  - `units` (Number) - Units of measurement for each API (e.g., tokens for AI calls, bytes for FS operations, etc).

<div class="info">

Resources in Puter are measured in microcents (e.g., $0.50 = 50,000,000).

</div>

## Example

```html;auth-get-monthly-usage
<html>
  <body>
    <script src="https://js.puter.com/v2/"></script>
    <script>
      puter.auth.getMonthlyUsage().then(function (usage) {
        puter.print(`<pre>${JSON.stringify(usage, null, 2)}</pre>`);
      });
    </script>
  </body>
</html>

```
