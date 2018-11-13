import React from 'react'
import ProfilePicture from './ProfilePicture';
import SocialLink from './SocialLink';

const Mentor = (props) => {
    const {mentor} = props; 
    return (
        <div className="mentor-card">
            <div className="picture-container">
                <ProfilePicture mentor={mentor} />        
            </div>
            <div>
                <h2>{mentor.description.name}</h2>
                <small><a href={mentor.description.url}>{mentor.description.url}</a></small>
                <ul className="mentory-type-list">
                    { mentor.mentoryType.map(type => <li key={type}><span>{ type }</span></li>) }
                </ul>

                { mentor.isActive ? Object.keys(mentor.contact).map( key => <SocialLink key={key} url={mentor.contact[key]} />) : <label className="inactive-mentor" >Mentor Inativo</label> }
            </div>
        </div>
    )
}

export default Mentor;