import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Lowercase 'a'
import Products from './data/Products';

const App = () => {
  return (
    <div>
      <header className="header">
        <h1 className="logo">Raj's Shop</h1>
        <input type="text" className="search-bar" placeholder="Search products..." />
        <div className="cart">
          <a href="#cart">🛒 Cart (0)</a>
        </div>
      </header>

      <Products />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


