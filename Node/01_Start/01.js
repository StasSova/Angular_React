// npm install -g typescript
// tsc 01.ts
// tsc --init
var x = 5;
var num = 10;
num = 10;
// num = "afds"; // error
var mess = "Message";
var type;
type = "4";
type = 4;
type = 13;
var arr = [1, 2, 3];
var arrStr = ["a", "b", "c"];
var arr2 = [1, true, "asdf"];
// functions
function getSizeImage() {
    return 1;
}
var getOffset = function () {
    return 300;
};
var getOffset2 = function () { return 300; };
function print1111(title) {
    console.log(title);
}
var printLog = function (title) {
    console.log(title);
};
print1111("title");
printLog("title");
function print2(title, // required
datePost, // default
sender // additional, not required
) {
    if (datePost === void 0) { datePost = 234242; }
}
function sum(x, y) {
    return x + y;
}
var op;
op = sum;
console.log(op(2, 4)); // 6
// Object
var student = {
    name: "Ben",
    age: 22,
    lessons: ["JS", "SEO", "Angular"],
    move: function () {
        console.log("move");
    },
};
var st = {
    name: "a",
    age: 2,
    lessons: ["a", "b"],
    print23: function () {
        console.log("hello world");
    },
};
var g1 = {
    title: "Title1",
    loop: false,
    path: ["a.png", "b.png", "c.png"],
    item: 123,
    drag: function () {
        console.log("Title: ".concat(this.title, ",  Quantity ").concat(this.item));
    },
};
var g2 = {
    title: "Title2",
    loop: false,
    path: ["a1.png", "b2.png", "c3.png"],
    item: 15,
    drag: function () {
        console.log("Title: ".concat(this.title, ",  Quantity ").concat(this.item));
    },
};
