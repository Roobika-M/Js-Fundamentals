"use strict";

let num = 5;
delete num;

function myFunc(){}
delete myFunc;

// when i try to execute this code it throws an error that "Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.Understand this error"