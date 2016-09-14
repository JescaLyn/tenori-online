import React from 'react';

class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.changeVolume(parseFloat(e.target.value));
  }

  render() {
    return (
      <input
        type="range"
        min="0" max="1"
        className="slider"
        value={this.props.volume}
        onChange={this.handleChange}
        step="0.01" />
    );
  }
}

export default VolumeSlider;
