const Header = (props) => {
  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <h1 class="navbar-brand">Trey Kockelman</h1>
      <div class="d-flex align-items-center" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header