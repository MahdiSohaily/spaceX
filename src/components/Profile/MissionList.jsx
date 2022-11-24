import { useSelector } from "react-redux";
import { reservedMissions } from "../../redux/missions/selectors";

export default function MissionsList() {
  const active = useSelector(reservedMissions);
  const items = active.length > 0 ? (
    active.map((item) => (
      <li className="nav-item" key={item.id}>
        {item.name}
      </li>
    ))
  ) : (
    <li className="nav-item">Nothing To Show</li>
  );
  return (
    <div className="rocket-list">
      <h1>My Missions</h1>
      <ul className="rockets-nav">{items}</ul>
    </div>
  );
}