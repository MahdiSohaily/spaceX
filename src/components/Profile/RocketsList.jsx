import { useSelector } from 'react-redux';
import { reservedRocket } from '../../redux/rockets/selectors';

export default function RocketsList() {
  const reserved = useSelector(reservedRocket);
  const items = reserved.map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <div className="rocket-list">
      <h1>My Rockets</h1>
      <ul className="rockets-nav">{items}</ul>
    </div>
  );
}
