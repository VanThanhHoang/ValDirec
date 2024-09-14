import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {SliceNames} from '../config';
import {getAllAgents} from '../actions';
interface AppState {
  isLoading: boolean;
}
const initialState: AppState = {
  isLoading: false,
};
const appSlice = createSlice({
  name: SliceNames.App,
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllAgents.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllAgents.fulfilled, (state, action) => {
      state.isLoading = false;
    });
  },
});
export const {setIsLoading} = appSlice.actions;
export default appSlice.reducer;
