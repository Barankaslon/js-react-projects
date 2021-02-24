import React from 'react';
import ChartTitle from './chart-title';
import ChartNavList from './chart-nav-list';

import './chart-header.css';

const ChartHeader = () => {
    return (
        <div className="score">
            <ChartTitle />
            <ChartNavList />
        </div>
    )
}

export default ChartHeader;