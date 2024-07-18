// Day 6
// Task 1
let arr=[1,2,3,4,5];
console.log(arr);

// Task 2
console.log(arr[0]);
let r=arr.length-1;
console.log(arr[r]);

// Task 3
arr.push(82);
console.log(arr);

// Task 4
arr.pop();
console.log(arr);

// Task 5
arr.shift();
console.log(arr);

// Task 6
arr.unshift(1);
console.log(arr);

// Task 7
let double=arr.map(arr=>arr*2);
console.log(double);

// Task 8
let even=arr.filter(arr=>arr%2===0);
console.log(even);

// Task 9
let sum=arr.reduce(arr=>arr+arr);
console.log(sum);

// Task 10
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

// Task 11
arr.forEach(element => 
{
    console.log(element);
}
);

// Task 12
let arr2d=
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(arr2d);

// Task 13
console.log(arr2d[1][1]);