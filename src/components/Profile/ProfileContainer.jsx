import MissionList from './MissionList';
import RocketsList from './RocketsList';

export default function Container() {
  return (
    <div className="d-flex">
      <MissionList />
      <RocketsList />
    </div>
  );
}
