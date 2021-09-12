import React, { useState } from "react";
import Rform from "./Rform";
import Subcontent from "./Subcontent";
import RubberBand from "react-reveal/RubberBand";

const Subheading = () => {
  const [title, setTitle] = useState("A online learning platform for giving user better experience");
  const [subcont, setSubcont] = useState(<Subcontent />);

  function changeHeading() {
    if (title === "A online learning platform for giving user better experience") {
      setTitle(<Rform />);
      setSubcont("");
    } else {
      setTitle("A online learning platform for giving user better experience");
      setSubcont(<Subcontent />);
    }
  }
  
  return (
    <div className="container-fluid subheading">
      <div className="text-center bg-transparent w-100">
        <RubberBand>
          <h1 className="bg-transparent"style={{color: "#00a8ff",marginTop: "2rem",marginBottom: "2rem",fontFamily: "'Palette Mosaic', cursive",}}>
            Learncodecamp
          </h1>
        </RubberBand>
        <h3
          className="bg-transparent w-100"
          style={{ fontWeight: "normal", color: "white" }}
        >
          {title}
        </h3>
        <button className="mybtn" onClick={changeHeading}>
          Register Now
        </button>
        {subcont}
      </div>
    </div>
  );
};

export default Subheading;
