// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "new class"));

let div = document.querySelector("div");

div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";
// div.style.visibility = "hidden";

div.style.fontSize = "26px"

div.innerText = "Hello!"

// Insert Elements
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);

let div = document.querySelector("div");
div.prepend(newBtn);

let div = document.querySelector("div");
div.before(newBtn);

let div = document.querySelector("div");
div.after(newBtn);


let p = document.querySelector("p");
p.after(newBtn);


let newHeading = document.createElement("h1");
 newHeading = h1.innerHtml = "<i>Hi, i am new!</i>"; 

document.querySelector("body").prepend(newHeading);


let para = document.querySelector("p");
para.remove();