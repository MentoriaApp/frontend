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
            <div className="mentor-info">
                <h2>{mentor.description.name}</h2>
                <SocialLink url={mentor.description.url} />
                <h5>Oferece Mentoria dos seguintes Assuntos:</h5>
                <ul className="mentory-type-list">
                    { mentor.mentoryType.map(type => <li key={type}><span>{ type }</span></li>) }
                </ul>
                <h5>Contatos disponíveis</h5>
                { mentor.isActive ? Object.keys(mentor.contact).map( key => <SocialLink key={key} url={mentor.contact[key]} />) : <label className="inactive-mentor" >Mentor Inativo</label> }
            </div>
        </div>
    )
}

export default Mentor;