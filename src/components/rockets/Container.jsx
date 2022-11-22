import { shallowEqual, useSelector } from 'react-redux';
import rocketsData from '../../redux/rockets/selectors';
import Card from './Card';

export default function Container() {
  const rockets = useSelector(rocketsData, shallowEqual);
  const cards = rockets.map((item) => <Card key={item} rocketId={item} />);
  return <div>{cards}</div>;
}
