import React from 'react';

import './filter-box-item.css';


const FilterBoxItem = () => {
    return (
        <div className="filter__info">
            <p className="filter__info-paragraph">
                <span><i className="fas fa-square blue"></i></span>
                All CQA Results
                <span><i className="fas fa-exclamation-circle"></i></span>
            </p>
            <p className="filter__info-paragraph">
                <span><i className="fas fa-square light"></i></span>
                CQA with Closed Loop
                <span><i className="fas fa-exclamation-circle"></i></span>
            </p>
        </div>
    )
}

export default FilterBoxItem;