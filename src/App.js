import React from 'react'
import logo from './logo.svg'
import './App.css'
import AppContainerVerbose from './AppContainerVerbose'
import AppContainerConcise from './AppContainerConcise'

const App = ({ name, email, onNameChanged, onEmailChanged }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="App-intro">
      <AppContainerVerbose />
      <AppContainerConcise />
    </div>
  </div>
)

export default App
