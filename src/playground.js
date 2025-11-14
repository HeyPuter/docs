const fs = require('fs');
const path = require('path');

const playgroundHtml = `
<html>

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Roboto:black,bold,medium,regular,light,thin" rel="stylesheet">
    <title>Puter.js Playground</title>

    <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="/assets/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/assets/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <script defer data-domain="docs.puter.com" src="https://plausible.io/js/script.js"></script>

    <style>
        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            -webkit-font-smoothing: antialiased;
        }

        * {
            box-sizing: border-box;
        }

        body {
            font-family: 'Roboto', Arial, Helvetica, sans-serif;
        }

        #output-iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        #run {
            float: right;
            margin: 10px;
            padding: 7px 20px;
            background-color: #2563eb;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            user-select: none;
        }

        #run:hover {
            background-color: #1d4ed8;
        }

        #run:active {
            background-color: #1e40af;
        }

        #select-example {
            padding: 5px 10px;
            min-width: 300px;
            font-size: 14px;
            margin-right: 10px;
        }

        .go-to-docs {
            margin-right: 5px;
            color: white;
            text-decoration: none;
            border: 2px solid white;
            padding: 5px 7px;
            box-sizing: border-box;
            border-radius: 4px;
            font-size: 15px;
            float: right;
        }

        #code-container {
            width: 50%;
            height: 100%;
            float: left;
            position: relative;
        }

        #output-container {
            width: calc(50% - 6px);
            /* Subtract resizer width */
            height: 100%;
            float: right;
            position: relative;
        }

        #run span {
            background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23fff%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide%20lucide-play-icon%20lucide-play%22%3E%3Cpath%20d%3D%22M5%205a2%202%200%200%201%203.008-1.728l11.997%206.998a2%202%200%200%201%20.003%203.458l-12%207A2%202%200%200%201%205%2019z%22%2F%3E%3C%2Fsvg%3E");
            width: 20px;
            display: block;
            height: 20px;
            background-size: 15px;
            background-repeat: no-repeat;
            float: left;
            margin-top: 2px;
            margin-right: 5px;
        }

        .navbar {
            float: right;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .navbar a {
            color: white;
            text-decoration: none;
            margin-right: 20px;
        }

        .navbar a:hover {
            text-decoration: underline;
        }

        .logo {
            margin: 0;
            font-size: 25px;
            color: white;
            font-weight: 400;
            flex-grow: 1;
            font-weight: 300;
            font-size: 21px;
            display: flex;
            align-items: center;
        }

        .logo a {
            color: white;
            text-decoration: none;
        }

        @media (max-width: 500px) {
            #select-example {
                max-width: 300px;
                font-size: 13px;
                width: 200px;
                margin-right: 0;
            }

        }

        @media (max-width: 768px) {
            #code-container {
                width: 100vw;
                height: calc(50vh - 100px);
            }

            #output-container {
                width: 100vw;
                height: calc(50vh - 50px);
                margin-top: 50px;
            }

            #select-example {
                max-width: 300px;
            }

            .resizer {
                display: none;
                /* Hide resizer on mobile */
            }
        }

        .resizer {
            width: 6px;
            height: 100%;
            background: #e1e1e1;
            position: absolute;
            right: 0;
            top: 0;
            cursor: col-resize;
            z-index: 100;
            transition: background 0.2s ease;
            height: calc(100vh - 50px);
            user-select: none;
        }

        .resizer:hover,
        .resizer.dragging {
            background: #ccc;
        }
    </style>
</head>

<body>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/loader.min.js"
        integrity="sha512-ZG31AN9z/CQD1YDDAK4RUAvogwbJHv6bHrumrnMLzdCrVu4HeAqrUX7Jsal/cbUwXGfaMUNmQU04tQ8XXl5Znw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://js.puter.com/v2/"></script>

    <div style="height: 50px; padding: 10px; background-color: #474e5d; display: flex; flex-direction: row;">
        <h1 class="logo"><a href="/playground/">Puter.js Playground</a></h1>
        <div style="float:right;" class="navbar">
            <a href="/" target="_blank" style="margin-right: 35px;">Docs</a>
            <a style="display: flex; flex-direction: row; align-items: center;"
                href="https://github.com/heyPuter/puter/" target="_blank"><svg role="img"
                    style="margin-right:4px; margin-bottom: 3px;" width="17" height="17" viewBox="0 0 24 24" fill="#fff"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub</title>
                    <path
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg><span class="github-stars"></span></a></h1>
        </div>
    </div>
    <div style="height: calc(100vh - 100px);">
        <div id="code-container">
            <div style="overflow: hidden; height: 50px; display: flex; flex-direction: row; align-items: center;">
                <h1 style="user-select: none; margin:0; float:left; font-size: 20px; padding: 10px; flex-grow:1;">Code:
                </h1>
            </div>
            <div id="code" style="height:100%; width: 100%; border-top: 1px solid #CCC;"></div>
            <iframe id="initial-code" style="display:none;">{{CODE}}</iframe>
            <div class="resizer"></div>
        </div>
        <div id="output-container">
            <div style="overflow: hidden; height: 50px; display: flex; flex-direction: row; align-items: center;">
                <h1 style="user-select: none; margin:0; float:left; font-size: 20px; padding: 10px; flex-grow: 1;">
                    Preview:</h1>
                <button id="run"><span></span>Run</button>
            </div>
            <div id="output" style="height: 100%; width: 100%; border: 1px solid #CCC;"></div>
        </div>
    </div>
    <script>
        let editor;
        // on document load
        document.addEventListener('DOMContentLoaded', function () {
            // load monaco editor
            require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });
            require(['vs/editor/editor.main'], function () {
                // get editor element
                var editorElement = document.getElementById('code');
                // create editor
                editor = monaco.editor.create(editorElement, {
                    language: 'html',
                    fontFamily: 'monospace',
                    minimap: {
                        enabled: false
                    }
                });
                editor.updateOptions({ fontFamily: 'monospace' });

                // Load initial code from iframe
                editor.setValue(document.getElementById('initial-code').textContent);
            });

            function fetchGitHubData() {
                // GitHub API fetching and handling

                const url = "https://api.github.com/repos/HeyPuter/puter";

                function formatNumber(num) {
                    if (num < 1000) {
                        return num; // return the same number if less than 1000
                    } else if (num < 1000000) {
                        return (num / 1000).toFixed(1) + 'K'; // convert to K for thousands
                    } else {
                        return (num / 1000000).toFixed(1) + 'M'; // convert to M for millions
                    }
                }

                $.getJSON(url, function (data) {
                    $('.github-stars').text(formatNumber(data.stargazers_count) + "");
                }).fail(function (jqxhr, textStatus, error) {
                    let err = textStatus + ", " + error;
                    console.error("Request Failed: " + err);
                    $('.github-stars').text('Heyputer/Puter');
                });
            }

            fetchGitHubData();
        });

        // Attach the resize event listener to the window
        window.addEventListener('resize', () => {
            editor.layout();
        });

        function loadStringInIframe(str) {
            // Create a new iframe element
            var iframe = document.createElement('iframe');

            // set iframe id
            iframe.id = 'output-iframe';

            // append to output
            var output = document.getElementById('output');
            output.innerHTML = '';
            output.appendChild(iframe);

            // Get the document of the iframe
            var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

            // Write the string content into the iframe
            iframeDoc.open();
            iframeDoc.write(str);
            iframeDoc.close();
        }

        // ctrl + enter to run
        document.addEventListener('keydown', function (e) {
            if (e.ctrlKey && e.key === 'Enter') {
                loadStringInIframe(editor.getValue());
            }
        });
    </script>
    <script>
        var code = document.getElementById('code');
        var run = document.getElementById('run');
        run.addEventListener('click', function () {
            loadStringInIframe(editor.getValue());
        });

        // Resizer functionality
        const resizer = document.querySelector('.resizer');
        const codeContainer = document.getElementById('code-container');
        const outputContainer = document.getElementById('output-container');
        let isResizing = false;
        let startX;
        let startWidthCode;
        let startWidthOutput;

        resizer.addEventListener('mousedown', (e) => {
            isResizing = true;
            resizer.classList.add('dragging');
            startX = e.pageX;
            startWidthCode = codeContainer.offsetWidth;
            startWidthOutput = outputContainer.offsetWidth;

            // Disable pointer events on iframe during resize
            const iframe = document.getElementById('output-iframe');
            if (iframe) {
                iframe.style.pointerEvents = 'none';
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;

            const parentWidth = codeContainer.parentElement.offsetWidth;
            const diffX = e.pageX - startX;
            const resizerWidth = 6;

            const newCodeWidth = ((startWidthCode + diffX) / parentWidth * 100);
            const newOutputWidth = ((startWidthOutput - diffX) / parentWidth * 100);

            // Set minimum width to 20%
            if (newCodeWidth >= 20 && newOutputWidth >= 20) {
                codeContainer.style.width = \`\${ newCodeWidth }% \`;
                outputContainer.style.width = \`\${ newOutputWidth }% \`;
                editor.layout(); // Resize Monaco editor
            }
        });

        document.addEventListener('mouseup', () => {
            if (isResizing) {
                isResizing = false;
                resizer.classList.remove('dragging');

                // Re-enable pointer events on iframe after resize
                const iframe = document.getElementById('output-iframe');
                if (iframe) {
                    iframe.style.pointerEvents = 'auto';
                }
            }
        });
    </script>
</body>

</html>`

const examples = [
    // Introduction
    {
        title: 'Chat with GPT-5 nano',
        slug: 'intro-chatgpt',
        source: '/playground/examples/intro-chatgpt.html'
    },
    {
        title: 'Image Analysis',
        slug: 'intro-gpt-vision',
        source: '/playground/examples/intro-gpt-vision.html'
    },
    {
        title: 'Cloud Storage',
        slug: 'intro-fs-write',
        source: '/playground/examples/intro-fs-write.html'
    },
    {
        title: 'Key-Value Store',
        slug: 'intro-kv-set',
        source: '/playground/examples/intro-kv-set.html'
    },
    {
        title: 'Publish a Website',
        slug: 'intro-hosting',
        source: '/playground/examples/intro-hosting.html'
    },
    {
        title: 'Authentication',
        slug: 'intro-auth',
        source: '/playground/examples/intro-auth.html'
    },
    // AI
    {
        title: 'Chat with GPT-5 nano',
        slug: 'ai-chatgpt',
        source: '/playground/examples/ai-chatgpt.html'
    },
    {
        title: 'Image Analysis',
        slug: 'ai-gpt-vision',
        source: '/playground/examples/ai-gpt-vision.html'
    },
    {
        title: 'Stream the response',
        slug: 'ai-chat-stream',
        source: '/playground/examples/ai-chat-stream.html'
    },
    {
        title: 'Function Calling',
        slug: 'ai-function-calling',
        source: '/playground/examples/ai-function-calling.html'
    },
    {
        title: 'AI Resume Analyzer (File handling)',
        slug: 'ai-resume-analyzer',
        source: '/playground/examples/ai-resume-analyzer.html'
    },
    {
        title: 'Chat with OpenAI o3-mini',
        slug: 'ai-chat-openai-o3-mini',
        source: '/playground/examples/ai-chat-openai-o3-mini.html'
    },
    {
        title: 'Chat with Claude Sonnet',
        slug: 'ai-chat-claude',
        source: '/playground/examples/ai-chat-claude.html'
    },
    {
        title: 'Chat with DeepSeek',
        slug: 'ai-chat-deepseek',
        source: '/playground/examples/ai-chat-deepseek.html'
    },
    {
        title: 'Chat with Gemini',
        slug: 'ai-chat-gemini',
        source: '/playground/examples/ai-chat-gemini.html'
    },
    {
        title: 'Chat with xAI (Grok)',
        slug: 'ai-xai',
        source: '/playground/examples/ai-xai.html'
    },
    {
        title: 'Extract Text from Image',
        slug: 'ai-img2txt',
        source: '/playground/examples/ai-img2txt.html'
    },
    {
        title: 'Text to Image',
        slug: 'ai-txt2img',
        source: '/playground/examples/ai-txt2img.html'
    },
    {
        title: 'Text to Image with options',
        slug: 'ai-txt2img-options',
        source: '/playground/examples/ai-txt2img-options.html'
    },
    {
        title: 'Text to Image with image-to-image generation',
        slug: 'ai-txt2img-image-to-image',
        source: '/playground/examples/ai-txt2img-image-to-image.html'
    },
    {
        title: 'Text to Speech',
        slug: 'ai-txt2speech',
        source: '/playground/examples/ai-txt2speech.html'
    },
    {
        title: 'Text to Speech with options',
        slug: 'ai-txt2speech-options',
        source: '/playground/examples/ai-txt2speech-options.html'
    },
    {
        title: 'Text to Speech with engines',
        slug: 'ai-txt2speech-engines',
        source: '/playground/examples/ai-txt2speech-engines.html'
    },
    {
        title: 'Text to Speech with OpenAI',
        slug: 'ai-txt2speech-openai',
        source: '/playground/examples/ai-txt2speech-openai.html'
    },
    {
        title: 'Text to Video',
        slug: 'ai-txt2vid',
        source: '/playground/examples/ai-txt2vid.html'
    },
    {
        title: 'Text to Video with options',
        slug: 'ai-txt2vid-options',
        source: '/playground/examples/ai-txt2vid-options.html'
    },
    // FileSystem
    {
        title: 'Write File',
        slug: 'fs-write',
        source: '/playground/examples/fs-write.html'
    },
    {
        title: 'Read File',
        slug: 'fs-read',
        source: '/playground/examples/fs-read.html'
    },
    {
        title: 'Make a Directory',
        slug: 'fs-mkdir',
        source: '/playground/examples/fs-mkdir.html'
    },
    {
        title: 'Delete',
        slug: 'fs-delete',
        source: '/playground/examples/fs-delete.html'
    },
    {
        title: 'Read Directory',
        slug: 'fs-readdir',
        source: '/playground/examples/fs-readdir.html'
    },
    {
        title: 'Rename',
        slug: 'fs-rename',
        source: '/playground/examples/fs-rename.html'
    },
    {
        title: 'Get File/Directory Info',
        slug: 'fs-stat',
        source: '/playground/examples/fs-stat.html'
    },
    {
        title: 'Copy File/Directory',
        slug: 'fs-copy',
        source: '/playground/examples/fs-copy.html'
    },
    {
        title: 'Move File/Directory',
        slug: 'fs-move',
        source: '/playground/examples/fs-move.html'
    },
    {
        title: 'Upload',
        slug: 'fs-upload',
        source: '/playground/examples/fs-upload.html'
    },
    {
        title: 'Write a file with deduplication',
        slug: 'fs-write-dedupe',
        source: '/playground/examples/fs-write-dedupe.html'
    },
    {
        title: 'Create a new file with input coming from a file input',
        slug: 'fs-write-from-input',
        source: '/playground/examples/fs-write-from-input.html'
    },
    {
        title: 'Create a file in a directory that does not exist',
        slug: 'fs-write-create-missing-parents',
        source: '/playground/examples/fs-write-create-missing-parents.html'
    },
    {
        title: 'Create a directory with deduplication',
        slug: 'fs-mkdir-dedupe',
        source: '/playground/examples/fs-mkdir-dedupe.html'
    },
    {
        title: 'Create a directory with missing parent directories',
        slug: 'fs-mkdir-create-missing-parents',
        source: '/playground/examples/fs-mkdir-create-missing-parents.html'
    },
    {
        title: 'Move a file with missing parent directories',
        slug: 'fs-move-create-missing-parents',
        source: '/playground/examples/fs-move-create-missing-parents.html'
    },
    {
        title: 'Delete a directory',
        slug: 'fs-delete-directory',
        source: '/playground/examples/fs-delete-directory.html'
    },
    // Key-Value Store
    {
        title: 'Set',
        slug: 'kv-set',
        source: '/playground/examples/kv-set.html'
    },
    {
        title: 'Get',
        slug: 'kv-get',
        source: '/playground/examples/kv-get.html'
    },
    {
        title: 'Increment',
        slug: 'kv-incr',
        source: '/playground/examples/kv-incr.html'
    },
    {
        title: 'Increment (Object value)',
        slug: 'kv-incr-nested',
        source: '/playground/examples/kv-incr-nested.html'
    },
    {
        title: 'Decrement',
        slug: 'kv-decr',
        source: '/playground/examples/kv-decr.html'
    },
    {
        title: 'Decrement (Object value)',
        slug: 'kv-decr-nested',
        source: '/playground/examples/kv-decr-nested.html'
    },
    {
        title: 'Delete',
        slug: 'kv-del',
        source: '/playground/examples/kv-del.html'
    },
    {
        title: 'List',
        slug: 'kv-list',
        source: '/playground/examples/kv-list.html'
    },
    {
        title: 'Flush',
        slug: 'kv-flush',
        source: '/playground/examples/kv-flush.html'
    },
    {
        title: "What's your name?",
        slug: 'kv-name',
        source: '/playground/examples/kv-name.html'
    },
    // Networking
    {
        title: 'Basic TCP Socket',
        slug: 'net-basic',
        source: '/playground/examples/net-basic.html'
    },
    {
        title: 'TLS Socket',
        slug: 'net-tls',
        source: '/playground/examples/net-tls.html'
    },
    {
        title: 'Fetch',
        slug: 'net-fetch',
        source: '/playground/examples/net-fetch.html'
    },
    // Hosting
    {
        title: 'Create a simple website displaying "Hello world!"',
        slug: 'hosting-create',
        source: '/playground/examples/hosting-create.html'
    },
    {
        title: 'Create 3 random websites and then list them',
        slug: 'hosting-list',
        source: '/playground/examples/hosting-list.html'
    },
    {
        title: 'Create a random website then delete it',
        slug: 'hosting-delete',
        source: '/playground/examples/hosting-delete.html'
    },
    {
        title: 'Update a subdomain to point to a new directory',
        slug: 'hosting-update',
        source: '/playground/examples/hosting-update.html'
    },
    {
        title: 'Retrieve information about a subdomain',
        slug: 'hosting-get',
        source: '/playground/examples/hosting-get.html'
    },
    // Authentication
    {
        title: 'Sign in',
        slug: 'auth-sign-in',
        source: '/playground/examples/auth-sign-in.html'
    },
    {
        title: 'Sign out',
        slug: 'auth-sign-out',
        source: '/playground/examples/auth-sign-out.html'
    },
    {
        title: 'Check sign in',
        slug: 'auth-is-signed-in',
        source: '/playground/examples/auth-is-signed-in.html'
    },
    {
        title: 'Get user',
        slug: 'auth-get-user',
        source: '/playground/examples/auth-get-user.html'
    },
    {
        title: "Get user's monthly usage",
        slug: 'auth-get-monthly-usage',
        source: '/playground/examples/auth-get-monthly-usage.html'
    },
    // Apps
    {
        title: 'To-Do List',
        slug: 'app-todo',
        source: '/playground/examples/app-todo.html'
    },
    {
        title: 'AI Chat',
        slug: 'app-ai-chat',
        source: '/playground/examples/app-ai-chat.html'
    },
    {
        title: 'Camera Photo Describer',
        slug: 'app-camera',
        source: '/playground/examples/app-camera.html'
    },
    {
        title: 'Text Summarizer',
        slug: 'app-summarizer',
        source: '/playground/examples/app-summarizer.html'
    },
    {
        title: 'Create an app pointing to example.com',
        slug: 'app-create',
        source: '/playground/examples/app-create.html'
    },
    {
        title: 'Create 3 random apps and then list them',
        slug: 'app-list',
        source: '/playground/examples/app-list.html'
    },
    {
        title: 'Create a random app then delete it',
        slug: 'app-delete',
        source: '/playground/examples/app-delete.html'
    },
    {
        title: 'Create a random app then change its title',
        slug: 'app-update',
        source: '/playground/examples/app-update.html'
    },
    {
        title: 'Create a random app then get it',
        slug: 'app-get',
        source: '/playground/examples/app-get.html'
    },
    // Workers
    {
        title: 'Create a worker',
        slug: 'workers-create',
        source: '/playground/examples/workers-create.html'
    },
    {
        title: 'List workers',
        slug: 'workers-list',
        source: '/playground/examples/workers-list.html'
    },
    {
        title: 'Get a worker',
        slug: 'workers-get',
        source: '/playground/examples/workers-get.html'
    },
    {
        title: 'Workers Management',
        slug: 'workers-management',
        source: '/playground/examples/workers-management.html'
    },
    {
        title: 'Authenticated Worker Requests',
        slug: 'workers-exec',
        source: '/playground/examples/workers-exec.html'
    }
]

const generatePlayground = () => {
    examples.forEach(example => {
        // Read source file from src/ directory
        const sourcePath = path.join('src', example.source);
        const sourceContent = fs.readFileSync(sourcePath, 'utf8');

        // Copy playgroundHtml to avoid tainting the original
        const htmlTemplate = playgroundHtml.slice();

        // Replace {{CODE}} in the copied template with the source content
        const finalHtml = htmlTemplate.replace('{{CODE}}', sourceContent);

        // Create output directory
        const outputDir = path.join('dist', 'playground', example.slug);
        fs.mkdirSync(outputDir, { recursive: true });

        // Write the file
        const outputPath = path.join(outputDir, 'index.html');
        fs.writeFileSync(outputPath, finalHtml, 'utf8');

    });
    console.log(`Generated ${examples.length} playground examples.`);
}

module.exports = { generatePlayground };
