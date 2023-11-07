import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyCodeDeveloper() {
  const [registerProvider, setRegisterProvider] = useState({});
  const [showSecretCodeInput, setShowSecretCodeInput] = useState(true);
  const [code, setCode] = useState(null);

  const navigate = useNavigate();

  const handleInputChanged = (e) => {
    const { name, value } = e.target;

    setRegisterProvider({
      ...registerProvider,
      [name]: value,
    });
  };
  const onSubmitSecretCode = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/verifycode`, {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(registerProvider),
      });
      if (response && response.ok) {
        const data = await response.json();
        console.log(data);
        setRegisterProvider(data);
        setCode(true);
        setShowSecretCodeInput(false);
        if (data.token) {
          localStorage.setItem("userToken", data);
          navigate("/home");
        }
      }
    } catch (error) {
      console.log(e);
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
                          We are The Lotus Team
                        </h4>
                      </div>
                      {showSecretCodeInput && !code && (
                        <div className="col-md-6">
                          <form onSubmit={onSubmitSecretCode}>
                            <input
                              type="text"
                              name="secretCode"
                              placeholder="code"
                              className="form-control"
                              onChange={handleInputChanged}
                            />
                            <button
                              className="btn btn-primary btn-block fa-lg mb-3"
                              type="submit"
                            >
                              Invia codice
                            </button>
                          </form>
                        </div>
                      )}
                      {code && (
                        <p style={{ color: "green" }}>
                          Registrazione completata con successo!
                        </p>
                      )}

                      </div>
                  </div>
                      <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                          <h4 className="mb-4">
                            We are more than just a company
                          </h4>
                          <p className="small mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
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

export default VerifyCodeDeveloper;
