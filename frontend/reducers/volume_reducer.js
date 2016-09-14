import { VolumeConstants } from '../actions/volume_actions';

const VolumeReducer = (state = 0.5, action) => {
  switch (action.type) {
    case VolumeConstants.CHANGE_VOLUME:
      return action.volume;
    default:
      return state;
  }
};

export default VolumeReducer;
