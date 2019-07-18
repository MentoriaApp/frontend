import React, { Component } from 'react'
import styles from './SearchSection.module.css'

class SearchSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appTitle: 'Training Center - Encontre seu mentor',
      term: '',
    }
  }

  render() {
    return (
      <div className={styles.searchSection}>
        <h2>Busco mentoria para o seguinte assunto:</h2>
        <div className={styles.searchArea}>
          <input
            placeholder="Ex.: UX"
            value={this.props.getSearchTerm()}
            onChange={evt => this.props.setSearchTerm(evt.target.value)}
          />
        </div>
      </div>
    )
  }
}

export default SearchSection
