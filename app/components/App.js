import React from 'react';
import { AreaChart } from 'react-easy-chart';


const App = () => {
  return (
    <div>
      <h2 id="heading">React Easy Chart</h2>
      <h3>A basic area chart</h3>
      <AreaChart
        width={250}
        height={250}
        data={[[{ x: 1, y: 50 },
            { x: 2, y: 20 },
            { x: 3, y: 50 }]]}
      />
    </div>
  );
};

export default App;
