// Functions

console.log("hello");

"abc".toUpperCase();

[1, 2, 3].push(4);


// Function
function myFunction() {                        // It tells to do work
    console.log("Welcome to Pune");
    console.log("We are learning JS:");
}
myFunction();
myFunction(); //  It  will do the work by calling a function


//  Function helps us  from Redundancy  --> Repitition


function  myFunction1(msg,n) {  //parameter --> input variable(msg)
    console.log(msg,n);               // to perform operations
}

 myFunction1("I love javascript",100); // argument

 //Function --> 2 numbers, sum
  function sum(x,y) {
     console.log(x + y);
  }
  sum(1,2);
  sum(101,20);


// To return value  Eg 2)
  function sum1(x,y) {             // (x , y) act as a local variable  --> scope(variable kaha tak zinda he)
     s = x + y;
     console.log("Before Return");
     console.log(x);
     return s;
  }
   let val = sum1(3, 4);
   console.log(val);

   // sum function
   function sum2(a, b) {
    return a+b;
   }
 
   // Arrow Function for sum  (part of Modern Javascript)
    const arrowSum = (a, b) => {
    console.log(a + b);
     return a+b;

   };
   arrowSum(3,4);



   // Multiplication function
   function mul(a, b) {  
    return a*b;
   }

   // Arrow Function for Multiplication
   const arrowMul = (a, b) => {
    console.log(a * b);
    return a*b;
   };
   arrowMul(3,4);




   //Array methods using:-  
   // 1)Map
   let nums = [67, 52, 39];

 nums.map((val) => {
    console.log(val);
 });

 //To create an array using Map
 let nums1 = [67, 52, 39];

  let newArr = nums1.map((val) => {
    return val * val;
 });

 console.log(newArr);

 //2)Filter(to check even value)
 let arr = [1, 2, 3, 4, 5, 6, 7];
  let evenArr = arr.filter((val) => {
       return val % 2 === 0;
 });

 console.log(evenArr);

//  3) Reduce
let arr1 = [1, 2, 3, 4];
 const output = arr1.reduce((prev, curr) => {
    return prev + curr;
});
console.log(output);  //10

// Eg 2) To choose which is larger  number
let arr2 = [5, 6, 2, 1, 101, 3];
 const output1 = arr2.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(output1);  //101

  