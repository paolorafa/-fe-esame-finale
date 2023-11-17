import React from "react";
import { Link } from "react-router-dom";
import "./cardProduct.css";

function CardProduct({
  description,
  image,
  price,
  _id,
  nameProduct,
  onAddProductBasket,
}) {
  const handleAddToCart = (productId) => {
    onAddProductBasket(productId);
  };

  return (
    <>
      {/* <div className="card shadow-sm my-container">
        <img src={image} alt="" class="card-img-top" />
        <div className="card-body">
          <h3 className="title text-dark">{nameProduct}</h3>
          <p className="card-text">{description}</p>
          <p className="card-text">€{price}</p>
          <div class="d-flex justify-content-center align-items-center gap-2">
            <div >

              <button type="button" className="btn btn-sm btn-outline-secondary">
                <Link to={`/products/${_id}`}> Dettagli</Link>
              </button>
              </div>
              <div>
                <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleAddToCart(_id)}
              >
                Aggiungi
              </button>
              </div>
              
              
            </div>
          </div>
        </div> */}

      {/* <body className="my-body">
        <div className="my-container-card">
          <div className="card">
            <div className="image">
              <img href="#" src={image} alt="immagine" />
            </div>
            <div class="content">
              <h3>{nameProduct}</h3>
              <p>{description}</p>
              <p className="card-text">€{price}</p>

              <div class="d-flex justify-content-center align-items-center gap-2">
                <div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    <Link to={`/products/${_id}`}> Dettagli</Link>
                  </button>
                  </div>
                  <div>
                    <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleAddToCart(_id)}
                  >
                    Aggiungi
                  </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        
      </body> */}
      <div class="glassBox">
        <div class="glassBox__imgBox">
          <img src={image} alt="" />
          <h3 class="glassBox__title">{nameProduct}</h3>
        </div>
        <div class="glassBox__content">{description}</div>
        <div className="position-relative d-flex justify-content-center">
          <div class="d-flex justify-content-center align-items-center gap-2 position-absolute">
            <div>
              <button type="button" className="btn btn-primary ">
                <Link
                  to={`/products/${_id}`}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  
                  Dettagli
                </Link>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleAddToCart(_id)}
              >
                Aggiungi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
