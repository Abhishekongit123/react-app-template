import React, { useState } from "react";

const Rform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");

  const[allentery,setAllentery]=useState([]);

  const submitform = (e) =>{
    e.perventDefault();

    const newEntery = {
      name:name,
      email:email,
      pic:pic
    };
    setAllentery([...allentery, newEntery]);
    console.log(allentery);
  }
  return (
    <>
      <div className="container-fluid bg-transparent">
        <div className="row text-dark mx-auto d-flex justify-content-center bg-transparent">
          <div className="col-sm-6 p-2 bg-transparent">
            <form
              action=""
              onSubmit={submitform}
              className="w-100 p-3"
              style={{ background: "#f1f2f6", borderRadius: "1rem" }}
            >
              <label className="float-start text-dark form-label fs-5 bg-transparent">
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control bg-white mb-2"
                placeholder="Enter your name"
              />
              <label className="float-start text-dark form-label fs-5 bg-transparent">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control bg-white mb-2"
                placeholder="Enter your name"
              />
              <label className="float-start text-dark form-label fs-5 bg-transparent">
                Photo:
              </label>
              <input
                type="file"
                value={pic}
                onChange={(e) => setPic(e.target.value)}
                className="form-control bg-white mb-2"
                placeholder="Enter your name"
              />
              <button
                type="submit"
                className="btn-sm px-5 py-2 fw-bold btncommanstyle"
                style={{ background: "#32ff7e", borderRadius: "0.4rem" }}
              >
                Submit
              </button>
            </form>
            {
              allentery.map((elem)=>{
                return(
                  <p>{elem.name}</p>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Rform;
