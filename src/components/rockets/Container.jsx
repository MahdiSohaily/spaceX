import { useSelector } from 'react-redux';
import rocketsData from '../../redux/rockets/selectors';
import Card from './Card';

export default function Container() {
  const rockets = useSelector(rocketsData);
  console.log(rockets);
  return (
    <div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
