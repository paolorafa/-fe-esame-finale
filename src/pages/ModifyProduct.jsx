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
    price: 0,
    category: selectCatecory,
    image: "",
    quantity: 0,
  });
  const [file, setFile] = useState(null);
  const { data } = useFetch(`${process.env.REACT_APP_URL}/category`);
  const {_id} = useParams()
  const navigate = useNavigate()

  const handleInputChanged = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };
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

  const modifyProduct = async (updatedProductData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/products/update/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProductData),
      });
  
      if (!response.ok) {
        throw new Error("Errore durante la modifica del prodotto");
      }
  
      const updatedProduct = await response.json();
      console.log(updatedProduct);
      return updatedProduct;
    } catch (error) {
      console.error("Si è verificato un errore durante la modifica del prodotto:", error);
      return null;
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  
    // Ottieni i dati aggiornati del prodotto
    const updatedProductData = {
      nameProduct: product.nameProduct,
      description: product.description,
      price: product.price,
      category: selectCatecory,
      image: product.image,
      quantity: product.quantity,
    };
  
    try {
      const updatedProduct = await modifyProduct(_id, updatedProductData);
  
      if (updatedProduct) {
       
        console.log("Prodotto modificato con successo:", updatedProduct);
        navigate(`/home`);
      } else {
        
        console.log("Errore durante la modifica del prodotto");
      }
    } catch (error) {
      
      console.error("Si è verificato un errore durante la modifica del prodotto:", error);
    }
  };
  
  
  useEffect(() => {
   
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_URL}/products/${_id}`)
        
        console.log(response);
        if (!response.ok) {
          throw new Error("Errore durante il recupero dei dettagli del prodotto");
        }
        const productData = await response.json();
        console.log(productData);
        setProduct({
          nameProduct: productData.nameProduct || "",
          description: productData.description || "",
          price: productData.price || "",
          category: productData.category || "",
          image: productData.image || "",
          quantity: productData.quantity || "",
        });
        setSelectCategory(productData.category || ""); // 
      } catch (error) {
        console.error("Si è verificato un errore durante il recupero dei dettagli del prodotto:", error);
      }
    };

    fetchProductDetails();
  }, [_id]);
  
  return (
    <>
      <div className="container">
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
            Inserisci prodotto
          </Button>
        </form>
      </div>
    </>
  );
}

export default ModifyProduct;
