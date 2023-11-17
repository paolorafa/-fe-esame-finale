import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";


function TextAreaComment() {

const { product_id } = useParams();

const [commentPost, setCommentPost] = useState({})
const [clientLogin, setClientLogin] = useState(false)
const [clientInfo, setClientInfo] = useState([]);
const [idProduct, setProductId] = useState(null)




const handleInputChanged = (e) => {
    const { name, value } = e.target;

    setCommentPost({
      ...commentPost,
      [name]: value
    });
  };
 console.log();

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const storeData = localStorage.getItem('userTokenClient');
      if (storeData) {
        const decodInfo = jwtDecode(storeData);
        setClientInfo(decodInfo);
        setClientLogin(true);

        const bodyFinaly = {
          ...commentPost,
          _id: decodInfo._id,
          productId: idProduct,
        };
        console.log(bodyFinaly);
        const response = await fetch(`${process.env.REACT_APP_URL}/products/${idProduct}/comments/create`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(bodyFinaly),
        });
        console.log(response);

         if (response && response.ok) {
          const responseData = await response.json();
           return responseData;
         }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setProductId(product_id);
    const token = localStorage.getItem("userTokenClient");
    if (token) {
      setClientLogin(true);
    }
  }, [product_id]);


  return (
    <>
   {clientLogin && (
    <form controlId="floatingTextarea2"  onSubmit={onSubmit} >
        <Form.Control
          as="textarea"
          name="comment"
          placeholder="commenta"
          style={{ height: "100px" }}
          onChange={handleInputChanged}
        />
        <Button type="submit">Lascia un Commento</Button>
      </form>
      
   )}
      
    </>
  );
}

export default TextAreaComment;
