function save_options() {
  var username = document.getElementById('pinboardUsername').value;
  var password = document.getElementById('pinboardPassword').value;
  chrome.storage.sync.set({
    pinboardUsername: username,
    pinboardPassword: password
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get(["pinboardUsername", "pinboardPassword"], function(items) {
    if ((typeof items.pinboardUsername != "undefined") && (typeof items.pinboardUsername != "undefined")){
      document.getElementById('pinboardUsername').value = items.pinboardUsername;
      document.getElementById('pinboardPassword').value = items.pinboardPassword;
    }
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);