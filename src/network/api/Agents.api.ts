import { AgentResponse, AgentsResponse } from "@/types";
import BaseApi from "./Base.api";
import { ApiEnpoint } from "./enpoints";

class AgentsApi extends BaseApi {
    async getAllAgents(): Promise<AgentsResponse> {
        console.log(ApiEnpoint.AgentEnpoints.getAgents);
      return this.get<AgentsResponse>(ApiEnpoint.AgentEnpoints.getAgents);
    }
  
    async getAgentById(id: string): Promise<AgentResponse> {
      return this.get<AgentResponse>(`agents/${id}`);
    }

    async getAgentsByRole(role: string): Promise<AgentsResponse> {
      const allAgents = await this.getAllAgents();
      const filteredAgents = allAgents.data.filter(agent => agent.role.displayName.toLowerCase() === role.toLowerCase());
      return {
        status: allAgents.status,
        data: filteredAgents
      };
    }
  }
  export default AgentsApi;