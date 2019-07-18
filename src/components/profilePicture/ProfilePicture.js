import React, { Component } from 'react'
import styles from './ProfilePicture.module.css'

class ProfilePicture extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      avatarBaseUrl: 'https://tc-mentor-fetch.herokuapp.com/api/picture/',
      defaultUIAvatar:
        'https://ui-avatars.com/api/?name={0}&background=2b7dbd&color=fff&size=150',
    }
  }

  componentDidMount() {
    const { mentor } = this.props

    if (mentor.description.hasProfilePicture) {
      fetch(this.getAvatarUrl(mentor.description.username))
        .then(response => response.json())
        .then(url => this.setState({ loading: false, hasPicture: true, url }))
        .catch(() => this.setState({ loading: false, hasPicture: false }))
    } else {
      this.setState({ loading: false, hasPicture: false })
    }
  }

  getAvatarUrl(mentorUsername) {
    return this.state.avatarBaseUrl + mentorUsername
  }

  defaultUIAvatar(name) {
    return this.state.defaultUIAvatar.format([name])
  }

  render() {
    let defaultComponent
    if (this.state.loading) {
      defaultComponent = <div> Carregando Imagem... </div>
    } else {
      let pictureUrl
      if (this.state.hasPicture) pictureUrl = this.state.url
      else pictureUrl = this.defaultUIAvatar(this.props.mentor.description.name)

      defaultComponent = (
        <img
          className={styles.mentorAvatar}
          src={pictureUrl}
          alt={this.props.mentor.description.name}
        />
      )
    }

    return <div>{defaultComponent}</div>
  }
}

String.prototype.format = function(p) {
  let s = this,
    r = function(v, i) {
      s = s.replace(new RegExp('\\{' + i + '\\}', 'g'), v)
    }
  p.forEach(r)
  return s
}

export default ProfilePicture
