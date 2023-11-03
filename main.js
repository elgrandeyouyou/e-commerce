let cartButton = document.querySelector(".cart-button");
let cartModal = document.querySelector(".cart-modal");
cartButton.addEventListener("click", () => {
  cartModal.classList.toggle("active");
});
