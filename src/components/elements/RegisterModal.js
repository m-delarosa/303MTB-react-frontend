import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RegisterModal = (props) => {
    const { registerModalIsOpen, toggleRegisterModal, toggleLoginModal } = props

    const handleLoginLink = () => {
        toggleRegisterModal()
        toggleLoginModal()
    }

    const handleRegistration = (event) => {
        event.preventDefault()
        const $registerForm = event.target
        const registrationFormData = new FormData($registerForm)
        const name = registrationFormData.get("name")
        const username = registrationFormData.get("username")
        const email = registrationFormData.get("email")
        const password = registrationFormData.get("password")
        const registrationBody = { user: { name, username, email, password } }

        fetch("https://mtb-303.herokuapp.com/users", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationBody),
        })
            .then((response) => response.json())
            .then((result) => handleRegistrationUserResponse(result, $registerForm))
    }

    const handleRegistrationUserResponse = (response, $form) => {
        const $errorMessages = document.getElementById("response-error-messages")

        if ($errorMessages) {
            $form.removeChild($errorMessages)
        }
        if (response.user) {
            console.log("User created")
            $form.reset()
            const $responseMessage = document.createElement("li")
            $responseMessage.innerText = `Welcome ${response.user.name}, your user account was created sucessfully.\n Try logging in.`
            $form.append($responseMessage)
        } else {
            const responseKeys = Object.keys(response)
            const $errorMessages = document.createElement("ul")
            $errorMessages.id = "response-error-message"
            $errorMessages.innerText = "We were unable to create your account for the following reasons:"

            responseKeys.forEach((responseKey) => {
                const $li = document.createElement("li")
                $li.id = "response-error-message"
                $li.innerText = response[responseKey]
                $errorMessages.append($li)
            })

            $form.prepend($errorMessages)
            //   $responseList.append($responseMessage)
        }
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
                <form className="register-form" onSubmit={handleRegistration}>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit" className="login-button">Submit</button>
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
