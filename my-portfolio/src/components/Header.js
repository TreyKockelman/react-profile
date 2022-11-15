const Header = (props) => {
  return (
    <header>
      <nav>
        <h1>{props.name}</h1>
        <p>About Me</p>
        <p>Portfolio</p>
        <p>Contact Me</p>
        <p>Resume</p>
      </nav>
    </header>
  )
}

export default Header