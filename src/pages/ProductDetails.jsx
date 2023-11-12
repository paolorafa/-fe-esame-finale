import React, {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";
import { ContextElement } from "../componentsClient/contex/Contex";


function ProductDetails() {
  const { id } = useParams();
console.log(id);
  
  const { setId, loading, product} =
  useContext(ContextElement);
  console.log(product);

  
  useEffect(() => {
    // Chiamare setId con l'ID ottenuto dai parametri
    setId(id);
  }, [setId, id]);

  return (
    <>
    
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6">
              {loading && <Spinner />}
              {!loading  && product && (
                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                  <img
                    src={product.product.image}
                    alt=""
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                  />
                </div>
              )}
            </div>

            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  {!loading && product ? product.product.nameProduct : ""}
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">4.5</span>
                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1"></i>154
                    orders
                  </span>
                </div>
                <div class="mb-3">
                  <span class="h2">
                    €{!loading && product ? product.product.price : ""}
                  </span>
                </div>
                <p className="h3">{!loading && product ? product.product.description : ""}</p>
              </div>
            </main>
          </div>
        </div>
      </section>
     
     
 
      
    </>
  );
}

export default ProductDetails;
