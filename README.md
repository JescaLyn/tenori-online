## Tenori-Online

Tenori-Online is a musical web application that provides a simple interface for developing melodies.

[Tenori-Online Live][url]
[url]: http://www.jessica-terry.com/tenori-online/

### Background

The Tenori-on is a musical device composed of a 16 x 16 grid, each row of which represents a particular note, and each column of which represents the timing of a beat. A user may toggle any of the note switches, and the device will play the notes from left to right in a steady, repeated rhythm. A dial allows the user to change the speed of the playback.

This project is a Javascript-based version of the Tenori-on as outlined below.

### Features
* Customizable melody with 16 different notes
  * Notes are programmatically generated using `window.AudioContext`
* Intuitive UI for manipulating playback
  * Sliders to adjust playback volume and tempo
  * Buttons to start and stop playback or clear the board
* Included Demo Song
  * "Twinkle Twinkle Little Star" on Tenori-Online
  * Helpful visualization of the device's capabilities

### Demo

![Demo][http://g.recordit.co/tTtHZmxUDk.gif]

### Code Snips

Tenori-Online was constructed in JavaScript using React + Redux, jQuery, HTML5, and CSS3.

To handle the tempo and allow for it to be adjusted, I utilized JS's `window.setInterval` and `window.clearInterval`.

```js
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
}

```

The notes are programmatically generated, and their volume is adjusted in their `start` function.

```js
const ctx = new (window.AudioContext || window.webkitAudioContext)();

const createOscillator = (freq) => {
  const osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.value = freq;
  osc.detune.value = 0;
  osc.start(ctx.currentTime);
  return osc;
};

const createGainNode = () => {
  const gainNode = ctx.createGain();
  gainNode.gain.value = 0;
  gainNode.connect(ctx.destination);
  return gainNode;
};

class Note {
  constructor(freq) {
    this.oscillatorNode = createOscillator(freq);
    this.gainNode = createGainNode();
    this.oscillatorNode.connect(this.gainNode);
  }

  start(vol) {
    this.gainNode.gain.value = vol;
  }

  stop() {
    this.gainNode.gain.value = 0;
  }
}
```

jQuery is used in conjunction with React and Redux reducers to simply toggle classes for the CSS presentation.

```js
const SwitchReducer = (state = defaultState, action) => {
  let newState = merge({}, state);

  switch (action.type) {
    case SwitchConstants.TOGGLE_SWITCH:
      const col = action.columnId;

      if (newState[col].includes(action.switchId)) {
        newState[col].splice(newState[col].indexOf(action.switchId), 1);
        $(`.${action.columnId}-${action.switchId}`).removeClass("lit");
      } else {
        newState[col].push(action.switchId);
        $(`.${action.columnId}-${action.switchId}`).addClass("lit");
      }

      return newState;
    case SwitchConstants.CLEAR_SWITCHES:
      $('.switch').removeClass("lit");
      return defaultState;
    default:
      return state;
  }
};
```

### Future Directions

I would like to develop the following features for this app.

* The user may, in addition to just clicking on a switch, drag their selection to toggle many switches.
* The switchboard has interesting visual effects during playback.
* The user can select between different sets of sounds, whether that is higher or lower keys or different sounds entirely.
