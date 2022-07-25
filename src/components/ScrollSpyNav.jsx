import React from 'react';

const ScrollSpyNav = ({letter}) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={"#" + letter}>{letter}</a>
        </li>
    );
}

export default ScrollSpyNav;