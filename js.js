chrome.tabs.getSelected(null, function(tab) {
    var tg = "tg://msg_url?url=" + tab.url + '&text=' + tab.title;
    chrome.tabs.sendMessage(tab.id, tg)
    // chrome.tabs.create({
    //     "url": tg
    // });
});