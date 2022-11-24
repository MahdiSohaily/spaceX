import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../../redux/rockets/rocketSlice';

export default function ActionButton({ active, id }) {
  const text = active ? 'Cancel Reservation' : 'Reserve Rocket';
  const style = active ? 'reserved' : 'free';

  const dispatch = useDispatch();

  const handleReservation = (id) => {
    dispatch(bookRocket(id));
  };

  return (
    <button
      className={`action-button ${style}`}
      type="button"
      onClick={() => handleReservation(id)}
    >
      {text}
    </button>
  );
}

ActionButton.propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};
