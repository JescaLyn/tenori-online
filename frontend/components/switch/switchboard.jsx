import React from 'react';
import SwitchColContainer from './switch_col_container';

class Switchboard extends React.Component {

  render() {
    const switchCols = [];
    for (let i = 0; i < 16; i++) {
      switchCols.push(<SwitchColContainer key={i} id={i} />);
    }

    return (
      <div className="switchboard">
        {switchCols}
      </div>
    );
  }
}

export default Switchboard;
