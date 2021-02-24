import React from 'react';
import ChartNavListItem from '../chart-nav-list-item';

import './chart-nav-list.css';

const ChartNavList = () => {
    return(
        <div className="period">
            <ul className="period__list">
                <ChartNavListItem />
            </ul>
        </div>

    )
}

export default ChartNavList;

