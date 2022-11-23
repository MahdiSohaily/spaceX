import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Mission from '../../pages/Missions';
import Navbar from '../../pages/Navbar';
import { fetchMissions } from '../../redux/missions/missionsSlice';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  console.log(missions);
  return (
    <>
      <Navbar />
      <div className="table-container">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="mission">Mission</th>
              <th className="description">Description</th>
              <th className="status">Status</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <Mission
                key={mission.id}
                id={mission.id}
                missionName={mission.missionName}
                description={mission.description}
                reserved={mission.reserved}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default Missions;
