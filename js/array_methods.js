// Array Methods
// 1)Push
let fooditems = ["potatao","apples","Tomata","Lichi"];
console.log(fooditems);

console.log(fooditems.push("chips"));
console.log(fooditems);

console.log(fooditems.push("chips","burger","paneer"));
console.log(fooditems);


//2) pop 
let fooditems1 = ["potatao","apples","Tomata","Lichi"];
console.log(fooditems1);

 let deleteditem = fooditems1.pop();
console.log(fooditems1);
console.log("deleted",deleteditem);


// 3)to string
let fooditems2 = ["potatao","apples","Tomata","Lichi"];
console.log(fooditems2);

console.log(fooditems2.toString());
console.log(fooditems2);

let marks = [97,86,54,36];
console.log(marks.toString());

// on console marks. to String()


// 3)concat
let  marvelHeroes = ["thor","spiderman","ironman"];
let dcHeroes = ["superman","batman"];
let indianHeroes = ["shaktiman","Krish"];

 let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
 console.log(heroes);

 // 4) unshift
 marvelHeroes.unshift("antman");
 console.log(marvelHeroes);


//5) shift(to delete from starting)
 let val = marvelHeroes.shift();
 console.log("deleted",val);
 console.log(marvelHeroes);

 //6) slice
 let  marvelHeroes1 = ["thor","spiderman","ironman","antman","Dr.Strange"];
 console.log(marvelHeroes1);
 console.log(marvelHeroes1.slice(1,3));


 //7) splice
 let arr = [1, 2, 3, 4, 5, 6, 7];
 arr.splice(2,2,101,102);
 console.log(arr);

 //  To Add Element add only
 let arr1 = [1, 2, 3, 4, 5, 6, 7];
 arr1.splice(2,0,101);
 console.log(arr1);

 // To delete the element
  let arr2 = [1, 2, 3, 4, 5, 6, 7];
  arr2.splice(3,1);
 console.log(arr2);

 //To Replace an element
 let arr3 = [1, 2, 3, 4, 5, 6, 7];
 arr3.splice(3,1,101);
 console.log(arr3);

 //
 arr3.splice(4);
 console.log(arr3);

 arr3.splice();
 console.log(arr3);





