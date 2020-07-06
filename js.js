chrome.browserAction.onClicked.addListener(function (tab) {
    var tg = "tg://msg_url?url=" + tab.url + '&text=' + tab.title
    chrome.tabs.sendMessage(tab.id, tg)
})

chrome.contextMenus.removeAll()
chrome.contextMenus.create({
    title: 'Share in Telegram...',
    contexts: ['link'],
    onclick: function (url, tab) {
        var tg = 'tg://msg_url?url=' + url.linkUrl
        chrome.tabs.sendMessage(tab.id, tg)
    }
})
