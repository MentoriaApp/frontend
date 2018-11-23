import React, { Component } from 'react'
import styled from 'react-emotion'

const MentorAvatar = styled('img')`
  border-radius: 5px;
  max-width: 150px;
  max-height: 150px;
  width: fit-content;
`

const getUIAvatar = name =>
  `https://ui-avatars.com/api/?name=${name}&background=2b7dbd&color=fff&size=150`

class ProfilePicture extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
    }
  }
  componentDidMount() {
    const { mentor } = this.props
    if (mentor.description.hasProfilePicture) {
      fetch(
        `https://tc-mentor-fetch.herokuapp.com/api/picture/${
          mentor.description.username
        }`
      )
        .then(response => response.json())
        .then(url => this.setState({ isLoading: false, hasPicture: true, url }))
        .catch(() => this.setState({ loading: false, hasPicture: false }))
    } else {
      this.setState({ loading: false, hasPicture: false })
    }
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <div> Carregando Imagem... </div>
        ) : (
          <MentorAvatar
            src={
              this.state.hasPicture
                ? this.state.url
                : getUIAvatar(this.props.mentor.description.name)
            }
            alt={this.props.mentor.description.name}
          />
        )}
      </div>
    )
  }
}

export default ProfilePicture
