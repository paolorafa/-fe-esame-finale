import React from "react";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CategoryProduct from "../categoryProduct/CategoryProduct";

function Sidebar({ text, url }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const signOutDeveloper = () => {
    localStorage.clear("userToken");
    window.location.reload();
    navigate("/home/developer");
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Apri Sidebar
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto gap-2">
            <ul className="nav flex-column">
              <li className="nav-item">
                <button className="btn btn-primary shadow-0">
                <CategoryProduct />
              </button>
              </li>
             
            
            </ul>
            <ul className="nav flex-column mb-auto gap-2">
              <li className="nav-item">
                <button className="btn btn-primary shadow-0">
                  <Link
                    to={"/home/developer"}
                    className="nav-link d-flex align-items-center  gap-2 text-white"
                  >
                    Prodotti
                  </Link>
                </button>
              </li>

              <li className="nav-item">
                <button className="btn btn-primary shadow-0 ">
                  <Link
                    to={"/home/client"}
                    className="nav-link d-flex align-items-center gap-2 text-white"
                  >
                    Ecommerce
                  </Link>
                </button>
              </li>
              <button
                class="nav-item btn btn-outline-danger"
                onClick={signOutDeveloper}
              >
                Sign out
              </button>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
