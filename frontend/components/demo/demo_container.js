import { connect } from 'react-redux';
import Demo from './demo';
import { toggleSwitch, clearSwitches } from '../../actions/switch_actions';
import { changeSpeed } from '../../actions/speed_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  toggleSwitch: (colId, switchId) => dispatch(toggleSwitch(colId, switchId)),
  changeSpeed: speed => dispatch(changeSpeed(speed)),
  clearSwitches: () => dispatch(clearSwitches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);
