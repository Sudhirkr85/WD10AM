let products = document.querySelector(".products");

let data = [
  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/110/110/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=80",
    title: "Armani Exchange",
    discription: "Men Analogue Watch",
    o_price: 999,
    d_price: 1999,
    discount: 30,
  },
  {
    id: 2,
    image:
      "https://rukminim2.flixcart.com/image/110/110/xif0q/projector/q/7/6/i9-pro-10-ei9027-led-projector-egate-original-imah5e3bggu5qcgp.jpeg?q=80",
    title: "Armani Exchange",
    discription: "Men Analogue Watch",
    o_price: 999,
    d_price: 1999,
    discount: 30,
  },
  {
    id: 3,
    image:
      "https://rukminim2.flixcart.com/image/110/110/xif0q/monitor/e/m/s/sa272-p1-full-hd-27-2025-um-hs2si-101-acer-original-imahey8jdh87j8kg.jpeg?q=80",
    title: "Armani Exchange",
    discription: "Men Analogue Watch",
    o_price: 999,
    d_price: 1999,
    discount: 30,
  },
  {
    id: 4,
    image:
      "https://rukminim2.flixcart.com/image/110/110/xif0q/dslr-camera/8/q/r/compact-camera-portable-small-point-and-shoot-digital-camera-for-original-imahec6vcssf4hzg.jpeg?q=80",
    title: "Armani Exchange",
    discription: "Men Analogue Watch",
    o_price: 999,
    d_price: 1999,
    discount: 30,
  },
  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/110/110/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=80",
    title: "Armani Exchange",
    discription: "Men Analogue Watch",
    o_price: 999,
    d_price: 1999,
    discount: 30,
  },
  {
    id: 2,
    image:
      "https://rukminim2.flixcart.com/image/110/110/xif0q/projector/q/7/6/i9-pro-10-ei9027-led-projector-egate-original-imah5e3bggu5qcgp.jpeg?q=80",
    title: "Armani Exchange",
    discription: "Men Analogue Watch",
    o_price: 999,
    d_price: 1999,
    discount: 30,
  },
  {
    id: 3,
    image:
      "https://rukminim2.flixcart.com/image/110/110/xif0q/monitor/e/m/s/sa272-p1-full-hd-27-2025-um-hs2si-101-acer-original-imahey8jdh87j8kg.jpeg?q=80",
    title: "Armani Exchange",
    discription: "Men Analogue Watch",
    o_price: 999,
    d_price: 1999,
    discount: 30,
  },
  {
    id: 4,
    image:
      "https://rukminim2.flixcart.com/image/110/110/xif0q/dslr-camera/8/q/r/compact-camera-portable-small-point-and-shoot-digital-camera-for-original-imahec6vcssf4hzg.jpeg?q=80",
    title: "Armani Exchange",
    discription: "Men Analogue Watch",
    o_price: 999,
    d_price: 1999,
    discount: 30,
  },
];

let items = ``;
data.forEach((item) => {
  items += `
         <div class="product">
          <img
            src="${item.image}"
          />
          <div class="product-details">
            <h3>${item.title}</h3>
            <h4>${item.discription}</h4>
            <div class="product-price">
              <span>${item.o_price}</span>
              <span class="d-price">${item.d_price}</span>
              <span>(${item.discount}%)</span>
            </div>
            <button class="add-to-bag" onclick="addToCart()">Add Bag</button>
           
          </div>
        </div>`;
});

products.innerHTML = items;

function addToCart() {
  let countitem = document.querySelector(".bag-count");
  let count = countitem.textContent;
  countitem.textContent = ++count;
}
