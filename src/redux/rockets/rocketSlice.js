import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

export const fetchRockets = createAsyncThunk('getRockets', async () => {
  const result = await client.get('https://api.spacexdata.com/v3/rockets');
  console.log(result);
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
    builder.addCase(fetchRockets.fulfilled, () => {
      console.log('done');
    });
  },
});

export default rocketsSlice.reducer;
