import React from 'react'
import PropTypes from "prop-types"

import Link from "./link"

const List = ({links}) => {
    const listItems = links.map((item)=>{
        return <Link key={item.name} hash={item.hash} name={item.name}/>
    });

    return (
        <ul className="navigation__list">
            { listItems }
        </ul>
    )
}

List.propTypes = {
    links: PropTypes.array
}

List.defaultProps = {
    links: []
}

export default List;