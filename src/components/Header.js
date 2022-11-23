import { useState } from "react"
import { Link } from "react-router-dom"

const Header = (props) => {

  const [ showEl, showElement ] = useState("")

  const aboutEl = `nav-link ${showEl === "about" ? "show" : "hide"}`
  const portfolioEl = `nav-link ${showEl === "portfolio" ? "show" : "hide"}`
  const contactEl = `nav-link ${showEl === "contact" ? "show" : "hide"}`
  const resumeEl = `nav-link ${showEl === "resume" ? "show" : "hide"}`

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <h1 class="navbar-brand">Trey Kockelman</h1>
        <div class="d-flex align-items-center" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link onClick={() => showElement("about")} className={aboutEl} to="/about">About Me</Link>
            </li>
            <li class="nav-item">
              <Link onClick={() => showElement("portfolio")} className={portfolioEl} to="/portfolio">Portfolio</Link>
            </li>
            <li class="nav-item">
              <Link onClick={() => showElement("contact")} className={contactEl} to="/contact">Contact</Link>
            </li>
            <li class="nav-item">
              <Link onClick={() => showElement("resume")} className={resumeEl} to="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header