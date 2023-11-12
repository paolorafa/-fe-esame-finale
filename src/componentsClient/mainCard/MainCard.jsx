import React, { useContext } from "react";
import Spinners from "react-bootstrap/esm/Spinner";
import CardProduct from "../cardProduct/CardProduct";
import { nanoid } from "nanoid";
import { ContextElement } from "../contex/Contex";
import ModalBasket from "../modal/Modal";

function MainCard() {
  const { updateProductBasket, product, loading, productSearch, modalBasket } =
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

  return (
    <>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {loading && <Spinners />}
            {!loading &&
              (productSearch || product ? (
                (productSearch || product.product).map((element) => (
                  <div className="col" key={nanoid()}>
                    <CardProduct
                      description={element.description}
                      price={element.price}
                      image={element.image}
                      _id={element._id}
                      nameProduct={element.nameProduct}
                      onAddProductBasket={() => addBasketProduct(element._id)}
                    />
                  </div>
                ))
              ) : (
                <h3>Nessun Prodotto trovato</h3>
              ))}
          </div>
        </div>
      </div>
      {modalBasket && <ModalBasket message={"Prodotto aggiunto"} />}
    </>
  );
}

export default MainCard;
