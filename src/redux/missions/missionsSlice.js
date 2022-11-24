/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../api/client';

const FETCH_MISSIONS = 'missions/fetchMissions';
const url = 'https://api.spacexdata.com/v3/missions/';
const fetchMissions = createAsyncThunk(FETCH_MISSIONS, () =>
  client.get(url).then((response) => {
    const missions = response.data;
    const cleanData = {};
    missions.forEach((element) => {
      const { mission_id: id, mission_name: name, description } = element;
      cleanData[id] = {
        id,
        name,
        description,
        reserved: false,
      };
    });
    return cleanData;
  })
);

export { fetchMissions };

const initialState = {
  entities: {},
  status: 'ideal',
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reservedMissions(state, action) {
      state.entities[action.payload].reserved = !state.entities[action.payload].reserved;
    },
    leaveMissions(state, action) {
      const newState = state.map((index) => {
        if (action.payload !== index.id) {
          return { ...index };
        }
        return { ...index, reserved: false };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.status = 'ideal';
      })
      .addCase(fetchMissions.rejected, () => {
        throw new Error('Something went went while fetching data');
      });
  },
});
export const { reservedMissions, leaveMissions } = missionSlice.actions;
export default missionSlice.reducer;

// Selectors

export const missionsID = (state) => Object.keys(state.missions.entities);
