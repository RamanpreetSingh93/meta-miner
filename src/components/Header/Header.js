import React from 'react';
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from '@fortawesome/free-solid-svg-icons'

import "./Header.css";

const Header = () => {
    return (
        <div className="page-header">
            <div className="logo">
                <img className="page-logo" src={"/static/logo.png"} alt="" style={{paddingLeft:"40px"}}/>
            </div>
            <div className="page-toggle">
                <div className="page-toggle">
                    <label style={{color: "white", paddingRight: "10px"}}>Light Mode</label>
                    <ToggleSwitch/>
                    <label style={{color: "white", paddingLeft: "10px"}}>Dark Mode</label>
                </div>
                <div className="profile-info" style={{display: "flex"}}>
                    <div className="notification-bell" style={{float: "right", padding: "30px", alignContent: "center", paddingTop: "20px"}}>
                        <a href="#" onClick={() => {
                        }} role="button" data-toggle="dropdown" id="dropdownMenu1"
                           data-target="#" style={{float: "left"}} aria-expanded="true">
                            <FontAwesomeIcon icon={faBell} style={{fontSize: "20px", float: "left", color: "#7e57c6"}}/>
                        </a>
                        <span className="badge badge-danger"></span>
                    </div>
                    <div>
                        <p style={{
                            fontStyle: "bold",
                            color: "white",
                            justifyContent: "center",
                            paddingTop: "10px",
                            paddingRight: "10px"
                        }}>Ramanpreet Singh <br/><p style={{fontSize: "9px", color: "white"}}>ramanpreet@gmail.com</p>
                        </p>
                    </div>
                    <div>
                        <img src="/static/acc_img.png" alt="" style={{height: "50px", width: "50px", marginRight:"50px"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;