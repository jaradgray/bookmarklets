/**
 * Opens a new tab displaying the results of a Tineye search for the image at
 * the current tab's URL
 */

// Beautified
javascript:(function() {
    window.open("https://tineye.com/search?url="+window.location.href)
})();

// Minified
javascript:(function(){window.open("https://tineye.com/search?url="+window.location.href)})();