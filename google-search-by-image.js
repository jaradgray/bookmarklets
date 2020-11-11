/**
 * Opens a new tab displaying the results of Google's Search By Image feature
 * using the current tab's URL as the image URL
 */

// Beautified
javascript:(function() {
    window.open("https://www.google.com/searchbyimage?site=search&sa=X&image_url="+window.location.href)
})();

// Minified
javascript:(function(){window.open("https://www.google.com/searchbyimage?site=search&sa=X&image_url="+window.location.href)})();