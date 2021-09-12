import React from "react";
import PermContactCalendarTwoToneIcon from '@material-ui/icons/PermContactCalendarTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
const SignUp = () => {
  return (
    <>
      <div className="row mx-auto d-flex justify-content-center shadow rounded py-3" style={{background:"#95afc0"}}>
        <div className="col-sm-5 col-md-5 rounded-start">
          <img
            src="projectimg/rocket.jpg"
            className="img-fluid d-block mx-auto m-2 rounded"
            style={{width:"100%"}}
          />
        </div>
        <div className="col-sm-5 col-md-5 rounded-end">
          <form className="p-5">
          <AccountCircleIcon style={{color:"#192a56"}} className="mb-2" />
          <h4 className="mb-4" style={{color:"#273c75"}}> Registration Form </h4>
            <div className="input-group my-2">
              <span className="input-group-text bg-transparent rounded-0 border-top-0 border-start-0 border-end-0" ><PermContactCalendarTwoToneIcon style={{color:"#e67e22"}} /></span>
              <input type="text" placeholder="Enter Username" className="form-control rounded-0 border-top-0 border-start-0 border-end-0" id="clicke" />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text bg-transparent rounded-0 border-top-0 border-start-0 border-end-0"><EmailTwoToneIcon style={{color:"#e74c3c"}} /></span>
              <input type="email" placeholder="Valid Email Adresss" className="form-control rounded-0 border-top-0 border-start-0 border-end-0" id="clicke" />
            </div>
            <div className="w-100 d-flex">
            <div className="form-check form-switch d-flex my-2 mx-3">
              <input className="form-check-input" name="m" type="radio" id="male"/>
              <label className="form-check-label fw-bold mx-2" for="male">Male</label>
            </div>
            <div className="form-check form-switch d-flex my-2 mx-3">
              <input className="form-check-input" name="m" type="radio" id="male"/>
              <label className="form-check-label fw-bold mx-2" for="male">Female</label>
            </div>
            </div>
            <div className="input-group my-2">
              <span className="input-group-text bg-transparent rounded-0 border-top-0 border-start-0 border-end-0"><PhoneIphoneTwoToneIcon style={{color:"#2980b9"}} /></span>
              <input type="text" placeholder="eg- 123456790" className="form-control rounded-0 border-top-0 border-start-0 border-end-0" id="clicke"/>
            </div>
            <div className="input-group my-2">
              <span className="input-group-text bg-transparent rounded-0 border-top-0 border-start-0 border-end-0"><LockOpenTwoToneIcon style={{color:"#192a56"}}/></span>
              <input type="password" placeholder="Create Password" className="form-control rounded-0 border-top-0 border-start-0 border-end-0" id="clicke"/>
            </div>
            <button className="btn-md w-100 px-2 py-2 fw-bold rounded" style={{border:"none",background:"#3498db"}}>Signup Now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
