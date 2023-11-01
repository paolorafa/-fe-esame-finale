import React from "react";
import "./layout.css";
import CategoryProduct from "../categoryProduct/CategoryProduct";
import { Link } from "react-router-dom";

function LayoutCatecory() {
  return (
    <>
      <section class="layout">
        <div class="sidebar">
           
            <button>
                <Link to={'/home'}>
                    Product
                </Link>
            </button>
        </div>
        <div class="body">
          <CategoryProduct />
        </div>
      </section>

    </>
  );
}

export default LayoutCatecory