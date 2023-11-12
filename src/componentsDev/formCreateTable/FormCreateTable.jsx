import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {useFetch} from "../../hooks/useFetch";




function FormCreateCard() {
  const [selectCatecory, setSelectCategory] = useState("");
  const [file, setFile] = useState(null);
  const { data } = useFetch(`${process.env.REACT_APP_URL}/category`);



  const [product, setProduct] = useState({
    nameProduct: "",
    description: "",
    price: Number,
    category: selectCatecory,
    image: "",
    quantity: Number,
  });
 

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

  const handleCategoryChanged = (e) => {
    setSelectCategory(e.target.value);
  
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      try {
        
        const fileUpload = await uploadFile(file);
        if (fileUpload && fileUpload.image) {
          const bodyFinaly = {
            ...product,
            category:selectCatecory,
            image: fileUpload.image,
          };

          const response = await fetch(
            `${process.env.REACT_APP_URL}/products/create`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(bodyFinaly),
            }
          );
          if (response && response.ok) {
            const responseData = await response.json();
            window.location.reload();
            return responseData;
          } else {
            console.log(
              'Errore durante l\'upload del file. Il campo "images" è mancante nei dati restituiti.'
            );
          }
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Seleziona un file, per favore.");
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
      <form enctype="multipart/form-data" onSubmit={onSubmit}>
        <Row className="mb-3">
          <Form.Label className="fw-bolder">Nome Prodotto</Form.Label>
          <Form.Control
            required
            type="text"
            name="nameProduct"
            placeholder="name product"
            onChange={handleInputChanged}
          />

          <Form.Label className="fw-bolder">Descrizione</Form.Label>
          <textarea
            required
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
          Inserisci prodotto
        </Button>

       
      </form>
      
    </>
  );
}

export default FormCreateCard;
