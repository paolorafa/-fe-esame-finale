import React, { useContext, useEffect } from "react";
import CardProduct from "../cardProduct/CardProduct";
import { nanoid } from "nanoid";
import { ContextElement } from "../contex/Contex";
import ModalBasket from "../modal/Modal";
import "./mainCard.css";
import Carousel from "react-bootstrap/Carousel";


function MainCard() {
  const { updateProductBasket, product, productSearch, modalBasket } =
    useContext(ContextElement);

 

  
  const addBasketProduct = async (_id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/products/${_id}`
      );
      const dataProductBascket = await response.json();
      updateProductBasket(dataProductBascket);
    } catch (err) {
      console.log(err);
    }
  };
  const groupProducts = (products, groupSize) => {
    const groupedArray = [];
    for (let i = 0; i < products.length; i += groupSize) {
      groupedArray.push(products.slice(i, i + groupSize));
    }
    return groupedArray;
  };

  const groupedProducts = groupProducts(
    productSearch || product?.product || [],
    3
  );

 

  return (
    <>
      <div className="container-fluid my-2">
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 justify-content-center">
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">DUOTONE WOMEN</h2>
              <p className="lead">DECORATE THE FINAL IN BRAZIL</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto my-photo-1"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0",
              }}
            ></div>
          </div>
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">HOW TO APPROACH</h2>
              <p className="lead">HOW TO APPROACH</p>
            </div>
            <div
              className="bg-body-tertiary shadow-sm mx-auto my-photo-2"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <Carousel>
            {groupedProducts.map((group, index) => (
              <Carousel.Item key={nanoid()}>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-2 d-flex">
                  {group.map((element) => (
                    <div className="col" key={element._id}>
                      <CardProduct
                        description={element.description}
                        price={element.price}
                        image={element.image}
                        _id={element._id}
                        nameProduct={element.nameProduct}
                        onAddProductBasket={() => addBasketProduct(element._id)}
                      />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      {modalBasket && <ModalBasket message={"Prodotto aggiunto"} />}
      
    </>
  );
}

export default MainCard;
