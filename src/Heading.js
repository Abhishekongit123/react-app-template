import React from 'react';

function Heading() {
  return (
    <div className="heading" style={{zIndex:"1"}}>
    <h5 className="bg-transparent my-2 mx-2 logo" style={{textAlign:"center",fontFamily:"'Palette Mosaic', cursive",width:"11rem",height:"auto",float:"left",color:"#00a8ff"}}>Learncodecamp</h5>
      <a href="#" role="button" className="btn btn-sm">
      <img src="projectimg/profile.svg" className="profileimg" alt="Profile" />
      </a>
      <a href="#about" role="button" className="btn btn-sm fs-6 text-white hbtn">
      About
      </a>
      <a href="#courses" role="button" className="btn btn-sm fs-6  text-white hbtn">
      Courses
      </a>
      <a href="#contact" role="button" className="btn btn-sm fs-6  text-white hbtn">
      Contact Us
      </a>
    </div>
  );
}

export default Heading;