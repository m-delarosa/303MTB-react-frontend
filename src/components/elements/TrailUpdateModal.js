import React, { useState } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RegisterModal = (props) => {
    const { trailUpdateModalIsOpen, toggleTrailUpdateModal, updateTrailStatus } = props

    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')

    const handleTrailUpdate = (e) => {
        e.preventDefault()
        updateTrailStatus(description)
        setDescription('')
    }

    return (
        <div>
            <Modal
                isOpen={trailUpdateModalIsOpen}
                className="modal-content login-modal update-modal"
                overlayClassName="modal-overlay"
                onRequestClose={toggleTrailUpdateModal}>
                <div className="close" onClick={toggleTrailUpdateModal}>+</div>
                <FontAwesomeIcon icon="tree" size="8x" color="green" />
                <form className="register-form" onSubmit={handleTrailUpdate}>
                    <div className="update-radio-buttons">
                        <label for="All Clear" className="update-labels">
                            <FontAwesomeIcon icon="check-circle" color="green" size="2x" />
                            <p>All Clear</p>
                            <input type="radio" name="All Clear" value="All Clear" />
                        </label>
                        <label for="Minor Issues" className="update-labels">
                            <FontAwesomeIcon icon="exclamation-circle" color="#E1AD01" size="2x" />
                            <p>Minor Issues</p>
                            <input type="radio" name="Minor Issues" value="Minor Issues" />
                        </label>
                        <label for="Bad / Closed" className="update-labels">
                            <FontAwesomeIcon icon="times-circle" color="crimson" size="2x" />
                            <p>Bad / Closed</p>
                            <input type="radio" name="Bad / Closed" value="Bad / Closed" />
                        </label>
                    </div>
                    <textarea
                        className="update-textarea center"
                        placeholder="Optional details"
                        value={description}
                        cols="40"
                        rows="3"
                        maxLength="125"
                        onChange={(e) => setDescription(e.target.value)} >
                    </textarea>
                    <button type="submit" className="login-button">Submit</button>
                    <li><a
                        className="login-register-link"
                        href="#register">
                        There is a 125 character limit on trail reports.
                        </a>
                    </li>
                </form>
            </Modal>
        </div>
    )
}

export default RegisterModal
