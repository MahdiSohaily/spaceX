import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';


const Mission = ({
  id,
  missionName,
  description,
}) => {
  const dispatch = useDispatch();
  const reserved = () => (
    dispatch(reservedMissions(id))
  );
  return(
    <div className="wrapper">
      <table className='table'>
        <thead>
          <tr>
            <th className='mission'>{missionName}</th>
            <th className='description'>{description}</th>
            <th className='status'>Status</th>
            <th className='join'>.</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Mission;
Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};