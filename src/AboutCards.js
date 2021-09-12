import React from "react";

const AboutCards = (props) => {
  return (
    <>
      <div className="ac1">
        <img src={props.image} alt="no img" className="img-fluid mx-auto d-block w-75 h-75" />
        <h4 className="fw-bold w-100 h-100 p-1 mt-2 rounded text-center" style={{ backgroundColor: "#f7f1e3" }}>
          {props.heading}
        </h4>
        <p className="w-100 h-100 text-break fw-bold text-center bg-transparent">
          {props.content}
        </p>
      </div>
    </>
  );
};

export default AboutCards;
