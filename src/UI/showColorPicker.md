---
title: puter.ui.showColorPicker()
description: Presents a color picker dialog for selecting a color.
---

Presents the user with a color picker dialog allowing them to select a color.

## Syntax
```js
puter.ui.showColorPicker()
puter.ui.showColorPicker(defaultColor)
puter.ui.showColorPicker(options)
```

## Examples

```html
<html>
<body>
    <script src="https://js.puter.com/v2/"></script>
    <script>
        puter.ui.showColorPicker().then((color)=>{
            document.body.style.backgroundColor = color;
        })
    </script>
</body>
</html>
```