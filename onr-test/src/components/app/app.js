import React from 'react';
import Header from '../header';
import SectionHeader from '../section-header';
import Filters from '../filters';
import Chart from '../chart';

import './app.css';






const App = () => {

     return (
            <>
                <Header />
                <SectionHeader />
                <div className="main">
                    <Filters />
                    <Chart />
                </div>
            </>
        )

}

export default App;
