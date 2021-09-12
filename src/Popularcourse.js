import React from "react";
import Popularcard from "./Popularcard";
import populararray from "./PopularCarray";

const Popularcourse = () => {
  return (
    <>
      <div className="container-fluid my-3 text-center py-3" style={{ background: "#f1f2f6" }} id="courses">
        <div className="row m-auto d-flex bg-transparent">
          {populararray.map((val, index) => {
            return (
              <Popularcard
                key={val.id}
                image={val.img1}
                heading={val.ctitle1}
                subt={val.subtitle1}
                rate={val.reating1}
              />
            );
          })}
        </div>
        <div className="row m-auto d-flex bg-transparent my-2">
        {populararray.map((val, index) => {
            return (
              <Popularcard
                key={val.id}
                image={val.img2}
                heading={val.ctitle2}
                subt={val.subtitle2}
                rate={val.reating2}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Popularcourse;
