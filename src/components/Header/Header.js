import React, { useState } from 'react'
import Switch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';

import './Header.css'
import ProfileMenu from './ProfileMenu/ProfileMenu';

const Header = ({ setBackGround, setTheme, getTheme, setBackgroundTheme }) => {
    console.log("GET THEME:::> ", getTheme);
    const [backGrnd, setBackGrnd] = useState("dark-theme")
    const [checked, setChecked] = useState(getTheme)
    const toggleBckGrnd = () => {
        console.log('clicked')
        setChecked(!checked);
        backGrnd === "dark-theme" ? setBackGrnd("light-theme") : setBackGrnd("dark-theme");
        setTheme(!checked)
        return setBackGround(backGrnd)
    }

    useEffect(() => {
        backGrnd === 'dark-theme'
            ? document.getElementsByClassName('page-header')[0]
                ? (document.getElementsByClassName('page-header')[0].className =
                    'page-header')
                : (document.getElementsByClassName(
                    'page-header-light'
                )[0].className = 'page-header')
            : document.getElementsByClassName('page-header')[0]
                ? (document.getElementsByClassName('page-header')[0].className =
                    'page-header-light')
                : (document.getElementsByClassName('page-header-light')[0].className =
                    'page-header-light')
    }, [backGrnd])


    return (
        <div className="page-header">
            <div className="logo">
                <a href="http://localhost:3000">
                    <img
                        className="page-logo"
                        src={'/static/logo.png'}
                        alt=""
                        style={{ paddingLeft: '40px', height: "60px", width: "330px" }}
                    />
                </a>
            </div>
            <div className="page-toggle">
                <div className="page-toggle">
                    <label style={{ paddingRight: '10px' }}>
                        Light Mode
                    </label>
                    <Switch onChange={() => {
                        toggleBckGrnd()
                    }} checked={checked} uncheckedIcon={false} checkedIcon={false} offColor={"#241f3b"} onColor={"#241f3b"} borderRadius={34} />
                    <label style={{ paddingLeft: '10px' }}>
                        Dark Mode
                    </label>
                </div>
                <div className="profile-info" style={{ display: 'flex' }}>
                    <div
                        className="notification-bell"
                        style={{
                            float: 'right',
                            padding: '30px',
                            alignContent: 'center',
                            paddingTop: '20px',
                        }}
                    >
                        <a
                            href="www"
                            onClick={() => { }}
                            role="button"
                            data-toggle="dropdown"
                            id="dropdownMenu1"
                            style={{ float: 'left' }}
                            aria-expanded="true"
                        >
                            <FontAwesomeIcon
                                icon={faBell}
                                style={{ fontSize: '20px', float: 'left', color: '#7e57c6' }}
                            />
                        </a>
                        <span className="badge badge-danger"></span>
                    </div>
                    <div>
                        <p
                            style={{
                                fontStyle: 'bold',
                                justifyContent: 'center',
                                paddingTop: '10px',
                                paddingRight: '10px',
                            }}
                        >
                            Ramanpreet Singh <br />
                            <p style={{ fontSize: '9px' }}>
                                ramanpreet@gmail.com
                            </p>
                        </p>
                    </div>
                    <div>
                        <ProfileMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
