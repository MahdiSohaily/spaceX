import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default function Card({ rocketId }) {
  const rocket = useSelector((state) => state.rockets.entities[rocketId]);
  const { id, name, image, description } = rocket;
  console.log(todo);
  return (
    <div className="card d-flex">
      <CardHeader />
      <CardBody />
    </div>
  );
}

Card.propTypes = {
  rocketId: PropTypes.string.isRequired,
};
