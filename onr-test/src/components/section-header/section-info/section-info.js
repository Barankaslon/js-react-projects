import React from 'react';
import './section-info.css';

const SectionInfo = () => {
    return (
        <div className="section__info">
            <h2 className="section__header-info">
                <span><i className="fas fa-globe"></i></span>
                Diagnostic Tool
            </h2>
            <div className="section__element">
                <i className="fas fa-thumbtack"></i>
            </div>
        </div>
    )
}

export default SectionInfo;