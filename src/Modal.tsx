import React from "react";
import "./css/modal.css"

const closeBtn = function(e : React.SyntheticEvent) {
   const target = e.target as Element;
   const modal = target.closest('.modal') as Element;
   modal.classList.toggle('hide');
}

function Modal() {
    return (
        <div className="modal hide">
            <span className="close-btn" title="close" onClick={closeBtn}>×</span>
            <div className="text">
               Signup Form
            </div>
            <form action="#">
               <div className="field">
                  <label>Email or Phone</label>
                  <input type="text" required/>
               </div>
               <div className="field">
                  <label>Fullname</label>
                  <input type="text" required/>
               </div>
               <div className="field">
                  <label>Username</label>
                  <input type="text" required/>
               </div>
               <div className="field">
                  <label>Password</label>
                  <input type="password" required/>
               </div>
               <div className="forgot-pass">
                  <a href="#">Forgot Password?</a>
               </div>
               <button className="btn login-btn" onClick={closeBtn}>Register</button>
            </form>
        </div>
    )
}


export default Modal;