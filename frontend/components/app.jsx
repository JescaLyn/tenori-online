import React from 'react';
import SwitchboardContainer from './switch/switchboard_container';
import Sliders from './slider/sliders';
import ControlsContainer from './controls/controls_container';
import Links from './links/links';
import Modal from 'react-modal';

document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement('body');
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="instructions-modal" >
          <button
            className="closeButton"
            onClick={this.closeModal}>
            x
          </button>
          <h1>Instructions</h1>
          <p>
            Click any switch to activate it. When the column slider reaches
            active switches, music will play. Each row represents one note.
            You can adjust the volume or speed of playback with the sliders
            at the top. Start and stop playback, or clear the switchboard,
            with the controls in the bottom left. Thanks for playing!
          </p>
        </Modal>
        <h1>Tenori-Online</h1>
        <Sliders />
        <SwitchboardContainer />
        <div className="footer">
          <ControlsContainer />
          <Links />
        </div>
      </div>
    );
  }
}

export default App;
