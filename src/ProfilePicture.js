import React, { Component } from 'react';

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
            fetch(`https://tc-mentor-fetch.herokuapp.com/api/picture/${mentor.description.username.replace(/\//g,'')}`)
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
            {  
                this.state.loading ? <div> Carregando Imagem... </div> : 
                this.state.hasPicture ? <img src={this.state.url} alt={this.props.mentor.description.name}></img>
                : <div> No Image </div>
            }
            </div>
        )
    }
}

export default ProfilePicture