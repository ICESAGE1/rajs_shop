// src/Products.js
import React from 'react';
import './App.css';

const Products = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <img src={image} alt={title} className="productImage" />
      <div className="productInfo">
        <p className="productTitle">{title}</p>
        <p className="productPrice">₹{price}</p>
        <div className="productRating">
          {"⭐".repeat(rating)}
        </div>
        <button className="addToCart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Products;

  },
];

export default products;
