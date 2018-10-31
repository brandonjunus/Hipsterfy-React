import React, { Component } from 'react';
// import '../node_modules/react-vis/dist/style.css';
// import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, LabelSeries} from 'react-vis';

const TestChart = ({tracks, artists}) => {
    console.log("TestChart Props", artists);
    
    const trackData = [];
    const artistData = [];
    tracks.items.forEach((track, index) => {
        trackData.push({x: index, y: track.popularity, label: track.name, rotation: 45})
    });
    artists.items.forEach((track, index) => {
        artistData.push({x: index, y: track.popularity, label: track.name, rotation: 45})
    });
    return (
      <div>
          <h1>Tracks</h1>
        <XYPlot xType="ordinal" height={window.innerHeight * .6} width={window.innerWidth * .80} xDistance={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries className="vertical-bar-series-example" data={trackData} />
          <LabelSeries data={trackData} getLabel={trackData => trackData.label} />
        </XYPlot>
          <h1>Artists</h1>
        <XYPlot xType="ordinal" height={window.innerHeight * .6} width={window.innerWidth * .80} xDistance={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries className="vertical-bar-series-example" data={artistData} />
          <LabelSeries data={artistData} getLabel={artistData => artistData.label} />
        </XYPlot>
      </div>
    
    );
}

export default TestChart;
