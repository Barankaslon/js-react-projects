import React from 'react';
import HeaderTitle from './header-title';
import HeaderUserMenu from './header-user-menu';
import HeaderSidebar from './header-sidebar';

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <HeaderTitle />
            <HeaderUserMenu />
            <HeaderSidebar />
        </div>
    )
}


export default Header;