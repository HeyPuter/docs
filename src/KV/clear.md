---
title: puter.kv.clear()
description: Remove all key-value pairs from your app's store.
platforms: [websites, apps, nodejs, workers]
---

`puter.kv.clear()` is an alias of [`puter.kv.flush()`](/KV/flush/). It removes all key-value pairs from the user's key-value store for the current app.

## Syntax

```js
puter.kv.clear()
```

## Parameters

None

## Return value

A `Promise` that resolves to `true` when the key-value store has been cleared.

## Examples

<strong class="example-title">Clear the key-value store</strong>

```html
<html>
<body>
    <script src="https://js.puter.com/v2/"></script>
    <script>
        (async () => {
            await puter.kv.clear();
            puter.print('Key-value store cleared');
        })();
    </script>
</body>
</html>
```
