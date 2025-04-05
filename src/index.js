import React from 'react';
import ReactDOM from 'react-dom/client';
import Products from './data/Products';
import './app.css'; // ✅ lowercase 'a'

const App = () => {
  return (
    <div>
      <header className="header">
        <h1 className="logo">Raj's Shop</h1>
        <input className="search-bar" type="text" placeholder="Search products..." />
        <a href="/cart" className="cart-link">🛒 Cart (0)</a>
      </header>

      <Products />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


