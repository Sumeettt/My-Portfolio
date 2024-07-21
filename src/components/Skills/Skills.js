import "./Skills.css"

const Skills = () => {
  return (
    <section className="skills-container">
        <h2 className="skills-title">SKILLS</h2>
        <div className="skiils-cards-container">
            <div className="skills-card">
                <img className="skills-logo" src="../assets/html-logo.png" alt="html-logo"/>
                <h3 className="skills-name">HTML</h3>
            </div>
            <div className="skills-card">
                <img className="skills-logo" src="../assets/css-logo.png" alt="css-logo"/>
                <h3 className="skills-name">CSS</h3>
            </div>
            <div className="skills-card">
                <img className="skills-logo" src="../assets/javascript-logo.png" alt="javascript-logo"/>
                <h3 className="skills-name">JAVASCRIPT</h3>
            </div>
            <div className="skills-card">
                <img className="skills-logo" src="../assets/react-logo.png" alt="react-logo"/>
                <h3 className="skills-name">React</h3>
            </div>
        </div>
    </section>
  )
}

export default Skills