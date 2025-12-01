---
title: puter.ai.txt2speech()
description: Convert text to speech with AI using multiple languages, voices, and engine types.
platforms: [websites, apps, nodejs, workers]
---

Converts text into speech using AI. Supports multiple languages and voices.

## Syntax

```js
puter.ai.txt2speech(text)
puter.ai.txt2speech(text, options)
puter.ai.txt2speech(text, language)
puter.ai.txt2speech(text, language, voice)
puter.ai.txt2speech(text, language, voice, engine)
```

## Parameters
#### `text` (String) (required)
A string containing the text you want to convert to speech. The text must be less than 3000 characters long.

#### `options` (Object) (optional)
An object containing the following optional properties:

- `language` (String): Language code for speech synthesis (AWS Polly only). Defaults to `en-US`.
- `voice` (String): Voice ID used for synthesis. Defaults to `Joanna` (AWS), `alloy` (OpenAI), or `21m00Tcm4TlvDq8ikWAM` (ElevenLabs sample voice).
- `engine` (String): AWS Polly engine. Can be `standard`, `neural`, `long-form`, or `generative`. Defaults to `standard`.
- `provider` (String): TTS provider to use. Supports `'aws-polly'` (default), `'openai'`, and `'elevenlabs'`.
- `model` (String): Model identifier for the chosen provider. Examples:
  - OpenAI: `gpt-4o-mini-tts` (default), `tts-1`, `tts-1-hd`
  - ElevenLabs: `eleven_multilingual_v2` (default), `eleven_flash_v2_5`, `eleven_turbo_v2_5`, `eleven_v3`
- `response_format` (String): Output format for OpenAI voices (`mp3`, `wav`, `opus`, `aac`, `flac`, `pcm`). Defaults to `mp3`.
- `output_format` (String): Output format for ElevenLabs voices (e.g. `mp3_44100_128`). Defaults to `mp3_44100_128` when using ElevenLabs.
- `instructions` (String): Additional guidance for OpenAI voices (tone, pacing, style, etc.).
- `voice_settings` (Object): ElevenLabs voice tuning options (e.g. stability, similarity boost, speed).

#### `language` (String) (optional)
*AWS Polly only.*

The language to use for speech synthesis. Defaults to `en-US`. The following languages are supported:

- Arabic (`ar-AE`)
- Catalan (`ca-ES`)
- Chinese (Cantonese) (`yue-CN`)
- Chinese (Mandarin) (`cmn-CN`)
- Danish (`da-DK`)
- Dutch (Belgian) (`nl-BE`)
- Dutch (`nl-NL`)
- English (Australian) (`en-AU`)
- English (British) (`en-GB`)
- English (Indian) (`en-IN`)
- English (New Zealand) (`en-NZ`)
- English (South African) (`en-ZA`)
- English (US) (`en-US`)
- English (Welsh) (`en-GB-WLS`)
- Finnish (`fi-FI`)
- French (`fr-FR`)
- French (Belgian) (`fr-BE`)
- French (Canadian) (`fr-CA`)
- German (`de-DE`)
- German (Austrian) (`de-AT`)
- Hindi (`hi-IN`)
- Icelandic (`is-IS`)
- Italian (`it-IT`)
- Japanese (`ja-JP`)
- Korean (`ko-KR`)
- Norwegian (`nb-NO`)
- Polish (`pl-PL`)
- Portuguese (Brazilian) (`pt-BR`)
- Portuguese (European) (`pt-PT`)
- Romanian (`ro-RO`)
- Russian (`ru-RU`)
- Spanish (European) (`es-ES`)
- Spanish (Mexican) (`es-MX`)
- Spanish (US) (`es-US`)
- Swedish (`sv-SE`)
- Turkish (`tr-TR`)
- Welsh (`cy-GB`)

#### `voice` (String) (optional)
The voice to use for speech synthesis. Defaults to `Joanna` when `provider` is `aws-polly`, `alloy` when using the OpenAI provider, or `21m00Tcm4TlvDq8ikWAM` when using ElevenLabs.

- **AWS Polly voices:** See the [AWS Polly voice list](https://docs.aws.amazon.com/polly/latest/dg/available-voices.html) for available IDs and languages.
- **OpenAI voices:** Built-in options include `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`, `nova`, `onyx`, `sage`, and `shimmer`.
- **ElevenLabs voices:** Use any ElevenLabs voice ID from your account (for example `21m00Tcm4TlvDq8ikWAM` for the public "Rachel" sample voice).

#### `engine` (String) (optional)
*AWS Polly only.*

The speech synthesis engine to use. Can be `standard`, `neural`, `long-form`, or `generative`. Defaults to `standard`. Higher-end engines provide better quality but may incur higher usage costs.

#### `provider` (String) (optional)
Selects which backend performs the synthesis. Use `'aws-polly'` (default) for the existing AWS voices, `'openai'` to access the GPT-4o mini TTS family, or `'elevenlabs'` to use ElevenLabs voices.

#### `model` (String) (optional)
Specifies which TTS model to use for the selected provider.

- *OpenAI:* Defaults to `gpt-4o-mini-tts`. Other available models include `tts-1` and `tts-1-hd`.
- *ElevenLabs:* Defaults to `eleven_multilingual_v2`. Other available models include `eleven_flash_v2_5`, `eleven_turbo_v2_5`, and `eleven_v3`.

#### `response_format` (String) (optional)
*OpenAI provider only.*

Controls the output format when using OpenAI. Defaults to `mp3`, but you can request `wav`, `opus`, `aac`, `flac`, or `pcm` for different latency/quality characteristics.

#### `output_format` (String) (optional)
*ElevenLabs provider only.*

Controls the output format when using ElevenLabs. Defaults to `mp3_44100_128`. See the ElevenLabs docs for supported presets (e.g. `pcm_16000`, `ulaw_8000`).

#### `instructions` (String) (optional)
*OpenAI provider only.*

Supply extra guidance for voice style (tone, speed, mood, etc.). This text is passed directly to the model.

## Return value
A `Promise` that resolves to an `HTMLAudioElement`. The element’s `src` points at a blob or remote URL containing the synthesized audio.

## Examples

<strong class="example-title">Convert text to speech (Shorthand)</strong>

```html;ai-txt2speech
<html>
<body>
    <script src="https://js.puter.com/v2/"></script>
    <button id="play">Speak!</button>
    <script>
        document.getElementById('play').addEventListener('click', ()=>{
            puter.ai.txt2speech(`Hello world! Puter is pretty amazing, don't you agree?`).then((audio)=>{
                audio.play();
            });
        });
    </script>
</body>
</html>
```

<strong class="example-title">Convert text to speech using options</strong>

```html;ai-txt2speech-options
<html>
<body>
    <script src="https://js.puter.com/v2/"></script>
    <button id="play">Speak with options!</button>
    <script>
        document.getElementById('play').addEventListener('click', ()=>{
            puter.ai.txt2speech(`Hello world! This is using a neural voice.`, {
                voice: "Joanna",
                engine: "neural",
                language: "en-US"
            }).then((audio)=>{
                audio.play();
            });
        });
    </script>
</body>
</html>
```

<strong class="example-title">Use OpenAI voices</strong>

```html;ai-txt2speech-openai
<html>
<body>
    <script src="https://js.puter.com/v2/"></script>
    <button id="play">Use OpenAI voice</button>
    <script>
        document.getElementById('play').addEventListener('click', async ()=>{
            const audio = await puter.ai.txt2speech(
                "Hello! This sample uses the OpenAI alloy voice.",
                {
                    provider: "openai",
                    model: "gpt-4o-mini-tts",
                    voice: "alloy",
                    response_format: "mp3",
                    instructions: "Sound cheerful but not overly fast."
                }
            );
            audio.play();
        });
    </script>
</body>
</html>
```

<strong class="example-title">Use ElevenLabs voices</strong>

```html;ai-txt2speech-elevenlabs
<html>
<body>
    <script src="https://js.puter.com/v2/"></script>
    <button id="play">Use ElevenLabs voice</button>
    <script>
        document.getElementById('play').addEventListener('click', async ()=>{
            const audio = await puter.ai.txt2speech(
                "Hello! This sample uses an ElevenLabs voice.",
                {
                    provider: "elevenlabs",
                    model: "eleven_multilingual_v2",
                    voice: "21m00Tcm4TlvDq8ikWAM",
                    output_format: "mp3_44100_128"
                }
            );
            audio.play();
        });
    </script>
</body>
</html>
```

<strong class="example-title">Compare different engines</strong>

```html;ai-txt2speech-engines
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        textarea { width: 100%; height: 80px; margin: 10px 0; }
        button { margin: 5px; padding: 10px 15px; cursor: pointer; }
        .status { margin: 10px 0; padding: 5px; font-size: 14px; }
    </style>
</head>
<body>
    <script src="https://js.puter.com/v2/"></script>
    
    <h1>Text-to-Speech Engine Comparison</h1>
    
    <textarea id="text-input" placeholder="Enter text to convert to speech...">Hello world! This is a test of the text-to-speech engines.</textarea>
    
    <div>
        <button onclick="playAudio('standard')">Standard Engine</button>
        <button onclick="playAudio('neural')">Neural Engine</button>
        <button onclick="playAudio('generative')">Generative Engine</button>
    </div>
    
    <div id="status" class="status"></div>

    <script>
        const textInput = document.getElementById('text-input');
        const statusDiv = document.getElementById('status');
        
        async function playAudio(engine) {
            const text = textInput.value.trim();
            
            if (!text) {
                statusDiv.textContent = 'Please enter some text first!';
                return;
            }
            
            if (text.length > 3000) {
                statusDiv.textContent = 'Text must be less than 3000 characters!';
                return;
            }
            
            statusDiv.textContent = `Converting with ${engine} engine...`;
            
            try {
                const audio = await puter.ai.txt2speech(text, {
                    voice: "Joanna",
                    engine: engine,
                    language: "en-US"
                });
                
                statusDiv.textContent = `Playing ${engine} audio`;
                audio.play();
            } catch (error) {
                statusDiv.textContent = `Error: ${error.message}`;
            }
        }
    </script>
</body>
</html>
```
