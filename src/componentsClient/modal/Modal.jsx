import React, {useContext} from "react";
import Modal from 'react-bootstrap/Modal';
import { ContextElement } from "../contex/Contex";

function ModalBasket({message}) {

  

  const {  modalBasket } =
  useContext(ContextElement);
  return (
    <>
      <Modal show={modalBasket} >
        <Modal.Header closeButton>
          <Modal.Title>{message}</Modal.Title>
        </Modal.Header>
       
  
      </Modal>
    </>
  );
}

export default ModalBasket;
