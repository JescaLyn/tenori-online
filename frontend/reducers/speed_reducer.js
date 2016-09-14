import { SpeedConstants } from '../actions/speed_actions';

const SpeedReducer = (state = 250, action) => {
  switch (action.type) {
    case SpeedConstants.CHANGE_SPEED:
      return action.speed;
    default:
      return state;
  }
};

export default SpeedReducer;
