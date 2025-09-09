async function getData() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length !== 0)
    document.querySelector(".bag-count").textContent = cart.length;
  let res = await fetch("https://dummyjson.com/products");
  let productsData = await res.json();
  let data = productsData.products;

  let cartData = data.filter((item) => cart.includes(item.id));

  let products = document.querySelector(".products");

  let items = ``;

  let totalMRP = 0;
  cartData.forEach((item) => {
    items += ` <div class="product">
          <img
            src="${item.thumbnail}"
          />
          <div class="item-details">
            <h3>${item.title}</h3>
            <h4>${item.description}</h4>
            <div class="product-price">
              <span>${item.price}</span>
              <span>(${item.discountPercentage}%)</span>
            </div>
          </div>
          <i class="fa-solid fa-xmark" data-id="${item.id}"></i>
        </div>`;
    totalMRP += item.price;
  });

  products.innerHTML = items;

  document.querySelector(".total-mrp").innerHTML = totalMRP;

  document.querySelector(".total-amount").innerHTML = (totalMRP + 20).toFixed(2) ;

  const buttons = document.querySelectorAll(".fa-xmark");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let id = Number(button.getAttribute("data-id"));

      cart = cart.filter((i) => id != i);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cart);
      getData();
    });
  });
}

getData();
