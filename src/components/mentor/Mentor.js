import React from 'react'
import styles from './Mentor.module.css'

import ProfilePicture from '../profilePicture/ProfilePicture'
import SocialLink from '../socialLink/SocialLink'

const Mentor = props => {
  const { mentor } = props
  const listMentoryType = mentor.mentoryType.map(type => (
    <li key={`${type}_${mentor.description.username}`}>
      <span>{type}</span>
    </li>
  ))

  let mentorBottomWrapper = []
  if (mentor.isActive) {
    if (mentor.contact) {
      Object.keys(mentor.contact).map(key =>
        mentorBottomWrapper.push(
          <SocialLink
            key={`${key}_${mentor.description.username}`}
            url={mentor.contact[key]}
          />
        )
      )
    } else mentorBottomWrapper.push(<h5>Nenhum contato informado</h5>)
  } else
    mentorBottomWrapper.push(
      <label
        key={`label_${mentor.description.username}`}
        className={styles.inactiveMentorLabel}
      >
        Mentor Inativo
      </label>
    )

  return (
    /*Mentor content*/
    <div className={styles.mentorCard}>
      {/*Profile picture*/}
      <div className={styles.mentorIntroduction}>
        <div className={styles.pictureWrapper}>
          <ProfilePicture mentor={mentor} />
        </div>
        <div className={styles.mentorNameAndLink}>
          <h2>{mentor.description.name}</h2>
        </div>
        <div className={styles.mentorClipPath} />
      </div>

      {/*Mentor wrapper*/}
      <ul className={styles.mentoryTypeList}>{listMentoryType}</ul>
      <div className={styles.mentorInfo}>
        {/*Mentor name*/}

        {/*Mentor's principal social link*/}

        {/*List of available types of mentory that the mentor can handle*/}

        {/*Contact data from mentor*/}
        {mentorBottomWrapper}
      </div>
      <div>
        <button className={styles.mentorButton}>
          <span>Perfil</span>
          <SocialLink url={mentor.description.url} />
        </button>
      </div>
    </div>
  )
}

export default Mentor
