import React from "react";
import { Link } from "react-router-dom";



function CardProduct({ description, image, price, _id, nameProduct, onAddProductBasket }) {
  
  

  const handleAddToCart =  (productId) => {
    onAddProductBasket(productId)

    
}

  return (
    <>    
      <div className="card shadow-sm">
        <img src={image} alt="" class="card-img-top" />
        <div className="card-body">
          <h3 className="title text-dark">{nameProduct}</h3>
          <p className="card-text">{description}</p>
          <p className="card-text">€{price}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                <Link to={`/products/${_id}`}> Dettagli</Link>
              </button>

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
    </>
  );
}

export default CardProduct;
