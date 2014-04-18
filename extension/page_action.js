/* global chrome, requirejs */

(function(chrome, requirejs) {
    "use strict";

    var req = requirejs.config({
        baseUrl: chrome.extension.getURL("/")
    });

    req(["completer"], function(completer) {
        completer.complete("testuser", "testpass");
    });
})(chrome, requirejs);
