function redirect()
{
    let matches = window.location.href.match(/open.spotify.com\/(\S+)\/(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)/); 
    if (matches != null)
    {
        window.location.href = "https://open.spotify.com/go?uri=spotify:" + matches[1] + ":" + matches[2] + "&rtd=1";
    }
}

redirect();


chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    this.redirect();
});
