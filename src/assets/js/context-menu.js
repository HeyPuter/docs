jQuery(document).ready(function () {
    // "Copy code" buttons
    $(document).on('click', '.copy-code-button', function (e) {
        const $codeWrapper = $(this).closest('.code-wrapper')
        const $codeBlock = $codeWrapper.find('code').first();

        navigator.clipboard.writeText($codeBlock.text());
        // show check mark for 1 second after copying
        $(this).find('.copy').css('background-image', 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23012238\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'20 6 9 17 4 12\'/%3E%3C/svg%3E")');
        setTimeout(() => {
            $(this).find('.copy').css('background-image', '');
        }, 1000);
    })

    // "Download code" buttons
    $(document).on('click', '.download-code-button', function (e) {
        const $codeWrapper = $(this).closest('.code-wrapper')
        const $codeBlock = $codeWrapper.find('code').first();
        const $filename = 'puter-example.html';
        const $code = $codeBlock.text();

        const blob = new Blob([$code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = $filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })

    // Dropdown toggle functionality
    $(document).on('click', '.dropdown-button', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.menu-dropdown-items').toggle();
    });

    // Menu button click handlers
    $(document).on('click', '#menu-copy-page', async function (e) {
        const markdownUrl = new URL("index.md", window.location.href).toString();
        try {
            /**
             * The MIT License (MIT) Copyright (c) 2021 Cloudflare, Inc.
             * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
             * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
             */
            const clipboardItem = new ClipboardItem({
                ["text/plain"]: fetch(markdownUrl)
                    .then((r) => r.text())
                    .then((t) => new Blob([t], { type: "text/plain" }))
                    .catch((e) => {
                        throw new Error(`Received ${e.message} for ${markdownUrl}`);
                    }),
            });

            await navigator.clipboard.write([clipboardItem]);

            const buttonElement = document.querySelector("#menu-copy-page span");
            const originalContent = buttonElement.innerHTML;
            buttonElement.textContent = "Copied!";

            setTimeout(() => {
                buttonElement.innerHTML = originalContent;
            }, 2000);
        } catch (error) {
            console.error("Failed to copy Markdown:", error);
        }
    });

    $(document).on('click', '#menu-view-markdown', function (e) {
        window.open(new URL("index.md", window.location.href), "_blank");
    });

    $(document).on('click', '#menu-open-chatgpt', function (e) {
        const message = `Read from ${window.location.href} so I can ask questions about it.`;
        window.open(`https://chat.openai.com/?q=${message}`, "_blank");
    });

    $(document).on('click', '#menu-open-claude', function (e) {
        const message = `Read from ${window.location.href} so I can ask questions about it.`;
        window.open(`https://claude.ai/new?q=${message}`, "_blank");
    });
})

// Close menu dropdown if clicking outside
$(document).on('click', function (e) {
    if (!$(e.target).closest('.menu-item-main').length) {
        $('.menu-dropdown-items').hide();
    }
    if (!$(e.target).closest('.menu-item').length) {
        $('.menu-dropdown-items').hide();
    }
})