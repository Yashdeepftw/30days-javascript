// Day 1
// Task 1
let name='human';
let age=101;
let human=`name is ${name} and age is ${age}`;
console.log(human);

// Task 2
let mul=`hello this side a human \nwho is 101 year old`;
console.log(mul);

// Task 3
let arr=[1,2,3,4];
let [v1,v2,v3,v4]=arr;
console.log(v1,v2,v3,v4);

// Task 4
let book=
{
    title:'life is easy',
    author:'unknown'
};
let info={title,author}=book;
console.log(info);

// Task 5
let arr1=['first','second','third'];
let arr2=[...arr1,'1','2',3];
console.log(arr2);

// Task 6
function sum(...n)
{
    return n.reduce((total,num)=>total+num);
}
console.log(sum(1,2,3,4));

// Task 7
function pro(a,b=1)
{
    return a*b;
}
console.log(pro(10));
console.log(pro(10,2));

// task 8
let name1="alice";
let age2=19;
const obj=
{
    name1,
    age2,
    info1()
    {
        console.log(`hello my name is ${name1} and my age is ${age2}`);
    }
};
console.log(obj);

// Task 9
let key='age';
const obj2=
{
    name2:'luke',
    [key]:20,
    height:5.4
};
console.log(obj2);