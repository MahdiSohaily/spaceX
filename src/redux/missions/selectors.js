export const reservedMissions = (state) => {
  const values = Object.values(state.missions.entities);
  const active = values.filter((item) => (item.reserved ? item : null));
  return active;
};
const missionsData = (state) => Object.keys(state.missions.entities);
export default missionsData;
