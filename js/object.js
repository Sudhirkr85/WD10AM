// let s1 = {
//   name: "Sudhir",
//   roll: 1,
//   city: "Gurgaon",
//   ar:[10,20,30]
// };

// let name=s1.name;

// let name=s1["name"];

// let { name, roll, city } = s1;

// console.log(name);

// console.log(roll);

// console.log(city);

// s1.roll=15
// console.log(s1.city);

// delete s1.city;

// console.log(s1.city);

// s1.mobile=788465;

// console.log(s1.mobile)

// let ar=[10,s1,{
//     a:10,
//     b:60
// }]

// let [a,b,c]=ar;

// console.log(b);

// let arr = [
//   10,
//   {
//     name: "Sudhir",
//     ar: [
//       200,
//       {
//         x: 56,
//       },
//     ],
//   },
// ];

// let z=arr[1].ar[0].x

// console.log(z);

let ob = {
  name: "Sudhir",
  showName: function () {
   
    console.log(this.name);
  },
};

ob.showName()
