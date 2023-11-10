import React, { createContext, useState } from 'react';

export const  ContextBasket = createContext();

export const BasketContex = ({ children }) => {
  const [productBasket, setProductBasket] = useState([]);

  const updateProductBasket = (newProduct) => {
    const updatedProduct = [...productBasket, newProduct]
    setProductBasket(updatedProduct);
    localStorage.setItem('basket', JSON.stringify(updatedProduct));
    ;
  };
console.log(productBasket)
  return (
    <ContextBasket.Provider value={{ productBasket, updateProductBasket, setProductBasket }}>
      {children}
    </ContextBasket.Provider>
  );
};


