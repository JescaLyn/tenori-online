import React from 'react';
import VolumeSliderContainer from './volume_slider_container';
import SpeedSliderContainer from './speed_slider_container';

const Sliders = () => (
  <div className="sliders">
    <div>
      <p>volume</p>
      <VolumeSliderContainer />
    </div>
    <div>
      <p>speed</p>
      <SpeedSliderContainer />
    </div>
  </div>
);

export default Sliders;
