/* global define */

define(function() {
    "use strict";

    var formElement = document.querySelectorAll("input[type='password']")[0].form;

    var usernameInputElements = formElement.querySelectorAll("input[name='username']");
    var passwordInputElements = formElement.querySelectorAll("input[type='password']");

    var completer = {
        setUsername: function(username) {
            Array.prototype.forEach.call(usernameInputElements, function(element) {
                element.value = username;
            });
        },

        setPassword: function(password) {
            Array.prototype.forEach.call(passwordInputElements, function(element) {
                element.value = password;
            });
        },

        submitForm: function() {
            formElement.submit();
        }
    };

    return completer;
});
