import { connect } from 'react-redux';
import SwitchCol from './switch_col';
import { toggleSwitch } from '../../actions/switch_actions';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  column: state.column,
  litSwitches: state.litSwitches[ownProps.id],
  volume: state.volume
});

const mapDispatchToProps = dispatch => ({
  toggleSwitch: (colId, switchId) => dispatch(toggleSwitch(colId, switchId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchCol);
