import React from 'react';

const SWITCHES = [
  [0, 6],
  [1, 6],
  [2, 2],
  [3, 2],
  [4, 1],
  [5, 1],
  [6, 2],
  [8, 3],
  [9, 3],
  [10, 4],
  [11, 4],
  [12, 5],
  [13, 5],
  [14, 6]
];

class Demo extends React.Component {
  startDemo() {
    this.props.changeSpeed(281);
    SWITCHES.forEach((args, index) => {
      window.setTimeout(() => {
        this.props.toggleSwitch(...args);
      }, (index + 1) * 200 );
    });

  }

  render() {
    return (
      <button
        className="button demo"
        onClick={this.startDemo.bind(this)}>
        Demo Song
      </button>
    );
  }
}

export default Demo;
