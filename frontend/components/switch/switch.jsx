import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.classSpec = `${this.props.colKey}-${this.props.id}`;
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch() {
    this.props.toggleSwitch(this.props.colKey, this.props.id);
  }

  render() {
    return (
      <div
        className={"switch " + this.classSpec}
        onClick={this.toggleSwitch}>
      </div>
    );
  }
}

export default Switch;
