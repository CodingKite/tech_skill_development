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
- "reduce" methods take two parameter an callback function and an initial value.
- If the initial value is not passed it consider the first element of the array as initial value
*/

















