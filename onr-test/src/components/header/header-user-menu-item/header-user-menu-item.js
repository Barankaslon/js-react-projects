import React from 'react';
import './header-user-menu-item.css';

import './header-user-menu-item.css';

const HeaderUserMenuItem = () => {
    return (
        <>
        <li className="user-menu__item">
            <a href="#" className="tools__item-link">
                <i className="fas fa-sliders-h"></i>
            </a>
        </li>
        <li className="user-menu__item">
            <a href="#" className="tools__item-link">
                <i className="fa fa-download" aria-hidden="true"></i>
            </a>
        </li>
        <li className="user-menu__item">
            <a href="#" className="tools__item-link">
                <i className="fas fa-print"></i>
            </a>
        </li>
        <li className="user-menu__item">
            <a href="#" className="tools__item-link">
                <i className="fas fa-question"></i>
            </a>
        </li>
        <li className="user-menu__item">
            <a href="#" className="tools__item-link">
                <i className="fas fa-sign-out-alt"></i>
            </a>
        </li>
        </>
    )
}

export default HeaderUserMenuItem;