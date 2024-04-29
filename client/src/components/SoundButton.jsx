import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import PropTypes from "prop-types";

function SoundButton({ isSoundOn, toggleSound, volume, handleVolumeChange }) {
  return (
    <button type="button" onClick={toggleSound} className="sound-button">
      {isSoundOn ? <FaVolumeUp /> : <FaVolumeMute />}
      <input
        className="hidden"
        type="range"
        min="0"
        max="1"
        step="0.01"
        hidden="true"
        value={volume}
        onChange={handleVolumeChange}
      />
    </button>
  );
}

SoundButton.propTypes = {
  isSoundOn: PropTypes.bool.isRequired,
  toggleSound: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  handleVolumeChange: PropTypes.func.isRequired,
};

export default SoundButton;
