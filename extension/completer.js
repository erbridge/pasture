(function() {
    "use strict";

    var usernameInputElements = document.querySelectorAll("input[name='username']");
    var passwordInputElements = document.querySelectorAll("input[type='password']");

    Array.prototype.forEach.call(usernameInputElements, function(element) {
        element.value = "testuser";
    });

    Array.prototype.forEach.call(passwordInputElements, function(element) {
        element.value = "testpass";
    });
})();
