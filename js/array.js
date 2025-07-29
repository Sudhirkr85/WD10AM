// let ar=[10,20,3,4,5];

// console.log(ar[0]);

// let ar=new Array(5);
// ar[0]=15;

// console.log(ar);

// let arr = Array.of(1, 2, 3, 4, 5);

// console.log(arr);

// let str="Sudhir";

// let ar=Array.from(str)

// console.log(ar);

// let ar1=[100,200,300]

// let ar2=[10,20,30]

// let ar=[ar1,ar2]

// console.log(ar);

// let ar = [100, 200, 300];

// ar.push(15, 50, 90);

// // console.log(ar);

// // ar.pop();
// // ar.pop();
// console.log(ar);

// // ar.shift();

// ar.unshift(10,20)
// console.log(ar);

// let ar1=[100,200,300]

// let ar2=[10,20,30]

// let ar= ar1.concat(ar2)

// let ar= ar1.concat([50,90,70])

// console.log(ar);

// let ar = [10, 20, 30];

// ar.forEach(function fn(item) {
//   console.log(item);
// })

// ar.forEach( item =>console.log(item))

//  ar.forEach(function fn(item,i,arr) {
//    console.log(arr);
//  })

// ar.forEach((item, i, arr) => console.log(item +" "+ i+ " "+ arr));

let ar = [10, 20, 30];

let newArr = ar.map((item) => item * 3);

// let newArr = ar.map((item) => {
//   return item * 2;
// });

console.log(newArr);
