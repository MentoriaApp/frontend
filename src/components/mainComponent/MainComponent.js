import React, { Component } from 'react'
import styles from './MainComponent.module.css'
import SearchSection from '../searchSection/SearchSection'
import Loading from '../loading/Loading'
import Mentor from '../mentor/Mentor'

class MainComponent extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      mentorList: [],
      term: '',
      appTitle: 'Training Center - Encontre seu mentor',
    }
  }

  componentDidMount() {
    fetch(`https://tc-mentor-fetch.herokuapp.com/api/mentor/list`, {
      method: 'GET',
      'Content-Type': 'application/json',
    })
      .then(response => response.json())
      .then(json => {
        // Function to avoid the duplicated object problem
        const filteredArr = json.reduce((acc, current) => {
          //Trying to find another item with the description equals to the current returned by the reduce
          const x = acc.find(
            item =>
              JSON.stringify(item.description) ===
              JSON.stringify(current.description)
          )
          if (!x) {
            return acc.concat([current])
          } else {
            return acc
          }
        }, [])

        this.setState({ mentorList: filteredArr, loading: false })
      })
  }

  mentorList() {
    if (this.state.term.trim() === '') {
      return this.state.mentorList
    } else {
      return this.state.mentorList
        .filter(mentor => mentor.isActive)
        .filter(mentor =>
          mentor.mentoryType.find(
            type =>
              type.toLowerCase().indexOf(this.state.term.toLowerCase()) > -1
          )
        )
    }
  }

  renderMentors() {
    if (this.state.loading) return <Loading />

    const mentorList = this.mentorList()
    if (mentorList.length > 0)
      return mentorList.map(mentor => (
        <Mentor key={mentor.description.name} mentor={mentor} />
      ))
    else
      return (
        <div className={styles.center}>
          <h2>
            Sem resultados para <b>{this.state.term}</b>
          </h2>
        </div>
      )
  }

  getSearchTerm() {
    return this.state.term
  }

  setSearchTerm(term) {
    this.setState({ term: term })
  }

  render() {
    return (
      <div>
        <SearchSection
          getSearchTerm={this.getSearchTerm.bind(this)}
          setSearchTerm={this.setSearchTerm.bind(this)}
        />
        <div className={styles.center}>
          <h3>Mentores encontrados</h3>
        </div>
        <div className={styles.mentorListWrapper}>{this.renderMentors()}</div>
      </div>
    )
  }
}

export default MainComponent
