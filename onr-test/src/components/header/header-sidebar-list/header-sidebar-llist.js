import React from 'react';
import HeaderSidebarListItem from '../header-sidebar-list-item';

import './header-sidebar-list.css';


const HeaderSidebarList = () => {
    return (
        <ul className="navbar__list">
            <HeaderSidebarListItem />
        </ul>
    )
}

export default HeaderSidebarList;