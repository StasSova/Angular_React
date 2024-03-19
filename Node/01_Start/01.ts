// npm install -g typescript
// tsc 01.ts
// tsc --init
let x = 5;

let num: number = 10;
num = 10;
// num = "afds"; // error
let mess: string = "Message";

let type: any;
type = "4";
type = 4;
type = 13;

let arr: number[] = [1, 2, 3];
let arrStr: string[] = ["a", "b", "c"];

let arr2: [number, boolean, string] = [1, true, "asdf"];

// functions
function getSizeImage(): number {
  return 1;
}

const getOffset = (): number => {
  return 300;
};

const getOffset2 = (): number => 300;

function print1111(title: string): void {
  console.log(title);
}

const printLog = (title: string): void => {
  console.log(title);
};

print1111("title");
printLog("title");

function print2(
  title: string, // required
  datePost: number = 234242, // default
  sender?: string // additional, not required
): void {}

function sum(x: number, y: number): number {
  return x + y;
}
let op: (x: number, y: number) => number;
op = sum;
console.log(op(2, 4)); // 6

// Object

let student: {
  name: string;
  age: number;
  lessons: string[];
  move: () => void;
} = {
  name: "Ben",
  age: 22,
  lessons: ["JS", "SEO", "Angular"],
  move(): void {
    console.log("move");
  },
};

type Student = {
  name: string;
  age: number;
  lessons: string[];
  print23: () => void;
};

let st: Student = {
  name: "a",
  age: 2,
  lessons: ["a", "b"],
  print23() {
    console.log("hello world");
  },
};

type Gallery = {
  title: string;
  loop: boolean;
  item: number;
  path: string[];
  drag: () => void;
};

let g1: Gallery = {
  title: "Title1",
  loop: false,
  path: ["a.png", "b.png", "c.png"],
  item: 123,
  drag() {
    console.log(`Title: ${this.title},  Quantity ${this.item}`);
  },
};

let g2: Gallery = {
  title: "Title2",
  loop: false,
  path: ["a1.png", "b2.png", "c3.png"],
  item: 15,
  drag() {
    console.log(`Title: ${this.title},  Quantity ${this.item}`);
  },
};
