import missionsSlice from './missions/missionsSlice';
import rocketSlice from './rockets/rocketSlice';

const reducer = {
  rockets: rocketSlice,
  missions: missionsSlice,
};

export default reducer;
