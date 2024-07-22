import "./About.css"

const About = () => {
  return (
    <section className="about-container" id="about"> 
        <h2 className="about-title">ABOUT</h2>
        <div className="about-content-container">
            <div className="code-icon-container">
                <i className="fa-solid fa-code code-icon"></i>
            </div>
            <div className="about-content">
                <p className="about-description">I am a frontend developer with a diverse professional background that has honed my problem-solving skills and adaptability. 
                My journey into tech has equipped me with a versatile skill set, and I have built projects showcasing my abilities.
                I am currently seeking my first opportunity to contribute to innovative projects.
                </p>
                 </div>
        </div>
    </section>
  )
}

export default About