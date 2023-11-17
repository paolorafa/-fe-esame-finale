import React, {useState, useContext} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Modal from '../componentsClient/modal/Modal';
import { ContextElement } from "../componentsClient/contex/Contex";

function LoginClient() {

  const { modalBasket , modal } =
  useContext(ContextElement);

    const [loginClient, setLoginClient] = useState({});
    const navigate = useNavigate();
    
  
    const handleInputChanged = (e) => {
      const { name, value } = e.target;
  
      setLoginClient({
        ...loginClient,
        [name]: value,
      });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL}/loginclient`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(loginClient),
          }
        );
        const data = await response.json();
          
        if (data.token) {
          localStorage.setItem("userTokenClient", data.token);
          navigate("/home/client");
         
        } else if(data.error){
          console.log('errore durante il login');
         modal()
        }
      } catch (error) {
        console.log(error);
      }
    };
   
  


  return (
    <>
    
    <section className="gradient-form my-container">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div className="text-center ">
                        <h4 className="mt-1 mb-5 pb-1">
                          Registrazione Cliente
                        </h4>
                      </div>

                      <form onSubmit={onSubmit}>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="email"
                            required
                            id="form2Example11"
                            className="form-control"
                            placeholder="email address"
                            onChange={handleInputChanged}
                          />
                          <label className="form-label" for="form2Example11">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="password"
                            id="form2Example22"
                            required
                            class="form-control"
                            onChange={handleInputChanged}
                          />
                          <label className="form-label" for="form2Example22">
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg mb-3"
                            type="submit"
                          >
                            Log in
                          </button>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                         
                          <button
                          
                            type="button"
                            className="btn btn-outline-danger"
                          >
                             <Link to="/client/create">Create new</Link>
                          </button>
                        </div>
                      </form>

                      <div className='d-flex align-items-center justify-content-center pb-4'>
                      <button
                          
                          type="button"
                          className="btn btn-outline-danger"
                        >
                           <Link to="/home/developer">Se Sei un Fornitore Registrati</Link>
                        </button>
                      </div>
                      {modalBasket && <Modal message={'login o password errati'}/>}
                     
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-client">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    
    </>
  )
}

export default LoginClient