// Search suggestions placeholder
const input = document.getElementById("searchInput");

input.addEventListener("input", () => {
  if (input.value.length > 2) {
    console.log("Searching for:", input.value);
  }
});

// Cart count update
const cartButtons = document.querySelectorAll(".p-card button");
const cartCount = document.querySelector(".cart .count");
let count = 0;

cartButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
  });
});



