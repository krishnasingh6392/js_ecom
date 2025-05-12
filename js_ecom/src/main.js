const container = document.getElementById("products-container");
fetch("../api/products.json")
  .then((res) => res.json())
  .then((data) => {
    const cards = data.map((product) => {
      return `
        <div class="cards bg-slate-100 h-auto w-72 rounded-md m-4 shadow-md">
          <img src="${
            product.image
          }" class="h-40 w-40 mx-auto px-2 py-4" alt="${product.name}" />
          <p class="text-2xl font-semibold ml-2">${product.name}</p>
          <div class="ml-2 text-xs">
            ${'<i class="fa-solid fa-star text-amber-400 text-xs"></i>'.repeat(
              5
            )}
          </div>
          <p class="text-xs p-2 text-justify">${product.description}</p>
          <div class="flex items-center ml-2">
            <i class="fa-solid fa-indian-rupee-sign text-xs mr-1"></i>
            <p>${product.price}</p>
          </div>
          <div class="flex items-center ml-2 mt-1">
            <p class="text-sm">Total Stocks Available: <span>${
              product.stock
            }</span></p>
          </div>
          <div class="flex justify-between items-center bg-slate-300 gap-10 mt-2 text-sm rounded-md m-2 px-2 py-1">
            <div>Quantity (Pieces)</div>
            <div class="flex gap-4 items-center">
              <div><i class="fa-solid fa-plus cursor-pointer"></i></div>
              <div>1</div>
              <div><i class="fa-solid fa-minus cursor-pointer"></i></div>
            </div>
          </div>
          <div class="flex justify-center gap-1 items-center bg-black text-white mt-2 p-2 rounded-b-md cursor-pointer">
            <i class="fa-solid fa-cart-shopping"></i>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    });
    container.innerHTML = cards;
  });

const box = document.getElementById("box");
const names = ["krishna singh", "gopala singh", "anugya singh"];
names.forEach((name) => {
  const para = document.createElement("p");
  para.textContent = name;
  box.appendChild(para);
});
