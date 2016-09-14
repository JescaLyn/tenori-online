import React from 'react';
import SwitchboardContainer from './switch/switchboard_container';
import Sliders from './slider/sliders';
import ControlsContainer from './controls/controls_container';
import Links from './links/links';

const App = () => (
  <div>
    <h1>Tenori-Online</h1>
    <Sliders />
    <SwitchboardContainer />
    <div className="footer">
      <ControlsContainer />
      <Links />
    </div>
  </div>
);

export default App;
