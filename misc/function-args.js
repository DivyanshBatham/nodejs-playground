// Passing Less arguments:
(function lessArguments(a,b,c) {
    console.log("\nlessArguments");
    console.log(arguments);
    console.log(a,b,c);
})(1,2);

// Passing more arguments:
(function moreArguments(a,b) {
    console.log("\nmoreArguments");
    console.log(arguments);
    console.log(a,b);
})(1,2,3);

// arguments object:  local variable available within all non-arrow functions.
function arguments(a,b) {
    console.log("\narguments");
    console.log(arguments);
}

arguments(2,4);