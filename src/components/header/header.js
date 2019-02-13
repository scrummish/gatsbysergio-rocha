import React from "react"

import "./_header.scss"

const Header = () => {
    return (
        <header class="header">
            <div class="header__logo-container">
            <p class="logo">&lt;/&gt;</p>
            </div>
            <div class="header__text-and-button-box utility-center-text">
            <h1 class="primary-heading"><span class="primary-heading--main">Sergio Rocha</span> <span class="primary-heading--sub"><span class="utility-font-color-blue">Fullstack web developer</span> <span class="utility-change-color-and-enlarge">|</span>
            <span class="utility-font-color-pink"> pro gamer</span> <span class="utility-change-color-and-enlarge">|</span> <span class="utility-font-color-purple">artist</span></span></h1>
            </div>
        </header>
    )
}

export default Header;