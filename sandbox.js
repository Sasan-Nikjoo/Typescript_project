var greet;
greet = function () {
    console.log("hello peter");
};
greet();
//c is optional and has a defualt value
var addfunc = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
addfunc(2, 3, 13);
