import React from 'react';
import SectionTitle from './section-title';
import SectionInfo from './section-info';

import './section-header.css';

const SectionHeader = () => {
    return (
        <section className="section">
            <SectionTitle />
            <SectionInfo />
        </section>
    )
}

export default SectionHeader;