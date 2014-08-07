chrome.commands.onCommand.addListener(function(command) {
    if (command == "bookmark-tab") {
        chrome.tabs.getSelected(null, function(tab){
            chrome.storage.sync.get(["pinboardUsername", "pinboardPassword"], function(items) {
                console.log('hi');
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://api.pinboard.in/v1/posts/add?url=" + tab.url + "&description=" + tab.title, true);
                xhr.setRequestHeader("Authorization", "Basic " + btoa(items.pinboardUsername + ":" + items.pinboardPassword));
                xhr.send();
            });
        });
    }
});