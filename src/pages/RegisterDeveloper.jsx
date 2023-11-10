import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterDeveloper() {
  const [file, setFile] = useState(null);
  const [registerProvider, setRegisterProvider] = useState({});
  console.log(registerProvider);

  
  const navigate = useNavigate();

  // const onSubmitSecretCode = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_URL}/verifycode`, {
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       method: "POST",
  //       body: JSON.stringify(registerProvider),
  //     });
  //     if (response && response.ok) {
  //       const data = await response.json();
  //       setRegisterProvider(data);
  //       setCode(true);
  //       setShowSecretCodeInput(false);
  //       if (data.token) {
  //         localStorage.setItem("userToken", data.token);
  //         navigate("/home");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(e);
  //   }
  // };

  const handleInputChanged = (e) => {
    const { name, value } = e.target;

    setRegisterProvider({
      ...registerProvider,
      [name]: value,
    });
  };
  const handleChangedFile = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files);
  };

  const uploadFile = async (image) => {
    const fileImage = new FormData();
    fileImage.append("image", image);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/providers/cloudUpload`,
        {
          method: "POST",
          body: fileImage,
        }
      );
      console.log(response);

      if (!response.ok) {
        throw Error("Errore durante upload");
      }
      return await response.json();
    } catch (e) {
      console.log(e);
      
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      try {
        const fileUpload = await uploadFile(file);
        if (fileUpload && fileUpload.image) {
          const bodyFinaly = {
            ...registerProvider,

            image: fileUpload.image,
          };
          console.log(bodyFinaly);
          const response = await fetch(
            `${process.env.REACT_APP_URL}/providers/create`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(bodyFinaly),
            }
          );
          if (!response.ok) {
            throw new Error("Errore durante la registrazione");
          }

          const responseData = await response.json();
          console.log(responseData);
          setRegisterProvider(responseData);

          navigate("/verifycode");
          return responseData;
        } else {
          console.log(
            'Errore durante l\'upload del file. Il campo "images" è mancante nei dati restituiti.'
          );
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Seleziona un file, per favore.");
    }
  };

  return (
    <section className="gradient-form my-container">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <div className="text-center ">
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>

                    <form enctype="multipart/form-data" onSubmit={onSubmit}>
                      <p>Registrati</p>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="name"
                          required
                          id="form2Example11"
                          className="form-control"
                          placeholder="name"
                          onChange={handleInputChanged}
                        />
                        <label className="form-label" for="form2Example11">
                          Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="lastname"
                          id="form2Example22"
                          required
                          class="form-control"
                          onChange={handleInputChanged}
                        />
                        <label className="form-label" for="form2Example22">
                          LastName
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="file"
                          name="image"
                          id="form2Example22"
                          required
                          class="form-control"
                          onChange={handleChangedFile}
                        />
                        <label className="form-label" for="form2Example22">
                          Immagine
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="email"
                          id="form2Example22"
                          required
                          class="form-control"
                          onChange={handleInputChanged}
                        />
                        <label className="form-label" for="form2Example22">
                          Email
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
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="socity"
                          id="form2Example22"
                          required
                          class="form-control"
                          onChange={handleInputChanged}
                        />
                        <label className="form-label" for="form2Example22">
                          Società
                        </label>
                      </div>

                      <button
                        className="btn btn-primary btn-block fa-lg mb-3"
                        type="submit"
                      >
                        Registrati
                      </button>
                    </form>

                    {/* {showSecretCodeInput && !code && (
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
                    )} */}
                  </div>
                </div>

                <div className="col-lg-6 d-flex align-items-center gradient-custom-provider">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterDeveloper;
