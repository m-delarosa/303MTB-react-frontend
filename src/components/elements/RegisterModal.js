import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RegisterModal = (props) => {
    const { registerModalIsOpen, toggleRegisterModal, toggleLoginModal } = props

    const handleLoginLink = () => {
        toggleRegisterModal()
        toggleLoginModal()
    }

    return (
        <div>
            <Modal
                isOpen={registerModalIsOpen}
                className="modal-content login-modal"
                overlayClassName="modal-overlay"
                onRequestClose={toggleRegisterModal}>
                <div className="close" onClick={toggleRegisterModal}>+</div>
                <FontAwesomeIcon icon="user-circle" size="8x" color="green" />
                <form class="register-form">
                    <input type="text" name="name" placeholder="name" />
                    <input type="text" name="username" placeholder="username" />
                    <input type="text" name="email" placeholder="email" />
                    <input type="password" name="password" placeholder="password" />
                    <button type="submit">Submit</button>
                    <li><a
                        className="login-register-link"
                        href="#register"
                        onClick={handleLoginLink}>
                        Already have an account? Sign In
                        </a>
                    </li>
                </form>
            </Modal>
        </div>
    )
}

export default RegisterModal
