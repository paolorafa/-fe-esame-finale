import React, { useState} from "react";
import { useNavigate} from "react-router-dom";
import "./loginProvider.css";
import { Link } from "react-router-dom";




function LoginProvider() {
  const [loginProvider, setLoginProvider] = useState({});
 
  const navigate = useNavigate();



  const handleInputChanged = (e) => {
    const { name, value } = e.target;

    setLoginProvider({
      ...loginProvider,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/loginprovider`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(loginProvider),
        }
      );
      const data = await response.json();

      if (data.token) {
        localStorage.setItem("userToken", data.token);
        
      }
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const redirectForLoginWithGitHub = () => {
    window.location.href = `${process.env.REACT_APP_URL}/auth/github`;
    
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
                         Registrazione Provider
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
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            onClick={() => redirectForLoginWithGitHub()}
                            className="btn btn-primary btn-block fa-lg mb-3"
                          >
                            Entra con Github
                          </button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                         
                          <button
                          
                            type="button"
                            className="btn btn-outline-danger"
                          >
                             <Link to="/providers/create">Create new</Link>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-provider">
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
  );
}
export default LoginProvider;
