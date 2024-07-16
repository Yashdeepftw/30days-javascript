// Day 4
// Task 1
for(let i=1;i<=10;i++)
{
    console.log(i);
}

// Task 2
let n=5;
for(let i=1;i<=10;i++)
{
    console.log(n,"X",i,"=",(n*i));
}

// Task 3
let i=1
let result=0;
while(i<=10)
{
    result=result+i;
    i++;
}
console.log(result);

// Task 4
let y=10;
while(y>0)
{
    console.log(y);
    y--;
}

// Task 5
let q=1;
do
{
    console.log(q);
    q++;
}
while(q<=5);

// Task 6
let x=5;
let r=1;
do
{
    r=r*x;
    x--;
}
while(x>0);
console.log(r);

// Task 7
for(let i=1;i<=5;i++)
{
    let s='';
    for(let j=0;j<i;j++)
    {
        s+='*';
    }
    console.log(s);
}

// Task 8
for(let i=1;i<11;i++)
{
    if(i==5)
    {
        continue;
    }
    else
    {
        console.log(i);
    }
}

// Task 9
for(let i=1;i<11;i++)
{
    if(i==7)
    {
        break;
    }
    else
    {
        console.log(i);
    }
}