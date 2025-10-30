jQuery(document).ready(function () {
    //History API
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            if (window.history.state.reload) {
                window.location.href = window.location.href;
            }
        });
    }
});

function isCurrentPage(str) {
    try {
        const resolved = new URL(str, window.location.href);
        const current = new URL(window.location.href);

        // Remove hash from both for comparison
        resolved.hash = '';
        current.hash = '';

        return resolved.href === current.href;
    } catch (e) {
        return false;
    }
}

function isExternalLink(href) {
    try {
        const url = new URL(href, window.location.href);
        return url.origin !== window.location.origin;
    } catch (e) {
        return false;
    }
}

$(document).on('click', 'a:not(.skip-insta-load)', function (e) {
    if (isCurrentPage($(this).attr('href')) || isExternalLink($(this).attr('href'))) {
        // default browser behavior
        return;
    }
    e.preventDefault();


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

        setTimeout(() => {
            $('body').animate({
                scrollTop: 0
            }, 100);
        }, 30);

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
        $.event.trigger("pathchange")
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
