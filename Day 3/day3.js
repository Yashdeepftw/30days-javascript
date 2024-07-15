// Day 3
// Task 1
let a,b;
a=10;
b=2;
if(a>0)
{
    console.log("number is Positive");
}
else if(a<0)
{
    consol.log("a is negative");    
} 
else 
{
    console.log("a is zero");
}

// Task 2
let age=20;
if(age>=18)
{
    console.log("eligible to vote");
}
else
{
    console.log("Not eligible to vote");
}

// Task 3
let c = 30;

if(a > b)
{
    if(a > c)
    {
        console.log("a is greater");
    }
    else
    {
        if(b > c)
        {
            console.log("B is greatest");
        }
        else
        {
            console.log("C is greatest");
        }
    }
}
else
{
    if(b > c)
    {
        console.log("B is greatest");
    }
    else
    {
        console.log("C is greatest");
    }
}

// Task 4
let date=5;
switch (date)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong date");
}

// Task 5
let marks=54;
switch (true)
{
    case (marks>60):
        console.log("Grade-> D");
        break;
    case (marks>70):
        console.log("Grade-> C");
        break;
    case (marks>80):
        console.log("Grade-> B");
        break;
    case (marks>90):
        console.log("Grade-> A");
        break;
    default:
        console.log("Lower Grade");
}

// Task 6
let num=3;
let result=(num%2==0)?"Even":"Odd";
console.log(result);

// Task 7
let year=1990;
let leap=(year%4==0 && year%100==0 || year%400==0)?"Leap Year":"Not a leap year";
console.log(leap);