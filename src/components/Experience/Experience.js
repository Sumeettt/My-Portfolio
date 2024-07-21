import "./Experience.css"

const Experience = () => {
  return (
    <section className="experience-container">
        <h2 className="experience-title">EXPERIENCE</h2>
        <div className="company-cards-container">
            <div className="company-experience-card">
                <img src="../assets/numerator-logo.png" className="company-logo" alt="numerator-logo"/>
                <div className="company-experience-content-container">
                    <h3 className="company-experience-title">Sr. Data Associate, Numerator</h3>
                    <p className="company-experience-duration">May, 2021 - Present</p>
                    <ul className="company-experience-description">
                        <li>Numerator is a market research firm that provides consumer insights and marketing intelligence to companies across various industries.</li>
                        <li>Collected and analyzed data sets using MS Excel and developed dashboards to track KPIs and other metrics.</li>
                        <li>Collaborated with team leaders to understand requirements and manage work allocation within the team.</li>
                    </ul>
                </div>
            </div>
            <div className="company-experience-card">
                <img src="../assets/bluestar-logo.png" className="company-logo" alt="bluestar-logo"/>
                <div className="company-experience-content-container">
                    <h3 className="company-experience-title">Service Delivery Engineer, Bluestar</h3>
                    <p className="company-experience-duration">Jul, 2017 - Apr, 2019</p>
                    <ul className="company-experience-description">
                        <li>Blue Star is India's leading heating, ventilation, air conditioning and commercial refrigeration (HVAC&R) Company.</li>
                        <li>Managed and enhanced the channel partner network and corporate client relationships, ensuring optimal performance and high customer satisfaction through training, technical support, and timely service responses.</li>
                        <li>Additionally, conducted site visits and facilitated the sale of spare parts to clients and authorized partners.</li>
                    </ul>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience