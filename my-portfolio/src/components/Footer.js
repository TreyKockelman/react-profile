import twitterLogo from '../images/TwitterLogo.png'
import githubLogo from '../images/githubLogo.png'
import linkedinLogo from '../images/linkedinLogo.png'

const Footer = (props) => {
  return (
    <footer class="bg-light text-center text-lg-start fixed-bottom">
      <a href="https://github.com/TreyKockelman" target="_blank">
        <img src={githubLogo} alt="GitHub Logo" class="ghlogo"/>
      </a>

      <a href="https://www.linkedin.com/in/trey-kockelman-997631112/" target="_blank">
       <img src={linkedinLogo} alt="Linkedin Logo" class="linklogo"/>
      </a>

      <a href="https://twitter.com/TreysinBran" target="_blank">
        <img src={twitterLogo} alt="Twitter Logo" class="twitlogo"/>
      </a>
    </footer>
    
  )
}

export default Footer