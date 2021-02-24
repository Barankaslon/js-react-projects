import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { select, line, curveCardinal, axisBottom, scaleLinear } from 'd3';


import './chart-img.css';




function ChartImg(){


    const [data, setData] = useState([75, 71, 62, 0,]);
    const svgRef = useRef();

    const className = "chart";

    const width = 600;
    const height = 300;
    const color = '#0066ff';

    useEffect(() => {


        const svg = select(svgRef.current)
        .attr('width', width)
        .attr('height', height)

        const xScale = scaleLinear()
        .domain([0, data.length - 1])
        .range([0, width]);

        const yScale = scaleLinear()
        .domain([0, height])
        .range([height, 0]);

        const xAxis = axisBottom(xScale)
        .ticks(data.length)
        .tickFormat(index => index + 1);

        svg
        .select(".x-axis")
        .style('transform', 'translateY(300px)')
        .call(xAxis)
        .attr('stroke', 'black')
        .attr('fill', 'none');

        const myLine = line()
        .x((value, index) => xScale(index))
        .y(value => yScale(value * 2))
        .curve(curveCardinal);

        svg
        .selectAll('.line')
        .data([data])
        .join('path')
        .attr('class', 'line')
        .attr('d', myLine)
        .attr('fill', 'none')
        .attr('stroke', 'blue');


    }, [data]);

        return (
                <div className={className}>
                    <svg ref={svgRef}>
                       <g className="x-axis" />
                    </svg>      
                </div>
        )
}

export default ChartImg;


{/* <div className={className}>
<svg ref={svgRef}>
   <g className="x-axis" />
</svg>      
</div> */}