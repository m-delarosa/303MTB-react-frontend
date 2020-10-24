import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginModal = (props) => {
    const { loginModalIsOpen, toggleLoginModal, toggleRegisterModal } = props

    const handleLogin = (event) => {
        event.preventDefault()

        const $form = event.target
        const loginFormData = new FormData($form)
        const username = loginFormData.get("username")
        const password = loginFormData.get("password")
        const loginBody = { username, password }

        fetch("https://mtb-303.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginBody),
        })
            .then((response) => response.json())
            .then((result) => {
                handleLoginUserResponse(result, $form)
            })
    }

    const handleLoginUserResponse = (response, $form) => {
        const $errorMessage = document.getElementById("response-error-message")

        if ($errorMessage) {
            $form.removeChild($errorMessage)
        }
        if (response.user) {
            localStorage.setItem("token", response.token)
            toggleLoginModal()
        } else {
            const $errorMessage = document.createElement("li")
            $errorMessage.id = "response-error-message"
            $errorMessage.innerText = "Please verify login credentials and try again."
            $form.append($errorMessage)
        }
    }

    const handleRegistrationLink = () => {
        toggleLoginModal()
        toggleRegisterModal()
    }

    return (
        <Modal
            isOpen={loginModalIsOpen}
            className="modal-content login-modal"
            overlayClassName="modal-overlay"
            onRequestClose={toggleLoginModal}>
            <div className="close" onClick={toggleLoginModal}>+</div>
            <FontAwesomeIcon icon="user-circle" size="8x" color="green" />
            <form className="login-form" onSubmit={handleLogin}>
                <input className="email-input" type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button className="login-button" type="submit">Login</button>
                <li><a
                    className="login-register-link"
                    href="#register"
                    onClick={handleRegistrationLink}>
                    Don't have an account? Sign Up
                    </a>
                </li>
            </form>
        </Modal >
    )
}

export default LoginModal
