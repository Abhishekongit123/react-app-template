import React from "react";

const Popularcard = (props) => {
  return (
    <>
      <div className="col-sm-3 mx-auto my-2 hoo">
        <div className="row bg- d-block">
          <div className="col my-3 ">
            <img src={props.image} className="img-fluid " />
          </div>
          <div className="col h-100 my-3">
            <h4 className="w-100 my-2 text-start bg-transparent fs-5">{props.heading}</h4>
            <h5 className="w-100 text-start bg-transparent fs-6">
              {props.subt}
              <small className="bg-transparent">{props.rate}</small>
              <p className="my-2 fw-bold ">₹ 599</p>
            </h5>
            <button className="btn-md w-100 px-2 py-2 fw-bold btncommanstyle">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popularcard;
