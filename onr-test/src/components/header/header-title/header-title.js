import React from 'react';

import './header-title.css';

const HeaderTitle = () => {
    return (
        <div className="header__title">
            <h1 className="header__title-text">Diagnostic Tools</h1>
            <div className="login">
            <a href="#" className="login__link">Login</a>
            </div>
        </div>
    )
}



export default HeaderTitle;