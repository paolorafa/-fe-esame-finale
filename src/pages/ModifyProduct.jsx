import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useFetch } from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
function ModifyProduct() {
  const [selectCatecory, setSelectCategory] = useState("");

  const [product, setProduct] = useState({
    nameProduct: "",
    description: "",
    price: Number,
    category: selectCatecory,
    image: "",
    quantity: Number,
  });
  console.log(product);

  const [file, setFile] = useState(null);
  const { data } = useFetch(`${process.env.REACT_APP_URL}/category`);
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const handleInputChanged = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  console.log(product);
  const handleCategoryChanged = (e) => {
    setSelectCategory(e.target.value);
    console.log(e.target.value);
  };
  const handleChangedFile = (e) => {
    setFile(e.target.files[0]);
  };
  //   const uploadFile = async (image) => {
  //     const fileImage = new FormData();
  //     fileImage.append("image", image);
  //     try {
  //       const response = await fetch(
  //         `${process.env.REACT_APP_URL}/products/cloudUpload`,
  //         {
  //           method: "POST",
  //           body: fileImage,
  //         }
  //       );
  //       console.log(fileImage);
  //       if (!response.ok) {
  //         throw Error("Errore durante upload");
  //       }
  //       return await response.json();
  //     } catch (e) {
  //       console.log(e);
  //       return null;
  //     }
  //   };

  const onSubmit = async () => {
    
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/products/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("Errore durante la modifica del prodotto");
      }

      const updatedProduct = await response.json();
      console.log(updatedProduct);
      
    } catch (error) {
      console.error(
        "Si è verificato un errore durante la modifica del prodotto:",
        error
      );
      return null;
    }
  };

  return (
    <>
      <div className="container">
        <form  onSubmit={onSubmit}>
          <Row className="mb-3">
            <Form.Label className="fw-bolder">Nome Prodotto</Form.Label>
            <Form.Control
              type="text"
              name="nameProduct"
              placeholder="name product"
              onChange={handleInputChanged}
            />

            <Form.Label className="fw-bolder">Descrizione</Form.Label>
            <textarea
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
              onChange={handleCategoryChanged}
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

            <Form.Control
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
    </>
  );
}

export default ModifyProduct;
