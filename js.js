chrome.tabs.getSelected(null, function(tab) {
    var tg = "tg://msg_url?url=" + tab.url + '&text=' + tab.title;
    chrome.tabs.create({
        "url": tg
    });
});