---
title: puter.auth.getMonthlyUsage()
description: Get the user monthly resource usage in the Puter ecosystem.
---

Get the user monthly resource usage in the Puter ecosystem.

## Syntax

```js
puter.auth.getMonthlyUsage();
```

## Parameters

None

## Return value

A `Promise` that resolves to an object containing the user's monthly usage. The data is an object with the following properties:

- `allowanceInfo` (Object)
  - `addons` (Object)
  - `monthUsageAllowance` (Number) - Total monthly resource allowance
  - `remaining` (Number) - The remaining monthly allowance
- `appTotals` (Object) - Each application total usage.
  - `count`
  - `totals` - Total usage consumed
- `usage` (Object) - Each action information.
  - `cost` - The cost of each actions.
  - `count`
  - `units`

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
