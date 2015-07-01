function save_options() {
  var pinboardAuthToken = document.getElementById('authToken').value;
  chrome.storage.sync.set({
    authToken: pinboardAuthToken
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get(["authToken"], function(items) {
    if ((typeof items.pinboardUsername != "undefined") && (typeof items.authToken != "undefined")) {
      document.getElementById('authToken').value = items.authToken;
    }
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);