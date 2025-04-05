const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "https://m.media-amazon.com/images/I/61oHh0uOf5L._SX679_.jpg"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 20000,
    image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SX679_.jpg"
  }
];

// HOME PAGE
if (document.getElementById("productList")) {
  const list = document.getElementById("productList");
  const searchInput = document.getElementById("searchInput");

  function displayProducts(filtered = products) {
    list.innerHTML = '';
    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      list.appendChild(card);
    });
  }

  window.addToCart = function (id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = products.find(p => p.id === id);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  };

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartCount").innerText = cart.length;
  }

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    displayProducts(filtered);
  });

  displayProducts();
  updateCartCount();
}

// CART PAGE
if (document.getElementById("cartItems")) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");
  const total = document.getElementById("totalAmount");

  let sum = 0;
  container.innerHTML = '';

  cartItems.forEach((item, index) => {
    sum += item.price;
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
      <p>${item.name} - ₹${item.price}</p>
    `;
    container.appendChild(itemDiv);
  });

  total.innerText = sum;
}
