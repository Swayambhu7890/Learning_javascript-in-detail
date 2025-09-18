//string:-
//1)Create a string

let str = "swayambhu";   //on console

//Eg2)
let  str2 ='Pratham';    //on console


// 2) String Length
// str.length= 9,7 write on  console


//3) string indices(Index)
console.log(str[1]); //w 


//Template Literals
let specialstring = `This is a template literal`;
console.log(specialstring);
console.log(typeof specialstring);


//Eg1)
let obj = {
    item : "pen",   //store in object variable
    price : 10,
};

console .log("the cost of", obj.item,"is", obj.price,"rupees");

//OR

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);


//Eg 2) to add numbers in Template literals
let specialstring1 = `This is a template literal ${1+2+3}`;
console.log(specialstring1);



//Escape characters (\n to go to next line)
console.log("Apna\nCollege");

// (\t) to Tab space
console.log("Apna\tCollege");

// IF to print length of string
let str3 = "Apna\tCollege"; //12
console.log(str3.length);


