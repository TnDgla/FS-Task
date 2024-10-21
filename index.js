function first()
{
    console.log("Hello");
}
first();
first.call();
function second(x, y, z=10)
{
    console.log(x+y+z);
}
second(5,6);
function third(x,y)
{
    console.log(x-y<0);
}
third(8,"4");
function fourth(x,y)
{
    console.log(x+y);
}
fourth(2,"5");
const arrow = ()=>{
    console.log("hello");
}
arrow();
const arrow1 =(a,b)=>console.log(a+b);
arrow1(5,5);
const arrow2 = (a,b)=> a<b;
console.log(arrow2(2,3));


function higher(fun)
{
    console.log("higher");
    let a=10;
    let ans=another(a);

    return a;
}
function another(x)
{
    console.log(x);
    return `this is ${x}`;
}
console.log(higher(another(5)));

function high()
{
    console.log("high");
    function sum()
    {
        return 5+5;
    }
    return sum;
}
const ans2=high();
console.log(ans2());

function high2()
{
    console.log("high2");
    return function()
    {
        return 5+5;
    };
}
const ans3=high2();
console.log(ans3());


function high3()
{
    console.log("high4");
    return (a,b)=>
    {
        return a+b;
    };
}
const ans4=high3();
console.log(ans4(5,7));

function fun() // Explanation if this function is important
{
    let a=10;
    return ()=>
    {
        return a++;
    }
}
const test=fun();
console.log(test);
console.log(test());
console.log(test());
console.log(test());

// Closure - 
// Lexical Environment - It stores all the variables which are declare in higher order function.

function test1()
{
    let a=20;
    let b=10;
    return ()=>{
        return (++a )+ b;
    }
}
result = test1();
console.log(result());
console.log(result());
console.log(result());
console.log(result());

// Call back functions - A function which is passed as a parameter or returned bt a function.

function fun2(a,b,fun)
{
    let ans= a+b;
    return fun(ans);
}
function cb(sum)
{
    return ("the sum is",sum);
}
let sol=fun2(5,10,cb);
console.log(sol);

//for each loop - loop through array and pass each element in call back function.

let arr =[1,2,3,4,5,6,7,8,9];
function cb2(a)
{
    console.log(a);
}
arr.forEach(cb2);

arr.forEach((a)=>{console.log(a*a);})


// Map, filter, reduce, find, Some

// Map - returns a new modified array based on call back function

let a=[1,2,3,4,5,6,7,8,9,10];

function square(x)
{
    return x*x;
}
let squareArr = a.map(square);
console.log(squareArr);

const mapOverview = (arr,fun) =>
{
const sq=[];
for(let ele of a)
{
    sq.push(square(ele));
}
return sq;
}

function cube(x)
{
    return x*x*x;
}
console.log(mapOverview(a,square));
console.log(a.map(cube))

let y=5;
const newArr = a.map((x,y)=>{
    return x*y;
})
console.log(newArr);

// Filter - Accepts a call back function (boolean) and push the element only if the call back function return true;

function odd(x)
{
    return x%2;
}

let oddArr = a.filter(odd);
console.log(oddArr);

let aa=[1,2,3,4,5];
function x(aa){
    for (let index = 0; index < aa.length; index++) {
        console.log(aa[index]);
    }
    
}
x(aa);

