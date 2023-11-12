import Navigation from "../componentsClient/navbar/Navigation";
import NavLink from "../componentsClient/navLink/NavLink";
import { ElementContex } from "../componentsClient/contex/Contex";

import React from 'react'
import CategoryProductList from "./CategoryProductList";

function PageForCategory() {
  return (
    <ElementContex>
        <Navigation/>
        <NavLink/>
        <CategoryProductList/>
    </ElementContex>
  )
}

export default PageForCategory