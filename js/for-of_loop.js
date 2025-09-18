//4)for-of loop
let str = "Javascript";


let size = 0;                          // intially size = 0;  // val is value that is variable
for (let val of str) {                //iterator --> characters
    console.log("val = ",val);
    size++;                         // to calculate string size
}
console.log("string size = ",size);  //10


// 5)for-in loop

let student = {                      //student is declared as object
    name: "Rahul Kumar",
    age:  20,
    cgpa: 7.5,
    isPass: true
};

for(let  key in student){
    console.log("key = ",key ,"value=",student[key]);        //it will always return key value
}