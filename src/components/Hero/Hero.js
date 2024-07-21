import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h1 className="hero-title-text">Hi, I'm Sumeet</h1>
            <p className="hero-description">I'm a frontend developer. Reach out if you'd like to learn more!</p>
            <a href="mailto:sumeetp987@gmail.com" className="hero-contact-btn">Contact Me</a>
        </div>
        <img src="../assets/sumeet.png" className="img" alt="img"/>
    </section>
  )
}

export default Hero