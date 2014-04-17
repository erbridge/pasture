/* global chrome */

(function(chrome) {
    "use strict";

    var passwordInputRule = {
        conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    schemes: [
                        "https"
                    ]
                },
                css: [
                    "input[type='password']"
                ]
            })
        ],
        actions: [
            new chrome.declarativeContent.ShowPageAction()
        ]
    };

    chrome.runtime.onInstalled.addListener(function() {
        chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
            chrome.declarativeContent.onPageChanged.addRules([
                passwordInputRule
            ]);
        });
    });

    chrome.pageAction.onClicked.addListener(function() {
        chrome.tabs.executeScript({
            file: "fill_credentials.js"
        });
    });
})(chrome);
