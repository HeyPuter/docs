---
title: puter.ai.txt2vid()
description: Generate short-form videos with OpenAI Sora models through Puter.js.
platforms: [websites, apps, nodejs, workers]
---

Create AI-generated video clips directly from text prompts.

## Syntax

```js
puter.ai.txt2vid(prompt, testMode = false)
puter.ai.txt2vid(prompt, options = {})
```

## Parameters
#### `prompt` (String) (required)
The textual description that guides the video generation.

#### `testMode` (Boolean) (optional)
When `true`, the call returns a sample video so you can test your UI without incurring usage. Defaults to `false`.

#### `options` (Object) (optional)
Additional settings for the generation request:

- `model` (`'sora-2' | 'sora-2-pro'`) — Video model to use. Defaults to `'sora-2'`.
- `seconds` (`4 | 8 | 12`) — Target clip length in seconds. (`duration` is an alias that is coerced to `seconds`.)
- `size` (`'720x1280' | '1280x720' | '1024x1792' | '1792x1024'`) — Output resolution. (`resolution` is an alias.)
- `input_reference` (`File | Blob`) — Optional still image to treat as the opening frame.

Any properties not set fall back to the defaults shown above.

## Return value
A `Promise` that resolves to an `HTMLVideoElement`. The element is preloaded, has `controls` enabled, and exposes metadata via `data-mime-type` and `data-source` attributes. Append it to the DOM to display the generated clip immediately.

> **Note:** Real Sora renders can take a couple of minutes to complete. The returned promise resolves only when the MP4 is ready, so keep your UI responsive (for example, by showing a spinner) while you wait. Each successful generation consumes the user’s AI credits in accordance with the model, duration, and resolution you request.

## Examples

<strong class="example-title">Generate a sample clip (test mode)</strong>

```html;ai-txt2vid
<html>
<body>
    <script src="https://js.puter.com/v2/"></script>
    <script>
        puter.ai.txt2vid(
            "A sunrise drone shot flying over a calm ocean",
            true // test mode avoids using credits
        ).then((video) => {
            document.body.appendChild(video);
        }).catch(console.error);
    </script>
</body>
</html>
```

<strong class="example-title">Generate an 8-second cinematic clip</strong>

```html;ai-txt2vid-options
<html>
<body>
    <script src="https://js.puter.com/v2/"></script>
    <script>
        puter.ai.txt2vid("A fox sprinting through a snow-covered forest at dusk", {
            model: "sora-2-pro",
            seconds: 8,
            size: "1280x720"
        }).then((video) => {
            document.body.appendChild(video);
            // Autoplay once metadata is available
            video.addEventListener('loadeddata', () => video.play().catch(() => {}));
        }).catch(console.error);
    </script>
</body>
</html>
```