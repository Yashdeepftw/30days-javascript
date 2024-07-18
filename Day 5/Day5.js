// Day 5

// Task 1
function check(n)
{
    if(n%2==0)
    {
        console.log("Even");
    }
    else
    {
        console.log("Odd");
    }
}
let n=5;
check(n);

// Task 2
function sqr(i)
{
    // console.log("Square is :  ",n**n);
    return i**2;
}
console.log(sqr(n));

// Task 3
const max=function(a,b)
{
    if(a===b)
    {
        return console.log("Both are eqaul");
    }
    else if(a>b)
    {
        return console.log("A is Greater");
    }
    else
    {
        return console.log("B is Greater");
    }
};
console.log(max(10,5));

// Task 4
const con=function(str1,str2)
{
    return str1+str2;
};
console.log(con('string','name'));

// Task 5
const sum=(a,b)=>
{
    return a+b;
};
console.log(sum(1,3));

// Task 6
const checkstr=(str,key)=>
{
    return str.includes(key);
};
console.log(checkstr('key','h'));

// Task 7
function pro(a,b=2)
{
    return a*b;
}
console.log(pro(10,));

// Task 8
function greet(name,age=20)
{
    return 'hello '+name+' '+age
}
console.log(greet('yashdeep'));

// Task 9
function num1()
{
    console.log("Fundtion is called");
}
const hfunc1=(num,rt)=>
{
    for(let i=0;i<rt;i++)
    {
        num1();
    }
};
hfunc1(num1,3);

// Task 10
const hfunc2=(func1,func2,v)=>
{
    let r=func1(v);
    console.log(func2(r));
}
function func1(a)
{
    return a+1;
}
function func2(a)
{
    return a+1;
}
hfunc2(func1,func2,10);
