import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default function Card({ rocketId }) {
  const rocket = useSelector((state) => state.rockets.entities[rocketId]);
  const {
    id, name, image, description, active,
  } = rocket;
  return (
    <div className="card d-flex">
      <CardHeader image={image} />
      <CardBody id={id} name={name} description={description} active={active} />
    </div>
  );
}

Card.propTypes = {
  rocketId: PropTypes.string.isRequired,
};
