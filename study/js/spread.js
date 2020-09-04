var maxValue = Math.max(10, 12, 0, 99, -4, 56);
console.log("maxValue = " + maxValue);

var myObj = {};

Object.assign(myObj,{a:4, b:4, c: 5}, {m:20, n:25, o:40}, {a:-1});
console.log(myObj);


function sumOne (a, b){
return a+b;
}

function sumTwo(...args){
    console.log(args);
  let sum = 0;
  for (const arg of args){
      sum += arg;
  }
  return sum;
}

function productAndSum(a, b, ...args){
    console.log(args);
let product = a * b;


  let sum = 0;
  for (const arg of args){
      sum += arg;
  }
  return [product, sum];
}


var myA = [15,25];
console.log(sumOne(5,6));
console.log(sumOne(5,6, 10));
console.log(sumOne(...myA));

var myAa = [15,25, 50, 10];
console.log(sumTwo(...myAa));

console.log("productAndSum = " + productAndSum(...myAa));
