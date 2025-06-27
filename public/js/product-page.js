import AddToCart from "./AddToCart.js";
import Products from "./Products.js";

const all = document.getElementById("all");
const men = document.getElementById("men");
const women = document.getElementById("women");
const jewelery = document.getElementById("jewelery");
const electronics = document.getElementById("electronics");
const foundProducts = document.getElementById("found-product");

const pro = [...Products()];
//active cttegory
const buttons = [all, men, women, jewelery, electronics];

function setActiveButton(activeBtn) {
  buttons.forEach((btn) => btn.classList.remove("text-primary-color"));
  activeBtn.classList.add("text-primary-color");
}
//initial category
filterProducts(all.id);
setActiveButton(all);

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    filterProducts(e.id);
    setActiveButton(e);
  });
});

function filterProducts(category) {
  const listProduct = document.getElementById("list-product");

  const show =
    category == "all" ? pro : pro.filter((e) => e.category === category);

  if (foundProducts) {
    foundProducts.innerText = show.length + " Products Found";
  }
  let container = show
    .map((pro) => {
        const tagNew = `<p class="bg-[#668c4c] w-10 h-10 text-white flex justify-center items-center rounded-full absolute right-1 top-1">${pro.tag}</p>`

      return `<div
              class="each-product p-2 rounded-md border grid gap-1 hover:scale-[1.009] duration-200 ease-in shadow-md shadow-slate-100 "
            >
              <div class="p-2 rounded-md bg-white w-full relative h-64 detail">
              
                ${pro.tag === "new" ? tagNew : ""}
              
                <img class="object-cover w-full h-full overflow-hidden" src=${pro.image} alt=${pro.category} />
              </div>
              <div class="mt-1 ">
                <p class="line-clamp-1  " 
                style=" overflow: hidden;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;"
                  >${pro.title}
                </p>
                <small class="text-secondary-color font-bold">$ ${pro.price}</small>
              </div>
              <hr />
              <div class="flex justify-between items-center mt-1">
                <span><i class="fa-regular fa-heart "></i></span>
                <button
                  class="add-to-cart-btn px-3 rounded-full py-1 text-primary-color border border-primary-color hover:bg-primary-color hover:text-white duration-200 ease-in"
                >
                  Add to cart
                </button>
              </div>
            </div>`;
    })
    .join("");
  listProduct.innerHTML = container;

  const detail = document.querySelectorAll(".detail");
  detail.forEach((e, index) => {
    e.addEventListener("click", () => {
      const id = show[index].id;
      window.location.href = `productDetail.html?id=${id}`;
    });
  });

  const fav = document.querySelectorAll(".fa-regular");
  fav.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("text-red-500");
    });
  });
  //add to cart 
  AddToCart(show)

}
