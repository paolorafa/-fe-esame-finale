import React, { useContext } from "react";
import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { ContextElement } from "../contex/Contex";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { nanoid } from "nanoid";

function NavLink() {
  const { count } = useContext(ContextElement);

  const { data } = useFetch(`${process.env.REACT_APP_URL}/category`);

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-dark sticky-top border-bottom z-0"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <a
                className="nav-link text-white"
                href={`/home/client`}
                style={{ fontSize: "1rem" }}
              >
                Home
              </a>
              {data &&
                data.category.map((element) => (
                  <a
                    className="nav-link text-white "
                    key={nanoid()}
                    href={`/category/${element._id}/${element.category}`}
                  >
                    {element.category}
                  </a>
                ))}
            </Nav>
            <div className="text-white d-flex justify-content-end">
              <div>
                <Link
                  to="/basket"
                  className="text-white"
                  style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                  <BsBasket />
                </Link>
              </div>

              <div>{count}</div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavLink;
