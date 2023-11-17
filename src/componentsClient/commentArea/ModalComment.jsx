import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Spinners from "react-bootstrap/esm/Spinner";
import Modal from "react-bootstrap/Modal";
import CommentArea from "./CommentArea";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";

function ModalComment() {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false) ;
  const handleShow = () => setShow(true) ;
  const { product_id } = useParams();

  
  useEffect(() => {
    if (show) {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_URL}/products/${product_id}/comments`);
          const data = await response.json();
          setComment(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [show]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Leggi i commenti
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Commenti</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading && <Spinners />}
          {!loading &&
            comment &&
            comment.comment &&
            comment.comment.map((element) => {
              return (
                <CommentArea
                  key={nanoid()}
                  _id={element.product_id}
                  comment={element.comment}
                />
              );
            })}
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

export default ModalComment;
