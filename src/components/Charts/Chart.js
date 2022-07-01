import React from "react";

import Chartbar from "./Chartbar";
import './Chart.css';

const Chart = (props) => {
    const points = props.dataPoints.map(d => d.value);
    const totalMax = Math.max(...points);
    return (
        <div className="chart">
            {props.dataPoints.map(p =>
             (<Chartbar 
                key={p.label} 
                value={p.value} 
                maxValue={totalMax} 
                label={p.label}>
            </Chartbar>))}
        </div>
    );
};

export default Chart;