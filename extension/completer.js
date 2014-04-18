/* global define */

define(function() {
    "use strict";

    var completer = {
        setUsername: function(username) {
            var usernameInputElements = document.querySelectorAll("input[name='username']");

            Array.prototype.forEach.call(usernameInputElements, function(element) {
                element.value = username;
            });
        },

        setPassword: function(password) {
            var passwordInputElements = document.querySelectorAll("input[type='password']");

            Array.prototype.forEach.call(passwordInputElements, function(element) {
                element.value = password;
            });
        }
    };

    return completer;
});
