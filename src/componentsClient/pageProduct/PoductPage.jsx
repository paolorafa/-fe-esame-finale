import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";
import { useFetch } from "../../hooks/useFetch";
import ModalComment from "../commentArea/ModalComment";
import TextAreaComment from "../commentArea/TextAreaComment";

function PoductPage() {
  const { product_id } = useParams();
  const [productId, setProductId] = useState(null);
 

  const { data, isLoading } = useFetch(
    `${process.env.REACT_APP_URL}/products/${productId}`
  );


  useEffect(() => {
    setProductId(product_id);
  }, [product_id]);
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            {isLoading && <Spinner />}
            <div className="col-lg-6">
              {!isLoading && data && data.product && (
                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                  <img
                    src={data.product.image}
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
                {!isLoading && data && data.product && (
                  <h4 className="title text-dark">
                    {data.product.nameProduct};
                  </h4>
                )}

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
                  €
                  {!isLoading && data && data.product && (
                    <span class="h2">{data.product.price}</span>
                  )}
                </div>

                {!isLoading && data && data.product && (
                  <p className="h3">{data.product.description}</p>
                )}
              </div>

              <div>
                <TextAreaComment productId={product_id}/>

                <ModalComment productId={product_id} />
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}

export default PoductPage;
