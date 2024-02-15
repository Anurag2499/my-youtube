import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    newVideos: null,
  },
  reducers: {
    setVideos: (state, action) => {
      state.newVideos = action.payload;
    },
  },
});

export const { setVideos } = videoSlice.actions;
export default videoSlice.reducer;
