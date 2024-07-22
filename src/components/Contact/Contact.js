import "./Contact.css"

const Contact = () => {
  return (
    <footer className="footer-container" id="contact">
        <div className="contact-title-description">
            <h2 className="contact-title">Contact</h2>
            <p className="contact-description">Feel free to reach out!</p>
        </div>
        <ul className="contact-links-container">
            <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:sumeetp987@gmail.com">sumeetp987@gmail.com</a>
            </li>
            <li>
                <i class="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/sumeet-parmar-93b0301b8/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sumeet-parmar-93b0301b8/</a>
            </li>
            <li>
                <i class="fa-brands fa-github"></i>
                <a href="https://github.com/Sumeettt" target="_blank" rel="noopener noreferrer">github.com/Sumeettt</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact