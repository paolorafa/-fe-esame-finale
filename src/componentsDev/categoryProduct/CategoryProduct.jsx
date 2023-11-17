import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

function CategoryProduct({ _id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [category, setCategory] = useState({});
  const handleInputChanged = (e) => {
    const { name, value } = e.target;

    setCategory({
      ...category,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/category/create`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(category),
        }
      );
      const data = await response.json();
      setCategory(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Inserisci la Categoria
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserisci la Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CategoryProduct;
