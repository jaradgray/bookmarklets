/**
 * Opens a new tab displaying the high-resolution thumbnail image for
 * the Youtube video at the current URL.
 */

// Beautified
javascript:(function() {
    // Make sure we're at the URL of a YouTube video
    const baseUrl = "youtube.com/watch?v=";
    let url = window.location.href;
    if (!url.includes(baseUrl)) return;

    // Get the video ID from the URL
    // After "?v=" and before any "&"s
    let index = url.indexOf("?v=") + 3;
    let videoId = url.substring(index);
    if (videoId.includes("&")) {
        videoId = videoId.substring(0, videoId.indexOf("&"));
    }

    // Navigate to the maxresdefault.jpg for the video ID
    window.open("https://i.ytimg.com/vi/" + videoId + "/maxresdefault.jpg")
})();

// Minified
javascript:(function(){let i=window.location.href;if(!i.includes("youtube.com/watch?v="))return;let n=i.indexOf("?v=")+3,t=i.substring(n);t.includes("&")&&(t=t.substring(0,t.indexOf("&"))),window.open("https://i.ytimg.com/vi/"+t+"/maxresdefault.jpg")})();