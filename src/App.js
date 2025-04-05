import React, { useState } from 'react';
import './App.css';

const productsList = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Smartphone', price: 20000 },
  { id: 3, name: 'Headphones', price: 3000 },
];

function App() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = productsList.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app">
      <header>
        <h1>Raj's Shop</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <main>
        <h2>Products</h2>
        <div className="products">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className="cart">
          <h2>🛒 Cart ({cart.length})</h2>
          {cart.length === 0 ? (
            <p>No items yet.</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>
              <p><strong>Total: ₹{totalPrice}</strong></p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

