import React from 'react';
import Switch from './switch';
import { TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';

class SwitchCol extends React.Component {
  constructor(props) {
    super(props);
    this.notes = [];
    for (let i = 0; i < 16; i++) {
      this.notes.push(new Note(TONES[i]));
    }
  }

  play() {
    if (this.props.litSwitches.length === 0) {
      for (let i = 0; i < 16; i++) {
        $(`.${this.props.id}-${i}`).addClass("tempLit");
      }
    } else {
      this.notes.forEach((note, index) => {
        if (this.props.litSwitches.includes(index)) {
          note.start(this.props.volume);
          $(`.${this.props.id}-${index}`).addClass("playing");
        }
      });
    }
  }

  stop() {
    this.notes.forEach((note, index) => {
      note.stop();
      $(`.${this.props.id}-${index}`).removeClass("playing tempLit");
    });
  }

  render() {
    const switches = [];
    for (let i = 0; i < 16; i++) {
      switches.push(<Switch
        colKey={this.props.id}
        key={i}
        id={i}
        toggleSwitch={this.props.toggleSwitch}
      />);
    }

    if (this.props.column === this.props.id) {
      this.play();
    } else if (this.props.column === ((this.props.id + 1) % 16)) {
      this.stop();
    }

    return (
      <div className="switch-col">
        {switches}
      </div>
    );
  }
}

export default SwitchCol;
