import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SideDrawer = (props) => {
    const { toggleSideDrawer, show, handleLoginClick, handleRegisterClick } = props

    let drawerClasses = 'side-drawer'
    if (show) {
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    {localStorage.token
                        ? <a href="/profile">Profile</a>
                        : <a href="#login" onClick={handleLoginClick}>Login</a> / <a id="register" href="#register" onClick={handleRegisterClick}>Register</a>
                    }
                </li>
                <li><a href="/trails">Trail Reports</a></li>
                <li><a href="/trailfinder">Trail Finder</a></li>
                <li><a href="/forums">Forums</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer
