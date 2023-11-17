import React, { useEffect, useState } from "react";
import NavLink from "../../componentsClient/navLink/NavLink";
import Navigation from "../../componentsClient/navbar/Navigation";
import { ElementContex } from "../../componentsClient/contex/Contex";
import "./infoclient.css";
import { nanoid } from "nanoid";
import TableInfo from "./TableInfo";
import { jwtDecode } from "jwt-decode";
function InfoClient() {
  const [clientInfo, setClientInfo] = useState([]);

  useEffect(() => {
    const tokenInfo = localStorage.getItem("userTokenClient");
    if (tokenInfo) {
      const decodInfo = jwtDecode(tokenInfo);
      setClientInfo(decodInfo);
    }
  }, []);

  return (
    <>
      <ElementContex>
        <Navigation />
        <NavLink />
        <div className="layout ">
          
            <div className="container-fluid  bg-body-tertiary">
            <div className="row my-box gy-3">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 ">
                <img src={clientInfo?.image} alt="foto" className="my-photo " />
              </div>
            </div>
          </div>
          <div className="container-fluid my-5 ">
            <div className="row my-box">
              <div className="col-lg-2 ">
                <h3>InfoClient</h3>
                {clientInfo &&
                  Object.entries(clientInfo).map(([key, value]) => (
                    <TableInfo key={nanoid()} name={key} value={value} />
                  ))}
              </div>
            </div>
          </div>
          
          
        </div>
      </ElementContex>
    </>
  );
}

export default InfoClient;
