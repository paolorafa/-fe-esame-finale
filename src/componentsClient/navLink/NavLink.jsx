import React, {useEffect, useState,useContext} from "react";
import {BsBasket} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";


function NavLink() {

  const { id} = useParams();
  

  const { isLoading, data } = useFetch(
    `${process.env.REACT_APP_URL}/category`
  );
  
console.log(data);



  return (
    <>
      <nav
        className="navbar navbar-expand-md bg-dark sticky-top border-bottom"
        data-bs-theme="dark"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href={`/home/client`}>
                    Home
                  </a>
                </li>
                <li className="nav-item">

                  <a className="nav-link" href={`category/${id}`} >
                    Vele
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white">
            <Link to={'/basket'} className="text-white">
              <BsBasket/>
            </Link>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavLink;
