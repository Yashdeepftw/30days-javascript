// Feature Request
// number 1
// script to log both values and type of data-types
let x=30;

// string
let s='hello';

// boolean
let b=false;

// array
let arr=["hello","bye","namaste"];
// object
let place=
{
    temp:'56',
    altitude:150,
    rain:false,
};
console.log(typeof x);
console.log(x);
console.log(typeof s);
console.log(s);
console.log(typeof b);
console.log(b);
console.log(typeof arr);
console.log(arr);
console.log(typeof place);
console.log(place);
console.log(typeof place.temp);
console.log(place.temp);
console.log(typeof place.rain);
console.log(place.rain);
console.log("-----------------------------------------------------");
// Number 2
// script to show the difference between 'let' and 'const' when reassignment comes
let age=35;
console.log(age);
age=39;
console.log(age);
const year=2004;
console.log(year);
year=2024;
console.log(year);