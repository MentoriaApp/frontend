import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      mentorList: []
    }
  }
  
  componentDidMount() {
    //let response = ''
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
        { this.state.mentorList.map(mentor => <h1 key={mentor.description.name}>{mentor.description.name}</h1>) }  
      </div>
    );
  }
}

export default App;
