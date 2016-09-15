import { connect } from 'react-redux';
import Demo from './demo';
import { toggleSwitch } from '../../actions/switch_actions';
import { changeSpeed } from '../../actions/speed_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  toggleSwitch: (colId, switchId) => dispatch(toggleSwitch(colId, switchId)),
  changeSpeed: speed => dispatch(changeSpeed(speed))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);
