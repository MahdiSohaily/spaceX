/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';

export default function CardBody({ id, name, description, active }) {
  return (
    <div className="card-body">
      <h1>{name}</h1>
      {active}
      <p className="rocket-description">
        {active && <span className="badge text-neutral-100">Reserved</span>}
        {description}
      </p>
      <ActionButton active={active} id={id} />
    </div>
  );
}

CardBody.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
