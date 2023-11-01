import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';

function TableForProduct({ nameProduct, quantity, description, price, category, image, onDeleteProduct }) {
  const handleDeleteClick = () => {
    onDeleteProduct();
  };

  return (
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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{nameProduct}</td>
          <td>{description}</td>
          <td>{price}</td>
          <td>{category}</td>
          <td>{image}</td>
          <td>{quantity}</td>
          <td>
            <Button onClick={handleDeleteClick}>Elimina</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableForProduct;
