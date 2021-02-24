import React from 'react';
import Data from '../../../data.json'

import './info-cards-item.css';

const infoCardData = Data.gaugeData;


const InfoCardItem = () => {

  return (
      <div className="container">
          { infoCardData.map(item => {
              return (
                  <div className="card '{item.name}'" key={item.name}>
                      <div className="text">{item.name}</div>
                      <div className="circle">
                      <div className="bar"></div>
                      <div className="box"><span>{item.score}%</span><p>{item.vsly}</p></div>
                      </div>
                      <div className="paragraph"><p>Sample: {item.sample}</p></div>
                  </div>
                  
              )
              
          })}
      </div>
  )
}

export default InfoCardItem;