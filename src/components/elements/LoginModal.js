import React from 'react'

const LoginModal = () => {
    return (
        <div className="bg-modal">
            <div className="modal-content">
                <div className="close">+</div>
                <img src="images/login128.png" alt="person and lock" />
                <form className="login-form">
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginModal
