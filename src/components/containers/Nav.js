import React from 'react'

const Nav = (props) => {
    const { toggleLoginModal } = props

    const checkToken = () => {
        return (
            localStorage.token
                ? <li><a href="/profile">Profile</a></li>
                : <li id="profile"><a id="login" href="#login" onClick={toggleLoginModal}>Login</a> / <a id="register" href="#register">Register</a></li>
        )
    }


    return (
        <nav className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/trails">Trails</a></li>
                <li><a href="/trailfinder">Trail Finder</a></li>
                <li><a href="/forums">Forums</a></li>
                <li><a href="/about">About</a></li>
                {checkToken()}
            </ul>
        </nav >
    )
}



export default Nav
