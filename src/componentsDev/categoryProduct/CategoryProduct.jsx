import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function CategoryProduct() {



    const [category, setCategory] = useState({});
    const handleInputChanged = (e) => {
      const { name, value } = e.target;
  
      setCategory({
        ...category,
        [name]: value,
      });
    };

    const onSubmit= async () =>{
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/category/create`,
            {
                headers:{
                    'Content-Type': 'application/json'
                },
                method:"POST",
                body: JSON.stringify(category)
            })
            const data = await response.json()
            setCategory(data)
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <div>
      <form enctype="multipart/form-data" onSubmit={onSubmit}>
        <Row className="mb-3">
          <Form.Label className="fw-bolder">Categoria</Form.Label>
          <Form.Control
            required
            type="text"
            name="category"
            placeholder="name product"
            onChange={handleInputChanged}
          />
        </Row>
        <Button type="submit" className="center">
          Inserisci categoria
        </Button>
      </form>
    </div>
  );
}

export default CategoryProduct;
