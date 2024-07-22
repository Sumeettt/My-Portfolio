import "./Navbar.css";
import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" id="/">
      <a href="/" className="navbar-title">Home</a>
      <div className="menu">
        <i className={`fa-solid menu-icon ${menuOpen ? "fa-xmark" : "fa-bars" }`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
        <ul className={`menu-items ${menuOpen && "menu-open"}`}
          onClick={() =>setMenuOpen(false)}
          >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>     
        </ul>  
      </div>    
    </nav>
  )
}

export default Navbar