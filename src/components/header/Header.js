import React, { Component } from 'react'
import styles from './Header.module.css'
import logo from '../../images/tc-logo.svg'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      appTitle: 'Training Center - Encontre seu mentor',
    }
  }

  render() {
    return (
      <header className={styles.header}>
        <img src={this.props.logo} alt="Training Center Logo" />
        <h1>{this.state.appTitle}</h1>
      </header>
    )
  }
}

export default Header
