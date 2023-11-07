import React from "react";
import { Link } from "react-router-dom";

function CardProduct({description, image, price, _id, nameProduct}) {
  return (
    <div className="card shadow-sm">
     <img src={image} alt="" class="card-img-top"/>
      <div class="card-body">
      <h3 className="title text-dark">
         {nameProduct}
        </h3>
        <p class="card-text">
         {description}
        </p>
        <p class="card-text">
         €{price}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
            <Link to={`/products/${_id}`}> Dettagli</Link>
            </button>
            
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
