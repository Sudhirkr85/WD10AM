// class Student {
//   roll = 1;
//   name = "Sudhir";

//   show() {
//     console.log(this.name);
//     console.log(this.roll);
//   }
// }

// let s = new Student();

// s.show();

// Data Hiding
// class Student {
//   #roll = 1;
//   #name = "Sudhir";

//   show = () => {
//     console.log(this.#name);
//     console.log(this.#roll);
//   };
// }

// let s = new Student();

//  console.log(s.#roll);
//  s.show();

class Student {
 
  constructor(roll, name) {
    this.roll = roll;
    this.name = name;
  }
  
  show = () => {
    console.log(this.name);
    console.log(this.roll);
  };
}

// let s = new Student(1,"Sudhir");
let s = new Student();
s.show()