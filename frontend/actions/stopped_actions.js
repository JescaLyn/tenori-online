export const StoppedConstants = {
  STOP_PLAYBACK: "STOP_PLAYBACK",
  START_PLAYBACK: "START_PLAYBACK"
};

export const stopPlayback = () => ({
  type: StoppedConstants.STOP_PLAYBACK
});

export const startPlayback = () => ({
  type: StoppedConstants.START_PLAYBACK
});
