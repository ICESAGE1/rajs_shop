import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './Product';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Amazon-like header */}
      <header className="header">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="RajShop"
        />
        <input className="searchInput" type="text" placeholder="Search RajShop..." />
        <button className="searchButton">Search</button>
        <button className="cartButton">Cart</button>
      </header>

      {/* Product section */}
      <div className="productSection">
        <Product
          id="1"
          title="Video Editing Service"
          price={499}
          image="https://cdn.pixabay.com/photo/2020/05/28/21/35/youtube-5230870_1280.jpg"
          rating={4}
        />
        <Product
          id

