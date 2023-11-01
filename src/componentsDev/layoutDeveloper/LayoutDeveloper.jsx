import React from "react";
import "./layout.css";
import FormCreateCard from "../formCreateCard/FormCreateCard";
import { Link } from "react-router-dom";
import TableForProduct from "../table/TableForProduct";
import { useFetch } from "../../hooks/useFetch";
import Spinners from "react-bootstrap/esm/Spinner";
import {nanoid} from 'nanoid'


function LayoutDeveloper() {
  const { data, isLoading } = useFetch(`${process.env.REACT_APP_URL}/products`);

  console.log(data);
  return (
    <>
   
      <section className="layout">
        <div className="sidebar">
            <button>
                <Link to={'/category'}>
                    Categoria
                </Link>
            </button>
        </div>
      
          <div className="body">
          <FormCreateCard />
          {isLoading && <Spinners/>}
          {!isLoading && data && data.product.map((element) =>{
            return(
              <TableForProduct
              l
              key={nanoid()}
              nameProduct={element.nameProduct}
              description={element.description}
              price={element.price}
              category={element.category.category}
              image={element.image}
              quantity={element.quantity}
            />) })
          }      
          
          
        </div>  
        
      </section>
     
    </>
  );
}

export default LayoutDeveloper;
