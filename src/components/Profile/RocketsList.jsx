import { useSelector } from 'react-redux';
import { reservedRocket } from '../../redux/rockets/selectors';

export default function RocketsList() {
  const reserved = useSelector(reservedRocket);
  console.log(reserved);
  return (
    <div className="rocket-list">
      <h1>My Rockets</h1>
      <ul className="rockets-nav">
        <li className="nav-item">Hi</li>
        <li className="nav-item">Hi</li>
        <li className="nav-item">Hi</li>
        <li className="nav-item">Hi</li>
        <li className="nav-item">Hi</li>
      </ul>
    </div>
  );
}
