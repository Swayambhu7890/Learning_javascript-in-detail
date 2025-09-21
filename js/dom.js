console.log("Hello!");
alert("Hello!");

console.dir(document.body);
console.log(document.body);
console.log(document.head);

console.dir(document.body.childNodes[1]);


// on console write
// document.body.style.background = "green";

document.body.childNodes[1].innerText = "abcd";


//Dom Manipulation:-
// 1)Selecting with id
let heading = document.getElementById("heading");  //h1  #(id)--> it should be unique
console.dir(heading);

//2) Selecting with class
let headings = document.getElementsByClassName("headings");
console.dir(headings);
console.log(headings);

//3) Selecting with tag
let parahs = document.getElementsByTagName("p");
console.log(parahs);

//4) Query Selector
let firstEl = document.querySelector("p");  // returns 1st element
console.dir(firstEl);

// for all elements
let allEl = document.querySelectorAll("p");  // returns all the Node list.
console.dir(allEl);


//first child
console.dir(document.body.firstChild);

//last child
console.dir(document.body.lastChild);

 let el1 = document.querySelector("div");
console.log(el1);

let div = document.querySelector("div");
console.dir(div);

// on console write
//div.innerText

// on console write
//div.innerHtml

// on console write
//div.innerText = "abcd";











