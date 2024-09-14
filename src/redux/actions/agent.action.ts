import {AgentsApi} from '@/network';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AgentActionEnpoints} from '../config';
const getAllAgents = createAsyncThunk(
  AgentActionEnpoints.getAllAgents,
  async () => {
    const agentApi = new AgentsApi();
    const response = await agentApi.getAllAgents();
    return response.data;
  },
);
export {getAllAgents};
