import React from 'react';

class SpeedSlider extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.changeSpeed(300 - parseFloat(e.target.value));
  }

  render() {
    return (
      <input
        type="range"
        min="0" max="200"
        className="slider"
        value={300 - this.props.speed}
        onChange={this.handleChange}
        step="1" />
    );
  }
}

export default SpeedSlider;
