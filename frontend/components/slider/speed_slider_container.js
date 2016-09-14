import { connect } from 'react-redux';
import SpeedSlider from './speed_slider';
import { changeSpeed } from '../../actions/speed_actions';

const mapStateToProps = state => ({
  speed: state.speed
});

const mapDispatchToProps = dispatch => ({
  changeSpeed: speed => dispatch(changeSpeed(speed))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeedSlider);
