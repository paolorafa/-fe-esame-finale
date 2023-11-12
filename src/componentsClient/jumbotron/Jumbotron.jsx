import React from "react";
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
          <div
          id="carouselExampleInterval"
          className="carousel slide "
          data-mdb-ride="carousel"
          data-mdb-interval="false"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <img
                src="https://img.freepik.com/free-photo/person-surfing-flying-parachute-same-time-kitesurfing-bonaire-caribbean_181624-7902.jpg?w=1380&t=st=1699654585~exp=1699655185~hmac=a04f6ea2a5974d966120eef471e25319a7d8362badeb775b9c13ca1bc7541228"
                className="d-block w-100 rounded"
                alt="kite"
              />
            </div>
            <div className="carousel-item" data-mdb-interval="2000">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                className="d-block w-100"
                alt="Camera"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                className="d-block w-100"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-mdb-target="#carouselExampleInterval"
            type="button"
            data-mdb-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            data-mdb-target="#carouselExampleInterval"
            type="button"
            data-mdb-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Jumbotron;
