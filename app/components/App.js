import React from 'react';
import { LineChart } from 'react-easy-chart';
// import { ScatterplotChart } from 'react-easy-chart';
import { connect } from 'react-redux';
import customData from '../assets/platformMix.json';
// '../assets/images/react_logo_512x512.png';

const mapStateToProps = (state) => {
  return { counter: state };
};

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
}

const App = (Test) => {
  return (
    <div>
      <h2 id="heading">React Easy Chart {Test.counter}</h2>
      <button onClick={Test.increment}>+</button>
      <button onClick={Test.decrement}>-</button>
      <h3>A basic area chart</h3>
      <LineChart
        axisLabels={{ x: 'Hour', y: 'Percentage' }}
        xType="time"
        grid
        verticalGrid
        dataPoints
        xTicks={5}
        lineColors={['pink', 'cyan']}
        yDomainRange={[0, 50]}
        axes
        interpolate="cardinal"
        width={500}
        height={250}
        data={customData.data}
      />
    </div>
  );
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
