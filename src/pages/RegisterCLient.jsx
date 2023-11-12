import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function RegisterCLient() {
  const [registerClient, setRegisterClient] = useState({});
  const [file, setFile] = useState(null);
  const [dataClient, setDataClient] = useState([]);
  const [verifyClient, setVerifyClient] = useState(false)

  const navigate = useNavigate();

  const handleInputChanged = (e) => {
    const { name, value } = e.target;

    setRegisterClient({
      ...registerClient,
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
        `${process.env.REACT_APP_URL}/client/cloudUpload`,
        {
          method: "POST",
          body: fileImage
        }
      );
      console.log(fileImage);
      if (!response.ok) {
        throw Error("Errore durante upload");
      }
      return await response.json();
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      try {
        const fileUpload = await uploadFile(file);
        if (fileUpload && fileUpload.image) {
          const bodyFinaly = {
            ...registerClient,

            image: fileUpload.image,
          };
         
         

          const response = await fetch(
            `${process.env.REACT_APP_URL}/client/create`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(bodyFinaly),
            }
          );
          if (response && response.ok) {
            const responseData = await response.json();
            console.log(responseData.client);
            setDataClient(responseData);
            setVerifyClient(true)
           
            
          } else {
            console.log(
              'Errore durante l\'upload del file. Il campo "images" è mancante nei dati restituiti.'
            );
          }
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Seleziona un file, per favore.");
    }
  };

  useEffect(() => {
    if (dataClient && dataClient.client) {
      navigate("/client/login");
    }
  }, [dataClient]);

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
                      <p>Registrazione Cliente</p>

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
                        <label className="form-label">LastName</label>
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
                        <label className="form-label">Immagine</label>
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
                        <label className="form-label">Email</label>
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
                        <label className="form-label">Password</label>
                      </div>

                      <button
                        className="btn btn-primary btn-block fa-lg mb-3"
                        type="submit"
                      >
                        Registrati
                      </button>
                    </form>
                    {verifyClient && (
                        <p style={{ color: "green" }}>
                          Registrazione completata con successo!
                        </p>
                      )}
                  </div>
                </div>

                <div className="col-lg-6 d-flex align-items-center gradient-custom-client">
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

export default RegisterCLient;
