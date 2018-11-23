import React from 'react'
import styled from 'react-emotion'

import ProfilePicture from './ProfilePicture'
import SocialLink from './SocialLink'

const MentorCard = styled('div')`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  text-align: center;
  align-self: flex-start;
  margin-bottom: 1em;
  min-height: 355px;
  transition: width 0.4s ease-out;
  box-shadow: 2px 2px 10px gray;

  @media screen and (max-width: 930px) {
    width: 95vw;
    margin-left: 1em;
    margin-right: 1em;
    transition: width 0.4s ease-out;
  }

  @media screen and (min-width: 930px) {
    width: 45vw;
    transition: width 0.4s ease-out;
  }

  @media screen and (min-width: 1630px) {
    width: 30vw;
    transition: width 0.4s ease-out;
  }
`

const PictureWrapper = styled('div')`
  margin: 5px;
  background: #cfd7de24;
  border-radius: 10px;
  width: 150px;
  height: 150px;
  text-align: center;
`

const MentoryTypeList = styled('ul')`
  display: flex;
  max-width: 420px;
  flex-wrap: wrap;
  flex-direction: column;

  li {
    color: white;
    background: #0075da;
    border-radius: 25px;
    padding-bottom: 5px;
    padding-top: 5px;
    margin: 1px;
    font-size: 13px;
    font-family: 'Cousine', monospace;
  }

  @media screen and (max-width: 400px) {
    li {
      font-size: 11px;
      padding-bottom: 2px;
      padding-top: 2px;
    }
  }
`

const InactiveMentor = styled('label')`
  background: #e02f2f8f;
  color: white;
  border-radius: 25px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 7px;
  padding-top: 5px;
  font-size: smaller;
`

const MentorInfo = styled('div')`
  width: 70%;
`

const Mentor = props => {
  const { mentor } = props
  return (
    <MentorCard>
      <PictureWrapper>
        <ProfilePicture mentor={mentor} />
      </PictureWrapper>
      <MentorInfo>
        <h2>{mentor.description.name}</h2>
        <SocialLink url={mentor.description.url} />
        <MentoryTypeList>
          {mentor.mentoryType.map(type => (
            <li key={type}>
              <span>{type}</span>
            </li>
          ))}
        </MentoryTypeList>
        <h5>Contatos disponíveis</h5>
        {mentor.isActive ? (
          Object.keys(mentor.contact).map(key => (
            <SocialLink key={key} url={mentor.contact[key]} />
          ))
        ) : (
          <InactiveMentor>Mentor Inativo</InactiveMentor>
        )}
      </MentorInfo>
    </MentorCard>
  )
}

export default Mentor
