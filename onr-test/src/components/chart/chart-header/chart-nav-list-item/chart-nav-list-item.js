import React from 'react';

import './chart-nav-list-item.css';

const ChartNavListItem = () => {
    return (
        <>
            <li className="period__list-item">
            <a href="#" className="period__link">Day</a>
            </li>
            <li className="period__list-item">
                <a href="#" className="period__link">Week</a>
            </li>
            <li className="period__list-item">
                <a href="#" className="period__link">Month</a>
            </li>
            <li className="period__list-item">
                <a href="#" className="period__link">Quarter</a>
            </li>
            <li className="period__list-item">
                <a href="#" className="period__link">Half</a>
            </li>
            <li className="period__list-item">
                <a href="#" className="period__link">Year</a>
            </li>
        </>
    )
}

export default ChartNavListItem;