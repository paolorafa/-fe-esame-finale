import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { jwtDecode } from "jwt-decode";
import { ContextElement } from "../contex/Contex";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/esm/Button";

function Navigation() {
  const { setProductSearch, product } = useContext(ContextElement);

  const [input, setInput] = useState({ search: "" });
  const [showInfo, setShowInfo] = useState(false);
  const [linkDeveloper, setLinkDeveloper] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleLogout = () => {
    localStorage.clear("userToken");
    window.location.href = "/home/client";
  };

  const searchInput = (e) => {
    e.preventDefault();
    if (product && product.product && input.search.trim() !== "") {
      const searchResult = product.product.filter((element) =>
        element.nameProduct.toLowerCase().includes(input.search.toLowerCase())
      );

      setProductSearch(searchResult);
    } else {
      setProductSearch(product && product.product);
    }
  };

  const [imageUrl, setImageUrl] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenStorage = localStorage.getItem("userTokenClient");
    const tokenDeveloper = localStorage.getItem("userToken");
    if (tokenDeveloper) {
      setLinkDeveloper(true);
    }

    setToken(tokenStorage);
    if (tokenStorage) {
      const decodeToken = jwtDecode(tokenStorage);

      const image = decodeToken.image;
      const provider = decodeToken.provider;

      if (provider) {
        setShowInfo(false);
      } else {
        setShowInfo(true);
      }
      setImageUrl(image);
    }
  }, [token, showInfo]);

  return (
    <>
      <header>
        <div className="p-3 text-center bg-white border-bottom">
          <div className="container-fluid">
            <div className="row gy-3 ">
              <div className="col-lg-2 col-sm-4 col-6">
                <img
                  src="https://www.mc4season.it/index_files/small-1452.png"
                  alt=" logo"
                  height="50"
                />
              </div>

              <div className="order-lg-last col-lg-2 col-sm-8 col-6 d-flex justify-content-center gap-2 align-items-center">
                <div className="d-flex float-end gap-2 justify-content-center align-items-center">
                  <div className="my-login d-flex align-items-center">
                    <Link to={"/client/login"} className="text-black">
                      <img
                        src={imageUrl}
                        style={{ textDecoration: "none" }}
                        alt=""
                      />{" "}
                      LogIn
                    </Link>
                  </div>
                  <div>
                    {linkDeveloper && (
                      <Button>
                        <Link
                          to={"/home/developer"}
                          className="text-white"
                          style={{ textDecoration: "none" }}
                        >
                          Inserisci i prodotti
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                {showInfo && (
                  <DropdownButton id="dropdown-basic-button">
                    <Dropdown.Item href="#/action-2">
                      <Button>
                        <Link
                          to={"/infoclient"}
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          Informazioni
                        </Link>
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <Button
                        className="text-black btn btn-outline-danger "
                        onClick={handleLogout}
                      >
                        LogOut
                      </Button>
                    </Dropdown.Item>
                  </DropdownButton>
                )}
              </div>

              <div className="col-lg-8 col-md-12 ">
                <div className="d-flex gap-2 justify-content-center">
                  <div className="form-outline">
                    <input
                      type="search"
                      id="form1"
                      className="form-control"
                      name="search"
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary shadow-0"
                    onClick={searchInput}
                  >
                    cerca
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigation;
