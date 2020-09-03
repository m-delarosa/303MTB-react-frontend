import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HamburgerMenu from 'react-hamburger-menu'


const Nav = (props) => {
    const { toggleLoginModal, toggleRegisterModal, loginModalIsOpen,
        registerModalIsOpen, sideDrawerIsOpen, toggleSideDrawer, handleLoginClick, handleRegisterClick } = props

    const checkToken = () => {
        return (
            localStorage.token !== isNaN
                ? <a className="" href="/profile"><FontAwesomeIcon icon="user-circle" className="profile-icon" color="#495057" /></a>
                : <a className="nav-login" href="#login" onClick={handleLoginClick}>Login</a> / <a id="register" className="nav-login" href="#register" onClick={handleRegisterClick}>Register</a>
        )
    }

    return (
        <header className="header">
            <nav className="nav">
                <div></div>
                <div className="nav-logo"><a href="/">303MTB</a></div>
                <ul className="nav-list">
                    <li><a href="/trails">Trail Reports</a></li>
                    <li><a href="/trailfinder">Trail Finder</a></li>
                    <li><a href="/forums">Forums</a></li>
                    {/* <li><a href="/about">About</a></li> */}
                </ul>
                {localStorage.token
                    ? (
                        <div className="nav-profile">
                            <a href="/profile"><FontAwesomeIcon icon="user-circle" className="profile-icon" color="#303030" /></a>
                        </div>
                    )
                    : (
                        <div className="nav-login">
                            <a href="#login" onClick={handleLoginClick}>Login</a> / <a id="register" href="#register" onClick={handleRegisterClick}>Register</a>
                        </div>
                    )
                }
                {/* <div className="nav-login">
                    <a href="#login" onClick={handleLoginClick}>Login</a> / <a id="register" href="#register" onClick={handleRegisterClick}>Register</a>
                </div> */}
                {/* {checkToken()} */}
                <HamburgerMenu
                    isOpen={sideDrawerIsOpen}
                    menuClicked={toggleSideDrawer}
                    width={30}
                    height={22}
                    strokeWidth={3}
                    rotate={0}
                    color='#303030'
                    borderRadius={0}
                    animationDuration={0.5}
                    className="hamburger"
                />
            </nav >
        </header>
    )
}



export default Nav
