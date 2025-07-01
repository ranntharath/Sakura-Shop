function AddToCart(show) {
  const addCart = document.querySelectorAll(".add-to-cart-btn");
  const cartLogo = document.getElementById("cart");
  const toast = document.getElementById("toast");
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (cartLogo) {
    cartLogo.innerText = cart.length;
  }

  addCart.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const product = show[index] || show;

      const exists = cart.some((item) => item.id === product.id);
      if (!exists) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        cartLogo.innerText = cart.length;
      } else {
        toast.textContent = "it already added";
        toast.classList.remove("hidden");
        setTimeout(() => {
          toast.classList.add("hidden");
        }, 2000); 
      }
    });
  });
}

export default AddToCart;
