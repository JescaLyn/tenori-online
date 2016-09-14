import { connect } from 'react-redux';
import Controls from './controls';
import { clearSwitches } from '../../actions/switch_actions';
import { changeColumn } from '../../actions/column_actions';

const mapStateToProps = state => ({
  speed: state.speed
});

const mapDispatchToProps = dispatch => ({
  clearSwitches: () => dispatch(clearSwitches()),
  changeColumn: () => dispatch(changeColumn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
