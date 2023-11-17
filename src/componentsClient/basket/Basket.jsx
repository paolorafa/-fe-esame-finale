import React, { useEffect, useState, useContext } from "react";
import { nanoid } from "nanoid";
import TableBasket from "../tableBasket/TableBasket";
import { ContextElement } from "../contex/Contex";


function Basket() {
  const [carrello, setCarrello] = useState(null);
  const { count, setCount } = useContext(ContextElement);
  
console.log(count);
  const rimuoviProdotto = async (index) => {
    try {
      
      const nuovoCarrello = [...carrello]
      
      console.log(nuovoCarrello);

      nuovoCarrello.splice(index, 1);
      setCarrello(nuovoCarrello);
      

      localStorage.setItem("basket", JSON.stringify(nuovoCarrello));
    } catch (error) {
      console.error("Errore durante la rimozione del prodotto:", error);
    }
  };

  useEffect(() => {
    const storeBasket = localStorage.getItem("basket");

    if (storeBasket) {
      const basket = JSON.parse(storeBasket);
      setCarrello([...basket]);
      console.log(basket);
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
                    <div className="me-lg-12">
                      {carrello &&
                        carrello.map((element) => {
                          console.log(element.product.price);
                          return (
                            <TableBasket
                              key={nanoid()}
                              nameProduct={element.product.nameProduct}
                              price={element.product.price}
                              image={element.product.image}
                              onDeleteProduct={() =>
                                rimuoviProdotto(element.index)
                              }
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="d-flex justify-content-between">
                <h3 class="mb-2">Total price:</h3>
                <p class="mb-2" style={{fontSize:'25px'}}>
                  €
                  {carrello &&
                    carrello
                      .map((element) => element.product.price)
                      .reduce((a, b) => a + b, 0)
                      .toFixed(2)}
                </p>
              </div>
              <div class="mt-3">
              <a href="#" class="btn btn-success w-100 shadow-0 mb-2"> Acquista </a>
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
