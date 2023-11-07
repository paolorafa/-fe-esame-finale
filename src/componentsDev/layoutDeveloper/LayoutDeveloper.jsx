import React, { useState } from "react";
import "./layout.css";
import FormCreateCard from "../formCreateTable/FormCreateTable";
import TableForProduct from "../table/TableForProduct";
import { useFetch } from "../../hooks/useFetch";
import Spinners from "react-bootstrap/esm/Spinner";
import { nanoid } from "nanoid";
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function LayoutDeveloper() {
  const { data, isLoading } = useFetch(`${process.env.REACT_APP_URL}/products`);
  const navigate = useNavigate();

  const handleSelectProductForEdit = (productId) => {
    navigate(`/products/update/${productId}`);
  };

  const delectProduct = async (_id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/products/delete/${_id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (response && response.ok) {
        await data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header
        className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"
        data-bs-theme="dark"
      >
        <h1 className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white">
          DuotoneEcommerce
        </h1>
      </header>
      <section className="container-fluid ">
        <div className="row">
          <div className="col-md-3">
            <Sidebar text="categoria" url="/category" />
          </div>

          <div className=" col-md-9 ms-sm-auto  px-md-4 ">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <FormCreateCard />
            {isLoading && <Spinners />}
            {!isLoading &&
              data &&
              data.product.map((element) => {
                return (
                  <TableForProduct
                    key={nanoid()}
                    nameProduct={element.nameProduct}
                    description={element.description}
                    price={element.price}
                    category={element.category.category}
                    image={element.image}
                    quantity={element.quantity}
                    onDeleteProduct={() => delectProduct(element._id)}
                    onUploadProduct={() =>
                      handleSelectProductForEdit(element._id)
                    }
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default LayoutDeveloper;
