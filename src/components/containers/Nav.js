import React from 'react'

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">Trails</a></li>
                <li><a href="#trailFinder">Trail Finder</a></li>
                <li><a href="#forums">Forums</a></li>
                <li><a href="#about">About</a></li>
                <li id="profile">
                    <a id="login" href="#login">Login</a> / <a id="register" href="#register">Register</a>
                </li>
            </ul>
        </nav>
    )
}



export default Nav
