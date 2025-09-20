//for_each loop in arrays
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val)  {  //(val)value at each index
  console.log(val);
});

// In call back function there are 3 parameters
//1) val
let arr1 = ["Pune", "Delhi", "Mumbai"];
arr1.forEach((val) => {  //(val)value at each index
  console.log(val.toUpperCase());
});

//2) idx
let arr2 = ["Pune", "Delhi", "Mumbai"];
arr2.forEach((val, idx) => {  //(val)value at each index
  console.log(val.toUpperCase(), idx);
});

//3) arr
let arr3 = ["Pune", "Delhi", "Mumbai"];
arr3.forEach((val, idx, arr) => {  //(val)value at each index
  console.log(val.toUpperCase(), idx, arr);
});

