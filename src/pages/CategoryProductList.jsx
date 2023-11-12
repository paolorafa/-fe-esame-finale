import React, { useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import Spinners from "react-bootstrap/esm/Spinner";
import CardProduct from "../componentsClient/cardProduct/CardProduct";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import { ContextElement } from "../componentsClient/contex/Contex";
import ModalBasket from "../componentsClient/modal/Modal";

function CategoryProductList() {
  const { updateProductBasket, modalBasket } = useContext(ContextElement);
  const { id, category } = useParams();

  const { isLoading, data } = useFetch(
    `${process.env.REACT_APP_URL}/products/category/${id}`
  );
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
      <div className="container m-3 ">
        <h2>Categoria: {`${category}`} </h2>
      </div>
      {
        <div className="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {isLoading && <Spinners />}
            {!isLoading &&
              data &&
              data.prodotti.map((element) => (
                <div className="col" key={nanoid()}>
                  <CardProduct
                    key={nanoid}
                    description={element.description}
                    image={element.image}
                    nameProduct={element.nameProduct}
                    price={element.price}
                    _id={element._id}
                    onAddProductBasket={() => addBasketProduct(element._id)}
                  />
                </div>
              ))}
          </div>
          {modalBasket && <ModalBasket message={"Prodotto aggiunto"} />}
        </div>
      }
    </>
  );
}

export default CategoryProductList;
