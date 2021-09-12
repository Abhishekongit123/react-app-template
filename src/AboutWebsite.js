import React from "react";
import AboutCards from "./AboutCards";
import aboutarray from "./AboutArray";

const AboutWebsite = () => {
  return (
    <>
      <div className="container-fluid mb-3 mt-5 p-2" id="about">
        <div
          className="row d-flex justify-content-center mx-auto p-2"
          style={{
            backgroundImage:
              "linear-gradient(-13.5deg, #f1f2f6 50% , #70a1ff 50%)",
            borderRadius: "1rem",
          }}
        >
          <div className="col-sm-3 my-2 mx-2 p-1 bg-transparent">
            <AboutCards
              image={aboutarray[0].image}
              heading={aboutarray[0].heading}
              content={aboutarray[0].content}
            />
          </div>
          <div className="col-sm-3 my-2 mx-2 p-1 bg-transparent">
            <AboutCards
              image={aboutarray[1].image}
              heading={aboutarray[1].heading}
              content={aboutarray[1].content}
            />
          </div>
          <div className="col-sm-3 my-2 mx-2 p-1 bg-transparent">
            <AboutCards
              image={aboutarray[2].image}
              heading={aboutarray[2].heading}
              content={aboutarray[2].content}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutWebsite;
