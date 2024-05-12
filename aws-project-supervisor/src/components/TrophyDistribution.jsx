import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalBarSeriesCanvas, VerticalGridLines, HorizontalGridLines, LabelSeries } from 'react-vis';

export default class TrophyDistribution extends React.Component {
  state = {
    useCanvas: false
  };

  render() {
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

    const { greenData } = this.props;

    // Calculate labelData based on greenData
    const labelData = greenData.map((d, idx) => ({
      x: d.x,
      y: d.y * 1.5 // Example calculation for label data
    }));

   
    return (
      <div>
        <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries className="vertical-bar-series-example" data={greenData} />
          <LabelSeries data={labelData} getLabel={d => d.x} />
        </XYPlot>
      </div>
    );
  }
}
