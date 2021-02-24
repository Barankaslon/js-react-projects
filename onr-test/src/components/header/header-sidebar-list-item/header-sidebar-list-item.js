import React from 'react';

import './header-sidebar-list-item.css';

const HeaderSidebarListItem = () => {
    return (
        <>
        <li className="navbar__list-item">
            <a href="#" className="navbar__list-item-link">
                <i className="fas fa-thumbtack"></i>
            </a>
        </li>
        <li className="navbar__list-item">
            <a href="#" className="navbar__list-item-link">
                <i className="fas fa-chart-bar"></i>
            </a>
        </li>
        <li className="navbar__list-item">
            <a href="#" className="navbar__list-item-link">
                <i className="fas fa-mail-bulk"></i>
            </a>
        </li>
        <li className="navbar__list-item">
            <a href="#" className="navbar__list-item-link">
                <i className="fas fa-shapes"></i>
            </a>
        </li>
        <li className="navbar__list-item">
            <a href="#" className="navbar__list-item-link">
                <i className="far fa-file-alt"></i>
            </a>
        </li>
        </>
    )
}


export default HeaderSidebarListItem;