import React, { useState } from 'react'
import './App.css'
import Nav from './components/containers/Nav'
import Main from './components/containers/Main'
import LoginModal from './components/elements/LoginModal'
import RegisterModal from './components/elements/RegisterModal'
import Modal from 'react-modal'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle, faQuestionCircle, faTimesCircle, faExclamationCircle,
  faUserCircle, faHeart as faHeartSolid, faDirections, faEdit as FaEditSolid, faTree
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular, faEdit } from '@fortawesome/free-regular-svg-icons'
library.add(faCheckCircle, faQuestionCircle, faTimesCircle, faExclamationCircle,
  faUserCircle, faHeartRegular, faHeartSolid, faEdit, FaEditSolid, faDirections, faTree)

Modal.setAppElement('#root')

function App() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false)

  const toggleRegisterModal = () => {
    registerModalIsOpen
      ? setRegisterModalIsOpen(false)
      : setRegisterModalIsOpen(true)
  }

  const toggleLoginModal = () => {
    loginModalIsOpen
      ? setLoginModalIsOpen(false)
      : setLoginModalIsOpen(true)
  }

  return (
    <div className="App">
      <Nav
        loginModalIsOpen={loginModalIsOpen}
        registerModalIsOpen={registerModalIsOpen}
        toggleLoginModal={toggleLoginModal}
        toggleRegisterModal={toggleRegisterModal} />
      <LoginModal
        loginModalIsOpen={loginModalIsOpen}
        toggleRegisterModal={toggleRegisterModal}
        toggleLoginModal={toggleLoginModal} />
      <RegisterModal
        registerModalIsOpen={registerModalIsOpen}
        toggleRegisterModal={toggleRegisterModal}
        toggleLoginModal={toggleLoginModal} />
      <Main />
    </div >
  )
}

export default App
