import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reservedMissions } from '../redux/missions/missionsSlice';

const Mission = ({
  id,
  missionName,
  description,
}) => {
  const dispatch = useDispatch();
  const reserved = () => (
    dispatch(reservedMissions(id))
  );
  return (
    <>
      <tr>
        <th>{missionName}</th>
        <td>{description}</td>
        <td type="button"> NOT A MEMBER </td>
        <td variant="secondary" onClick={reserved} type="button" id={id}>JOIN MISSION</td>
      </tr>
    </>
  );
};

export default Mission;
Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};