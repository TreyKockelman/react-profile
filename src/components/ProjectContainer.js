import Project from './Project'
import passwordImg from '../images/passwordpic.png'
import teamImg from '../images/teampic.png'
import readmeImg from '../images/readme.png'
import quizImg from '../images/quizImg.png'
import weatherImg from '../images/weatherimg.png'
import ecommerceImg from '../images/ecommerceimg.png'

const ProjectContainer = (props) => {
  return (
    <>
    <h2>My Projects</h2>
    <div class="d-inline-flex m-2">
      <Project name="Password Generator" src={passwordImg} link="https://github.com/TreyKockelman/03-trey-kockelman-password-generator" alt="Password Generator Pic" description="Generates a random password based on the input from the user preferences." class="card"/>
      <Project name="Team Profile Generator" src={teamImg} link="https://github.com/TreyKockelman/10-Team-Profile-Generator" alt="Team Pic" description="Gives the ability to make a team and a profile for each person on a team." class="card"/>
      <Project name="ReadMe Generator" src={readmeImg} link="https://github.com/TreyKockelman/09-readme-generator" alt="ReadMe Generator Pic" description="Generates a ReadMe file with the user putting in their inputs they want." class="card"/>
      <Project name="Coding Quiz" src={quizImg} link="https://github.com/TreyKockelman/04-trey-kockelman-code-quiz" alt="Quiz Logo Pic" description="Short Quiz about coding that I created early in my coding career." class="card"/>
      <Project name="Weather API Display" src={weatherImg} link="https://github.com/TreyKockelman/06-trey-kockelman-weather-api" alt="Weather Pic" description="Displays the weather for a city when a user puts in a city of their choice." class="card"/>
      <Project name="E-Commerce Backend" src={ecommerceImg} link="https://github.com/TreyKockelman/13-trey-kockelman-ecommerce-back-end" alt="ECommerce Pic" description="Backend code for a faux e-commerce website." class="card"/>
    </div>
    </>
  )
}

export default ProjectContainer