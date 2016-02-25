chrome.commands.onCommand.addListener(function(command) {
  if (command == "bookmark-tab") {
    chrome.tabs.getSelected(null, function(tab){
      chrome.storage.sync.get(["authToken"], function(items) {
        if ((typeof items.authToken != "undefined") && (typeof items.authToken != "undefined")) {
          var xhr = new XMLHttpRequest();
          var requestUri = "https://api.pinboard.in/v1/posts/add";
          requestUri += "?auth_token=" + encodeURIComponent(items.authToken);
          requestUri += "&url=" + encodeURIComponent(tab.url);
          requestUri += "&description=" + encodeURIComponent(tab.title);
          xhr.open("GET", requestUri, true);
          xhr.send();
        }
        else {
          alert("Please enter your Pinboard credentials into the extension options.");
        }
      });
    });
  }
});
