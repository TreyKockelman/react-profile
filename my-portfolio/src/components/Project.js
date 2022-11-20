const Project = (props) => {
  return (
    <div class="card">
      <img src={props.src} alt={props.alt}  class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
        <a href={props.link} class="btn btn-primary" target="_blank">Click for GitHub Repo</a>
      </div>
    </div>
  )
}

export default Project