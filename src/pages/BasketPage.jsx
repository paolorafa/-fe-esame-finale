import React from "react";
import Basket from "../componentsClient/basket/Basket";
import { ElementContex } from "../componentsClient/contex/Contex";
import Navigation from "../componentsClient/navbar/Navigation";
import NavLink from "../componentsClient/navLink/NavLink";
import Footer from "../componentsClient/footerEcommerce/Footer";


function BasketPage() {
  return (
    <>
      
        <ElementContex>
          <Navigation />
          <NavLink />
          <Basket />
          <Footer />
        </ElementContex>
      
    </>
  );
}

export default BasketPage;
