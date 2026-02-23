const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

/* PRODUCTS DATA */
const products = {
  honey: {
    id: "honey",
    name: "Premium Natural Honey",
    price: 399,
    image: "/images/honey.jpg"
  },
  handwash: {
    id: "handwash",
    name: "Green Apple Hand Wash",
    price: 149,
    image: "/images/handwash.jpg"
  },
  toilet: {
    id: "toilet",
    name: "Lavender Toilet Cleaner",
    price: 199,
    image: "/images/toilet.jpg"
  }
};

/* HOME */
app.get("/", (req, res) => {
  res.render("home", { products });
});

/* PRODUCT DETAIL PAGE */
app.get("/product/:id", (req, res) => {
  const product = products[req.params.id];
  if (!product) return res.send("Product not found");
  res.render("product", { product });
});

/* CART */
app.get("/cart", (req, res) => {
  res.render("cart");
});

/* CHECKOUT */
app.get("/checkout", (req, res) => {
  res.render("checkout");
});

app.listen(3000, () => {
  console.log("SWANAND running on http://localhost:3000");
});