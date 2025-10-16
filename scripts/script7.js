// // without 'use strict'
x = 5;
alert(x);

// with 'use strict'
'use strict';
y = 5;
alert(y);

//when I didnt use the 'use strict' at the top of the code and when i declared a variable without a datatype, it is assigned as a global variable.
//But when I used the 'use strict' at the top of the code and when i declared a variable without a datatype, it gives an error that the variable is not defined. Uncaught ReferenceError: y is not defined