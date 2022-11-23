/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { reservedMissions } from '../../redux/missions/missionsSlice';

const Mission = ({ missionId }) => {
  const mission = useSelector((state) => state.missions.entities[missionId]);
  const dispatch = useDispatch();
  const reserved = (id) => dispatch(reservedMissions(id));
  return (
    <>
      <tr>
        <th>{mission.name}</th>
        <td>{mission.description}</td>
        <td>
          <p className="badge bg-info">NOT A MEMBER</p>
        </td>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={reserved}
            type="button"
            id={mission.id}
          >
            JOIN MISSION
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
