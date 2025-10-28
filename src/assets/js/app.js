const icons = {
    ai_outline: `<svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>`,
    ai_active: `<svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>`,
    fs_outline: `<svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    fs_active: `<svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    kv_outline: `<svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-icon lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    kv_active: `<svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-icon lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    hosting_outline: `<svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    hosting_active: `<svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    auth_outline: `<svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-lock-icon lucide-user-lock"><circle cx="10" cy="7" r="4"/><path d="M10.3 15H7a4 4 0 0 0-4 4v2"/><path d="M15 15.5V14a2 2 0 0 1 4 0v1.5"/><rect width="8" height="5" x="13" y="16" rx=".899"/></svg>`,
    auth_active: `<svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-lock-icon lucide-user-lock"><circle cx="10" cy="7" r="4"/><path d="M10.3 15H7a4 4 0 0 0-4 4v2"/><path d="M15 15.5V14a2 2 0 0 1 4 0v1.5"/><rect width="8" height="5" x="13" y="16" rx=".899"/></svg>`,
}

jQuery(document).ready(function () {
    //when doc is loaded scroll side nav to active section
    $('#sidebar').scrollTop($('#sidebar').scrollTop() + $('#sidebar a.active').position()?.top
        - $('#sidebar').height() / 2 + $('#sidebar a.active').height() / 2);
    //History API
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            if (window.history.state.reload) {
                window.location.href = window.location.href;
            }
        });
    }

    // add icons to .icon elements
    $('.example-group').each(function () {
        $(this).find('.icon').html(icons[$(this).data('icon')]);
    });

    $('.example-group.active').each(function () {
        $(this).find('.icon').html(icons[$(this).data('icon-active')]);
    });

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

    // get github stars
    fetchGitHubData();
});

$(document).on('click', '.example-group', function (e) {
    e.preventDefault();
    $('.example-group').removeClass('active');
    // change all icons to outline
    $('.example-group').not(this).each(function () {
        $(this).find('.icon').html(icons[$(this).data('icon')]);
    });
    $(this).toggleClass('active');
    // change icon
    if ($(this).hasClass('active')) {
        $(this).find('.icon').html(icons[$(this).data('icon-active')]);
    } else {
        $(this).find('.icon').html(icons[$(this).data('icon')]);
    }
    // show content
    $('.example-content').hide();
    let section = $(this).data('section');
    if ($(this).hasClass('active')) {
        $(`.example-content[data-section="${section}"]`).show();
    }
})

$(document).on('click', '.sidebar-toggle', function (e) {
    e.preventDefault();
    $('#sidebar-wrapper').toggleClass('active');
    $('.sidebar-toggle-button').toggleClass('active');
})

// clicking anywhere on the page will close the sidebar and menu dropdown
$(document).on('click', function (e) {
    // print event target class

    if (!$(e.target).closest('#sidebar-wrapper').length && !$(e.target).closest('.sidebar-toggle-button').length && !$(e.target).hasClass('sidebar-toggle-button') && !$(e.target).hasClass('sidebar-toggle')) {
        $('#sidebar-wrapper').removeClass('active');
        $('.sidebar-toggle-button').removeClass('active');
    }

    // Close menu dropdown if clicking outside
    if (!$(e.target).closest('.menu-item-main').length) {
        $('.menu-dropdown-items').hide();
    }
    if (!$(e.target).closest('.menu-item').length) {
        $('.menu-dropdown-items').hide();
    }
})

$(document).on('click', '#sidebar a:not(.skip-insta-load), .next-prev-button', function (e) {
    e.preventDefault();
    $('#sidebar a').removeClass('active');
    $(this).addClass('active');

    if ($(this).hasClass('next-prev-button')) {
        // get the next or previous link
        var $nextPrevLink = $(this).attr('href');
        // find the sidebar link that matches the next or previous link
        var $sidebarLink = $(`#sidebar a[href="${$nextPrevLink}"]`);
        // remove active class from all sidebar links
        $('#sidebar a').removeClass('active');
        // add active class to the sidebar link that matches the next or previous link
        $sidebarLink.addClass('active');
    }

    // reset progress bar
    $('#progress-bar').css('width', '0%');
    $('#progress-bar').show();

    // History API
    try {
        window.history.pushState({ reload: true }, document.title, $(this).attr('href'));
    } catch (e) {
        console.error('Error: Failed to push state.', e);
    }

    $.ajax({
        url: $(this).attr('href'),
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.onprogress = function (e) {
                if (e.lengthComputable) {
                    var percentComplete = e.loaded / e.total * 100;
                    $('#progress-bar').css('width', percentComplete + '%');
                }
            };
            return xhr;
        }
    }).done(function (data) {
        $('.docs-content').html($(data).find('.docs-content').html());
        $('#toc-wrapper').html($(data).find('#toc-wrapper').html());

        // highlight code
        $(`code[class^='language']`).each(function () {
            var $this = $(this);
            if ($this.attr('data-highlighted') === 'yes') {
                // Remove the attribute or set it to 'no'
                $this.removeAttr('data-highlighted');
            }
            // Now you can re-highlight
            else {
                try {
                    hljs.configure({ ignoreUnescapedHTML: true });
                    hljs.highlightElement(this);
                } catch (e) {
                    console.error('Error: Failed to highlight.', e);
                }
            }
        });

        // add icons to .icon elements
        $('.example-group').each(function () {
            $(this).find('.icon').html(icons[$(this).data('icon')]);
        });

        $('.example-group.active').each(function () {
            $(this).find('.icon').html(icons[$(this).data('icon-active')]);
        });

        setTimeout(() => {
            $('body').animate({
                scrollTop: 0
            }, 100);
        }, 30);
        // close sidebar
        $('#sidebar-wrapper').removeClass('active');
        $('.sidebar-toggle-button').removeClass('active');

        //set title of page
        let title = $(data).filter('title').text();
        if (!title)
            title = $(data).find('title').text();
        document.title = title;

        // update description meta tag
        let description = $(data).filter('meta[name="description"]').attr('content');
        if (!description)
            description = $(data).find('meta[name="description"]').attr('content');
        if (description) {
            let descriptionMeta = $('meta[name="description"]');
            if (descriptionMeta.length === 0) {
                descriptionMeta = $('<meta name="description">').appendTo('head');
            }
            descriptionMeta.attr('content', description);
        }

        // update canonical URL
        let canonical = $('link[rel="canonical"]');
        if (canonical.length === 0) {
            canonical = $('<link rel="canonical">').appendTo('head');
        }
        canonical.attr('href', window.location.href);
        // Hide or reset progress bar
        setTimeout(() => {
            $('#progress-bar').fadeOut(100);
        }, 1000);
    }).fail(function (e) {
        // Handle the error here
        console.error('Error: Failed to load the content.', e);
        // Optionally, display an error message to the user
        $('.docs-content').html('<p>Error loading content.</p>');
        // Hide or reset progress bar
        setTimeout(() => {
            $('#progress-bar').fadeOut(100);
        }, 1000);
    });

    return false;
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

$(document).on('change', '.dark-mode-toggle-checkbox', function () {
    $('body').toggleClass('dark', $(this).is(':checked'));
});