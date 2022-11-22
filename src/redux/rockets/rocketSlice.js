import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

const initialState = {
  entities: {},
  status: 'ideal',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export const fetchRockets = createAsyncThunk('getRockets', async () => {
  const result = await client.get('https://api.spacexdata.com/v3/rockets');
  console.log(result);
});

export default rocketsSlice.reducer;
