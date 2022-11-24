export const reservedRocket = (state) => {
  const values = Object.values(state.rockets.entities);
  const reserved = values.filter((item) => (item.active ? item : null));
  return reserved;
};
const rocketsData = (state) => Object.keys(state.rockets.entities);
export default rocketsData;
