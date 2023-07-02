/* Video Ideas
- Explain how compiler and V8 iterate over an array (wit differnt and similarlity)
  -  how does the compiler in java iterate over an integer array and how does the v8 engine iterate over an array that contains different type of elments... want to know the logice in memory that is used to iterate
- usage and implementaion of each methods in the array prototype chain

*/

/* Get list of all methods in the Array prototype 
console.log(Object.getOwnPropertyNames(Array.prototype))
[
  "length", "constructor", "at", "concat", "copyWithin", "fill", "find", "findIndex", "findLast", "findLastIndex", "lastIndexOf", "pop", "push", "reverse", "shift", "unshift", "slice", "sort", "splice", "includes", "indexOf", "join", "keys", "entries", "values", "forEach", "filter", "flat", "flatMap", "map", "every", "some", "reduce", "reduceRight", "toLocaleString", "toString", "toReversed", "toSorted", "toSpliced", "with"
]
//   learn the usage and implementaion of each of them
*/





/*
- how they work, diff between them, creating these fxn from scratch(make polyfill from scratch).
- map, filter, reduce all are array methods that are use to iterate an array and perform transformation or computation.
- Each may or may not return an new array based on the result of function.
*/

// ================================================


/*
- "map" method(HOC[takes callback]) creates a new array from existing one by applying the function passed into it(callback function) to each element of the array.
const new_Array = orig_Array.map((each_element, index, orig_Array ) => {
  return each_element * 2
})

// _002_.png
const nums = [1, 2, 3, 4];
const map_Arr = nums.map((ele, index, org_arr) => {
  console.log(ele, index, org_arr)
  return ele * 3;
})
console.log(map_Arr);
*/

// ================================================

/* 
- "filter" methods take each element in the array and applys an conditional statement against it. If the condition returns "true", the element is pushed into the output array else it is not pushed into the array.

const nums = [1, 2, 3, 4];
const filter_Arr = nums.filter((ele, index, org_arr) => {
  console.log(ele, index, org_arr)
  return ele > 2;
})

console.log(filter_Arr)
*/

// ================================================

/* 
- "reduce" method reduces an array of values down to just on value, that is instead of transformation of an array ..here computation happens.
- "map" & "filter" method returns an new array but "reduce" method returns just one value based on the computation done.
- "reduce" methods take two parameter an callback function and an initial value.
- If the initial value is not passed it consider the first element of the array as initial value

const nums = [1, 2, 3, 4, 5]
const value = nums.reduce((prev_val, cur_val, index, array) => {
  console.log(prev_val, cur_val, index, array);
  return prev_val + cur_val
}, 10)

console.log("value : ", value);

*/


// ================================================

//  Polyfill for map
/*
Array.prototype.myMap = function(cb){
  let temp = [];
  for(let i = 0; i < this.length; i++){
    temp.push(cb(this[i],i,this));
  }
  return temp;
}

let arr = [1,2,3,4,5]

let new_arr = arr.myMap((ele)=>{
  return  ele *2
})

console.log(new_arr)

*/

//  Polyfill for filter
/*
Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
}

let arr = [1, 2, 3, 4, 5]

let new_arr = arr.myFilter((ele) => {
  return ele > 2
})

console.log(new_arr)
*/

//  Polyfill for reduce
/*
Array.prototype.myReduce = function(cb, initial_val){
  var accumulator = initial_val;
  for(let i = 0; i< this.length; i++){
    accumulator = (accumulator)? cb(accumulator,this[i],i,this) : this[i]
  }

  return accumulator;
}

let arr = [1, 2, 3, 4, 5]

let new_arr = arr.myReduce((acc,curr,i,arr) => {
  return acc + curr
},0)

console.log(new_arr)
*/


// Map vs forEach
/*
 - map returns an new array & does not modifies the oriinal
 - forEach does not returns anything &  modify the original array
 - we can chain other methods on map wheras that is not possible with forEach
 - arr.map((ele)=> ele * 2).filter((ele) => return ele > 100)


*/

// Question 1
const students = [
  { name: "John Doe", rollNumber: 1, marks: 85 },
  { name: "Jane Smith", rollNumber: 2, marks: 59 },
  { name: "Tom Johnson", rollNumber: 3, marks: 78 },
  { name: "Tim", rollNumber: 4, marks: 35 },
];

// return name of students in capital letters
let arr_new = students.map((obj) => obj.name.toUpperCase())
let arr_new_2 = students.map(({ name }) => name.toUpperCase())
console.log(arr_new, arr_new_2);

// return only details of those who scored more than 60 marks
let arr_marks = students.filter((obj) => obj.marks > 60);
let arr_marks_2 = students.filter(({ marks }) => marks > 60);
console.log(arr_marks, arr_marks_2);

// return only details of those who scored more than 60 marks and roll number greater than 2
let arr_roll = students.filter(({ marks, rollNumber }) => (marks > 60 && rollNumber > 2));
console.log("arr_roll ", arr_roll);

// sum of marks of all of the students
let sum_val = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log("🚀 ~ sum_val:", sum_val);


//returns only the name of the students who scored more thatn 60
// let name_arr = students.filter((obj) => obj.marks > 60).map((obj) => obj.name)
let name_arr = students.filter(({ marks }) => marks > 60).map(({ name }) => name)
console.log("🚀 ~ name_arr:", name_arr);

// return total marks of student with marks greater than 60 after marks 20 have been added to those who score less than 60

let total_marks = students.map((stu) => {
  if (stu.marks < 60) {
    stu.marks += 20
  }
  return stu;
}).filter(stu => stu.marks>60).reduce((acc,curr) => acc + curr.marks, 0);

console.log("total_marks ", total_marks)