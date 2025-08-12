new Promise((resolve, reject) => {
  let f = false;
  if (f) {
    resolve("Promise Solved");
  } else {
    reject("Promise Rejected");
  }
})
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e));

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => console.log(e));
