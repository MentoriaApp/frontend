import React from 'react'
import ProfilePicture from './ProfilePicture';

const Mentor = (props) => {
    const {mentor} = props; 
    return (
        <div>
            <div>
                <ProfilePicture mentor={mentor} />        
            </div>
            <div>
                <h2>{mentor.description.name}</h2>
                <small><a href={mentor.description.url}>{mentor.description.url}</a></small>
                <ul>
                    { mentor.mentoryType.map(type => <li key={type}>{ type }</li>) }
                </ul>
                { mentor.isActive ? Object.keys(mentor.contact).map( key => <div key={key}>{`${key} ${mentor.contact[key]}`}</div>) : "Mentor Inativo" }
            </div>
        </div>
    )
}

export default Mentor;