let text = "The area of a circle given the radius";
let text2 = " (m) is ";
let text3 = " ( m2)";
console.log("Area of a circle");
var pi = 3.14;
console.log(typeof pi);
var radius = 5;
console.log(typeof radius);
var area = pi * radius ** 2;
console.log(area);
console.log(`${area} `);
// // Declare a variable named x and assign it with a number of your choice.
// // Write code to log to the console whether x is equal to 0 or a positive/negative
// //  number in an "user-friendly" way. Example 5 is a positive number, 0 is zero.
// // Declare 3 variables named a, b, c, and assign them with values in the range 0
// //  to 99 of your choice. Write code to print out the smallest and biggest number between
// //  them. Example:
// // 4 is the smallest number, and 99 is the biggest number between 4, 6, 99

var x20 = 90;
console.log(`${x20} is positve Number, 0 is zero.`);
// ------------------------------
let smallest = 0;
// 4
let biggest;
var a = 3;
var b = 10;
var c = 99;

if (a < b && a < c) {
  smallest = a;
} else if (b < a && b < c) {
  smallest = b;
} else {
  smallest = c;
}
console.log(smallest);

if (a > b && a > c) {
  biggest = a;
} else if (b > a && b > c) {
  biggest = b;
} else {
  biggest = c;
}
console.log(biggest);

console.log(
  `${smallest} is the smallest number, and ${biggest} is the biggest number between ${a}, ${b}, ${c}`
);

// // bai 5

var x = 1;
var y = 5;

if (x < y) {
  for (let i = 0; i < y - x; i++) {
    console.log(x + i);
  }
} else {
  for (let i = 0; i < x - y; i++) {
    console.log(x - i);
  }
}

// // Bai 6
var a1 = 3;
var a2 = 6;
console.log(((a2 + a1) * (a2 - a1 + 1)) / 2);

// 5
var value = 9876;
sum = 0;

while (value) {
  sum += value % 10;
  value = Math.floor(value / 10);
}

console.log(sum);
function ffun() {
  console.log(`"Wow, it worked!"`);
}
ffun();
function ffun2() {
  return "lalaland";
}
console.log(ffun2());

function ffun3(myname) {
  return "Tina";
}
console.log(ffun3());

var x = 1;
var y = 5;

// 7
function seriesOfNumber(x, y) {
  if (x < y) {
    for (let i = 0; i < y - x; i++) {
      console.log(x + i);
    }
  } else {
    for (let i = 0; i < x - y; i++) {
      console.log(x - i);
    }
  }
}
seriesOfNumber(x, y);

// 7
var a7 = 111;
var b7 = 999;
let temp;

temp = a7;
a7 = b7;
b7 = temp;

console.log(`The value of ${b7} ${a7}after swapping: ${a7} , ${b7}`);
// 8
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.floor(5.8));
console.log(Math.floor(Math.random() * 3));
console.log(-1 * Math.floor(Math.random() * 1));

// 9
function play() {
  a9 = Math.floor(Math.random() * 1);
}

console.log(play());

const randomNumber = 0;
if (randomNumber == 1) {
  console.log("yes");
} else {
  console.log("no");
}
let message = document.getElementById("result");
message.innerHTML = "This is the new text content of result";
