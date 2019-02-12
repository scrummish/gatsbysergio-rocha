import React from 'react'
import PropTypes from "prop-types"

const Link = ({name, hash}) => (
    <li className="navigation__item">
        <a className="navigation__link"
            href={hash}
            onclick="ui.toggleNavButton()">{name}</a> 
    </li>
)

Link.propTypes = {
    name: PropTypes.string.isRequired,
    hash: PropTypes.string
}

Link.defaultProps = {
    name: "link",
    hash: "#"
}

export default Link;