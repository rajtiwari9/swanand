let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD TO CART */
function addToCart(product) {
  product.price = Number(product.price);

  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart");
}

/* BUY NOW */
function buyNow(product) {
  cart = [{
    id: product.id,
    name: product.name,
    price: Number(product.price),
    image: product.image,
    qty: 1
  }];

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "/checkout";
}

/* CART COUNT */
function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (!el) return;

  const total = cart.reduce((s, i) => s + i.qty, 0);
  el.innerText = total;
}

function searchProducts() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  const grid = document.querySelector(".grid");
  let found = false;

  if (input.length > 0) {
    grid.classList.add("search-active");
  } else {
    grid.classList.remove("search-active");
  }

  cards.forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();

    if (name.includes(input)) {
      card.style.display = "";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  const msg = document.getElementById("no-product");
  if (msg) {
    msg.style.display = found ? "none" : "block";
  }
}
updateCartCount();