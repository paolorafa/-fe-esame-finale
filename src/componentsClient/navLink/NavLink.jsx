import React from "react";

function NavLink() {
  return (
    <>
      <nav
        class="navbar navbar-expand-md bg-dark sticky-top border-bottom"
        data-bs-theme="dark"
      >
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            
            <div class="offcanvas-body">
              <ul class="navbar-nav flex-grow-1 justify-content-center">
                <li class="nav-item">
                  <a class="nav-link" href={`/home/client`}>
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href={`/category/vele`}>
                    Vele
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavLink;
