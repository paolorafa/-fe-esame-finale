import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardCategory({category, _id}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{category}</Card.Title>
         
          <Button variant="primary">
            <Link to={`/products/category/${_id}`} > Vai ai prodotti</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCategory;
