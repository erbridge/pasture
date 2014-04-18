/* global chrome, requirejs */

(function(chrome, requirejs) {
    "use strict";

    var req = requirejs.config({
        baseUrl: chrome.extension.getURL("/")
    });

    req(["completer", "store"], function(completer, store) {
        var username = store.getUsernames()[0];
        var password = store.getPassword(username);
        completer.complete(username, password);
        store.destroy();
    });
})(chrome, requirejs);
