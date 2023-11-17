import React from "react";
import Footer from "../componentsClient/footerEcommerce/Footer";
import Navigation from "../componentsClient/navbar/Navigation";
import NavLink from "../componentsClient/navLink/NavLink";
import { ElementContex } from "../componentsClient/contex/Contex";
import PoductPage from "../componentsClient/pageProduct/PoductPage";
function PageProductDetail() {
  return (
    <>
      <ElementContex>
        <Navigation />
        <NavLink />
        <PoductPage/>
        <Footer />
      </ElementContex>
    </>
  );
}

export default PageProductDetail;
