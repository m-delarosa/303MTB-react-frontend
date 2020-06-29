import React from 'react'

const Nav = (props) => {
    const { toggleLoginModal, toggleRegisterModal, loginModalIsOpen, registerModalIsOpen } = props

    const checkToken = () => {
        return (
            localStorage.token
                ? <li><a href="/profile">Profile</a></li>
                : <li id="profile"><a id="login" href="#login" onClick={handleLoginClick}>Login</a> / <a id="register" href="#register" onClick={handleRegisterClick}>Register</a></li>
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


    return (
        <nav className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/trails">Trail Reports</a></li>
                <li><a href="/trailfinder">Trail Finder</a></li>
                <li><a href="/forums">Forums</a></li>
                <li><a href="/about">About</a></li>
                {checkToken()}
            </ul>
        </nav >
    )
}



export default Nav
