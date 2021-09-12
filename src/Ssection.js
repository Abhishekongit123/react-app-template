import React from "react";
import Sscard from "./Ssectioncards";
import sscdarray from "./Sscdata";

function Sectiontwo() {
  return (
    <div className="container-fluid p-4 mt-2 mb-5" style={{ background: "#f1f2f6" }}>
      <div className="row my-3 py-4 mx-auto bg-white rounded d-flex justify-content-center" style={{ boxShadow: "0px 0px 7px #535c68" }} >
        <h2 className="text-center font-weight-bold py2" style={{ background: "transparent", color: "#e84118" }} id="fsh">
          Steps For Getting Started
        </h2>
        {sscdarray.map((val, index) => {
          return (
            <Sscard
              key={val.id}
              image={val.image}
              heading={val.heading}
              stitle={val.stitle}
              click={val.click}
              fill={val.fill}
              status={val.status}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sectiontwo;
