import React from 'react';
import HeaderSidebarList from '../header-sidebar-list';

import './header-sidebar.css';

const HeaderSidebar = () => {
    return (
        <nav className="navbar">
            <HeaderSidebarList />
        </nav>
    )
}

export default HeaderSidebar;