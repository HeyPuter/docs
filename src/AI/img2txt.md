---
title: puter.ai.img2txt()
description: Extract text from images using OCR to read printed text, handwriting, and any text-based content.
platforms: [websites, apps, nodejs, workers]
---

Given an image will return the text contained in the image. Also known as OCR (Optical Character Recognition), this API can be used to extract text from images of printed text, handwriting, or any other text-based content. You can choose between AWS Textract (default) or Mistral’s OCR service when you need multilingual or richer annotation output.

## Syntax

```js
puter.ai.img2txt(image, testMode = false)
puter.ai.img2txt(image, options = {})
puter.ai.img2txt({ source: image, ...options })
```

## Parameters

#### `image` / `source` (String|File|Blob) (required)

A string containing the URL or Puter path of the image you want to recognize, or a `File`/`Blob` object containing the image. When calling with an options object, pass it as `{ source: ... }`.

#### `testMode` (Boolean) (Optional)

A boolean indicating whether you want to use the test API. Defaults to `false`. This is useful for testing your code without using up API credits.

#### `options` (Object) (Optional)

An options object with the following properties:

- `provider` (String) (Optional) - Choose the OCR backend. Can be `aws-textract` or `mistral`. Defaults to `aws-textract`.
- `model` (String) (Optional) - Mistral OCR model to use. Defaults to `mistral-ocr-latest`.
- `pages` (Array) (Optional) - Limit processing to specific page numbers (multi-page PDFs).
- `includeImageBase64` (Boolean) (Optional) - Mistral-only: requests the base64 of cropped regions in the response.
- `imageLimit` (Number) (Optional) - Control how many images are analyzed per document (Mistral).
- `imageMinSize` (Number) (Optional) - Set minimum size for images to be analyzed (Mistral).
- `bboxAnnotationFormat` (String) (Optional) - Mistral: format for bounding-box annotations (e.g., `yolo`, `xyxy`).
- `documentAnnotationFormat` (String) (Optional) - Mistral: request document-level annotations/markdown variants.

## Return value

A `Promise` that will resolve to a string containing the text contained in the image.

In case of an error, the `Promise` will reject with an error message.

## Examples

<strong class="example-title">Extract the text contained in an image</strong>

```html;ai-img2txt
<html>
<body>
    <script src="https://js.puter.com/v2/"></script>
    <script>
        puter.ai.img2txt('https://assets.puter.site/letter.png').then(puter.print);
    </script>
</body>
</html>
```