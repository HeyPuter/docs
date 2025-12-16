---
title: puter.kv.MAX_KEY_SIZE
description: Returns the max key size of the key-value store.
platforms: [websites, apps, nodejs, workers]
---

A property of the `puter.kv` object that returns the max key size in bytes of the key-value store.

## Syntax

```js
puter.kv.MAX_KEY_SIZE
```

## Examples

<strong class="example-title">Get the max key size</strong>

```html
<html>
  <body>
    <script src="https://js.puter.com/v2/"></script>
    <script>
      puter.print("Max Key Size: " + puter.kv.MAX_KEY_SIZE);
    </script>
  </body>
</html>
```
