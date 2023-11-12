import React from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";


function TableForProduct({
  nameProduct,
  quantity,
  description,
  price,
  category,
  image,
  onDeleteProduct,
  onUploadProduct,
  _id,
}) {
  const handleDeleteClick = () => {
    onDeleteProduct();
  };
  const handleUploadClick = () => {
    onUploadProduct();
  };

  return (
    <div className="table-responsive small">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Prodotto</th>
            <th>Descrizione</th>
            <th>Prezzo</th>
            <th>Categoria</th>
            <th>Immagine</th>
            <th>Quantità</th>
            <th>Elimina</th>
            <th>Modifica</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center align-middle">
            <td>{nameProduct}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>
            <img src={image} style={{width: "10rem"}}/>

            </td>
            <td>{quantity}</td>
            <td>
              <Button onClick={handleDeleteClick}>Elimina</Button>
            </td>
            <td>
              <Button onClick={handleUploadClick}>Modifica</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableForProduct;
