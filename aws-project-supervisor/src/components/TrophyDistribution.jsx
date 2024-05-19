import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalBarSeriesCanvas, VerticalGridLines, HorizontalGridLines, LabelSeries } from 'react-vis';

export default class TrophyDistribution extends React.Component {
  state = {
    useCanvas: false
  };

  render() {
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

    const { greenData, selectedValues } = this.props;

    // Filter greenData based on selectedValues
    const filteredData = greenData.filter(d => selectedValues.includes(d.x));

    // Calculate labelData based on filteredData
    const labelData = filteredData.map((d, idx) => ({
      x: d.x,
      y: d.y * 1.5 // Example calculation for label data
    }));

    if (filteredData.length === 0) {
        return (
          <div className="empty-graph">
            No trophies selected
          </div>
        );
      }

    return (
      <div>
        <XYPlot xType="ordinal" width={1300} height={400} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries className="vertical-bar-series-example" data={filteredData} />
          <LabelSeries data={labelData} getLabel={d => d.x} />
        </XYPlot>
      </div>
    );
  }
}
