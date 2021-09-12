import React from "react";
import WhyCard from "./WhyCard";
import whyarray from "./WhyArray";

const WhyUse = () => {
  return (
    <>
      <div className="container-fluid my-3 py-2" style={{background:"#f1f2f6"}}>
        <div className="row mx-auto d-flex justify-content-center bg-transparent  my-3">
        <h2 className="w-100 h-100 text-center my-2 bg-transparent" style={{color:"#e84118"}}>Why Choose Learncodecamp?</h2>
        <small className="w-100 h-100 text-center text-muted fw-bold mt-2 bg-transparent">Your current curriculum in not sufficient to land a good job.</small>
        <small className="w-100 h-100 text-center text-muted fw-bold mb-3 bg-transparent">Improve your profile with us,new-age industry program</small>
          {whyarray.map((val,index)=>{
            return(
              <WhyCard 
              key={val.id}
              image={val.image}
              heading={val.heading}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhyUse;
