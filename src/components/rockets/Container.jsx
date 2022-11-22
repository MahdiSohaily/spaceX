import { shallowEqual, useSelector } from 'react-redux';
import rocketsData from '../../redux/rockets/selectors';
import Card from './Card';

export default function Container() {
  const rockets = useSelector(rocketsData, shallowEqual);
  const cards = rockets.map((item) => <Card key={item} id={item} />);
  return <div>{cards}</div>;
}
