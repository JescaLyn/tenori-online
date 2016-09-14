import { SwitchConstants } from '../actions/switch_actions';
import { merge } from 'lodash';
import $ from 'jquery';

const defaultState = {};
for (let i = 0; i < 16; i++) {
  defaultState[i] = [];
}

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


export default SwitchReducer;
