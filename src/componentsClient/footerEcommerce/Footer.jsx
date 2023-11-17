import React from "react";

function Footer() {
  return (
    <>
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="d-block mb-2"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Product</title>
             
              
            </svg>
            <small className="d-block mb-3 text-body-secondary ">
            <img
                  src="https://www.mc4season.it/index_files/small-1452.png"
                  alt=" logo"
                  height="70"
                />
              © 2017–2023
            </small>
          </div>
          <div className="col-6 col-md">
            <h5>Chiedi Aiuto</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Spedizioni e consegna
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Istruzioni per la cura
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Registrazione prodotto
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Contatta negozio
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Contatto B2B
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Archivio
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Sul Marchio Duotone</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Sostenibilità
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Brand
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                 Stories
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                 Video
                </a>
              </li>
            </ul>
          </div>
          
         
        </div>
      </footer>
    </>
  );
}

export default Footer;
