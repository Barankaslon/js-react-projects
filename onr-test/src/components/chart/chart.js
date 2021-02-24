import React from 'react';
import ChartHeader from './chart-header';
import ChartImg from './chart-img';

import './chart.css';

const Chart = () => {
    return (
        <div className="main__chart">
            <ChartHeader />
            <ChartImg />
        </div>
    )
}

export default Chart;