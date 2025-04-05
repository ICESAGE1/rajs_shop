import React from 'react';
import './app.css'; // ✅ lowercase 'a'

const products = [
  {
    id: 1,
    name: 'Video Editing',
    description: 'Professional video editing service for your needs.',
    price: '₹999',
  },
  {
    id: 2,
    name: 'Poster Making',
    description: 'Creative poster design for events, brands, or ads.',
    price: '₹499',
  },
];

const Products = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span className="price">{product.price}</span>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;

