async function getData() {
  let res = await fetch("https://dummyjson.com/products");
  let productsData = await res.json();
  let data = productsData.products;
  onLoad(data);

  function onLoad(data) {
    let products = document.querySelector(".products");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length !== 0)
      document.querySelector(".bag-count").textContent = cart.length;
    let items = ``;
    data.forEach((item) => {
      items += `
       <div class="product">
        <img
          src="${item.thumbnail}"
        />
        <div class="product-details">
          <h3>${item.title}</h3>
          <h4>${item.description}</h4>
          <div class="product-price">
            <span>${item.price}</span>
             <span>(${item.discountPercentage}%)</span>
          </div>
          <button class="add-to-bag" data-id="${item.id}" >Add Bag</button>

        </div>
      </div>`;
    });

    products.innerHTML = items;

    const buttons = document.querySelectorAll(".add-to-bag");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        let id = Number(button.getAttribute("data-id"));

        if (!cart.includes(id)) {
          cart.push(id);
          document.querySelector(".bag-count").textContent = cart.length;
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
    });
  }
}

getData();
