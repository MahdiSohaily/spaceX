import PropTypes from 'prop-types';

export default function ActionButton({ active, id }) {
  const text = active ? 'Cancel Reservation' : 'Reserve Rocket';
  const style = active ? 'reserved' : 'free';
  return (
    <button className={`action-button ${style}`} type="button">
      {text}
    </button>
  );
}

ActionButton.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
