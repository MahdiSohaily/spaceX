import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';
import normalizer from './dataNormalizer';

export const fetchRockets = createAsyncThunk('getRockets', async () => {
  const result = await client.get('https://api.spacexdata.com/v3/rockets');
  const final = normalizer(result);
  console.log(final);
  return final;
});

const initialState = {
  entities: {},
  status: 'ideal',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state) => {
      console.log(state);
    });
  },
});

export default rocketsSlice.reducer;
