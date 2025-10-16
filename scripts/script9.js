"use strict";

function add(a, b) {
    alert(this.a);
    return a + b;
}

// the alert box appears when the button is clicked and it shows undefined because strict mode is not activated
// whereas in strict mode the error is shown "Uncaught TypeError: Cannot read properties of undefined (reading 'a') " beacuse the value a is undefined