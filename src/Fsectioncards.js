import React from "react";

function Fscard(props) {
  return (
      <div className="col-sm m-1 bg-transparent text-center counterbox d-inline-block" style={{ fontFamily: "'Gowun Dodum', sans-serif" }}>
        <img src={props.icon} alt="no image" className="m-auto"style={{ width: "6rem", height: "auto", background: "transparent" }}/>
        <br />
        <small className="text-muted fw-bold bg-transparent" style={{ fontSize: "1.1rem" }}>
          {props.subt}
        </small>
        <br />
        <h4 className="fw-bold bg-transparent" style={{color:"#341f97"}}>{props.num}</h4>
      </div>
  );
}

export default Fscard;
