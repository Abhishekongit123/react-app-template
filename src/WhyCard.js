import React from "react";

const WhyCard = (props) => {
  return (
    <>
      <div className="col-sm-3 m-1 text-center bg-transparent">
        <img src={props.image} alt="no img" className="bg-transparent my-2 img-fluid mx-auto d-block w-25"/>
        <small className="fw-bold bg-transparent">{props.heading}</small>
      </div>
    </>
  );
};

export default WhyCard;
