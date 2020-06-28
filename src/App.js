import React, { useState } from 'react'
import './App.css'
import Nav from './components/containers/Nav'
import Main from './components/containers/Main'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faQuestionCircle, faTimesCircle, faExclamationCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import Modal from 'react-modal'
import LoginModal from './components/elements/LoginModal'

library.add(faCheckCircle, faQuestionCircle, faTimesCircle, faExclamationCircle, faUserCircle)
Modal.setAppElement('#root')

function App() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)

  const toggleLoginModal = () => {
    loginModalIsOpen
      ? setLoginModalIsOpen(false)
      : setLoginModalIsOpen(true)
  }

  return (
    <div className="App">
      <Nav toggleLoginModal={toggleLoginModal} />
      {/* <LoginModal /> */}
      <Modal
        isOpen={loginModalIsOpen}
        className="modal-content login-modal"
        overlayClassName="modal-overlay"
        onRequestClose={toggleLoginModal}>
        <div className="close" onClick={toggleLoginModal}>+</div>
        <FontAwesomeIcon icon="user-circle" size="8x" />
        <form className="login-form">
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </Modal>
      <Main />
    </div >
  )
}

export default App
