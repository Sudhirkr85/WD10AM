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

// let ar = [10, 20, 30,5,15];

// let newArr = ar.map((item) => item * 3);

// let newArr = ar.map((item) => {
//   return item * 2;
// });

// console.log(newArr);

// let newAr=[];

// for(let i=0;i<ar.length;i++){
//     if(ar[i]%2==0){
//         newAr.push(ar[i]);
//     }

// }

// console.log(newAr);

// let ar = [10, 20, 30, 5, 15, 0];

// let sum=ar[0];

// for(let i=1;i<ar.length;i++){
//     sum+=ar[i];
//     console.log(sum);

// }

// let newAr = ar.filter(item => item % 2 == 0);

// console.log(newAr);

// let sum=ar.reduce((ac,item)=>{
//     console.log(ac+ " "+ item);
//        return ac+item;
// })

// let sum = ar.reduce((sum, item) => sum + item);

// let ar = [10, 20, 30, 5, 15, 10];

// let a=ar.find(item=>{
//     return item %2==0;
// })

// console.log(a);

// console.log(ar.indexOf(10));
// console.log(ar.lastIndexOf(10));
// console.log(ar.includes(10));

// function fn(x, y) {
// //   console.log(x+" "+y);
//     if(x>y) return 1;
//     else if(x<y) return -1;
//     else return 0;
// }

// let ar = [1, 15, 3, 6, 0, 6];

// console.log(ar);

// let sortedArray = ar.sort((a, b) => {
//   if (a > b) return -1;
//   else if (a < b) return 1;
//   else return 0;
// });

// console.log(sortedArray);



// console.log(ar.reverse());


// let newAr=ar.slice(2,4)
// console.log(newAr);


// let newAr=ar.splice(2,0,100)

// console.log(ar);


let ar = [1, 15, 3, 6, 0, 6];

//   let s=ar.join(" ")

//   console.log(s);

// console.log(ar.fill(0,2,4));

  

// console.log(ar.find((i)=> i>5));
// console.log(ar.some((i)=> i>50));
// console.log(ar.every((i)=> i>=0));