// javascript: (function() {
//     var goaway = ".ytp-chrome-top, .ytp-chrome-bottom, .ytp-gradient-top, .ytp-gradient-bottom {display:none;}";
//     if("\v" == "v") {
//         document.createStyleSheet().cssText = goaway
//     }
//     else {
//         var tag = document.createElement("style");
//         tag.type = "text/css";
//         document.getElementsByTagName("head")[0].appendChild(tag);
//         tag[(typeof document.body.style.WebkitAppearance == "string") ? "innerText" : "innerHTML"] = goaway
//     }
// })();

javascript:(function(){var goaway=".ytp-chrome-top,.ytp-chrome-bottom,.ytp-gradient-top,.ytp-gradient-bottom{display:none;}";if("\v"=="v"){document.createStyleSheet().cssText=goaway}else{var tag=document.createElement("style");tag.type="text/css";document.getElementsByTagName("head")[0].appendChild(tag);tag[(typeof document.body.style.WebkitAppearance=="string")?"innerText":"innerHTML"]=goaway}})();