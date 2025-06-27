const products = [
  { id: 1, name: "Stylish T-Shirt", price: 499, category: "fashion", image: "https://via.placeholder.com/200x200?text=T-Shirt" },
  { id: 2, name: "Wireless Headphones", price: 1299, category: "electronics", image: "https://via.placeholder.com/200x200?text=Headphones" },
  { id: 3, name: "Romantic Novel", price: 299, category: "books", image: "https://via.placeholder.com/200x200?text=Book" },
  { id: 4, name: "Smart Watch", price: 1999, category: "electronics", image: "https://via.placeholder.com/200x200?text=Smart+Watch" },
  { id: 5, name: "Classic Jeans", price: 799, category: "fashion", image: "https://via.placeholder.com/200x200?text=Jeans" }
];

function displayProducts(list) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  list.forEach(p => {
    productList.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function filterProducts() {
  const selected = document.getElementById("category").value;
  if (selected === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === selected);
    displayProducts(filtered);
  }
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
  document.getElementById("cart-count").textContent = cart.length;
}

window.onload = () => {
  displayProducts(products);
};
