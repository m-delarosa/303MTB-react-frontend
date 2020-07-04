import React from 'react'

const SideDrawer = (props) => {
    const { toggleSideDrawer } = props

    const handleOverlayClick = () => {
        toggleSideDrawer()
    }

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <nav className="side-drawer">
                <ul>
                    <li><a href="/trails">Trail Reports</a></li>
                    <li><a href="/trailfinder">Trail Finder</a></li>
                    <li><a href="/forums">Forums</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SideDrawer
