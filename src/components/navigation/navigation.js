import React from 'react'

import Button from "./button"
import List from "./list"

const navLinks = [
  {
    name: "About Me",
    hash: "#about-me-section"
  },
  {
    name: "Portfolio",
    hash: "#portfolio-section"
  },
  {
    name: "Reviews",
    hash: "#reviews-section"
  },
  {
    name: "Contact",
    hash: "#contact"
  },
  
]

const Navigation = () => (
  <div className="navigation">
    <Button/>
    <div className="navigation__background">
      &nbsp;
    </div>
    <nav className="navigation__nav">
      <List links={navLinks} />
    </nav>
  </div>
)

export default Navigation;