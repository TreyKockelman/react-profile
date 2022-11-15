import twitterLogo from '../images/TwitterLogo.png'
import githubLogo from '../images/githubLogo.png'
import linkedinLogo from '../images/linkedinLogo.png'

const Footer = (props) => {
  return (
    <footer>
      <a href="https://github.com/TreyKockelman" target="_blank">
      <img src={githubLogo} alt="GitHub Logo" />
      </a>

      <a href="https://www.linkedin.com/in/trey-kockelman-997631112/" target="_blank">
      <img src={linkedinLogo} alt="Linkedin Logo" />
      </a>

      <a href="https://twitter.com/TreysinBran" target="_blank">
      <img src={twitterLogo} alt="Twitter Logo" />
      </a>
    </footer>
  )
}

export default Footer