import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useFetch } from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../componentsDev/sidebar/Sidebar";

function ModificaProduct() {
  const [selectCatecory, setSelectCategory] = useState("");
  const [file, setFile] = useState(null);

  const [product, setProduct] = useState({
    nameProduct: "",
    description: "",
    price: Number,
    image: "",
    category: "",
    quantity: Number,
  });

  const { data } = useFetch(`${process.env.REACT_APP_URL}/category`);

  const { id } = useParams();

  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setSelectCategory(e.target.value);
  };

  const handleInputChanged = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleChangedFile = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      let image = product.image;
      if (file) {
        const fileUpload = await uploadFile(file);
        image = fileUpload.image;
      }
  
      const bodyFinal = {
        category: selectCatecory,
        image,
      };
  
      
      if (product.nameProduct) bodyFinal.nameProduct = product.nameProduct;
      if (product.description) bodyFinal.description = product.description;
      if (product.price) bodyFinal.price = product.price;
      if (product.quantity) bodyFinal.quantity = product.quantity;
  
      const response = await fetch(
        `${process.env.REACT_APP_URL}/products/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyFinal),  
        }
      );
  
      if (!response.ok) {
        throw new Error("Errore durante la modifica del prodotto");
      }
  
      
      const updatedProduct = await response.json();
      console.log(updatedProduct);
      setProduct(updatedProduct);
      navigate("/home");
    } catch (error) {
      console.error(
        "Si è verificato un errore durante la modifica del prodotto:",
        error
      );
    }
  };
  
  
  const uploadFile = async (image) => {
    const fileImage = new FormData();
    fileImage.append("image", image);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/products/cloudUpload`,
        {
          method: "POST",
          body: fileImage,
        }
      );
      console.log(fileImage);
      if (!response.ok) {
        throw Error("Errore durante upload");
      }
      return await response.json();
    } catch (e) {
      console.log(e);
      return null;
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
            <Sidebar/>
          </div>
          <div className=" col-md-12 ms-sm-auto px-md-4  ">
            <form enctype="multipart/form-data" onSubmit={onSubmit}>
              <Row className="mb-3">
                <Form.Label className="fw-bolder">Nome Prodotto</Form.Label>
                <Form.Control
                  type="text"
                  name="nameProduct"
                  placeholder="name product"
                  onChange={handleInputChanged}
                />

                <Form.Label className="fw-bolder">Descrizione</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="description"
                  onChange={handleInputChanged}
                  className="border rounded"
                />
                <Form.Label className="fw-bolder">Prezzo</Form.Label>

                <Form.Control
                  type="number"
                  name="price"
                  placeholder="price"
                  onChange={handleInputChanged}
                />
                <Form.Label className="fw-bolder">Category</Form.Label>

                <Form.Select
                  type="text"
                  name="category"
                  value={selectCatecory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Seleziona una categoria</option>
                  {data &&
                    data.category &&
                    data.category.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.category._id}
                        {cat.category}
                      </option>
                    ))}
                </Form.Select>
                <Form.Label className="fw-bolder">Quantità</Form.Label>

                <Form.Control
                  type="number"
                  name="quantity"
                  placeholder="quantità"
                  onChange={handleInputChanged}
                />

                <Form.Label className="fw-bolder">Immagine</Form.Label>

                <input
                  type="file"
                  name="image"
                  placeholder="image"
                  onChange={handleChangedFile}
                />
              </Row>

              <Button type="submit" className="center">
                Modifica prodotto
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ModificaProduct;
