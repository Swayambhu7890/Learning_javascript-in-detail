console.log("Hello Sarthak");

// 1)for loop :-

//print 1 to 5
for (let count = 1; count <= 5; count++)
{
    console.log("Hello sahil");   //5 excecute
}
console.log("loop has ended");

//calculate sum of 1 to 5
let sum = 0;
let n = 5;
for (let i = 1; i <= n; i++)
{
    sum = sum + i;                 //0+1=1  , 1+2=3 , 3+3=6 , 6+4=10 , 10+5=15
}
console.log("sum = ",sum);


//print i 5 times
for (let i = 1; i <= 5; i++)                 //it  defines inside block scope so it will work within that block and die after block outside for loop
{                                             //in var it will work globally
    console.log("i = ",i);   //5 excecute
}

// console.log(i);





