---
title: Framework Integrations
description: Learn how to integrate Puter.js into web frameworks.
---

Puter.js is designed to be framework-agnostic. This means you can use it with practically any web framework.

Simply install the Puter.js NPM library and use it in your app.

```bash
npm install @heyputer/puter.js
```

```javascript
import puter from "@heyputer/puter.js";

puter.ai.chat("hello world");
```

Here are examples for some popular frameworks:

## Next.js

With Next.js, add the `"use client"` directive at the top of your component file since Puter.js requires browser APIs.

```jsx
// MyComponent.jsx
"use client";

import { useEffect } from "react";
import puter from "@heyputer/puter.js";

export function MyComponent() {
    ...
    useEffect(() => {
        puter.ai.chat("hello");
    }, [])
    ...
}
```

Check out our [Next.js template](https://github.com/HeyPuter/next.js) for a complete example.

<div class="info">

For Next.js version 15 or earlier, you need to enable Turbopack for Puter.js to work. Version 16 and later have Turbopack enabled by default.
Learn how to enable Turbopack here: <https://nextjs.org/docs/15/app/api-reference/turbopack>

</div>

## Astro

With Astro, import Puter.js in any client-side script tag.

```html
<!-- Page.astro -->
...
<script>
    import puter from "@heyputer/puter.js";
    puter.ai.chat("hello");
</script>
...
```

Check out our [Astro template](https://github.com/HeyPuter/astro) for a complete example.

## React

With React, import Puter.js and use it in your component.

```jsx
// MyComponent.jsx
import { useEffect } from "react";
import puter from "@heyputer/puter.js";

export function MyComponent() {
    ...
    useEffect(() => {
        puter.ai.chat("hello");
    }, [])
    ...
}
```

Check out our [React template](https://github.com/HeyPuter/react) for a complete example.

## Angular

With Angular, import Puter.js and call it from your component methods.

```typescript
// my-component.component.ts
import { Component } from "@angular/core";
import puter from "@heyputer/puter.js";

@Component({
    selector: "app-my-component",
    template: `<button (click)="handleClick()">Chat</button>`,
})
export class MyComponent {
    handleClick() {
        puter.ai.chat("hello");
    }
}
```

Check out our [Angular template](https://github.com/HeyPuter/angular) for a complete example.

## Vue.js

With Vue.js, import Puter.js and call it from your component functions.

```vue
<!-- MyComponent.vue -->
<script setup>
import puter from "@heyputer/puter.js";

function handleClick() {
    puter.ai.chat("hello");
}
</script>

<template>
    <button @click="handleClick">Chat</button>
</template>
```

Check out our [Vue.js template](https://github.com/HeyPuter/vue.js) for a complete example.

## Svelte

With Svelte, import Puter.js and call it from your component functions.

```svelte
<!-- MyComponent.svelte -->
<script>
import puter from "@heyputer/puter.js";

function handleClick() {
    puter.ai.chat("hello");
}
</script>

<button on:click={handleClick}>Chat</button>
```

Check out our [Svelte template](https://github.com/HeyPuter/svelte) for a complete example.

## Other Frameworks

For other frameworks, the approach is similar: install the package and import it where needed. Puter.js works in any environment that supports ES modules.
