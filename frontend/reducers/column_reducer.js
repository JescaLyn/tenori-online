import { ColumnConstants } from '../actions/column_actions';

const ColumnReducer = (state = 0, action) => {
  switch (action.type) {
    case ColumnConstants.CHANGE_COLUMN:
      return (state + 1) % 16;
    default:
      return state;
  }
};

export default ColumnReducer;
