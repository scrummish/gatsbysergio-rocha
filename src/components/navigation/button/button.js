import React from 'react'

const Button = () => (
    <>
        <input className="navigation__checkbox"
            id="nav-toggle"
            type="checkbox"/> 
        <label className="navigation__button"
            for="nav-toggle">
            <span className="navigation__icon">&nbsp;</span>
        </label>
    </>
)

export default Button;