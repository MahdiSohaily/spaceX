/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';
import normalizer from './dataNormalizer';

export const fetchRockets = createAsyncThunk('getRockets', async () => {
  const result = await client.get('https://api.spacexdata.com/v3/rockets');
  const final = normalizer(result);
  return final;
});

const initialState = {
  entities: {},
  status: 'ideal',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket(state, action) {
      state.entities[action.payload].active = !state.entities[action.payload].active;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.status = 'ideal';
      })
      .addCase(fetchRockets.rejected, () => {
        throw new Error('Something went wrong while fetching data from API');
      });
  },
});

export const { bookRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
