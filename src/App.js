import React, { Component } from 'react'
import Mentor from './components/Mentor'
import styled from 'react-emotion'

import logo from './images/tc-logo.svg'

const Wrapper = styled('div')`
  font-family: 'Ubuntu', sans-serif;
`

const TopBar = styled('header')`
  background: #2b7dbd;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 930px) {
    img {
      width: 50px;
      margin: 5px;
      transition: width 1s ease-out;
    }
  }
`

const SearchSection = styled('section')`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;

  h2,
  h3 {
    text-align: center;
  }
`

const SearchArea = styled('div')`
  border: solid;
  border-width: 1px;
  height: 50px;
  padding: 5px;
  border-color: darkgray;
  border-radius: 5px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: x-large;
    font-family: 'Open Sans', sans-serif;
  }
`

const MentorList = styled('section')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: stretch;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      mentorList: [],
      term: '',
    }
  }

  componentDidMount() {
    fetch(`https://tc-mentor-fetch.herokuapp.com/api/mentor/list`, {
      method: 'GET',
      'Content-Type': 'application/json',
    })
      .then(response => response.json())
      .then(json => this.setState({ mentorList: json }))
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

  render() {
    return (
      <Wrapper>
        <TopBar>
          <img src={logo} alt="Training Center Logo" />
          <h1>Training Center - Encontre seu mentor</h1>
        </TopBar>

        <SearchSection>
          <h2>Busco mentoria para o seguinte assunto:</h2>
          <SearchArea>
            <input
              placeholder="Ex.: UX"
              value={this.state.term}
              onChange={evt => this.setState({ term: evt.target.value })}
            />
          </SearchArea>
        </SearchSection>

        <center>
          <h3>Mentores encontrados</h3>
        </center>
        <MentorList>
          {this.mentorList().map(mentor => (
            <Mentor key={mentor.description.name} mentor={mentor} />
          ))}
        </MentorList>
      </Wrapper>
    )
  }
}

export default App
