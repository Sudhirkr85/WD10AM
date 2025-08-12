let ob = {
  name: "Sudhir",
  id: 1,
  ar: [10, 20, 30],
};

console.log(ob);

let JSONObject=JSON.stringify(ob)


console.log( JSONObject);

let obj=JSON.parse(JSONObject)

console.log(obj)

