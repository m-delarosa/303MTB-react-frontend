import React from 'react'
import './App.css'
import Nav from './components/containers/Nav'
import Main from './components/containers/Main'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faQuestionCircle, faTimesCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faQuestionCircle, faTimesCircle, faExclamationCircle)

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  )
}

export default App
