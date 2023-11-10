import React from "react";
import Basket from "../componentsClient/basket/Basket";
import { BasketContex } from "../componentsClient/contex/CBasket";
import Navigation from "../componentsClient/navbar/Navigation";
import NavLink from "../componentsClient/navLink/NavLink";
import Footer from "../componentsClient/footerEcommerce/Footer";

function BasketPage() {
  return (
    <>
      <BasketContex>
        <Navigation />
        <NavLink />
        <Basket />
        <Footer />
      </BasketContex>
    </>
  );
}

export default BasketPage;
