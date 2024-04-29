/* eslint-disable-next-line */
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
const SoundButton = ({
  isSoundOn,
  toggleSound,
  volume,
  handleVolumeChange,
}) => (
  <button type="button" onClick={toggleSound} className="sound-button">
    {isSoundOn ? <FaVolumeUp /> : <FaVolumeMute />}
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={handleVolumeChange}
    />
  </button>
);

SoundButton.propTypes = {
  isSoundOn: PropTypes.bool.isRequired,
  toggleSound: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  handleVolumeChange: PropTypes.func.isRequired,
};

export default SoundButton;
