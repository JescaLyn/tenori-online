import { StoppedConstants } from '../actions/stopped_actions';

const StoppedReducer = (state = false, action) => {
  switch (action.type) {
    case StoppedConstants.STOP_PLAYBACK:
      return true;
    case StoppedConstants.START_PLAYBACK:
      return false;
    default:
      return state;
  }
};

export default StoppedReducer;
