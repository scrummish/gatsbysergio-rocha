import React from "react"

import "./_header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-container">
            <p className="logo">&lt;/&gt;</p>
            </div>
            <div className="header__text-and-button-box utility-center-text">
            <h1 className="primary-heading"><span className="primary-heading--main">Sergio Rocha</span> <span className="primary-heading--sub"><span className="utility-font-color-blue">Fullstack web developer</span> <span className="utility-change-color-and-enlarge">|</span>
            <span className="utility-font-color-pink"> pro gamer</span> <span className="utility-change-color-and-enlarge">|</span> <span className="utility-font-color-purple">artist</span></span></h1>
            </div>
        </header>
    )
}

export default Header;