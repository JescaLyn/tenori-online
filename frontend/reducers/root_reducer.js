import litSwitches from './switch_reducer';
import column from './column_reducer';
import volume from './volume_reducer';
import speed from './speed_reducer';
import stopped from './stopped_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  column,
  litSwitches,
  volume,
  speed,
  stopped
});

export default RootReducer;
