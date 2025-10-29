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

    // get github stars
    fetchGitHubData();
});

$(document).on('click', '.sidebar-toggle', function (e) {
    e.preventDefault();
    $('#sidebar-wrapper').toggleClass('active');
    $('.sidebar-toggle-button').toggleClass('active');
})

// clicking anywhere on the page will close the sidebar
$(document).on('click', function (e) {
    // print event target class

    if (!$(e.target).closest('#sidebar-wrapper').length && !$(e.target).closest('.sidebar-toggle-button').length && !$(e.target).hasClass('sidebar-toggle-button') && !$(e.target).hasClass('sidebar-toggle')) {
        $('#sidebar-wrapper').removeClass('active');
        $('.sidebar-toggle-button').removeClass('active');
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