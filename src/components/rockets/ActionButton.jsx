import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function ActionButton({ active, id }) {
  const text = active ? 'Cancel Reservation' : 'Reserve Rocket';
  const style = active ? 'reserved' : 'free';

  const dispatch = useDispatch();

  const handleReservation = (id) {
    dispatch
  }
  return (
    <button className={`action-button ${style}`} type="button" onClick={handleReservation}>
      {text}
    </button>
  );
}

ActionButton.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
