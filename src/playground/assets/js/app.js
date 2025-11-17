
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
        // auto run?
        var urlParams = new URLSearchParams(window.location.search);
        var autoRun = urlParams.get('autorun');
        if (autoRun) {
            loadStringInIframe(editor.getValue());
        }
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

    const newCodeWidth = ((startWidthCode + diffX) / parentWidth * 100);
    const newOutputWidth = ((startWidthOutput - diffX) / parentWidth * 100);

    // Set minimum width to 20%
    if (newCodeWidth >= 20 && newOutputWidth >= 20) {
        codeContainer.style.width = `${newCodeWidth}%`;
        outputContainer.style.width = `${newOutputWidth}%`;
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

// Sidebar toggle functionality
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarContainer = document.getElementById('sidebar-container');

// Collapse sidebar by default on mobile
if (window.innerWidth <= 768) {
    sidebarContainer.classList.add('collapsed');
}

sidebarToggle.addEventListener('click', () => {
    sidebarContainer.classList.toggle('collapsed');
    // Re-layout editor
    if (editor) {
        editor.layout();
    }
});

// Highlight active example in sidebar
const currentPath = window.location.pathname;
const sidebarItems = document.querySelectorAll('.sidebar-item');
sidebarItems.forEach(item => {
    if (item.getAttribute('href') === currentPath) {
        item.classList.add('active');
    }
});