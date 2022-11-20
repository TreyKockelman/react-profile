import treyImage from '../images/trey-picture.jpg'

const AboutMe = (props) => {
  return (
    <>
      <h2>About Me</h2>
      <div class="about-me">
        <img src={treyImage} alt="Picture of Trey Kockelman" class="treypic"/>
        <p>
          Hello, my name is Trey Kockelman. I am currently working on completing a full-stack bootcamp and learning about HTML, CSS, and JavaScript. In my previous profession, I was working as an accountant in various roles. My first role out of college was in tax, which I completed 3 busy seasons working mostly on tax returns for financial institutions. The last role I held was in private accounting at Taylor Corp. I worked there as a corporate accountant and liasion with multiple companies out of New York, Mexico, and Canada. In my free time, I enjoy playing video games, fantasy football, and watching sports.
        </p>

      </div>
    </>
  )
}

export default AboutMe