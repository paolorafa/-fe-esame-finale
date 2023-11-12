import React from 'react'
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";

function TableBasket({nameProduct, price,image, onDeleteProduct}) {

  const handleDeleteClick = () => {
    onDeleteProduct();
  };
  return (
    <>
    <div className="table-responsive small">
      <Table striped bordered hover>
        <thead>
          <tr className='text-center'>
            <th>Prodotto</th>
            <th>Prezzo</th>
            <th>Immagine</th>
            <th>Elimina</th>
          </tr>
        </thead>
        <tbody >
          <tr className='text-center align-middle'>
            <td>{nameProduct}</td>
            <td>{price}</td>
            <td>
            <img src={image} style={{width: "8rem"}}/>
            </td>
            <td>
              <Button onClick={handleDeleteClick}>Elimina</Button>
            </td>
            
          </tr>
        </tbody>
      </Table>
    </div>
    
    
    </>
  )
}

export default TableBasket