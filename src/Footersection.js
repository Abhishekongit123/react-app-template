import React from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import PolicyOutlinedIcon from '@material-ui/icons/PolicyOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import CheckCircleOutlineOutlinedIco from '@material-ui/icons/CheckCircleOutlineOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer(props) {
    return(
        <div className ="container-fluid py-4 bg-dark ">
            <div className="row mx-3 bg-transparent text-white">
            <div className="col-sm-3 bg-transparent">
            <h4 className="bg-transparent m-3 mt-0" style={{fontFamily:"'Palette Mosaic', cursive"}}>Learncodecamp</h4><br />
            <h5 className="m-3 mt-0 bg-transparent" style={{color:"#ffa502"}}>About Us</h5>
            <p className="m-3 mt-0 bg-transparent">We wnat to help all learners,that's why we provide lotes of courses</p><br />
            <h5 className="m-3 mt-0 bg-transparent" style={{color:"#ffa502"}}>Contact Us<br />
            <label className="m-3 mt-0 bg-transparent">
                <label className="my-1 d-block bg-transparent" style={{fontSize:"15px"}}><PhoneInTalkIcon  style={{background:"transparent",marginRight:"4px",color:"#ffa502"}} /><label className="text-white bg-transparent">+91 9999999999</label></label>
                <label className="my-1 d-block bg-transparent" style={{fontSize:"15px"}}><EmailOutlinedIcon style={{background:"transparent",marginRight:"4px",color:"#ffa502"}} /><label className="text-white bg-transparent">yourmail.com</label></label>
            </label>
            </h5>
            </div>
            <div className="col-sm-3 bg-transparent">
            <h4 className="m-3 mt-0 mb-2 ml-0 bg-transparent" style={{color:"#ffa502"}}>Information</h4><br />
                <li className="d-block bg-transparent mt-1"><InfoOutlinedIcon style={{background:"transparent", marginLeft:"8px", marginRight:"4px",color:"#ffa502"}} />About Us</li>
                <li className="d-block bg-transparent mt-1"><PageviewOutlinedIcon style={{background:"transparent", marginLeft:"8px", marginRight:"4px",color:"#ffa502"}}  />More Search</li>
                <li className="d-block bg-transparent mt-1"><EmojiEventsOutlinedIcon style={{background:"transparent", marginLeft:"8px", marginRight:"4px",color:"#ffa502"}} />Events</li>
                <li className="d-block bg-transparent mt-1"><BookOutlinedIcon style={{background:"transparent", marginLeft:"8px", marginRight:"4px",color:"#ffa502"}} />Blog</li>
                <li className="d-block bg-transparent mt-1"><VpnKeyOutlinedIcon style={{background:"transparent", marginLeft:"8px", marginRight:"4px",color:"#ffa502"}} />Security</li>
            </div>
            <div className="col-sm-3 bg-transparent">
            <h4 className="d-block bg-transparent" style={{color:"#ffa502"}}>Helpful Links</h4><br />
            <a href="#" className="d-block bg-transparent text-decoration-none text-white"><CheckCircleOutlineOutlinedIco style={{background:"transparent", marginRight:"4px",color:"#ffa502"}} />Services</a>
            <a href="#" className="d-block bg-transparent text-decoration-none text-white"><LiveHelpOutlinedIcon style={{background:"transparent", marginRight:"4px",color:"#ffa502"}} />Supports</a>
            <a href="#" className="d-block bg-transparent text-decoration-none text-white"><LocalLibraryOutlinedIcon style={{background:"transparent", marginRight:"4px",color:"#ffa502"}} />Terms & Conditions</a>
            <a href="#" className="d-block bg-transparent text-decoration-none text-white"><PolicyOutlinedIcon style={{background:"transparent", marginRight:"4px",color:"#ffa502"}} />Privacy Policy</a>
            </div>
            <div className="col-sm-3 bg-transparent">
                <h5 className="d-block bg-transparent">Subscribe More Info</h5>
                <input type="email" className="form-control border-rounded border-0 mt-3 fw-bold inputfield" placeholder="Enter your valid mail" style={{borderRadius:"7px"}} />
                <button className="btn btn-primary btn-sm my-3 px-4 fw-bold inputfieldbtn" style={{background:"#ffa502"}}>Subscribe</button>
            </div>
            <hr style={{color:"#ffffff",height:"5px"}} />
            </div>
            <div className="cotainer-fluid bg-transparent">
                <div className="d-flex justify-content-center bg-transparent" style={{width:"100%",height:"auto"}}>
                    <a href="#" className="text-decoration-none text-white m-2 p-2" style={{borderRadius:"50%",background:"#ffa502"}}><FacebookIcon style={{background:"transparent"}}  /></a>
                    <a href="#" className="text-decoration-none text-white m-2 p-2" style={{borderRadius:"50%",background:"#ffa502"}}><TwitterIcon style={{background:"transparent"}} /></a>
                    <a href="#" className="text-decoration-none text-white m-2 p-2" style={{borderRadius:"50%",background:"#ffa502"}}><InstagramIcon style={{background:"transparent"}} /></a>
                </div>
            </div>
        </div>
    );
    
}

export default Footer;