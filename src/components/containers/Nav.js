import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HamburgerMenu from 'react-hamburger-menu'


const Nav = (props) => {
    const { toggleLoginModal, toggleRegisterModal, loginModalIsOpen,
        registerModalIsOpen, sideDrawerIsOpen, toggleSideDrawer, handleLoginClick, handleRegisterClick } = props

    return (
        <header className="header">
            <nav className="nav">
                <div></div>
                <div className="nav-logo"><a href="/">303MTB</a></div>
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
