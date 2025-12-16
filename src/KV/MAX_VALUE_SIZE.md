---
title: puter.kv.MAX_VALUE_SIZE
description: Returns the max value size of the value-value store.
platforms: [websites, apps, nodejs, workers]
---

A property of the `puter.kv` object that returns the max value size in bytes of the key-value store.

## Syntax

```js
puter.kv.MAX_VALUE_SIZE
```

## Examples

<strong class="example-title">Get the max value size</strong>

```html
<html>
  <body>
    <script src="https://js.puter.com/v2/"></script>
    <script>
      puter.print("Max Value Size: " + puter.kv.MAX_VALUE_SIZE);
    </script>
  </body>
</html>
```
