import React from 'react'

export const Footer = () => {
  return (
    <div id="contact">
      <h2 className="title">Contact Me</h2>
      <div id="socialMedia">
        <div id="contact-phone">
          <a href="#">
            <ion-icon className="social_media_icon" name="call"></ion-icon>
            <p>+91-9057628755</p>
          </a>
          
        </div>
        <div id="contact-email">
          <a href="mailto:kirankt023@gmail.com">
            <ion-icon className="social_media_icon" name="mail"></ion-icon>
            <p>Email</p>
          </a>  
        </div>
        <div id="contact-github">
          <a href="https://github.com/kiran023">
            <ion-icon className="social_media_icon" name="logo-github"></ion-icon>
            <p>Github</p>
          </a>          
          
        </div>

        <div id="contact-linkedin">
          <a href="https://www.linkedin.com/in/kiran-tiwari-4b6b6a22b/">
            <ion-icon  className="social_media_icon"  name="logo-linkedin"></ion-icon>
            <p>linkedin</p>
          </a>          
          
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}
