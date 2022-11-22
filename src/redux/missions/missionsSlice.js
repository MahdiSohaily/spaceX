import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_MISSIONS = 'space-travelers/src/redux/missions/fetchMissions';
const url = 'https://api.spacexdata.com/v3/missions/';
export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, () => axios.get(url)
  .then((response) => {
    const missions = response.data;
    const data = Object.keys(missions).map((id) => ({
      id: missions[id].mission_id,
      missionName: missions[id].mission_name,
      missionDescription: missions[id].description,
      reserved: false,
    }));
    return data;
  }));
const initialState = [];
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reservedMissions(state, action) {
      const newState = state.map((index) => {
        if (action.payload !== index.id) {
          return { ...index };
        }
        return { ...index, reserved: true };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (_, action) => action.payload);
  },
});
export const { reservedMissions } = missionSlice.actions;
export default missionSlice.reducer;
