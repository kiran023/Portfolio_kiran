import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav id="nav-menu">
        <a href="#home"><img id="logo-name" src="" alt=""/></a>
        <div>
          <ul className="menu">          
            <li ><a className="nav-link home" href="#home">Home</a></li>
            <li ><a  className="nav-link about" href="#about">About</a></li>
            <li><a  className="nav-link skills" href="#skills">Skills</a></li>
            <li><a  href="#github">Github</a></li>
            <li><a  className="nav-link projects" href="#projects">Project</a></li>
            <li><a  className="nav-link contact" href="#contact">Contact</a></li>
            <li>
              <a
                id="resume-link-1"
                className="nav-link resume"
                href="https://drive.google.com/uc?export=download&id=11TEoTKpZfBpp87twKzL1wntN9BLdLbv5"
              >
                <button id="resume-button-1" className="resumeBtn">
                  RESUME
                </button>
              </a>
            </li>         
            
          </ul>
          <div>
            {/* <ion-icon onclick="lightMode()" className="lightmode " name="sunny"></ion-icon>
            <ion-icon onclick="darkMode()" className="darkmode activate" name="moon"></ion-icon>
            <ion-icon  onclick="hamburger()" id="hamburger" name="menu"></ion-icon>
            */}
          </div>
        </div>

       
       
       
       
    </nav>
    </>
  )
}
