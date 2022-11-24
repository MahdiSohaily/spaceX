import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import MissionItem from './MissionItem';
import { fetchMissions, missionsID } from '../../redux/missions/missionsSlice';

const Missions = () => {
  const data = useSelector(missionsID, shallowEqual);
  const missionItems = data.map((id) => (
    <MissionItem key={id} missionId={id} />
  ));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <>
      <div className="table-container">
        <table className="table table-striped bordered hover" size="sm">
          <thead>
            <tr>
              <th className="mission">Mission</th>
              <th className="description">Description</th>
              <th colSpan={2} className="status">
                Status
              </th>
            </tr>
          </thead>
          <tbody>{missionItems}</tbody>
        </table>
      </div>
    </>
  );
};
export default Missions;
