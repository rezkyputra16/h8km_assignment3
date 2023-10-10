import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  return (
    <header id="navigation">
      <nav>
        <ul>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              <Link to="/" activeClassName="active-link">About</Link>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="interest"
              
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              <Link to="/interest" activeClassName="active-link">Interest</Link>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              <Link to="/skills" activeClassName="active-link">Skills</Link>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="experience"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              <Link to="/experience" activeClassName="active-link">Experience</Link>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="awards"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              <Link to="/awards" activeClassName="active-link">Awards</Link>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="education"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              <Link to="/education" activeClassName="active-link">Education</Link>
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
