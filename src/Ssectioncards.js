import React from 'react';

function Sscard(props) {
    return(
        <div className="col-sm-3 p-2 my-2 text-center border-0 bg-transparent">
               <img src={props.image} alt="no found" className="m-auto" id="image" />
               <h1 className="bg-transparent mt-2 ssch">{props.heading}</h1>
               <p className="bg-transparent text-muted font-weight-bolder sscp">{props.stitle}</p>
               <ul className="bg-transparent gap-2 px-1" style={{width:"100%",listStyle:"none"}} id="olist">
                   <li className="p-1 bg-transparent ">
                   <button type="button" className="btn-sm btam"> {props.click} </button>
                   </li>
                   <li className="p-1 bg-transparent">
                   <button type="button" className="btn-sm btam"> {props.fill} </button>
                   </li>
                   <li className="p-1 bg-transparent">
                   <button type="button" className="btn-sm btam"> {props.status} </button>
                   </li>
               </ul>
        </div>
    );
}
export default Sscard; 