import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/containers/Nav'
import Main from './components/containers/Main'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  )
}

export default App
