---
title: Getting Started
description: Get started with Puter.js for building your applications. No backend code, just add Puter.js and you're ready to start.
---

## Installation & basic usage

Choose the install method that fits your project. The npm module is recommended for modern build setups, while the script tag works for quick experiments.

<div style="overflow:hidden; margin-top: 30px;">
    <div class="example-group active" data-section="npm"><span>NPM module (recommended)</span></div>
    <div class="example-group" data-section="cdn"><span>CDN (script tag)</span></div>
</div>

<div class="example-content" data-section="npm" style="display:block;">

#### Install

```
npm install @heyputer/puter.js
```

#### Use in the browser

```js
// ESM
import { puter } from "@heyputer/puter.js";
// or
import puter from "@heyputer/puter.js";

// CommonJS
const { puter } = require("@heyputer/puter.js");
// or
const puter = require("@heyputer/puter.js");

// Example
puter.ai.chat(`Why did the chicken cross the road?`).then(console.log);
```

#### Use in Node.js

```js
// CJS
const { init } = require("@heyputer/puter.js/src/init.cjs");
const puter = init(process.env.puterAuthToken);

// Example
puter.ai.chat("What color was Napoleon's white horse?").then(console.log);

// ESM
import { init } from "@heyputer/puter.js/src/init.cjs";
const puterEsm = init(process.env.puterAuthToken);
```

</div>

<div class="example-content" data-section="cdn">

#### Include the script

```html
<script src="https://js.puter.com/v2/"></script>
```

#### Use in the browser

```html
<html>
  <body>
    <script src="https://js.puter.com/v2/"></script>
    <script>
      puter.ai.chat(`Why did the chicken cross the road?`).then(puter.print);
    </script>
  </body>
</html>
```

</div>

## Starter templates

- [Angular](https://github.com/HeyPuter/angular)
- [React](https://github.com/HeyPuter/react)
- [Next.js](https://github.com/HeyPuter/next.js)
- [Vue.js](https://github.com/HeyPuter/vue.js)
- [Vanilla JS](https://github.com/HeyPuter/vanilla.js)
- [Node.js + Express](https://github.com/HeyPuter/node.js-express.js)

## Where to Go From Here

To learn more about the capabilities of Puter.js and how to use them in your web application, check out

- [Tutorials](https://developer.puter.com/tutorials): Step-by-step guides to help you get started with Puter.js and build powerful applications.

- [Playground](https://docs.puter.com/playground): Experiment with Puter.js in your browser and see the results in real-time. Many examples are available to help you understand how to use Puter.js effectively.

- [Examples](https://docs.puter.com/examples): A collection of code snippets and full applications that demonstrate how to use Puter.js to solve common problems and build innovative applications.
