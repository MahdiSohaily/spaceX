import { shallowEqual, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import rocketsData from '../../redux/rockets/selectors';
import Card from './Card';

export default function Container() {
  const status = useSelector((state) => state.rockets.status);
  const rockets = useSelector(rocketsData, shallowEqual);
  const cards = rockets.map((item) => <Card key={item} rocketId={item} />);
  const result = status === 'loading' ? (
    <div className="loader">
      <RotatingLines
        strokeColor="dodgerblue"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible
      />
    </div>
  ) : (
    cards
  );
  return <div>{result}</div>;
}
