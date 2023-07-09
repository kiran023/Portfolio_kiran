import React from 'react'

export const Project = ({details}) => {
  return (
    <div className="project-card">
    <a href="https://firstcryclone88.netlify.app/"
    target="_blank"> <img src={details.img} alt="" /></a>
   
    <div className="project_details">
      <h1 className="project-title">{details.name}</h1>
      <h5 className="project-tech-stack">
        {details.tech}
      </h5>
      <p className="project-description">
        {details.desc}
      </p>
      <br />
      <a
        href={details.gitlink}
        target="_blank"
        className="project-github-link"
      >
        <ion-icon name="logo-github"> </ion-icon></a>
      <a
        href={details.hostlink}
        target="_blank"
        className="project-deployed-link"
        ><ion-icon name="push-outline"></ion-icon></a>
    </div>
  </div>
  )
}
