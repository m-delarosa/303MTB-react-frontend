import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HamburgerMenu from 'react-hamburger-menu'


const Nav = (props) => {
    const { toggleLoginModal, toggleRegisterModal, loginModalIsOpen,
        registerModalIsOpen, sideDrawerIsOpen, toggleSideDrawer } = props

    const checkToken = () => {
        return (
            localStorage.token
                ? <a className="nav-login" href="/profile"><FontAwesomeIcon icon="user-circle" className="profile-icon" color="#495057" /></a>
                : <a className="nav-login" href="#login" onClick={handleLoginClick}>Login</a> / <a id="register" href="#register" onClick={handleRegisterClick}>Register</a>
        )
    }

    const handleLoginClick = () => {
        if (registerModalIsOpen) {
            toggleRegisterModal()
            toggleLoginModal()
        } else toggleLoginModal()
    }

    const handleRegisterClick = () => {
        if (loginModalIsOpen) {
            toggleLoginModal()
            toggleRegisterModal()
        } else toggleRegisterModal()
    }

    //If undoing, just undo until header tags below disappear. 
    return (
        <header className="header">
            <nav className="nav">
                <div></div>
                <div className="nav-logo"><a href="/">303MTB</a></div>
                <ul className="nav-list">
                    <li><a href="/trails">Trail Reports</a></li>
                    <li><a href="/trailfinder">Trail Finder</a></li>
                    <li><a href="/forums">Forums</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <div>{checkToken()}</div>
                <HamburgerMenu
                    isOpen={sideDrawerIsOpen}
                    menuClicked={toggleSideDrawer}
                    width={18}
                    height={15}
                    strokeWidth={2}
                    rotate={0}
                    color='#303030'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </nav >
        </header>
    )
}



export default Nav
