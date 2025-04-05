import React from 'react';

const Products = () => {
  const items = [
    { id: 1, name: 'Video Editing', price: 1000 },
    { id: 2, name: 'Poster Making', price: 500 },
    { id: 3, name: 'Thumbnail Design', price: 300 },
  ];

  return (
    <div className="products-container">
      {items.map((item) => (
        <div className="product-card" key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
