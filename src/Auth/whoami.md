---
title: puter.auth.whoami()
description: Get the current user information.
platforms: [websites, apps, nodejs, workers]
---

Get the current user information. Alternative to [getUser()](/Auth/getUser).

## Syntax

```js
puter.auth.whoami()
```

## Parameters

None

## Return value

A promise that resolves to a [`User`](/Objects/user) object containing the user's information.

## Example

```html
<html>
<body>
    <script src="https://js.puter.com/v2/"></script>
    <script>
        puter.auth.whoami().then(function(user) {
            puter.print(JSON.stringify(user));
        });
    </script>
</body>
</html>
```
