/* global define, Storage */

define(function() {
    "use strict";

    Storage.prototype.setObject = function(key, value) {
        this.setItem(key, JSON.stringify(value));
    };

    Storage.prototype.getObject = function(key) {
        var value = this.getItem(key);
        return value && JSON.parse(value);
    };

    var localStorageKey = "pasture";

    var defaultDatabase = {};
    defaultDatabase[document.URL] = {
        testuser: "testpass"
    };

    var getEntireDatabase = function() {
        var database = localStorage.getObject(localStorageKey);
        if (!database) {
            database = defaultDatabase;
            localStorage.setObject(localStorageKey, defaultDatabase);
        }
        return database;
    };

    var getUrlDatabase = function(url) {
        return getEntireDatabase()[url];
    };

    var thisUrlDatabase = getUrlDatabase(document.URL);

    var store = {
        getUsernames: function() {
            return Object.keys(thisUrlDatabase);
        },

        getPassword: function(username) {
            return thisUrlDatabase[username];
        },

        destroy: function() {
            localStorage.removeItem(localStorageKey);
        }
    };

    return store;
});
