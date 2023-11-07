import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({ text, url }) {
  return (
    <>

      <div class="sidebar border border-right bg-body-tertiary">
        <div
          class="offcanvas-md offcanvas-end bg-body-tertiary"
          tabindex="-1"
          id="sidebarMenu"
          aria-labelledby="sidebarMenuLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="sidebarMenuLabel">
              Company name
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#sidebarMenu"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
            <ul class="nav flex-column">
              <li class="nav-item">Dashboard</li>
              <li class="nav-item">
                <Link to={url} class="nav-link d-flex align-items-center gap-2">
                  {text}
                </Link>
              </li>
            </ul>
            <ul class="nav flex-column mb-auto">
              <li class="nav-item">
                <Link
                  to={"/home/client"}
                  class="nav-link d-flex align-items-center gap-2"
                >
                  Ecommere
                </Link>
              </li>
              <li class="nav-item">Sign out</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
