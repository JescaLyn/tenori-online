import { connect } from 'react-redux';
import VolumeSlider from './volume_slider';
import { changeVolume } from '../../actions/volume_actions';

const mapStateToProps = state => ({
  volume: state.volume
});

const mapDispatchToProps = dispatch => ({
  changeVolume: vol => dispatch(changeVolume(vol))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VolumeSlider);
