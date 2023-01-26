import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
};

export const getData = createAsyncThunk("data/get", async () => {
  const response = await axios.get(
    "https://project-1-ochre-iota.vercel.app/api/seputarikpa/1"
  );
  return response.data.data
  // The value we return becomes the `fulfilled` action payload
});

export const payloadSlice = createSlice({
    name: 'berita',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.isLoading = true;
          })
          builder.addCase(getData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
          });
      },
})


export default payloadSlice.reducer;
