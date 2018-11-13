import React, { Component } from 'react';
import Mentor from './Mentor';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      mentorList: [],
      term: ''
    }
  }
  
  componentDidMount() {
    fetch('https://tc-mentor-fetch.herokuapp.com/api/mentor/list', {
      method: 'GET',
      "Content-Type": 'application/json'
    })
      .then(response => response.json())
      .then(json => this.setState({ mentorList: json }))      
  }

  mentorList() {
    if (this.state.term.trim() === '') {
      return this.state.mentorList
    } else {
      return this.state.mentorList
        .filter(mentor => mentor.mentoryType
          .find(type => type.toLowerCase().indexOf(this.state.term.toLowerCase()) > -1))
    }
  }

  render() {
    return (
      <div className="App">
        <div className="search">
          <label>Busco mentoria no seguinte assunto:</label>
          <div className="mentor-search" >
            <input placeholder="Ex.: UX" value={this.state.term} onChange={evt => this.setState({ term: evt.target.value })} />
          </div>
        </div>
        <div className="mentor-list">
          { this.mentorList().map(mentor => <Mentor key={mentor.description.name} mentor={mentor} />) }  
        </div>
      </div>
    );
  }
}

export default App;
