function addItem() {
  let inputValue = document.getElementById("inputItem").value;
  let inputDate = document.getElementById("inputDate").value;

  let ul = document.querySelector(".listItem");

  ul.innerHTML += `<li><span>${inputValue}</span><span>${inputDate}</span> <button onclick="deleteItem(this)">Delete</button></li>`;
}

function deleteItem(abc) {
  let li = abc.parentNode;
  let ul = document.querySelector(".listItem");

  ul.removeChild(li);
}
