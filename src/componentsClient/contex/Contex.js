import React, { createContext, useState, useEffect } from 'react';

export const ContextElement = createContext();

export const ElementContex = ({ children }) => {
  const [productBasket, setProductBasket] = useState([]);
  const [productSearch, setProductSearch] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalBasket, setModalBasket] = useState(false)
  const [_id, setId] = useState(null);
  const [count, setCount] = useState(null)


  const updateProductBasket = (newProduct) => {
    const updatedProduct = [...productBasket, newProduct]
    setProductBasket(updatedProduct);
    localStorage.setItem('basket', JSON.stringify(updatedProduct));
    modal()
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };



  const modal = () => {
    setModalBasket(true)
    setTimeout(() => {
      setModalBasket(false)
    }, 3000)
  }



  const getProductFromApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/products`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      
    } catch (err) {
      setError(err);
      console.log(err);
    }
  }


console.log(product);

  useEffect(() => {

    getProductFromApi()


  }, [])



  return (
    <ContextElement.Provider value={{  error, count, setCount, modal, _id, setId, productBasket, modalBasket, updateProductBasket, setProductBasket, product, loading, productSearch, setProductSearch, setModalBasket }}>
      {children}
    </ContextElement.Provider>
  );
};


