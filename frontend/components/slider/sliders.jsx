import React from 'react';
import VolumeSliderContainer from './volume_slider_container';
import SpeedSliderContainer from './speed_slider_container';
import DemoContainer from '../demo/demo_container';

const Sliders = () => (
  <div className="sliders">
    <div>
      <p>volume</p>
      <VolumeSliderContainer />
    </div>
    <DemoContainer />
    <div>
      <p>speed</p>
      <SpeedSliderContainer />
    </div>
  </div>
);

export default Sliders;
