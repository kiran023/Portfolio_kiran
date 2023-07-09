import React from 'react'
import { Project } from './Project'
import { Skillset } from './Skillset'
import projects from './projects.json'
import framework from './framework.json'

export const Landingpage = () => {
  return (
    <div>
      <div id="home">
        <div id="intro">
          <div className="text">
            <div><p className="text1">Hello I Am</p></div>
            <div><p id="user-detail-name">Kiran Tiwari</p></div>
            <div>
            <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=25&pause=1000&color=45a39f&width=600&height=80&lines=I+am+a+FrontEnd+Developer" alt="Typing SVG" />
            </div>
            <a href="https://github.com/venkat88676" target="_blank"> <ion-icon className="social_media_icon" name="logo-github"></ion-icon></a>
            <a href="https://www.linkedin.com/in/venkatesh-tiwari-80b361248/" target="_blank"><ion-icon className="social_media_icon" name="logo-linkedin"></ion-icon></a>
            <a href="mailto:venkat88676@gmail.com"><ion-icon className="social_media_icon" name="mail"></ion-icon></a>
          </div>
          <div id="about-gif">
            <img src="https://user-images.githubusercontent.com/74038190/248884004-af212da4-8588-4d7c-8400-16e56f2746a0.gif" alt="" />
          </div>
        </div>
      </div>

      <div className="about section" id="about">
        <h1 className="title">About Me</h1>
        <div id="about-card">
          <div>
            <p id="user-detail-intro">
              As a dedicated and skilled Full Stack Web Developer, I have honed my expertise in HTML, CSS, JavaScript, Node.js, Express, and MongoDB. With a deep passion for creating dynamic and user-friendly web applications, I am excited to showcase my portfolio. I am actively seeking opportunities to work with organizations that can provide challenges that push the boundaries of my abilities as a web developer. Let my portfolio demonstrate my proficiency and commitment to delivering exceptional web development solutions.
            </p>
            <a id="resume-link-2" href="https://drive.google.com/uc?export=download&id=11TEoTKpZfBpp87twKzL1wntN9BLdLbv5">
              <button id="resume-button-2" className="resumeBtn">
                RESUME
              </button>
            </a>
          </div>
          <div>
            <img className="home-img" src="./image/picNew.jpeg" alt="" />
          </div>
        </div>
      </div>

      <div id="skills">
        <h1 className="title">Languages & Frameworks</h1>
        <div id="skills_container">
          {
            framework.map((details) => {
              return <Skillset details={details}/>

            })
          }
        </div>

      </div>



      <div id="github">
        {/* <br> */}
        <h1 className="title">Github Portfolio</h1>
        {/* <a href="https://github.com/venkat88676" className="stats_card react-activity-calendar">
          Loading the data just for you.</a> */}
        {/* <br> */}
        <a href="https://github.com/venkat88676" className="stats_card"><img id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=venkat88676" />
        </a>

        <a href="https://github.com/venkat88676" className="stats_card"><img id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=venkat88676&show_icons=true&locale=en&layout=compact" alt="" /></a>

        <a href="https://github.com/venkat88676" className="stats_card"><img id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com?user=venkat88676" /></a>

      </div>

      <section class="projects section" id="projects">
        <br/>
        <h2 class="section-title title">Projects</h2>
        <div class="project__container bd-grid">
        {
          projects.map((details) => {
            return <Project details={details} />
          })
        }
      </div>
      </section>


    </div>
  )
}
