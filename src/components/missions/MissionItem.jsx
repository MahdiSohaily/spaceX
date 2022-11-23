/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  reservedMissions,
  leaveMissions,
} from '../../redux/missions/missionsSlice';

const Mission = ({ missionId }) => {
  const mission = useSelector((state) => state.missions.entities[missionId]);
  const dispatch = useDispatch();
  const reserved = (id) => dispatch(reservedMissions(id));
  const leaving = () => {
    dispatch(leaveMissions(id));
  };

  const text = mission.reserved ? 'LEAVE A MISSION' : 'JOIN MISSION';
  const type = mission.reserved
    ? 'btn-outline-secondary'
    : 'btn-outline-danger';
  const badgeText = mission.reserved ? 'Active MEMBER' : 'NOT A MEMBER';
  const badgeType = mission.reserved ? 'bg-info' : 'bg-secondary';

  return (
    <>
      <tr>
        <th>{mission.name}</th>
        <td>{mission.description}</td>
        <td>
          <p className={`badge ${badgeType}`}>{badgeText}</p>
        </td>
        <td>
          <button
            className={`btn ${type} btn-block`}
            onClick={() => reserved(missionId)}
            type="button"
          >
            {text}
          </button>
        </td>
      </tr>
    </>
  );
};

export default Mission;
Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
};
