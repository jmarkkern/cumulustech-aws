import React from 'react';


import {XYPlot, XAxis, YAxis, VerticalGridLines, LineSeries} from 'react-vis';

export default function TrophyTrend(props) {
  return (
    <XYPlot width={300} height={300}>
      <VerticalGridLines values={[2, 2.3, 2.7]} />
      <XAxis />
      <YAxis />
      <LineSeries data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]} />
    </XYPlot>
  );
}