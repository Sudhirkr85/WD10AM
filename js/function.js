//Function

// sum(10, 20);

// function sum(a, b) {
//   console.log(a + b);
// }

// function subs(x, y) {
//   console.log(x - y);
// }

// subs(50, 30);

// checkNumberOddAndEven(50)

// function checkNumberOddAndEven(n) {
//   if (n % 2 == 0) {
//     console.log("Number is Even");
//   } else {
//     console.log("Number is Odd");
//   }
// }

// function checkNumberOddAndEven(n) {
//   if (n % 2 !=0) {
//     console.log(n+" is Odd");
//   } else {
//     console.log(n+" is Even");
//   }
// }
// checkNumberOddAndEven(15)

// checkNumberOddAndEven(50)

// let a=10;
// let b=20;
// let c =a+b
// console.log("a="+a);

// console.log(a + " + "+ b + "  = "+ c);

// console.log(`${a} +  ${b} = ${c}`);

// console.log(`Sum of ${a} and ${b} =${c}`)

// console.log("Sum of "+ a+ "and" + b +" = "+c)

// function sum(a=0, b=0) {
//   console.log(a + b);
// }

// sum(10, 20, 30,50);
// sum()

// function sum(...a){
//     console.log(a);

// }

// sum(10,20,30)

// function sum() {
//   console.log(arguments[0]);
// }

// sum(10, 20, 30);

// function sum( a=0,b=0){
//      console.log(a)
//      console.log(b)
//      console.log(arguments)
// }

// sum(15.5,'Sudhir',60)

// function fn1(x) {
//   console.log(x);
// }

// let a=10
// let b=a;
// fn1(a)
// console.log(fn1)
// fn1(b)

// let a=fn1;

// fn1(10)
// a(10)

// function fn1() {
//   console.log("fn1 calls");
//   return 10
// }

// let a = fn1;

// function fn2(x) {
//   console.log(x);

// }

// fn2(fn1)

// function prime(n) {
//   if (n == 1) return false;
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// for (let i = 1; i <= 100; i++) {
//   if (prime(i)) {
//     console.log(i);
//   }
// }

// function area(a, b) {
//   if (b == undefined) {
//     let area = (22 / 7) * a * a;
//     console.log("Area of Circle =" + area);
//   } else {
//     let area = a * b;
//     console.log("Area of Rectangle =" + area);
//   }
// }

// area(7,5);

// console.log(22/7);

// let a = 10;
// var b = 45;
// if (true) {
//   let a = 45;
//   var b = 40;
//   console.log(b);
// console.log(a);
// }
// console.log(b);
// console.log(a);

// let fn = function sum(a, b) {
//   console.log(a + b);
// };

// let fn=sum;

//Function Expreasion
// let sum=function (a, b) {
//   console.log(a + b);
// }

//Arrow Function
// let sum = (a, b) => {
//   console.log(a + b);
// };
// sum(10, 50);

// const fn = () => {
//   console.log("Welcome");
// };

// fn();

// let sum = (a, b) => a + b;

// console.log(sum(10, 20));

// function operation(fn) {
//   let s = fn(10, 50);
//   console.log(s);
// }
// operation(sum);


// function outer() {
  
//     function inner(){
//         console.log("inner function")
//     }
//   return inner;
// }

// outer()()


