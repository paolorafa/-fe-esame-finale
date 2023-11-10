import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css"
import { jwtDecode } from "jwt-decode";


function Navigation() {

  const [imageUrl, setImageUrl]= useState("")
  const [token, setToken] =  useState("")


  useEffect(()=>{
    const tokenStorage = localStorage.getItem("userToken");
    setToken(tokenStorage)
     if(tokenStorage){
       const decodeToken = jwtDecode(tokenStorage)
    
    const image = decodeToken.image
    setImageUrl(image)
     }
  }, [token])

  
   
    

 

  return (
    <>
      <header>
        <div className="p-3 text-center bg-white border-bottom">
          <div className="container-fluid">
            <div className="row gy-3 ">
              <div className="col-lg-2 col-sm-4 col-6">
                  <img
                    src="https://www.mc4season.it/index_files/small-1452.png"
                    alt =" logo"
                    height="50"
                  />
                
              </div>

               <div className="order-lg-last col-lg-2 col-sm-8 col-6">
                <div className="d-flex float-end">
                  <div className="my-login">
                      
                     
                      <Link to={'/client/login'} className="text-white">
                        
                        <img src={imageUrl} alt=" login"/>
                        
                        
                        </Link>
                  </div>
                  
                </div>
              </div> 

              <div className="col-lg-8 col-md-12 ">
                <div className="d-flex gap-2 justify-content-center">
                  <div className="form-outline">
                    <input type="search" id="form1" className="form-control" />
                    
                  </div>
                  <button type="button" className="btn btn-primary shadow-0">
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
