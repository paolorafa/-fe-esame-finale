import React from "react";
import Footer from "../componentsClient/footerEcommerce/Footer";
import Navigation from "../componentsClient/navbar/Navigation";
import NavLink from "../componentsClient/navLink/NavLink";
import ProductDetails from "./ProductDetails";
import { ElementContex } from "../componentsClient/contex/Contex";
function PageProductDetail() {
  return (
    <>
      <ElementContex>
        <Navigation />
        <NavLink />
        <ProductDetails />
        <Footer />
      </ElementContex>
    </>
  );
}

export default PageProductDetail;
