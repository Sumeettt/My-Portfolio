import "./Projects.css"

const Projects = () => {
  return (
        <section className="projects-container" id="projects">
            <h2 className="projects-title">PROJECTS</h2>
            <div className="projects-cards-container">
                <div className="projects-card">
                  <img src="../assets/code-img.png" className="projects-card-img" alt="code-img"/>
                  <h3 className="project-name">NetflixWeb</h3>
                  <p className="project-description">Created a video streaming app resembling Netflix with a strong focus on frontend development, fetching real-time data from TMDb's API.</p>
                  <div className="tech-stack-container">
                    <h2 className="project-tech-stack">React, Redux Toolkit, Tailwind CSS, Firebase </h2>
                  </div>
                  <div className="projects-card-btn-container">
                      <a className="projects-card-btn" href="https://netflix-web-eta.vercel.app/"  target="_blank" rel="noopener noreferrer">
                        <i class="fa-solid fa-link"></i>
                      </a>
                      <a className="projects-card-btn" href="https://github.com/Sumeettt/NetflixWeb"  target="_blank" rel="noopener noreferrer">Source</a>
                  </div>
                </div>
                <div className="projects-card">
                  <img src="../assets/code-img.png" className="projects-card-img" alt="code-img"/>
                  <h3 className="project-name">FoodWeb</h3>
                  <p className="project-description">Created a food ordering app with a strong emphasis on frontend development, fetching real-time data from Swiggy's API.</p>
                  <div className="tech-stack-container">
                    <h2 className="project-tech-stack">React, Parcel, Redux Toolkit, Jest</h2>
                  </div>
                  <div className="projects-card-btn-container">
                      <a className="projects-card-btn" href="https://main--foodweb24x7.netlify.app/"  target="_blank" rel="noopener noreferrer">
                        <i class="fa-solid fa-link"></i>
                      </a>
                      <a className="projects-card-btn" href="https://github.com/Sumeettt/FoodWeb"  target="_blank" rel="noopener noreferrer">Source</a>
                  </div>
                </div>
            </div>
        </section>
  )
}

export default Projects