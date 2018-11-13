import React, { Component } from 'react';
import Mentor from './Mentor';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      mentorList: []
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

  render() {
    return (
      <div className="App">
        { this.state.mentorList.map(mentor => <Mentor key={mentor.description.name} mentor={mentor} />) }  
      </div>
    );
  }
}

export default App;
