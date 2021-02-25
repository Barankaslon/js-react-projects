import React from 'react';

import './chart-nav-list-item.css';

const ChartNavListItem = () => {

    const period = ['Day', 'Week', 'Month', 'Quarter', 'Half', 'Year'];
    return (

        period.map(item => {
            return (
                <>
                    <li className="period__list-item">
                        <a href="#" className="period__link">{item}</a>
                    </li>
                </>
            )
        })    
    )
}

export default ChartNavListItem;