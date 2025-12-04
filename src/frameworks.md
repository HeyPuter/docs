---
title: Framework Integrations
description: Learn how to integrate Puter.js into web frameworks.
---

Puter.js is designed to be framework-agnostic. This means you can use it with practically any web framework.

Simply install the Puter.js NPM library and add it to your app.

```bash
npm install @heyputer/puter.js
```

```javascript
import puter from "@heyputer/puter.js";

puter.ai.chat("hello world");
```

Here are examples for some popular frameworks:

## Next.js

To use Puter.js in Next.js, add the `"use client"` directive at the top of your component file. Then use the API as usual.

```jsx
// MyComponent.jsx
"use client";

import puter from "@heyputer/puter.js";

export function MyComponent() {
    ...
    useEffect(() => {
        puter.ai.chat("hello");
    }, [])
    ...
}
```

<div class="info">

For Next.js version 15 or earlier, you need to enable Turbopack for Puter.js to work. Version 16 and later have Turbopack enabled by default.
Learn how to enable Turbopack here: <https://nextjs.org/docs/15/app/api-reference/turbopack>

</div>

## Astro

To use Puter.js in Astro, import it in any script tag.

```html
// Page.astro
...
<script>
    import puter from "@heyputer/puter.js";
    puter.ai.chat("hello");
</script>
...
```

## Other Frameworks

For other frameworks, the approach is similar: install the package and import it where needed. Puter.js works in any environment that supports ES modules.
