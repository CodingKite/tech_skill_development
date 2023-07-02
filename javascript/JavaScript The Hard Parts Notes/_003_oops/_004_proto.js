function multiplyBy2(num){
  return num * 2;
}

multiplyBy2.stored = 4;
multiplyBy2(3);

console.log(multiplyBy2.stored);
console.log(multiplyBy2.prototype);
console.log(multiplyBy2.prototype.toString());