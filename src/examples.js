const examples = [
    {
        title: 'Introduction',
        children: [
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
            }
        ]
    },
    {
        title: 'AI',
        children: [
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
            }
        ]
    },
    {
        title: 'FileSystem',
        children: [
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
            }
        ]
    },
    {
        title: 'Key-Value Store',
        children: [
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
            }
        ]
    },
    {
        title: 'Networking',
        children: [
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
            }
        ]
    },
    {
        title: 'Hosting',
        children: [
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
            }
        ]
    },
    {
        title: 'Authentication',
        children: [
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
            }
        ]
    },
    {
        title: 'Apps',
        children: [
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
            }
        ]
    },
    {
        title: 'Workers',
        children: [
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
    }
];

module.exports = examples;