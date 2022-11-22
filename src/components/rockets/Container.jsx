import { shallowEqual, useSelector } from 'react-redux';
import rocketsData from '../../redux/rockets/selectors';
import Card from './Card';

export default function Container() {
  const status = useSelector((state) => state.rockets.status);
  const rockets = useSelector(rocketsData, shallowEqual);
  const cards = rockets.map((item) => <Card key={item} rocketId={item} />);
  const result = status === 'loading' ? <p>Loading</p> : cards;
  return <div>{result}</div>;
}
