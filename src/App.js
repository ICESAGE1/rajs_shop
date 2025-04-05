import React from 'react';
import './App.css';

const products = [
  { name: 'Laptop', price: 50000, image: 'https://m.media-amazon.com/images/I/71RdoeXxtrL._SL1500_.jpg' },
  { name: 'Smartphone', price: 20000, image: 'https://m.media-amazon.com/images/I/81xJ80yP5IL._SL1500_.jpg' },
  { name: 'Headphones', price: 3000, image: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg' },
];

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">Raj's Shop</div>
        <input className="search" type="text" placeholder="Search products" />
        <div className="cart">🛒 Cart</div>
      </header>

      <main className="product-grid">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
