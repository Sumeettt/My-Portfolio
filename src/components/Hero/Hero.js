import "./Hero.css"

const Hero = () => {
  return (
    <section className="container">
        <div className="content">
            <h1 className="title-text">Hi, I'm Sumeet</h1>
            <p className="description">I'm a frontend developer. Reach out if you'd like to learn more!</p>
            <a href="mailto:sumeetp987@gmail.com" className="contact-btn">Contact Me</a>
        </div>
        <img src="../assets/sumeet.png" className="img" alt="img"/>
    </section>
  )
}

export default Hero