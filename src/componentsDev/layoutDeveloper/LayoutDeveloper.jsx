import React from "react";
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
        window.location.reload();
        return data
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header
        className="navbar  bg-dark flex-md-nowrap  shadow"
        data-bs-theme="dark"
      >
        <h1 className="navbar-brand col-md col-lg-2 fs-6  text-white">
          DuotoneEcommerce
        </h1>
        <div className=" text-white my-login-dev "></div>
      </header>
      <section className="container-fluid ">
        <div className="row">
          <div className="col-md-3">
            <Sidebar text="categoria" />
          </div>

          <div className=" col-md-12 ms-sm-auto px-md-4 ">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <FormCreateCard />
            {isLoading && <Spinners />}
            {!isLoading &&
              data && data.product &&
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
