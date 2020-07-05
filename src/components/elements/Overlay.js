import React from 'react'

const Overlay = (props) => {
    const { toggleSideDrawer } = props

    const handleOverlayClick = () => {
        toggleSideDrawer()
    }

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
        </div>
    )
}

export default Overlay
