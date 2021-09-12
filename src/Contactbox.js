import React from "react";
import MapIcon from "@material-ui/icons/Map";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";

function Contactbox() {
  return (
    <div className="container-fluid my-3 p-1" id="contact">
      <div className="row mx-3 my-3 p-2">
        <div className="col-sm-5 m-1 p-3 mx-auto">
          <h4 className="bg-transparent">Feel Free To Contact</h4>
          <small className="text-muted bg-transparent">
            Hello everyone! have a great day, I am here to help you. if you want
            have any quiroy regarding any of your doudt or any suggetion for me
            then please mall me. Thank you
          </small>
          <li className="text-muted mt-2" style={{ listStyle: "none" }}>
            <MapIcon className="bg-dark mx-2 p-1 text-white" />
            B.L.W, Varanasi, UP
          </li>
          <li className="text-muted mt-2" style={{ listStyle: "none" }}>
            <PhoneIphoneIcon className="bg-dark mx-2 p-1 text-white" />
            +91 7291205377
          </li>
          <li className="text-muted mt-2" style={{ listStyle: "none" }}>
            <MailOutlinedIcon className="bg-dark mx-2 p-1 text-white" />
            yourvalidmail@gmail.com
          </li>
          <li className="text-muted mt-2" style={{ listStyle: "none" }}>
            <LanguageOutlinedIcon className="bg-dark mx-2 p-1 text-white" />
            www.learncodecamp.com
          </li>
        </div>
        <div className="col-sm-5 m-1 p-3 mx-auto">
          <div className="mb-3 row">
            <label className="col-sm-2 py-2 text-muted rounded-start" style={{background:"#dcdde1"}}>
              Email*
            </label>
            <div className="col-sm-10 text-dark rounded-end" style={{background:"#dcdde1"}}>
              <input
                type="text" readOnly className="form-control-plaintext" value="yourvalidmail@gmail.com" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 py-2 text-muted rounded-start" style={{background:"#dcdde1"}}>
              Name*
            </label>
            <div className="col-sm-10 text-dark rounded-end" style={{background:"#dcdde1"}}>
              <input
                type="text" className="form-control-plaintext"/>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 py-2 text-muted rounded-start" style={{background:"#dcdde1"}}>
              Massages*
            </label>
            <div className="col-sm-10 text-dark rounded-end" style={{background:"#dcdde1"}}>
              <textarea className="form-control-plaintext"></textarea>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 py-2 text-muted rounded-start" style={{background:"#dcdde1"}}>
              Query
            </label>
            <div className="col-sm-10 text-dark rounded-end" style={{background:"#dcdde1"}}>
              <textarea className="form-control-plaintext"></textarea>
            </div>
          </div>
          <div className="d-flex py-2">
          <button className="btn-md mx-auto px-5 py-2 fw-bold btncommanstyle" style={{background:"#32ff7e",borderRadius:"0.4rem"}}>Submit Response</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactbox;
