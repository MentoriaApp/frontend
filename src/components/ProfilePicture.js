import React, { Component } from 'react'
import styled from 'react-emotion'

const MentorAvatar = styled('img')`
    border-radius: 5px;
    max-width: 150px;
    max-height: 150px;
    width: fit-content;
`

const NoAvatar = styled('div')`
    margin-top: 40%;
`

class ProfilePicture extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        const {mentor} = this.props;
        if (mentor.description.hasProfilePicture) {
            fetch(`https://tc-mentor-fetch.herokuapp.com/api/picture/${mentor.description.username}`)
                .then(response => response.json())
                .then(url => this.setState({ isLoading: false, hasPicture: true, url }))
                .catch(() => this.setState({ loading: false, hasPicture: false }))
        } else {
            this.setState({ loading: false, hasPicture: false })
        }
    }
    render() {
        return (
            <div >
            {  
                this.state.loading ? <div> Carregando Imagem... </div> : 
                this.state.hasPicture ? <MentorAvatar src={this.state.url} alt={this.props.mentor.description.name} />
                : <NoAvatar> No Image </NoAvatar>
            }
            </div>
        )
    }
}

export default ProfilePicture