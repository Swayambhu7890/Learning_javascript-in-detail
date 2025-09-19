// string methods:-

// 1)Uppercase
let str = "swayambhu";
console.log(str);
console.log(str.toUpperCase());


// OR
let str3 = "swayambhu";
let newstr3 = str3.toUpperCase();
console.log(str3);
console.log(newstr3);

//OR
let str4 = "swayambhu";
 str4 = str4.toUpperCase();
console.log(str4);


// 2)Lowercase
let str1 = "SWAYAMBHU";
console.log(str1);
console.log(str1.toLowerCase());

//3)Trim
let str5 = "     Apna College Js    ";
console.log(str5.trim());

//4)Slice
let str6 = "012345678";              // as 3 is non inclusive
console.log(str6.slice(1,6));


//Eg 2)
let str7 = "Hello";              // as l is non inclusive
console.log(str7.slice(0,3));
console.log(str7.slice(4));


//5)Concatenation
let str8 = "Apna";
let str9 = "College";

let res = str8.concat(str9);
// let res = "I am learning coding from" + str8 + str9;
// let res = "hello" + 123;
console.log(res);

//6)Replace
let str10 = "hellololo";

console.log(str10.replace("h","y"));
console.log(str10.replace("lo","p"));
console.log(str10.replaceAll("lo","p"));


//7)Character at method
let str11 = "ILoveJS";
console.log(str11.charAt(3));    //v


// let str = "ILoveJS";
// str =  str.replace("I", "S");
// console.log(str);  //SLoveJS     / so we can use replace method 

