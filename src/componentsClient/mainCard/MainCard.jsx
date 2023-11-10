import React, { useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import Spinners from "react-bootstrap/esm/Spinner";
import CardProduct from "../cardProduct/CardProduct";
import { nanoid } from "nanoid";
import {ContextBasket} from '../contex/CBasket'


function MainCard() {
  const { data, isLoading } = useFetch(`${process.env.REACT_APP_URL}/products`);
  const {updateProductBasket} =  useContext(ContextBasket)



  const addBasketProduct = async (_id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/products/${_id}`
      );
      const dataProductBascket = await response.json();
      
      console.log(dataProductBascket);
     updateProductBasket(dataProductBascket)
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <>
      <div class="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {isLoading && <Spinners />}
            {!isLoading &&
              data &&
              data.product.map((element) => {
                return (
                  <div className="col">
                    <CardProduct
                      key={nanoid()}
                      description={element.description}
                      price={element.price}
                      image={element.image}
                      _id={element._id}
                      nameProduct={element.nameProduct}
                      onAddProductBasket={() => addBasketProduct(element._id)}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default MainCard;
