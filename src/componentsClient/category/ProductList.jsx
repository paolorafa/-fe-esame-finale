import React from 'react';

const ProductList = ({ category }) => {
  return (
    <div>
      <h2>{category.category}</h2>
    </div>
  );
};

export default ProductList