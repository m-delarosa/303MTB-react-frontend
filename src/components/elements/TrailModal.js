import React from 'react'
import Iframe from 'react-iframe'
import Modal from 'react-modal'

const TrailPreviewModal = (props) => {
    const { trailModalIsOpen, toggleTrailModal, id } = props
    const url = `https://www.mtbproject.com/widget?v=3&map=1&type=trail&id=${id}&x=-11722469&y=4772820&z=6`

    return (
        <Modal
            isOpen={trailModalIsOpen}
            className="modal-content trail-preview-content"
            overlayClassName="modal-overlay"
            onRequestClose={toggleTrailModal}>
            <div className="close" onClick={toggleTrailModal}>+</div>
            <Iframe
                url={url}
                maxWidth="1200px"
                width="100%"
                height="410px"
                scrolling="no"
                allow="geolocation"
                frameBorder="0"
                className="trail-iframe"
            />
        </Modal >
    )
}

export default TrailPreviewModal
