import React from "react";
import NavLink from "../componentsClient/navLink/NavLink";
import Navigation from "../componentsClient/navbar/Navigation";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Spinner from "react-bootstrap/esm/Spinner";
import Footer from "../componentsClient/footerEcommerce/Footer";

function ProductDetails() {
  const { _id } = useParams();

  const { isLoading, data } = useFetch(
    `${process.env.REACT_APP_URL}/products/${_id}`
  );
  console.log(data);

  return (
    <>
      <Navigation />
      <NavLink />
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6">
              {isLoading && <Spinner />}
              {!isLoading && data && (
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
                <h4 className="title text-dark">
                  {!isLoading && data ? data.product.nameProduct : ""}
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
                    €{!isLoading && data ? data.product.price : ""}
                  </span>
                </div>
                <p className="h3">{!isLoading && data ? data.product.description : ""}</p>
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default ProductDetails;
