import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.startInterval = this.startInterval.bind(this);
    this.stopInterval = this.stopInterval.bind(this);
    this.changeColumn = this.changeColumn.bind(this);
    this.timer = window.setInterval(this.props.changeColumn, this.props.speed);
  }

  changeColumn() {
    window.clearInterval(this.timer);
    this.timer = window.setInterval(this.props.changeColumn, this.props.speed);
  }

  startInterval() {
    if (!this.timer) {
      this.timer = window.setInterval(this.props.changeColumn,
        this.props.speed);
      this.props.startPlayback();
    }
  }

  stopInterval() {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
      this.props.stopPlayback();
    }
  }

  render() {
    this.changeColumn();

    return (
      <div className="controls">
        <button
          className="button"
          onClick={this.props.clearSwitches}>
          Clear Tenori
        </button>
        <button
          className="button"
          onClick={this.startInterval}>
          Start
        </button>
        <button
          className="button"
          onClick={this.stopInterval}>
          Stop
        </button>
      </div>
    );
  }
}

export default Controls;
