chrome.browserAction.onClicked.addListener(function (tab) {
    var tg = "tg://msg_url?url=" + tab.url + '&text=' + tab.title
    chrome.tabs.sendMessage(tab.id, tg)
})
