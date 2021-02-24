import React from 'react';
import FilterBoxTitle from './filter-box-title';
import FilterBox from './filter-box';
import InfoCard from '../info-cards';

import './filters.css';

const Filters = () => {
    return (
        <div className="filters">
            <FilterBoxTitle />
            <FilterBox />
            <InfoCard />
        </div>
    )
}

export default Filters;