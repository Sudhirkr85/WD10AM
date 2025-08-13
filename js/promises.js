// new Promise((resolve, reject) => {
//   let f = false;
//   if (f) {
//     resolve("Promise Solved");
//   } else {
//     reject("Promise Rejected");
//   }
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => console.log(e));

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => console.log(e));

// let promise1 = fetch("https://dummyjson.com/recipes");

// let promise2 = promise1.then((response) => {
//   if (response.status == 200) {
//   return  response.json();
//   }
// });

// promise2.then((data) => {
//   console.log(data.recipes);
// });

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    // for (let i = 0; i < data.recipes.length; i++)
    //   console.log(data.recipes[i].image);

    data.recipes.forEach((recipe) => {
      console.log(recipe.image);
    });
  });



