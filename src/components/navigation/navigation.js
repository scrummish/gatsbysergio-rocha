import React from 'react'
import PropTypes from "prop-types"

const Navigation = () => (
  <div className="navigation">
    <input className="navigation__checkbox"
      id="nav-toggle"
      type="checkbox"/> 
    <label className="navigation__button"
      for="nav-toggle">
      <span className="navigation__icon">&nbsp;</span>
    </label>
    <div class="navigation__background">
      &nbsp;
    </div>
    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link"
              href="#about-me-section"
              onclick="ui.toggleNavButton()">About Me</a> <a className="navigation__link"
              href="#portfolio-section"
              onclick="ui.toggleNavButton()">Portfolio</a> <a className="navigation__link"
              href="#reviews-section"
              onclick="ui.toggleNavButton()">Reviews</a> <a className="navigation__link"
              href="#contact"
              onclick="ui.toggleNavButton()">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
)

Navigation.propTypes = {}

Navigation.defaultProps = {}

export default Navigation;