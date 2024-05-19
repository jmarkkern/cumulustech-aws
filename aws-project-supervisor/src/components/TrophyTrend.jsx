
import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';

const MSEC_DAILY = 86400000;

export default function TrophyTrend(props) {
  const { blueData, selectedValues } = props;

  // Filter blueData for each selected value and create separate series
  const seriesData = selectedValues.map(value => {
    const filteredData = blueData.filter(d => d.x === value).map(d => ({
      x: new Date(d.timestamp).getTime(),
      y: d.y
    }));
    return { name: value, data: filteredData };
  });

  if (seriesData.length === 0) {
    return (
      <div className="empty-graph">
        No trophies selected
      </div>
    );
  }

  return (
    <XYPlot xType="time" width={1300} height={400}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis title="Date" />
      <YAxis title="Value" />
      {seriesData.map((series, idx) => (
        <LineSeries key={idx} data={series.data} />
      ))}
    </XYPlot>
  );
}

