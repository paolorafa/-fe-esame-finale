import React from "react";
import Navigation from "../componentsClient/navbar/Navigation";
import NavLink from "../componentsClient/navLink/NavLink";
import Jumbotron from "../componentsClient/jumbotron/Jumbotron";
import MainCard from "../componentsClient/mainCard/MainCard";
import Footer from "../componentsClient/footerEcommerce/Footer";
import Video from "../componentsClient/video/Video";
import { ElementContex } from "../componentsClient/contex/Contex";


function HomeClient() {
  return (
    <>
     
        <ElementContex>
          <Navigation />
          <NavLink />
          <Jumbotron />
          <MainCard/>
          <Video/>
          <Footer />
        </ElementContex>
     
      
    </>
  );
}

export default HomeClient;
