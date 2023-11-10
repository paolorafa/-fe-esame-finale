import React, { useContext, useEffect } from "react";
import { ContextBasket } from "../contex/CBasket";
import { nanoid } from "nanoid";

function Basket() {
 
  const { productBasket , setProductBasket} = useContext(ContextBasket);
  console.log(productBasket);

  useEffect(() => {
    const storeBasket = localStorage.getItem("basket");
    if (storeBasket) {
      const basket = JSON.parse(storeBasket);
      setProductBasket(basket);
    } 
     
    
  }, []);

  return (
    <>
      <div className="bg-light my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="card border shadow-0">
                <div className="m-4">
                  <h4 className="card-title mb-4">Your shopping cart</h4>
                  <div className="row gy-3 mb-4">
                    <div className="col-lg-5">
                      <div className="me-lg-5">
                        <div className="d-flex">
                          
                          {productBasket.product && productBasket.product.map((element) => (
                            <div key={nanoid()} className="product-item">
                              console.log(element.image);
                              <img
                             
                                src={element.image}
                                className="border rounded me-3"
                                style={{ width: "96px", height: "96px" }}
                              />
                              <div>
                                <a href="#" className="nav-link">
                                  {element.nameProduct}
                                </a>
                                <p className="text-muted">{element.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="d-flex justify-content-between">
                <p class="mb-2">Total price:</p>
                <p class="mb-2">$329.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
