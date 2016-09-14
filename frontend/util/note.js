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

export default Note;
