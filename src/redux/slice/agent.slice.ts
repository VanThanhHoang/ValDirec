import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Agent} from '@/types';
import {SliceNames} from '../config';
import {getAllAgents} from '../actions';
interface AgentState {
  
  agents: Agent[];
}
const initialState: AgentState = {
  agents: [],
};
export const agentsSlice = createSlice({
  name: SliceNames.Agents,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getAllAgents.fulfilled,
      (state, action: PayloadAction<Agent[]>) => {
        state.agents = action.payload;
      },
    );
  },
});
export const {} = agentsSlice.actions;
export default agentsSlice.reducer;
