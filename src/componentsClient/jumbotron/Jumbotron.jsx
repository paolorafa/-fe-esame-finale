import React from "react";
import CarouselJumbo from "../carousel/CarouselJumbo";
import "./jumbo.css";

function Jumbotron() {
  return (
    <>
      <div className="position-relative overflow-hidden p-5 p-md-5 m-md-3 text-center bg-body-tertiary my-h ">
        <div className="col-md-6 p-lg-5 mx-auto my-5 ">
          <div className=" position-absolute z-1 my-title">
            <h1 className="display-3 fw-bold">BENVENUTO A EpicodeKite</h1>
            <h3 className="fw-normal text-white mb-3">
              Build anything you want with Aperture
            </h3>
          </div>
        </div>
        <div className="my-position position-absolute z-0 container-fluid">
          <CarouselJumbo/>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
