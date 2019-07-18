import React, { Component } from 'react'
import styles from './App.module.css'

import logo from './images/tc-logo.svg'
import Header from './components/header/Header'
import MainComponent from './components/mainComponent/MainComponent'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Header logo={logo} />
        <MainComponent />
      </div>
    )
  }
}

export default App
