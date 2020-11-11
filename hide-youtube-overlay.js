/**
 * Removes the UI that is overlaid on Youtube videos.
 * Based on this Stack Exchange answer: https://superuser.com/a/1052944
 */

// Beautified
javascript: (function() {
    var goaway = ".ytp-chrome-top, .ytp-chrome-bottom, .ytp-gradient-top, .ytp-gradient-bottom {display:none;}";
    if("\v" == "v") {
        document.createStyleSheet().cssText = goaway
    }
    else {
        var tag = document.createElement("style");
        tag.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(tag);
        tag[(typeof document.body.style.WebkitAppearance == "string") ? "innerText" : "innerHTML"] = goaway
    }
})();

// Minified
javascript:(function(){var goaway=".ytp-chrome-top,.ytp-chrome-bottom,.ytp-gradient-top,.ytp-gradient-bottom{display:none;}";if("\v"=="v"){document.createStyleSheet().cssText=goaway}else{var tag=document.createElement("style");tag.type="text/css";document.getElementsByTagName("head")[0].appendChild(tag);tag[(typeof document.body.style.WebkitAppearance=="string")?"innerText":"innerHTML"]=goaway}})();